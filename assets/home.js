const content = {
      pl: {
        docTitle: "Rafał Myrta | Transformacja AI i strategia firm",
        nav: { about: "O mnie", kompetencje: "Kompetencje", projekty: "Projekty", standardy: "Standardy", artykuly: "Artykuły", mapa: "Mapa", kontakt: "Kontakt" },
        heroLabel: "STRATEG · ANALITYK · PM",
        heroHeadline: "Porządkuję firmy, które urosły szybciej niż ich struktura",
        heroSubtitle: "Strategia, procesy, wdrożenie, dziś także z agentami AI. Od kilkunastu do 3 800 lokalizacji: wszędzie ten sam wzór, inna skala.",
        aboutTitle: "Rozwijam firmy. Każda inna, podobny wzór.",
        aboutP1: "Zarządzałem sieciami od kilkunastu do kilku tysięcy lokalizacji. Prowadziłem grupę kapitałową pięciu spółek dla portugalskiego funduszu. Analizowałem rynki, robiłem fuzje i przejęcia, samodzielnie i w zespołach Deloitte. Restrukturyzowałem firmy, których właściciele nie wiedzieli od czego zacząć. Z wykształcenia jestem farmaceutą, i to się przydaje częściej niż myślisz.",
        aboutP2: "Dzisiaj pracuję na styku analizy biznesowej i zarządzania projektami. Wchodzę do firmy, rozkładam problem na części, buduję plan i pilnuję żeby się zrealizował. Nie jestem teoretykiem. Działam tam, gdzie strategia spotyka się z Excelem i ludźmi, którzy muszą ją wdrożyć.",
        aboutP3: "Większość problemów w firmach wygląda inaczej, ale działa tak samo: brak struktury, niejasne odpowiedzialności, decyzje podejmowane za późno. Widziałem to w sieciach handlowych, w startupach i w korporacjach. Dobra zmiana to taka, która sama się utrzymuje i doskonali w czasie.",
        aboutP4: "Najnowsze projekty prowadzę metodą Spec-Driven Development: specyfikacja i testy powstają przed kodem, a kod piszą agenci AI pod moim nadzorem. Tak zbudowałem między innymi macierz 361 wymagań regulacyjnych dla systemów aptecznych i ORPR, otwarty standard procesów dla handlu detalicznego. AI traktuję jak każdą wcześniejszą transformację, którą prowadziłem: to przebudowa procesów i ról, nie magia. Różnica jest taka, że tym razem wszystko dzieje się szybciej.",
        statementText: "Lubię firmy, które mają bałagan, bo to znaczy, że rosną. Nie wierzę w rewolucję, chyba że nie ma wyjścia. Zazwyczaj lepszy efekt dają małe zmiany robione konsekwentnie, które po roku dają efekt nie do poznania.",
        statsLabels: ["aptek w zarządzanej sieci", "wzrostu sprzedaży w 12 miesięcy", "lat w strategii i retailu", "czytelników miesięcznie"],
        kompetencjeTitle: "Kompetencje",
        kompetencjeSubtitle: "Co robię i w czym mogę pomóc.",
        komp1: { title: "Strategia i rozwój", desc: "Analiza rynku, modele biznesowe, skalowanie organizacji." },
        komp2: { title: "Zarządzanie projektami", desc: "Wdrożenia systemów, PMO, koordynacja zespołów." },
        komp3: { title: "Restrukturyzacja i M&A", desc: "Fuzje, przejęcia, due diligence, turnaround." },
        komp4: { title: "Sieci handlowe", desc: "Franczyza, category management, omnichannel." },
        komp5: { title: "Zarządzanie zmianą", desc: "Procesy, ludzie, systemy zarządzania." },
        komp6: { title: "Farmacja i rynek zdrowia", desc: "Sieci aptek, sprzęt medyczny, CPAP, regulacje." },
        komp7: { title: "Transformacja AI", desc: "Od pilotów do portfela zmian: praca z agentami (SDD), macierze wymagań, przebudowa procesów, ról i zachęt." },
        mapaCardTitle: "Jak to wszystko się łączy?",
        mapaCardDesc: "Kompetencje, biznesy, projekty i misja - na interaktywnej mapie powiązań. Kliknij i obróć.",
        mapaCardLink: "Otwórz mapę →",
        projektyTitle: "Wybrane projekty",
        proj1: { title: "Pierwsza apteka click-and-collect w Polsce", company: "Pelion / PGF S.A. · 2003", desc: "Wyzwanie: uruchomienie nowego kanału sprzedaży aptecznej. Moja rola: zaprojektowanie i wdrożenie doz.pl od zera. Rezultat: uruchomiona w 2003 roku apteka internetowa w modelu click-and-collect." },
        proj2: { title: "Sieć partnerska i franczyzowa", company: "NEUCA S.A. · 2007–2013", desc: "Skala: około 3 800 aptek, 60 przedstawicieli terenowych i 200 osób w telesales. Moja rola: zarządzanie siecią i budowa strategii. Zakres wdrożenia: PMO, system MBO i marka własna, w tym sieć Świat Zdrowia." },
        proj3: { title: "Turnaround grupy kapitałowej", company: "Moja Farmacja (portugalski VC) · 2014–2015", desc: "CEO grupy 5 spółek. W 12 miesięcy: sprzedaż +12,7%, marża brutto +33,3%. Wdrożyłem Lean Startup, zbudowałem system budżetowy online, zrestrukturyzowałem operacje." },
        proj4: { title: "Nowa kategoria w sieci aptek", company: "Pelion / PGF S.A. · 2003–2007", desc: "Wprowadziłem sprzęt rehabilitacyjny jako nową kategorię produktową do ogólnopolskiej sieci aptek. Efekt: +25% rentowności kategorii. Pełny cykl od negocjacji z dostawcami po planogramy." },
        proj5: { title: "Prawo farmaceutyczne", company: "Związek Pracodawców Hurtowni Farmaceutycznych · 2007–2013", desc: "Prowadziłem projekt lobbingowy wpływający na kształt regulacji farmaceutycznych w Polsce. Praca na poziomie ministerstw i komisji parlamentarnych." },
        proj6: { title: "Konsulting niezależny", company: "RM Consulting / Deloitte · 2015–2021", desc: "Audyty organizacyjne, restrukturyzacje, optymalizacja modeli biznesowych. Firmy od kilkunastu do kilkuset osób. Praca samodzielna i w zespołach Deloitte." },
        proj7: { title: "Macierz wymagań regulacyjnych dla systemów aptecznych", company: "Projekt własny · 2026", desc: "Problem: wymagania dla systemów aptecznych rozproszone w przepisach. Moja rola: specyfikacja i nadzór nad agentami AI. Rezultat: macierz 361 reguł, 1 083 scenariusze testowe i 122 karty źródłowe. To projekt własny i artefakt specyfikacyjny, nie wynik wdrożenia u klienta." },
        proj8: { title: "ORPR: otwarty standard procesów dla handlu detalicznego", company: "Projekt własny · orpr.dev · 2026", desc: "74 procesy w 22 obszarach, jedna definicja każdego, dla ludzi, integratorów i agentów AI. Warstwa regulacyjna, profile modeli biznesowych, otwarte API. Licencja CC BY-SA. Napisany z agentami AI, każda karta przyjęta osobiście." },
        standardyTitle: "Standardy",
        standardySubtitle: "Wiedza o rynku zapisana tak, żeby mógł z niej korzystać człowiek, system i agent AI. Otwarte, wersjonowane, do sprawdzenia.",
        std1: { tag: "Standard otwarty · v0.1 · 2026", title: "ORPR: Open Retail Process Reference", desc: "Retail nie miał wspólnego języka procesów, jak logistyka ma SCOR. Napisałem go: słownik procesów handlu detalicznego, w którym każdy proces ma jedną definicję, właściciela i granice. Dla zarządów sieci, dostawców IT i zespołów budujących agentów AI.", stats: ["procesy", "obszary", "wymogów regulacyjnych", "modeli biznesowych"], link: "Historia, metoda i dla kogo to jest →" },
        std2: { tag: "Macierz wymagań · 2026", title: "Macierz regulacyjna dla systemów aptecznych", desc: "361 reguł, 1 083 scenariusze testowe, 122 karty źródłowe z odesłaniami do przepisów. Druga warstwa tej samej konstrukcji: macierz mówi „musisz”, ORPR mówi „gdzie i kto”.", link: "Jak powstała →" },
        cpapTitle: "CPAPblog",
        cpapSubtitle: "",
        cpapText: "Od 2020 roku prowadzę CPAPblog.pl, największy w Polsce niezależny serwis o bezdechu sennym i terapii CPAP. Ponad 50 000 odwiedzin miesięcznie. Napisałem najbardziej kompleksową książkę o terapii CPAP w Polsce. Ale najważniejsze: dzięki blogowi tysiące osób dowiedziały się, że ich problem ma nazwę i rozwiązanie.",
        heroCTA: "Napisz o swoim wyzwaniu →",
        projektyCTA: "Masz podobny problem? Napisz →",
        cpapMiniText: "Od 2020 roku prowadzę też <a href=\"https://cpapblog.pl\" target=\"_blank\" rel=\"noopener\">CPAPblog.pl</a> - największy w Polsce niezależny serwis o bezdechu sennym (50 000+ odwiedzin/mies.).<br>Napisałem <a href=\"ksiazka.html\">książkę</a> o terapii CPAP.",
        artykulyTitle: "Artykuły",
        artykulySubtitle: "Piszę o strategii, zarządzaniu i transformacji AI w firmach, które działają w realnym świecie.",
        cyklTitle: "Seria: Doświadczenie, AI i zarządzanie firmą",
        cyklNote: "Cztery teksty i jeden wątek: od zbudowania standardu do tego, za co firmy będą płacić ludziom. Każdy da się czytać osobno.",
        stdMore: 'Jak ORPR powstał i co zmienia w codziennej pracy handlu, opisałem w <a href="#artykuly">czterech tekstach</a>.',
        seriaTitle: "Seria: AI, procesy, transformacja",
        artOldTitle: "Strategia i zarządzanie",
        seriaNextPrefix: "Kolejny tekst serii: ",
        seriaHint: "Dziesięć tekstów w kolejności czytania. Można wyrywkowo, ale numer 1 tłumaczy resztę.",
        articles: ["Dział Rozwoju", "Właściciel: z operacji do strategii", "Dlaczego 80% wdrożeń się nie udaje", "Sieci małe vs duże", "Category Management", "Restrukturyzacja: Świat Zdrowia"],
        articlesDesc: ["Dlaczego każda firma powyżej 50 osób potrzebuje działu, którego jedynym zadaniem jest myślenie do przodu.", "Kiedy właściciel przestaje gasić pożary i zaczyna budować systemy.", "Nie chodzi o technologię. Chodzi o ludzi, którzy mają z nią pracować.", "Inne problemy, inne narzędzia, ten sam cel.", "Jak zarządzać asortymentem tak, żeby każdy metr półki zarabiał.", "Case study: jak uporządkować sieć 1 200 aptek."],
        kontaktTitle: "Kontakt",
        kontaktSubtitle: "Szukasz kogoś, kto ogarnie projekt od strategii po wdrożenie? Odezwij się.",
        kontaktLocation: "Katowice, Polska",
        footerCopy: "© 2026 Rafał Myrta"
      },
      en: {
        docTitle: "Rafał Myrta | AI transformation and business strategy",
        nav: { about: "About", kompetencje: "Competencies", projekty: "Projects", standardy: "Standards", artykuly: "Articles", mapa: "Map", kontakt: "Contact" },
        heroLabel: "STRATEGIST · ANALYST · PM",
        heroHeadline: "I bring order to companies that grew faster than their structure",
        heroSubtitle: "Strategy, processes, implementation, and today also AI agents. From a dozen to 3,800 locations: the same pattern everywhere, different scale.",
        aboutTitle: "I grow businesses. Each one different, similar pattern.",
        aboutP1: "I've managed networks from a few dozen to several thousand locations. I ran a holding company of five subsidiaries for a Portuguese fund. I analyzed markets, did mergers and acquisitions, independently and with Deloitte teams. I restructured companies whose owners didn't know where to start. I'm a pharmacist by education, and it comes in handy more often than you'd think.",
        aboutP2: "Today I work at the intersection of business analysis and project management. I walk into a company, break the problem into parts, build a plan and make sure it gets done. I'm not a theorist. I operate where strategy meets Excel and the people who have to implement it.",
        aboutP3: "Most problems in companies look different but work the same way: lack of structure, unclear responsibilities, decisions made too late. I've seen it in retail chains, startups, and corporations. Good change is change that sustains and improves itself over time.",
        aboutP4: "My most recent projects run on Spec-Driven Development: specification and tests come before code, and the code is written by AI agents under my supervision. That is how I built, among other things, a matrix of 361 regulatory requirements for pharmacy systems and ORPR, an open process standard for retail. I treat AI like every transformation I have led before: it is a redesign of processes and roles, not magic. The difference is that this time everything happens faster.",
        statementText: "I like companies that are messy, because it means they're growing. I don't believe in revolution unless there's no other way. Usually small changes made consistently produce better results, beyond recognition after a year.",
        statsLabels: ["pharmacies in a managed network", "sales growth in 12 months", "years in strategy and retail", "readers every month"],
        kompetencjeTitle: "Competencies",
        kompetencjeSubtitle: "What I do and how I can help.",
        komp1: { title: "Strategy & Growth", desc: "Market analysis, business models, scaling organizations." },
        komp2: { title: "Project Management", desc: "System implementations, PMO, team coordination." },
        komp3: { title: "Restructuring & M&A", desc: "Mergers, acquisitions, due diligence, turnaround." },
        komp4: { title: "Retail Networks", desc: "Franchise, category management, omnichannel." },
        komp5: { title: "Change Management", desc: "Processes, people, management systems." },
        komp6: { title: "Pharma & Health", desc: "Pharmacy networks, medical devices, CPAP, regulations." },
        komp7: { title: "AI transformation", desc: "From pilots to a portfolio of change: working with AI agents (SDD), requirement matrices, redesigning processes, roles and incentives." },
        mapaCardTitle: "How does it all connect?",
        mapaCardDesc: "Competencies, businesses, projects and mission - on an interactive map of connections. Click and rotate.",
        mapaCardLink: "Open map →",
        projektyTitle: "Selected projects",
        proj1: { title: "First click-and-collect pharmacy in Poland", company: "Pelion / PGF S.A. · 2003", desc: "Challenge: launching a new pharmacy sales channel. My role: designing and implementing doz.pl from scratch. Result: an online click-and-collect pharmacy launched in 2003." },
        proj2: { title: "Partner and franchise network", company: "NEUCA S.A. · 2007–2013", desc: "Scale: around 3,800 pharmacies, 60 field representatives and 200 telesales staff. My role: network management and strategy. Implementation scope: PMO, an MBO system and a private label, including the Świat Zdrowia network." },
        proj3: { title: "Turnaround of holding company", company: "Moja Farmacja (Portuguese VC) · 2014–2015", desc: "CEO of 5 subsidiaries. In 12 months: sales +12.7%, gross margin +33.3%. I implemented Lean Startup, built an online budgeting system, restructured operations." },
        proj4: { title: "New category in pharmacy network", company: "Pelion / PGF S.A. · 2003–2007", desc: "I introduced rehabilitation equipment as a new product category in a nationwide pharmacy network. Result: +25% category profitability. Full cycle from supplier negotiations to planograms." },
        proj5: { title: "Pharmaceutical law", company: "Association of Pharmaceutical Wholesalers (ZPHF) · 2007–2013", desc: "I led a lobbying project influencing pharmaceutical regulations in Poland. Work at ministry and parliamentary commission level." },
        proj6: { title: "Independent consulting", company: "RM Consulting / Deloitte · 2015–2021", desc: "Organizational audits, restructuring, business model optimization. Companies from a dozen to several hundred employees. Independent work and Deloitte team collaboration." },
        proj7: { title: "Regulatory requirements matrix for pharmacy systems", company: "Own project · 2026", desc: "Problem: pharmacy system requirements scattered across regulations. My role: specification and supervision of AI agents. Result: a matrix of 361 rules, 1,083 test scenarios and 122 source cards. This is an independent specification project, not a measured client implementation outcome." },
        proj8: { title: "ORPR: an open process standard for retail", company: "Own project · orpr.dev · 2026", desc: "74 processes in 22 areas, one definition each, for people, integrators and AI agents. Regulatory layer, business model profiles, open API. CC BY-SA licence. Written with AI agents, every card accepted personally." },
        standardyTitle: "Standards",
        standardySubtitle: "Market knowledge written down so that a person, a system and an AI agent can all use it. Open, versioned, verifiable.",
        std1: { tag: "Open standard · v0.1 · 2026", title: "ORPR: Open Retail Process Reference", desc: "Retail had no shared language for its processes, the way logistics has SCOR. I wrote one: a dictionary of retail processes where each process has one definition, an owner and boundaries. For chain management, software vendors and teams building AI agents.", stats: ["processes", "areas", "regulatory requirements", "business models"], link: "The story, the method and who it is for →" },
        std2: { tag: "Requirements matrix · 2026", title: "Regulatory matrix for pharmacy systems", desc: "361 rules, 1,083 test scenarios, 122 source cards with references to regulations. The second layer of the same construction: the matrix says \"you must\", ORPR says \"where and who\".", link: "How it was built →" },
        cpapTitle: "CPAPblog",
        cpapSubtitle: "",
        cpapText: "Since 2020 I run CPAPblog.pl, Poland's largest independent resource on sleep apnea and CPAP therapy. Over 50,000 visits per month. I wrote the most comprehensive book on CPAP therapy in Poland. But most importantly: thanks to the blog, thousands of people learned that their problem has a name and a solution.",
        heroCTA: "Tell me about your challenge →",
        projektyCTA: "Facing a similar challenge? Let\'s talk →",
        cpapMiniText: "Since 2020, I also run <a href=\"https://cpapblog.pl\" target=\"_blank\" rel=\"noopener\">CPAPblog.pl</a> - Poland\'s largest independent resource on sleep apnea (50,000+ visits/month).<br>I wrote a <a href=\"ksiazka.html\">book</a> on CPAP therapy.",
        artykulyTitle: "Articles",
        artykulySubtitle: "I write about strategy, management, and AI transformation in real-world companies.",
        cyklTitle: "Series: Experience, AI and running a company",
        cyklNote: "Four texts and one thread: from building the standard to what companies will pay people for. Each one can be read on its own.",
        stdMore: 'How ORPR came about, and what it changes in the daily work of retail, is covered in <a href="#artykuly">four articles</a>.',
        seriaTitle: "Series: AI, processes, transformation (in Polish)",
        artOldTitle: "Strategy and management",
        seriaNextPrefix: "Next in the series: ",
        seriaHint: "Ten articles in reading order (Polish). Number 1 sets up the rest.",
        articles: ["Growth Department", "Owner: From Operations to Strategy", "Why 80% of Implementations Fail", "Small vs. Large Networks", "Category Management", "Restructuring: Świat Zdrowia"],
        articlesDesc: ["Why every company above 50 people needs a department whose only job is thinking ahead.", "When the owner stops firefighting and starts building systems.", "It's not about the technology. It's about the people who have to work with it.", "Different problems, different tools, same goal.", "How to manage assortment so every meter of shelf space earns.", "Case study: how to bring order to a network of 1,200 pharmacies."],
        kontaktTitle: "Contact",
        kontaktSubtitle: "Looking for someone to take your project from strategy to execution? Get in touch.",
        kontaktLocation: "Katowice, Poland",
        footerCopy: "© 2026 Rafał Myrta"
      }
    };

    let currentLang = SiteLanguage.get();

    document.getElementById('langToggle').addEventListener('click', function() {
      currentLang = currentLang === 'pl' ? 'en' : 'pl';
      SiteLanguage.set(currentLang);
      this.textContent = currentLang === 'pl' ? 'ENG' : 'PL';
      updateContent();
    });


    // ── Seria "AI, procesy, transformacja": lista sterowana datami ──
    // Cała seria opublikowana 17.08.2026; lista zachowuje kolejność czytania.
    const SERIA = [
      { slug: "art-ai-zrodlo-prawdy", date: "2026-08-17", title: "Zanim agent napisze kod, ktoś musi ustalić, co jest prawdą", desc: "SDD okiem PM-a: 361 reguł, 1\u00a0083 testy i dlaczego źródło prawdy jest ważniejsze niż prompt." },
      { slug: "art-ai-feature-to-nie-strategia", date: "2026-08-17", title: "AI feature to nie strategia", desc: "Trzy pytania do dostawcy systemu, zanim podpiszesz aneks z modułem AI." },
      { slug: "art-ai-czego-agent-nie-wie-o-aptece", date: "2026-08-17", title: "Czego agent nie wie o aptece", desc: "Reklama, refundacja, recepta: trzy pułapki systemu projektowanego jak dla zwykłego retailu." },
      { slug: "art-ai-falszywe-i-gotowe", date: "2026-08-17", title: "Najgroźniejsza odpowiedź AI? Fałszywa i oznaczona jako „gotowe”", desc: "Cztery reguły wiarygodności w pracy z agentami." },
      { slug: "art-ai-zarzadzanie-agentami", date: "2026-08-17", title: "Agentów nie wystarczy uruchomić. Trzeba nimi zarządzać", desc: "Onboarding, delegowanie, kontrola jakości i pamięć drugiego zespołu." },
      { slug: "art-ai-zly-projekt", date: "2026-08-17", title: "AI nie naprawi złego projektu. Szybciej wystawi rachunek", desc: "Dlaczego stare kompetencje projektowe właśnie zdrożały." },
      { slug: "art-ai-pilot-i-skalowanie", date: "2026-08-17", title: "Pilot AI nie skaluje się od prezentacji dla zarządu", desc: "Cztery powody śmierci pilotów i pięć bramek przed rolloutem." },
      { slug: "art-ai-mbo-kontra-ai", date: "2026-08-17", title: "MBO kontra AI: kiedy premia nagradza stary sposób pracy", desc: "Jak systemy premiowe cichutko karzą ludzi za używanie agentów." },
      { slug: "art-ai-sredni-szczebel", date: "2026-08-17", title: "Średni szczebel nie hamuje AI", desc: "Hamuje zmianę, w której nie ma dla niego roli. Trzy rzeczy, które działają." },
      { slug: "art-ai-restrukturyzacja", date: "2026-08-17", title: "Transformacja AI to restrukturyzacja", desc: "Tylko nikt nie chce jej tak nazwać. Warsztat przebudowy firmy zastosowany do AI." }
    ];
    function renderSeria() {
      const list = document.getElementById('seriaList');
      const next = document.getElementById('seriaNext');
      if (!list) return;
      const today = new Date();
      const stamp = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      const isOut = (a) => parseInt(a.date.replace(/-/g, ''), 10) <= stamp;
      const out = SERIA.filter(isOut);   // kolejność czytania: od pierwszego tekstu serii do ostatniego
      const coming = SERIA.find((a) => !isOut(a));
      list.innerHTML = out.map((a, n) =>
        '<li class="artykuly-item"><a href="' + a.slug + '.html" class="artykuly-link">' +
        '<div class="artykuly-title-row"><span class="artykuly-title">' +
        '<span class="seria-num">' + (n + 1) + '</span>' + a.title + '</span><span class="artykuly-arrow">→</span></div>' +
        '<p class="artykuly-desc">' + a.desc + '</p></a></li>').join('');
      const data = content[currentLang];
      if (coming) {
        const d = coming.date.split('-');
        next.textContent = data.seriaNextPrefix + d[2] + '.' + d[1] + '.' + d[0];
      } else {
        next.textContent = data.seriaHint;
      }
      next.style.display = 'block';
    }

    renderSeria();  // pierwszy render listy serii przy załadowaniu strony

    // ── Seria "Doświadczenie, AI i zarządzanie firmą": cały cykl opublikowany 05.09.2026 ──
    const CYKL = [
      { slug: "art-orpr-doswiadczenie-w-standard", titlePl: "Jak zamieniłem doświadczenie w ORPR", titleEn: "How I turned experience into ORPR", descPl: "Po co retailowi wspólny słownik procesów i jak jest zbudowany: wynik, granice, niezmienniki i pytania do rozstrzygnięcia.", descEn: "Why retail needs a shared process dictionary and how it is built: outcome, boundaries, invariants and the questions still to be settled." },
      { slug: "art-orpr-mniej-pracy-w-handlu", titlePl: "Handel będzie musiał generować mniej pracy. AI tego za nas nie policzy", titleEn: "Retail will have to generate less work. AI will not do that calculation for us", descPl: "Pracochłonność oferty jako pozycja w rachunku handlowym, a nie skutek uboczny kolejnej promocji.", descEn: "The labour intensity of the offer as a line in the commercial calculation, not a side effect of the next promotion." },
      { slug: "art-orpr-kto-zarzadza-firma-agentow", titlePl: "Kto będzie zarządzał firmą, w której decyzje wykonują agenci AI?", titleEn: "Who will run a company where the decisions are executed by AI agents?", descPl: "Zapas dostępny kontra zobowiązany: jak trzy poprawnie działające systemy razem zawodzą klienta.", descEn: "Available stock versus committed stock: how three correctly working systems together fail the customer." },
      { slug: "art-orpr-wartosc-eksperta", titlePl: "Za co będziemy płacić ekspertom, gdy AI potrafi przygotować analizę?", titleEn: "What will we pay experts for, once AI can prepare the analysis?", descPl: "Za co klient płaci, gdy analizę potrafi przygotować model. Trzy zdolności, które zostają.", descEn: "What the client pays for once a model can prepare the analysis. The three abilities that remain." }
    ];
    function renderCykl() {
      const list = document.getElementById("cyklList");
      if (!list) return;
      const en = currentLang === "en";
      list.innerHTML = CYKL.map((a, n) =>
        '<li class="artykuly-item"><a href="' + a.slug + '.html" class="artykuly-link">' +
        '<div class="artykuly-title-row"><span class="artykuly-title">' +
        '<span class="seria-num">' + (n + 1) + '</span>' + (en ? a.titleEn : a.titlePl) +
        '</span><span class="artykuly-arrow">→</span></div>' +
        '<p class="artykuly-desc">' + (en ? a.descEn : a.descPl) + '</p></a></li>').join("");
      const note = document.getElementById("cyklNote");
      if (note) { note.textContent = content[currentLang].cyklNote; note.style.display = "block"; }
    }

    renderCykl();  // cykl ORPR: cztery teksty, bez bramkowania datą


    function updateContent() {
      const data = content[currentLang];
      document.documentElement.lang = currentLang;
      document.title = data.docTitle;
      document.getElementById('navAbout').textContent = data.nav.about;
      document.getElementById('navKompetencje').textContent = data.nav.kompetencje;
      document.getElementById('navProjekty').textContent = data.nav.projekty;
      document.getElementById('navStandardy').textContent = data.nav.standardy;
      document.getElementById('navArtykuly').textContent = data.nav.artykuly;
      document.getElementById('navMapa').textContent = data.nav.mapa;
      document.getElementById('navKontakt').textContent = data.nav.kontakt;
      document.getElementById('heroLabel').textContent = data.heroLabel;
      document.getElementById('heroHeadline').textContent = data.heroHeadline;
      document.getElementById('heroSubtitle').textContent = data.heroSubtitle;
      document.getElementById('heroCTA').textContent = data.heroCTA;
      document.getElementById('aboutTitle').textContent = data.aboutTitle;
      document.getElementById('aboutP1').textContent = data.aboutP1;
      document.getElementById('aboutP2').textContent = data.aboutP2;
      document.getElementById('aboutP3').textContent = data.aboutP3;
      document.getElementById('aboutP4').textContent = data.aboutP4;
      document.getElementById('statementText').textContent = data.statementText;
      if (data.statsLabels) data.statsLabels.forEach((label, i) => {
        const el = document.getElementById(`stat${i + 1}-label`);
        if (el) el.textContent = label;
      });
      if (window.__syncStats) window.__syncStats();
      document.getElementById('kompetencjeTitle').textContent = data.kompetencjeTitle;
      document.getElementById('kompetencjeSubtitle').textContent = data.kompetencjeSubtitle;
      for (let i = 1; i <= 7; i++) {
        document.getElementById(`komp${i}-title`).textContent = data[`komp${i}`].title;
        document.getElementById(`komp${i}-desc`).textContent = data[`komp${i}`].desc;
      }
      document.getElementById('mapaCardTitle').textContent = data.mapaCardTitle;
      document.getElementById('mapaCardDesc').textContent = data.mapaCardDesc;
      document.getElementById('mapaCardLink').textContent = data.mapaCardLink;
      document.getElementById('projektyTitle').textContent = data.projektyTitle;
      for (let i = 1; i <= 8; i++) {
        document.getElementById(`proj${i}-title`).textContent = data[`proj${i}`].title;
        document.getElementById(`proj${i}-company`).textContent = data[`proj${i}`].company;
        document.getElementById(`proj${i}-desc`).textContent = data[`proj${i}`].desc;
      }
      document.getElementById('standardyTitle').textContent = data.standardyTitle;
      document.getElementById('standardySubtitle').textContent = data.standardySubtitle;
      for (const k of ['std1', 'std2']) {
        document.getElementById(`${k}-tag`).textContent = data[k].tag;
        document.getElementById(`${k}-title`).textContent = data[k].title;
        document.getElementById(`${k}-desc`).textContent = data[k].desc;
        document.getElementById(`${k}-link`).textContent = data[k].link;
        if (data[k].stats) data[k].stats.forEach((s, i) => { document.getElementById(`${k}-s${i + 1}`).textContent = s; });
      }
      if (document.getElementById('cpapTitle')) document.getElementById('cpapTitle').textContent = data.cpapTitle;
      if (document.getElementById('cpapSubtitle')) document.getElementById('cpapSubtitle').textContent = data.cpapSubtitle;
      if (document.getElementById('cpapText')) document.getElementById('cpapText').textContent = data.cpapText;
      document.getElementById('artykulyTitle').textContent = data.artykulyTitle;
      document.getElementById('artykulySubtitle').textContent = data.artykulySubtitle;
      document.getElementById('cyklTitle').textContent = data.cyklTitle;
      document.getElementById('seriaTitle').textContent = data.seriaTitle;
      document.getElementById('artOldTitle').textContent = data.artOldTitle;
      const stdMoreEl = document.getElementById('stdMore');
      if (stdMoreEl) stdMoreEl.innerHTML = data.stdMore;
      renderSeria();
      renderCykl();
      data.articles.forEach((article, index) => {
        const el = document.getElementById(`art${index + 1}`);
        const textSpan = el.querySelector('.artykuly-title');
        if (textSpan) textSpan.textContent = article;
        const descEl = el.querySelector('.artykuly-desc');
        if (descEl && data.articlesDesc && data.articlesDesc[index]) descEl.textContent = data.articlesDesc[index];
      });
      document.getElementById('kontaktTitle').textContent = data.kontaktTitle;
      document.getElementById('kontaktSubtitle').textContent = data.kontaktSubtitle;

      document.getElementById('kontaktLocation').textContent = data.kontaktLocation;
      document.getElementById('footerCopy').textContent = data.footerCopy;
      const projCta = document.getElementById('projektyCTA');
      if (projCta) projCta.textContent = data.projektyCTA;
      document.getElementById('cpapMiniText').innerHTML = data.cpapMiniText;
    }

    updateContent();
    document.getElementById('langToggle').textContent = currentLang === 'pl' ? 'ENG' : 'PL';

    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealOnScroll.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealOnScroll.observe(el));

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
          }
        }
      });
    });
    // ── Mini mapa preview ──
    (function() {
      var mc = document.getElementById('mapaPreview');
      if (!mc) return;
      var mctx = mc.getContext('2d');
      var dpr = window.devicePixelRatio || 1;

      function sizeCanvas() {
        var rect = mc.getBoundingClientRect();
        mc.width = rect.width * dpr;
        mc.height = rect.height * dpr;
        mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      sizeCanvas();
      window.addEventListener('resize', sizeCanvas);

      var cats = {
        dna:   [120,120,120],
        biz:   [140,140,140],
        skill: [100,100,100],
        misja: [130,130,130],
        meta:  [110,110,110]
      };

      // Generate mini nodes on sphere
      var N = 28;
      var golden = Math.PI * (3 - Math.sqrt(5));
      var mnodes = [];
      var catKeys = Object.keys(cats);
      for (var i = 0; i < N; i++) {
        var y = 1 - (i / (N - 1)) * 2;
        var rr = Math.sqrt(1 - y * y);
        var th = golden * i;
        mnodes.push({
          x: Math.cos(th) * rr,
          y: y,
          z: Math.sin(th) * rr,
          c: cats[catKeys[i % catKeys.length]],
          s: 2 + Math.random() * 3
        });
      }

      // Pre-generate some edges
      var medges = [];
      for (var j = 0; j < N; j++) {
        var nearest = -1, nd = Infinity;
        for (var k = 0; k < N; k++) {
          if (k === j) continue;
          var dx = mnodes[j].x - mnodes[k].x;
          var dy = mnodes[j].y - mnodes[k].y;
          var dz = mnodes[j].z - mnodes[k].z;
          var d = dx*dx + dy*dy + dz*dz;
          if (d < nd) { nd = d; nearest = k; }
        }
        if (nearest >= 0) medges.push([j, nearest]);
      }

      var mt = 0, miniFrame = null, miniVisible = false;
      var miniReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
      function renderMini() {
        if (!miniReduced.matches) mt += 0.003;
        var rect = mc.getBoundingClientRect();
        var w = rect.width, h = rect.height;
        if (w === 0 || h === 0) return;

        mctx.clearRect(0, 0, w, h);

        // BG
        var bg = mctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w*0.7);
        bg.addColorStop(0, '#fafafa');
        bg.addColorStop(1, '#f5f5f7');
        mctx.fillStyle = bg;
        mctx.fillRect(0, 0, w, h);

        var R = Math.min(w, h) * 0.36;
        var persp = 300;
        var ry = mt;
        var rx = -0.25;

        function proj(nx, ny, nz) {
          var x1 = nx * Math.cos(ry) - nz * Math.sin(ry);
          var z1 = nx * Math.sin(ry) + nz * Math.cos(ry);
          var y1 = ny * Math.cos(rx) - z1 * Math.sin(rx);
          var z2 = ny * Math.sin(rx) + z1 * Math.cos(rx);
          var sc = persp / (persp + z2 * R);
          return { x: w/2 + x1 * R * sc, y: h/2 + y1 * R * sc, z: z2, s: sc };
        }

        // Edges
        medges.forEach(function(e) {
          var a = proj(mnodes[e[0]].x, mnodes[e[0]].y, mnodes[e[0]].z);
          var b = proj(mnodes[e[1]].x, mnodes[e[1]].y, mnodes[e[1]].z);
          var avgD = 1 - ((a.z + b.z) / 2 + 1) / 2;
          mctx.globalAlpha = 0.06 + avgD * 0.1;
          mctx.strokeStyle = '#bbb';
          mctx.lineWidth = 0.5;
          mctx.beginPath();
          mctx.moveTo(a.x, a.y);
          mctx.lineTo(b.x, b.y);
          mctx.stroke();
        });
        mctx.globalAlpha = 1;

        // Nodes sorted by z
        var projected = mnodes.map(function(n) {
          var p = proj(n.x, n.y, n.z);
          return { px: p.x, py: p.y, pz: p.z, ps: p.s, c: n.c, s: n.s };
        });
        projected.sort(function(a, b) { return b.pz - a.pz; });

        projected.forEach(function(n) {
          var depth = 1 - (n.pz + 1) / 2;
          var alpha = 0.2 + depth * 0.8;
          var r = n.s * n.ps;

          // Glow
          var glow = mctx.createRadialGradient(n.px, n.py, r*0.2, n.px, n.py, r*2.5);
          glow.addColorStop(0, 'rgba('+n.c[0]+','+n.c[1]+','+n.c[2]+','+(alpha*0.1)+')');
          glow.addColorStop(1, 'rgba('+n.c[0]+','+n.c[1]+','+n.c[2]+',0)');
          mctx.fillStyle = glow;
          mctx.beginPath();
          mctx.arc(n.px, n.py, r*2.5, 0, Math.PI*2);
          mctx.fill();

          // Dot
          mctx.beginPath();
          mctx.arc(n.px, n.py, r, 0, Math.PI*2);
          mctx.fillStyle = 'rgba('+n.c[0]+','+n.c[1]+','+n.c[2]+','+(alpha*0.3)+')';
          mctx.fill();
          mctx.strokeStyle = 'rgba('+n.c[0]+','+n.c[1]+','+n.c[2]+','+(alpha*0.5)+')';
          mctx.lineWidth = 0.5;
          mctx.stroke();
        });

        if (miniVisible && !miniReduced.matches && !document.hidden) miniFrame = requestAnimationFrame(renderMini);
      }

      function syncMini() {
        cancelAnimationFrame(miniFrame);
        miniFrame = null;
        if (miniVisible && !document.hidden) renderMini();
      }
      var io = new IntersectionObserver(function(entries) {
        miniVisible = entries[0].isIntersecting;
        syncMini();
      }, { threshold: 0.1 });
      io.observe(mc);
      miniReduced.addEventListener('change', syncMini);
      document.addEventListener('visibilitychange', syncMini);
      window.addEventListener('resize', syncMini);
    })();

    // ── Hero: konstelacja (motyw mapy kompetencji) ──
    (function() {
      var hc = document.getElementById('heroCanvas');
      if (!hc) return;
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var ctx = hc.getContext('2d');
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var W = 0, H = 0;

      function size() {
        var r = hc.getBoundingClientRect();
        W = r.width; H = r.height;
        hc.width = W * dpr; hc.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      size();
      window.addEventListener('resize', size);

      var N = 90;
      var golden = Math.PI * (3 - Math.sqrt(5));
      var nodes = [];
      for (var i = 0; i < N; i++) {
        var y = 1 - (i / (N - 1)) * 2;
        var rr = Math.sqrt(1 - y * y);
        var th = golden * i;
        nodes.push({ x: Math.cos(th) * rr, y: y, z: Math.sin(th) * rr, s: 1.2 + (i % 5) * 0.55 });
      }
      var edges = [];
      for (var j = 0; j < N; j++) {
        var best = [-1, -1], bd = [Infinity, Infinity];
        for (var k = 0; k < N; k++) {
          if (k === j) continue;
          var dx = nodes[j].x - nodes[k].x, dy = nodes[j].y - nodes[k].y, dz = nodes[j].z - nodes[k].z;
          var d = dx * dx + dy * dy + dz * dz;
          if (d < bd[0]) { bd[1] = bd[0]; best[1] = best[0]; bd[0] = d; best[0] = k; }
          else if (d < bd[1]) { bd[1] = d; best[1] = k; }
        }
        if (best[0] >= 0) edges.push([j, best[0]]);
        if (best[1] >= 0 && j % 2 === 0) edges.push([j, best[1]]);
      }

      var mx = 0, my = 0, tmx = 0, tmy = 0;
      if (!reduced) {
        window.addEventListener('mousemove', function(e) {
          tmx = (e.clientX / window.innerWidth - 0.5);
          tmy = (e.clientY / window.innerHeight - 0.5);
        }, { passive: true });
      }

      var t = 0, running = false, rafId = null;

      function draw() {
        t += 0.0016;
        mx += (tmx - mx) * 0.04;
        my += (tmy - my) * 0.04;
        ctx.clearRect(0, 0, W, H);

        var R = Math.min(W, H) * 0.62;
        var cx = W / 2, cy = H * 0.52;
        var persp = 420;
        var ry = t + mx * 0.6;
        var rx = -0.28 + my * 0.35;

        function proj(n) {
          var x1 = n.x * Math.cos(ry) - n.z * Math.sin(ry);
          var z1 = n.x * Math.sin(ry) + n.z * Math.cos(ry);
          var y1 = n.y * Math.cos(rx) - z1 * Math.sin(rx);
          var z2 = n.y * Math.sin(rx) + z1 * Math.cos(rx);
          var sc = persp / (persp + z2 * R);
          return { x: cx + x1 * R * sc, y: cy + y1 * R * sc, z: z2, sc: sc };
        }

        var P = nodes.map(proj);
        for (var e = 0; e < edges.length; e++) {
          var a = P[edges[e][0]], b = P[edges[e][1]];
          var depth = 1 - ((a.z + b.z) / 2 + 1) / 2;
          ctx.globalAlpha = 0.04 + depth * 0.09;
          ctx.strokeStyle = '#1d1d1f';
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        ctx.globalAlpha = 1;
        for (var p = 0; p < P.length; p++) {
          var n = P[p], depth2 = 1 - (n.z + 1) / 2;
          ctx.beginPath();
          ctx.arc(n.x, n.y, nodes[p].s * n.sc, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(134,134,139,' + (0.12 + depth2 * 0.42) + ')';
          ctx.fill();
        }
        if (!reduced && running) rafId = requestAnimationFrame(draw);
      }

      var hero = document.querySelector('.hero');
      var io = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          if (!running) { running = true; draw(); }
          if (reduced) { draw(); }
        } else {
          running = false;
          if (rafId) cancelAnimationFrame(rafId);
        }
      }, { threshold: 0.05 });
      io.observe(hero);
    })();

    // ── Stats: count-up przy wejściu w viewport ──
    (function() {
      var band = document.getElementById('statsBand');
      if (!band) return;
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var nums = band.querySelectorAll('.stat-num');

      function finalFor(el) {
        var v = currentLang === 'en' ? el.dataset.en : el.dataset.pl;
        return v.replace(/&nbsp;/g, ' ');
      }

      function fmt(el, val) {
        var dec = parseInt(el.dataset.decimals || '0', 10);
        var s = val.toFixed(dec);
        if (currentLang === 'en') { s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
        else { s = s.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
        return (el.dataset.prefix || '') + s + (el.dataset.suffix || '');
      }

      window.__syncStats = function() {
        nums.forEach(function(el) { if (el.dataset.done) el.textContent = finalFor(el); });
      };

      function run(el) {
        var target = parseFloat(el.dataset.target);
        var start = null, dur = 1400;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(2, -10 * p);
          el.textContent = fmt(el, target * eased);
          if (p < 1) requestAnimationFrame(step);
          else { el.dataset.done = '1'; el.textContent = finalFor(el); }
        }
        requestAnimationFrame(step);
      }

      var io = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          io.disconnect();
          nums.forEach(function(el) {
            if (reduced) { el.dataset.done = '1'; el.textContent = finalFor(el); }
            else run(el);
          });
        }
      }, { threshold: 0.5 });
      io.observe(band);
    })();

    // ── Magnetyczny CTA (hero) ──
    (function() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!window.matchMedia('(hover: hover)').matches) return;
      var cta = document.getElementById('heroCTA');
      if (!cta) return;
      cta.addEventListener('mousemove', function(e) {
        var r = cta.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        var dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        cta.style.transform = 'translate(' + (dx * 5) + 'px,' + (dy * 4) + 'px)';
      });
      cta.addEventListener('mouseleave', function() {
        cta.style.transform = '';
      });
    })();

    // ── Testimonial carousel ──
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = n;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide((currentSlide + 1) % slides.length);
    }

    const carousel = document.getElementById('testimonialCarousel');
    const carouselMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let carouselTimer = null;
    let carouselPaused = carouselMotion.matches;
    let carouselHovered = false;
    let carouselVisible = false;
    const pauseButton = document.createElement('button');
    pauseButton.className = 'carousel-pause';
    pauseButton.type = 'button';
    pauseButton.setAttribute('aria-controls', 'testimonialCarousel');
    carousel.append(pauseButton);

    function syncCarousel() {
      clearInterval(carouselTimer);
      carouselTimer = null;
      pauseButton.textContent = currentLang === 'pl'
        ? (carouselPaused ? 'Wznów zmianę referencji' : 'Wstrzymaj zmianę referencji')
        : (carouselPaused ? 'Resume testimonial rotation' : 'Pause testimonial rotation');
      slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== currentSlide)));
      dots.forEach((dot, i) => {
        dot.setAttribute('aria-label', (currentLang === 'pl' ? 'Referencja ' : 'Testimonial ') + (i + 1));
        dot.setAttribute('aria-pressed', String(i === currentSlide));
      });
      if (!carouselPaused && !carouselHovered && !carouselMotion.matches && carouselVisible && !document.hidden && !carousel.contains(document.activeElement)) {
        carouselTimer = setInterval(() => { nextSlide(); syncCarousel(); }, 25000);
      }
    }
    pauseButton.addEventListener('click', () => { carouselPaused = !carouselPaused; syncCarousel(); });
    carousel.addEventListener('mouseenter', () => { carouselHovered = true; syncCarousel(); });
    carousel.addEventListener('mouseleave', () => { carouselHovered = false; syncCarousel(); });
    carousel.addEventListener('focusin', syncCarousel);
    carousel.addEventListener('focusout', () => setTimeout(syncCarousel, 0));
    document.addEventListener('visibilitychange', syncCarousel);
    carouselMotion.addEventListener('change', () => { carouselPaused = carouselMotion.matches; syncCarousel(); });
    document.getElementById('langToggle').addEventListener('click', syncCarousel);
    new IntersectionObserver(entries => { carouselVisible = entries[0].isIntersecting; syncCarousel(); }).observe(carousel);
    dots.forEach((dot, i) => {
      dot.removeAttribute('onclick');
      dot.addEventListener('click', () => { goToSlide(i); syncCarousel(); });
    });
    syncCarousel();
