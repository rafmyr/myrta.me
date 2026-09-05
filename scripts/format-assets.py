from pathlib import Path
root = Path(__file__).resolve().parent.parent
for path in (root / 'assets').iterdir():
    if path.suffix in ('.css', '.js'):
        text = '\n'.join(line.rstrip() for line in path.read_text().splitlines()).strip() + '\n'
        path.write_text(text)
