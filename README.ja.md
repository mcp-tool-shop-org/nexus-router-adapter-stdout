<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/nexus-router-adapter-stdout/readme.jpg" width="400">
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/nexus-router-adapter-stdout/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/nexus-router-adapter-stdout/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://pypi.org/project/nexus-router-adapter-stdout/"><img src="https://img.shields.io/pypi/v/nexus-router-adapter-stdout" alt="PyPI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/mcp-tool-shop-org/nexus-router-adapter-stdout" alt="License: MIT"></a>
  <a href="https://mcp-tool-shop-org.github.io/nexus-router-adapter-stdout/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

デバッグアダプターで、ツールの呼び出しを標準出力に出力します。

用途：
- パイプラインのデバッグ
- ルーターの設定テスト
- どのような呼び出しが行われているかの理解
- ツールの実行ログ記録

## インストール

```bash
pip install nexus-router-adapter-stdout
```

## 使用方法

```python
from nexus_router.plugins import load_adapter

adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    prefix="[debug]",
)

# Every call prints to stdout
result = adapter.call("my_tool", "run", {"x": 1})
# Output: [debug] 2024-01-01T00:00:00+00:00 my_tool.run {"x": 1}
```

### JSON出力モード

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# Output: {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## 設定

| パラメータ | 型 | デフォルト値 | 説明 |
| ----------- | ------ | --------- | ------------- |
| `adapter_id` | string（文字列） | `"stdout"` | カスタムアダプターID |
| `prefix` | string（文字列） | `"[nexus]"` | 出力行のプレフィックス |
| `include_timestamp` | boolean（真偽値） | `true` | ISOタイムスタンプを含める |
| `include_args` | boolean（真偽値） | `true` | 引数辞書を含める |
| `json_output` | boolean（真偽値） | `false` | JSON形式で出力 |
| `return_echo` | boolean（真偽値） | `true` | 結果に呼び出し情報を返す |

## 機能

- `dry_run`：シミュレーションに安全
- `apply`：操作を実行可能

## 開発

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## ライセンス

MIT

---

[MCP Tool Shop](https://mcp-tool-shop.github.io/)によって作成されました。
