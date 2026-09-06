(() => {
  const supported = value => value === 'en' ? 'en' : 'pl';
  window.SiteLanguage = {
    get() { return supported(new URL(location.href).searchParams.get('lang')); },
    set(value) {
      const url = new URL(location.href);
      url.searchParams.set('lang', supported(value));
      history.replaceState(null, '', url);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const languageButton = document.querySelector('.lang-toggle');
    const hamburger = document.querySelector('.nav-hamburger');
    const navigation = document.querySelector('.nav-links');
    const home = document.getElementById('heroHeadline');
    const bilingual = !!document.querySelector('#content-en, .content-en, [lang="en"], .lang-en') || !!home || typeof window.applyLang === 'function';

    if (main && !document.querySelector('.skip-link')) {
      main.id ||= 'main-content';
      main.tabIndex = -1;
      const skip = document.createElement('a');
      skip.className = 'skip-link';
      skip.href = '#' + main.id;
      skip.dataset.pl = 'Przejdź do treści';
      skip.dataset.en = 'Skip to content';
      skip.textContent = document.documentElement.lang === 'en' ? skip.dataset.en : skip.dataset.pl;
      document.body.prepend(skip);
    }

    function closeMenu(restoreFocus = false) {
      if (!hamburger || !navigation) return;
      navigation.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      if (restoreFocus) hamburger.focus();
    }

    if (hamburger && navigation) {
      navigation.id ||= 'primary-navigation';
      hamburger.setAttribute('aria-controls', navigation.id);
      hamburger.removeAttribute('onclick');
      hamburger.addEventListener('click', () => {
        const open = navigation.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true);
      });
      document.addEventListener('click', event => {
        if (!event.target.closest('nav')) closeMenu();
      });
      navigation.addEventListener('focusout', event => {
        if (!navigation.contains(event.relatedTarget) && event.relatedTarget !== hamburger) closeMenu();
      });
      navigation.addEventListener('click', event => {
        const anchor = event.target.closest('a');
        if (!anchor) return;
        closeMenu();
        if (anchor.hash && new URL(anchor.href).pathname === location.pathname) {
          const target = document.getElementById(decodeURIComponent(anchor.hash.slice(1)));
          if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
        }
      });
    }

    function synchronize() {
      const lang = document.documentElement.lang === 'en' ? 'en' : 'pl';
      document.querySelectorAll('[data-pl][data-en]').forEach(element => {
        if (!element.classList.contains('stat-num')) element.textContent = element.dataset[lang];
      });
      const navLabels = {
        '#about': ['O mnie', 'About'], '#kompetencje': ['Kompetencje', 'Competencies'],
        '#projekty': ['Projekty', 'Projects'], '#standardy': ['Standardy', 'Standards'],
        '#artykuly': ['Artykuły', 'Articles'], '#kontakt': ['Kontakt', 'Contact']
      };
      document.querySelectorAll('.nav-links a').forEach(anchor => {
        const target = new URL(anchor.href, location.href);
        const label = navLabels[target.hash];
        if (label) anchor.textContent = label[lang === 'en' ? 1 : 0];
        else if (/\/mapa(?:-en)?\.html$/.test(target.pathname)) anchor.textContent = lang === 'en' ? 'Map' : 'Mapa';
      });
      if (languageButton) {
        languageButton.textContent = lang === 'pl' ? 'ENG' : 'PL';
        languageButton.setAttribute('aria-label', lang === 'pl' ? 'Switch to English' : 'Przełącz na polski');
      }
      document.querySelectorAll('a[href]').forEach(anchor => {
        const raw = anchor.getAttribute('href');
        if (raw.startsWith('#') || anchor.getAttribute('lang')) return;
        const url = new URL(raw, location.href);
        if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return;
        if (/\/mapa(?:-en)?\.html$/.test(url.pathname)) {
          url.pathname = lang === 'en' ? '/mapa-en.html' : '/mapa.html';
          url.searchParams.delete('lang');
        } else if (/\/art-ai-/.test(url.pathname)) {
          url.searchParams.set('lang', 'pl');
          anchor.hreflang = 'pl';
        } else if (/\/art-|\/orpr\/?$|\/(?:index\.html)?$/.test(url.pathname)) {
          url.searchParams.set('lang', lang);
        } else return;
        anchor.href = url.pathname + url.search + url.hash;
      });
    }
    // Podstrony (artykuły, /orpr/): język z ?lang, tytuł z data-title-*, przełącznik. index.html robi to w home.js.
    const root = document.documentElement;
    const subpage = !home && (root.hasAttribute('data-title-pl') || !!document.querySelector('.lang-only-en, .en-placeholder'));
    function applyPageLang(lang) {
      root.lang = lang;
      const title = root.getAttribute('data-title-' + lang);
      if (title) document.title = title;
      if (languageButton) languageButton.textContent = lang === 'pl' ? 'EN' : 'PL';
    }
    if (subpage) {
      applyPageLang(SiteLanguage.get());
      if (languageButton) languageButton.addEventListener('click', () => {
        const next = root.lang === 'pl' ? 'en' : 'pl';
        SiteLanguage.set(next);
        applyPageLang(next);
      });
    }
    const bar = document.querySelector('.read-progress');
    if (bar) {
      const upd = () => { const h = root.scrollHeight - window.innerHeight; bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%'; };
      window.addEventListener('scroll', upd, { passive: true });
      upd();
    }
    synchronize();
    new MutationObserver(synchronize).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    window.addEventListener('popstate', () => {
      if (SiteLanguage.get() !== document.documentElement.lang) location.reload();
    });
    if (home && languageButton) languageButton.addEventListener('click', () => {
      SiteLanguage.set(document.documentElement.lang);
      synchronize();
    });
  });
})();
