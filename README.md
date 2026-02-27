<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Debug adapter that prints tool calls to stdout.

Useful for:
- Debugging pipelines
- Testing router configuration
- Understanding what calls are being made
- Logging tool invocations

## Installation

```bash
pip install nexus-router-adapter-stdout
```

## Usage

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

### JSON output mode

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# Output: {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `adapter_id` | string | `"stdout"` | Custom adapter ID |
| `prefix` | string | `"[nexus]"` | Prefix for output lines |
| `include_timestamp` | boolean | `true` | Include ISO timestamp |
| `include_args` | boolean | `true` | Include args dict |
| `json_output` | boolean | `false` | Output JSON format |
| `return_echo` | boolean | `true` | Return call info in result |

## Capabilities

- `dry_run` — Safe for simulation
- `apply` — Can execute operations

## Development

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## Security & Data Scope

| Aspect | Detail |
|--------|--------|
| **Data touched** | Tool call metadata printed to stdout |
| **Data NOT touched** | No telemetry. No analytics. No files written. No network. No credential storage |
| **Permissions** | Read: router events. Write: stdout only |
| **Network** | None — stdout only |
| **Telemetry** | None collected or sent |

See [SECURITY.md](SECURITY.md) for vulnerability reporting.

## Scorecard

| Category | Score |
|----------|-------|
| A. Security | 10 |
| B. Error Handling | 10 |
| C. Operator Docs | 10 |
| D. Shipping Hygiene | 10 |
| E. Identity (soft) | 10 |
| **Overall** | **50/50** |

> Full audit: [SHIP_GATE.md](SHIP_GATE.md) · [SCORECARD.md](SCORECARD.md)

## License

MIT

---

Built by [MCP Tool Shop](https://mcp-tool-shop.github.io/)
