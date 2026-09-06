# myrta.me

Zrodlo strony [myrta.me](https://myrta.me). Statyczny HTML, bez buildu i bez frameworka.

## Deploy

Hosting: OVH, Apache. Pliki wgrywane bezposrednio na serwer.
Plik `.htaccess` obsluguje przekierowanie na HTTPS, kanoniczny adres bez www,
naglowki bezpieczenstwa (HSTS, CSP), cache assetow i kompresje gzip.

CSP: `script-src 'self'` plus hashe SHA-256 czterech inline skryptow (mapa.html, mapa-en.html,
mapa-light.html, wizytowka.html). Zadnych atrybutow `onclick=` w HTML; handlery podpina JS.
Po zmianie ktoregokolwiek inline skryptu `scripts/check-site.py` zglosi nowy hash do wpisania w `.htaccess`.
Gating artykulow po dacie zostal usuniety: cala seria AI jest publiczna od 17.08.2026.

## Struktura

| Plik | Co to |
|---|---|
| `index.html` | strona glowna |
| `art-*.html` | artykuly |
| `mapa.html`, `mapa-en.html`, `mapa-light.html` | mapa kompetencji: PL, EN, wersja jasna |
| `ksiazka.html` | podstrona ksiazki |
| `wizytowka.html` | wizytowka |
| `orpr/index.html` | podstrona myrta.me/orpr o standardzie ORPR |
| `404.html` | strona bledu |
| `.htaccess` | konfiguracja Apache |
| `assets/` | wspolny CSS/JS (`site.css`, `site.js`, `home.js`) i style per szablon (`page-<hash>.css`) |
| `og/` | obrazy Open Graph per artykul, generowane przez `scripts/make-og.py` |
| `scripts/check-site.py` | kontrola: linki, ID, alt, JS, sitemap, wersje assetow, dlugosci title/description, JSON-LD, og:image |
| `scripts/make-og.py` | generator OG (1200x630) z tytulu i etykiety serii; fonty Inter w `scripts/fonts/` |
| `robots.txt`, `sitemap.xml` | SEO |
