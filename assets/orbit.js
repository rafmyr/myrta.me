/* Kula kompetencji na stronie głównej: te same węzły i połączenia co mapa.html, jasna wersja.
   Obrót: auto + drag (mysz/dotyk). Hover podświetla węzeł i połączenia. Klik prowadzi do pełnej mapy. */
(function () {
  var canvas = document.getElementById('orbitCanvas');
  if (!canvas) return;
  var link = canvas.getAttribute('data-map') || 'mapa.html';
  var CATS = {
    dna: [107,143,113], biznes: [90,125,170], skill: [190,140,95], misja: [190,105,105], meta: [145,120,160]
  };
  var N = [
    ['farmacja','Farmacja','dna',36],['slask','Śląsk','dna',14],['ciekawosc','Ciekawość','dna',20],
    ['ineo','INEOGroup × Super-Pharm','biznes',30],['concept','Concept Automatic','biznes',26],['misiarz','Misiarz','biznes',26],
    ['apteka','Apteka Pod Arkadami','biznes',18],['neuca','NEUCA','biznes',24],['pelion','Pelion / DOZ','biznes',20],
    ['mojafarm','Moja Farmacja','biznes',17],['rmcons','RM Consulting / Deloitte','biznes',17],
    ['analizabiz','Analiza biznesowa','skill',32],['pm','Zarządzanie projektami','skill',32],['systemy','Systemy zarządzania','skill',34],
    ['strategia','Consulting strategiczny','skill',26],['procesy','Zarządzanie procesowe','skill',24],['catman','Category management','skill',20],
    ['marketing','Marketing strategiczny','skill',20],['siec','Zarządzanie siecią','skill',28],['ai','AI / agenci','skill',34],
    ['sdd','Spec-Driven Development','skill',28],['macierz','Macierz regulacyjna','biznes',26],['transfai','Transformacja AI','skill',30],
    ['macierzpr','Macierz procesowa','biznes',24],['seria','Seria: AI, procesy','misja',22],['it','IT','skill',24],['ma','M&A','skill',18],
    ['rozwoj','Rozwój przedsiębiorstwa','skill',24],['omnichannel','Omnichannel','skill',15],['cpap','CPAPblog','misja',40],
    ['ksiazka','Książka','misja',22],['sprzet','Sprzęt medyczny','misja',22],['edukacja','Edukacja','misja',22],
    ['laczenie','Łączenie kropek','meta',32],['sysmeta','Systemy > jednostki','meta',24],['precyzja','Precyzja farmaceuty','meta',22],['praktyk','Praktyk, nie teoretyk','meta',24]
  ];
  var E = 'farmacja-apteka farmacja-ineo farmacja-cpap farmacja-misiarz farmacja-pelion farmacja-neuca farmacja-precyzja farmacja-sprzet slask-apteka slask-misiarz slask-praktyk ciekawosc-laczenie ciekawosc-ai ciekawosc-edukacja ciekawosc-concept ineo-pm ineo-analizabiz ineo-it ineo-sdd ineo-macierz concept-procesy concept-systemy concept-rozwoj concept-ai misiarz-sprzet misiarz-rozwoj neuca-siec neuca-systemy neuca-marketing neuca-pm pelion-omnichannel pelion-catman pelion-it mojafarm-ma mojafarm-rozwoj mojafarm-systemy rmcons-strategia rmcons-ma rmcons-analizabiz analizabiz-pm analizabiz-strategia analizabiz-it pm-systemy pm-procesy systemy-sysmeta systemy-procesy strategia-rozwoj siec-catman siec-marketing ai-sdd ai-transfai ai-seria ai-macierz sdd-macierz sdd-macierzpr sdd-precyzja transfai-seria transfai-procesy transfai-systemy macierz-macierzpr macierzpr-procesy macierzpr-siec seria-edukacja cpap-ksiazka cpap-edukacja cpap-sprzet ksiazka-edukacja laczenie-sysmeta laczenie-praktyk laczenie-transfai praktyk-precyzja praktyk-analizabiz ma-rozwoj'.split(' ');
  var idx = {}, nodes = N.map(function (n, i) { idx[n[0]] = i; return { id: n[0], label: n[1], cat: n[2], size: n[3] }; });
  var edges = E.map(function (e) { var p = e.split('-'); return [idx[p[0]], idx[p[1]]]; }).filter(function (e) { return e[0] != null && e[1] != null; });
  var adj = nodes.map(function () { return {}; });
  edges.forEach(function (e) { adj[e[0]][e[1]] = 1; adj[e[1]][e[0]] = 1; });

  var order = ['misja','dna','skill','biznes','meta'];
  var sorted = nodes.slice().sort(function (a, b) { var d = order.indexOf(a.cat) - order.indexOf(b.cat); return d || b.size - a.size; });
  var golden = Math.PI * (3 - Math.sqrt(5));
  sorted.forEach(function (n, i) {
    var y = 1 - (i / (sorted.length - 1)) * 2, r = Math.sqrt(1 - y * y), t = golden * i;
    n.x = Math.cos(t) * r; n.y = y; n.z = Math.sin(t) * r;
  });

  var ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = 1, R = 100;
  var rotX = -0.28, rotY = 0.6, auto = 0, zoomBase = 1;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hovered = -1, visible = false, frame = null, mx = -1, my = -1;
  var drag = false, lx = 0, ly = 0, moved = 0, lastT = 0;

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = Math.min(W, H) * 0.41;
    draw();
  }

  function project(n) {
    var ry = rotY + auto;
    var x1 = n.x * Math.cos(ry) - n.z * Math.sin(ry), z1 = n.x * Math.sin(ry) + n.z * Math.cos(ry);
    var y1 = n.y * Math.cos(rotX) - z1 * Math.sin(rotX), z2 = n.y * Math.sin(rotX) + z1 * Math.cos(rotX);
    var s = 2.6 / (2.6 + z2);
    return { sx: W / 2 + x1 * R * s, sy: H / 2 + y1 * R * s, s: s, z: z2 };
  }

  function draw() {
    if (!W) return;
    ctx.clearRect(0, 0, W, H);
    var P = nodes.map(project);
    var hasHover = hovered >= 0;
    edges.forEach(function (e) {
      var a = P[e[0]], b = P[e[1]];
      var depth = 1 - ((a.z + b.z) / 2 + 1) / 2;
      var on = hasHover && (e[0] === hovered || e[1] === hovered);
      ctx.globalAlpha = on ? 0.9 : (hasHover ? 0.05 : 0.14 + depth * 0.2);
      ctx.strokeStyle = on ? '#1d1d1f' : '#8e8e93';
      ctx.lineWidth = on ? 1.2 : 0.7;
      ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
    });
    ctx.globalAlpha = 1;
    var ord = nodes.map(function (n, i) { return i; }).sort(function (i, j) { return P[j].z - P[i].z; });
    ord.forEach(function (i) {
      var n = nodes[i], p = P[i], c = CATS[n.cat];
      var depth = 1 - (p.z + 1) / 2;
      var near = hasHover && (i === hovered || adj[hovered][i]);
      var alpha = hasHover ? (near ? 1 : 0.18) : 0.35 + depth * 0.65;
      var r = Math.max(3, n.size * p.s * 0.2);
      if (i === hovered) r *= 1.25;
      var col = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',';
      ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
      ctx.fillStyle = col + (alpha * 0.28) + ')'; ctx.fill();
      ctx.lineWidth = i === hovered ? 1.5 : 1; ctx.strokeStyle = col + (alpha * 0.9) + ')'; ctx.stroke();
      ctx.beginPath(); ctx.arc(p.sx, p.sy, Math.max(1.5, r * 0.22), 0, Math.PI * 2);
      ctx.fillStyle = col + alpha + ')'; ctx.fill();
      var showLabel = i === hovered || near || (!hasHover && n.size >= (W < 600 ? 30 : 24) && depth > 0.45);
      if (showLabel) {
        var fs = i === hovered ? 14 : Math.max(11, Math.min(13, n.size * p.s * 0.4));
        ctx.font = (i === hovered ? '600 ' : '500 ') + fs + 'px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillStyle = 'rgba(29,29,31,' + (i === hovered ? 1 : Math.min(1, alpha + 0.15)) + ')';
        var tw = ctx.measureText(n.label).width, tx = Math.min(W - tw / 2 - 6, Math.max(tw / 2 + 6, p.sx));
        ctx.fillText(n.label, tx, p.sy + r + 5);
      }
    });
    canvas.style.cursor = hasHover ? 'pointer' : (drag ? 'grabbing' : 'grab');
  }

  function pick() {
    if (mx < 0) { hovered = -1; return; }
    var best = -1, bd = 1e9;
    nodes.forEach(function (n, i) {
      var p = project(n); if (p.z > 0.55) return;
      var r = Math.max(10, n.size * p.s * 0.2 + 6);
      var d = Math.hypot(p.sx - mx, p.sy - my);
      if (d < r && d < bd) { bd = d; best = i; }
    });
    hovered = best;
  }

  function tick(t) {
    frame = null;
    if (!visible || document.hidden) return;
    var dt = lastT ? Math.min(50, t - lastT) : 16; lastT = t;
    if (!drag && !reduced.matches && hovered < 0) auto += 0.00012 * dt;
    pick(); draw();
    frame = requestAnimationFrame(tick);
  }
  function start() { if (!frame && visible) { lastT = 0; frame = requestAnimationFrame(tick); } }

  function pos(ev) { var r = canvas.getBoundingClientRect(); var p = ev.touches ? ev.touches[0] : ev; return [p.clientX - r.left, p.clientY - r.top]; }
  canvas.addEventListener('mousemove', function (ev) {
    var p = pos(ev); mx = p[0]; my = p[1];
    if (drag) { rotY += (mx - lx) * 0.006; rotX += (my - ly) * 0.006; rotX = Math.max(-1.2, Math.min(1.2, rotX)); moved += Math.abs(mx - lx) + Math.abs(my - ly); lx = mx; ly = my; }
    start();
  });
  canvas.addEventListener('mouseleave', function () { mx = my = -1; hovered = -1; drag = false; draw(); });
  canvas.addEventListener('mousedown', function (ev) { drag = true; moved = 0; var p = pos(ev); lx = p[0]; ly = p[1]; });
  window.addEventListener('mouseup', function () { drag = false; });
  canvas.addEventListener('click', function () {
    if (moved > 6) return;
    if (hovered >= 0) location.href = link + '#' + nodes[hovered].id; else location.href = link;
  });
  canvas.addEventListener('touchstart', function (ev) { drag = true; moved = 0; var p = pos(ev); lx = p[0]; ly = p[1]; }, { passive: true });
  canvas.addEventListener('touchmove', function (ev) {
    if (!drag) return; var p = pos(ev);
    rotY += (p[0] - lx) * 0.006; rotX += (p[1] - ly) * 0.006; rotX = Math.max(-1.2, Math.min(1.2, rotX));
    moved += Math.abs(p[0] - lx) + Math.abs(p[1] - ly); lx = p[0]; ly = p[1]; start();
  }, { passive: true });
  canvas.addEventListener('touchend', function () { drag = false; });

  new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); }, { threshold: 0.15 }).observe(canvas);
  document.addEventListener('visibilitychange', start);
  reduced.addEventListener('change', start);
  window.addEventListener('resize', resize);
  resize();
})();
