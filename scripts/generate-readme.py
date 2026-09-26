from pathlib import Path

ROOT = Path(".")
README_CONTENT = """
🏠 [Home](https://github.com/ronna-probe/data-study/)

---

"""

for folder in ROOT.rglob("*"):
    if not folder.is_dir():
        continue

    # 숨김 폴더 제외 (.git, .github 등)
    if any(part.startswith(".") for part in folder.parts):
        continue

    readme = folder / "README.md"

    # README가 없을 때만 생성
    if not readme.exists():
        readme.write_text(README_CONTENT, encoding="utf-8")
        print(f"Created: {readme}")
