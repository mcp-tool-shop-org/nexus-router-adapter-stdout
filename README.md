# nexus-router-adapter-stdout

[![CI](https://github.com/mcp-tool-shop-org/nexus-router-adapter-stdout/actions/workflows/ci.yml/badge.svg)](https://github.com/mcp-tool-shop-org/nexus-router-adapter-stdout/actions/workflows/ci.yml)
[![PyPI](https://img.shields.io/pypi/v/nexus-router-adapter-stdout)](https://pypi.org/project/nexus-router-adapter-stdout/)
[![License: MIT](https://img.shields.io/github/license/mcp-tool-shop-org/nexus-router-adapter-stdout)](LICENSE)

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

## License

MIT

---

Built by [MCP Tool Shop](https://mcp-tool-shop.github.io/)
