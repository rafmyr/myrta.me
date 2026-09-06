from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import subprocess
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
errors = []
class Check(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.script = None
        self.code = ''
        self.stack = []
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if 'id' in data:
            if data['id'] in self.ids: errors.append(f'{self.path.name}: duplicate ID {data["id"]}')
            self.ids.add(data['id'])
        if tag == 'img' and 'alt' not in data: errors.append(f'{self.path.name}: missing alt')
        for attr in ('src', 'href'):
            value = data.get(attr, '')
            url = urlsplit(value)
            if not value or url.scheme or url.netloc or value.startswith('#'): continue
            target = ROOT / unquote(url.path).lstrip('/') if value.startswith('/') else self.path.parent / unquote(url.path)
            if not target.exists(): errors.append(f'{self.path.name}: missing asset or link {value}')
        if tag == 'script' and 'src' not in data:
            self.script = data.get('type', 'text/javascript')
            self.code = ''
        if tag not in ('area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'):
            self.stack.append(tag)
    def handle_data(self, value):
        if self.script: self.code += value
    def handle_endtag(self, tag):
        if tag == 'script' and self.script:
            if self.script != 'application/ld+json':
                result = subprocess.run(['node', '--check'], input=self.code, text=True, capture_output=True)
                if result.returncode: errors.append(f'{self.path.name}: invalid JS {result.stderr}')
            self.script = None
        if self.stack and self.stack[-1] == tag: self.stack.pop()
        elif tag in self.stack: errors.append(f'{self.path.name}: mismatched closing {tag}')

files = list(ROOT.glob('*.html')) + [ROOT / 'orpr/index.html']
for path in files:
    parser = Check(path)
    parser.feed(path.read_text())
for path in (ROOT / 'assets').glob('*.js'):
    result = subprocess.run(['node', '--check', str(path)], capture_output=True, text=True)
    if result.returncode: errors.append(result.stderr)
ET.parse(ROOT / 'sitemap.xml')

# spójność wersji assetów, długości <title>/description, JSON-LD, pliki og:image
import json, re
versions = set()
for path in files:
    text = path.read_text()
    versions.update(re.findall(r'assets/site\.(?:js|css)\?v=(\d+)', text))
    title = re.search(r'<title>([^<]*)</title>', text)
    if title and len(title.group(1)) > 65: errors.append(f'{path.relative_to(ROOT)}: <title> {len(title.group(1))} znaków (max 65)')
    desc = re.search(r'name="description" content="([^"]*)"', text)
    if desc and len(desc.group(1)) > 160: errors.append(f'{path.relative_to(ROOT)}: description {len(desc.group(1))} znaków (max 160)')
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S):
        try: json.loads(block)
        except ValueError as exc: errors.append(f'{path.name}: JSON-LD {exc}')
    for url in re.findall(r'(?:og:image|twitter:image)" content="https://myrta\.me/([^"]+)"', text):
        if not (ROOT / url).exists(): errors.append(f'{path.name}: brak pliku og:image {url}')
if len(versions) > 1: errors.append(f'niespójne wersje assets/site.*?v= : {sorted(versions)}')
if errors:
    print('\n'.join(errors))
    raise SystemExit(1)
print(f'PASS: {len(files)} HTML pages; unique IDs, local links/assets, image alt, JS syntax, XML sitemap, asset versions, title/description length, JSON-LD, og:image files.')
