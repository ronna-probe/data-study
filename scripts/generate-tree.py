from pathlib import Path


# Repository root
ROOT = Path(".")

# Generated repository tree
OUTPUT = ROOT / "docs" / "repo_tree.md"

# Git 내부 관리 디렉터리는 트리에서 제외
EXCLUDED_DIRS = {
    ".git",
}

# 현재는 특별히 제외할 파일 없음
EXCLUDED_FILES = {
}


def build_tree(path: Path, prefix: str = "") -> list[str]:
    """현재 경로를 재귀적으로 탐색하여 tree 형태의 문자열 목록을 생성한다."""

    # 디렉터리/파일을 이름순으로 정렬하되,
    # 디렉터리가 먼저 나오도록 정렬한다.
    entries = [
        entry
        for entry in path.iterdir()
        if entry.name not in EXCLUDED_DIRS
        and entry.name not in EXCLUDED_FILES
    ]

    entries.sort(key=lambda p: (p.is_file(), p.name.lower()))

    lines = []

    for index, entry in enumerate(entries):
        is_last = index == len(entries) - 1

        # tree 명령어와 동일한 형태의 연결선을 사용한다.
        connector = "└── " if is_last else "├── "

        if entry.is_dir():
            lines.append(f"{prefix}{connector}{entry.name}/")

            # 하위 디렉터리의 들여쓰기를 결정한다.
            next_prefix = prefix + ("    " if is_last else "│   ")
            lines.extend(build_tree(entry, next_prefix))

        else:
            lines.append(f"{prefix}{connector}{entry.name}")

    return lines


def generate_markdown() -> str:
    """Repository tree를 Markdown 문서 형태로 변환한다."""

    tree = build_tree(ROOT)

    return """# Repository Tree

```text
.
""" + "\n".join(tree) + """
```
"""


# docs 디렉터리가 없으면 자동으로 생성한다.
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

# 기존 repo_tree.md가 있으면 현재 상태로 덮어쓴다.
OUTPUT.write_text(generate_markdown(), encoding="utf-8")

print(f"Generated: {OUTPUT}")
