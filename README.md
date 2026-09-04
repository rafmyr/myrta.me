# myrta.me

Zrodlo strony [myrta.me](https://myrta.me). Statyczny HTML, bez buildu i bez frameworka.

## Deploy

Hosting: OVH, Apache. Pliki wgrywane bezposrednio na serwer.
Plik `.htaccess` obsluguje przekierowanie na HTTPS, kanoniczny adres bez www,
naglowki bezpieczenstwa, cache assetow, kompresje gzip oraz gating publikacji
artykulow po dacie (reguly na `art-ai-*.html`, wygasaja 27.10.2026).

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
| `robots.txt`, `sitemap.xml` | SEO |
