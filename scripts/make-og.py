#!/usr/bin/env python3
"""Generuje obrazy Open Graph (1200x630) dla artykułów i strony głównej.

Użycie:  python3 scripts/make-og.py [--fonts DIR]
Fonty:   Inter-400/500/600/700.ttf w DIR (domyślnie assets-source/fonts, potem scripts/fonts).
Wyjście: og/<slug>.png dla każdego art-*.html (tytuł i etykieta serii czytane z HTML) oraz og-image.png.
Idempotentny: ten sam wsad daje ten sam plik.
"""
import re, sys, glob, os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONT_DIRS = [ROOT / 'assets-source/fonts', ROOT / 'scripts/fonts']
if '--fonts' in sys.argv: FONT_DIRS.insert(0, Path(sys.argv[sys.argv.index('--fonts') + 1]))
def font(weight, size):
    for d in FONT_DIRS:
        p = d / f'Inter-{weight}.ttf'
        if p.exists(): return ImageFont.truetype(str(p), size)
    raise SystemExit(f'brak fontu Inter-{weight}.ttf w {FONT_DIRS}')

W, H = 1200, 630
INK, PAPER, MUTED, LINE = (29, 29, 31), (255, 255, 255), (152, 152, 158), (70, 70, 74)
PAD = 72

def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if draw.textlength(t, font=fnt) <= max_w: cur = t
        else: lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines

def fit_title(draw, text, max_w, max_h):
    for size in range(64, 35, -2):
        fnt = font('700', size)
        lines = wrap(draw, text, fnt, max_w)
        lh = int(size * 1.15)
        if len(lines) * lh <= max_h and len(lines) <= 4: return fnt, lines, lh
    return fnt, lines, lh

def portrait(size):
    im = Image.open(ROOT / 'profile.jpg').convert('L').convert('RGB')
    w, h = im.size; s = min(w, h)
    im = im.crop(((w - s) // 2, int((h - s) * 0.25), (w - s) // 2 + s, int((h - s) * 0.25) + s)).resize((size, size), Image.LANCZOS)
    mask = Image.new('L', (size * 4, size * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size * 4 - 1, size * 4 - 1), fill=255)
    return im, mask.resize((size, size), Image.LANCZOS)

def article_card(label, title, out):
    im = Image.new('RGB', (W, H), INK); d = ImageDraw.Draw(im)
    # etykieta serii
    lab = font('500', 20)
    d.text((PAD, PAD), label.upper(), font=lab, fill=MUTED, spacing=4)
    # tytuł
    fnt, lines, lh = fit_title(d, title, W - 2 * PAD, 330)
    y = int(136 + max(0, (356 - len(lines) * lh) / 2))
    for ln in lines:
        d.text((PAD - 3, y), ln, font=fnt, fill=PAPER); y += lh
    # dół: linia, portret, nazwisko, domena
    d.line((PAD, H - 118, W - PAD, H - 118), fill=LINE, width=1)
    p, m = portrait(56)
    im.paste(p, (PAD, H - 94), m)
    d.text((PAD + 72, H - 92), 'Rafał Myrta', font=font('600', 24), fill=PAPER)
    d.text((PAD + 72, H - 60), 'myrta.me', font=font('400', 20), fill=MUTED)
    im.convert('P', palette=Image.ADAPTIVE, colors=128).save(out, optimize=True)

def home_card(out):
    im = Image.new('RGB', (W, H), INK); d = ImageDraw.Draw(im)
    ph = Image.open(ROOT / 'profile.jpg').convert('L').convert('RGB')
    w, h = ph.size; tw = 480; s = h / H
    ph = ph.resize((int(w / s), H), Image.LANCZOS)
    x0 = max(0, (ph.size[0] - tw) // 2)
    im.paste(ph.crop((x0, 0, x0 + tw, H)), (0, 0))
    d.text((566, 226), 'Rafał Myrta', font=font('700', 72), fill=PAPER)
    d.text((566, 330), 'Strategia · Procesy · Transformacja AI', font=font('400', 30), fill=(190, 190, 195))
    d.text((566, 386), 'Autor ORPR, otwartego standardu procesów dla retailu', font=font('400', 22), fill=MUTED)
    dom = font('500', 22); d.text((W - PAD - d.textlength('myrta.me', font=dom), H - 64), 'myrta.me', font=dom, fill=MUTED)
    im.convert('P', palette=Image.ADAPTIVE, colors=128).save(out, optimize=True)

def main():
    (ROOT / 'og').mkdir(exist_ok=True)
    for p in sorted(ROOT.glob('art-*.html')):
        s = p.read_text(encoding='utf-8')
        title = re.search(r'<h1>([^<]+)</h1>', s).group(1)
        title = re.sub(r'\s+', ' ', title).replace('&nbsp;', ' ').replace('&amp;', '&')
        tag = re.search(r'<div class="seria-tag">([^<]+)</div>', s)
        if tag: label = re.sub(r'\s*·\s*\d+/\d+\s*$', '', tag.group(1)).strip()
        else: label = 'Artykuł'
        article_card(label, title, ROOT / 'og' / (p.stem + '.png'))
        print('og/' + p.stem + '.png', '|', label, '|', title)
    home_card(ROOT / 'og-image.png')
    print('og-image.png')

if __name__ == '__main__':
    main()
