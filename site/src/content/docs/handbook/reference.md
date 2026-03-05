---
title: Reference
description: Configuration parameters and capabilities.
sidebar:
  order: 2
---

## Configuration parameters

All parameters are optional with sensible defaults.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `adapter_id` | string | `"stdout"` | Custom adapter identifier |
| `prefix` | string | `"[nexus]"` | Prefix for each output line |
| `include_timestamp` | boolean | `true` | Include ISO 8601 timestamp |
| `include_args` | boolean | `true` | Include the args dictionary |
| `json_output` | boolean | `false` | Output as structured JSON |
| `return_echo` | boolean | `true` | Return call info in result dict |

## Capabilities

| Capability | Description |
|------------|-------------|
| `dry_run` | Safe for simulation — no side effects |
| `apply` | Can execute operations |

## Output formats

### Prefixed text (default)

```
[nexus] 2026-02-26T12:00:00+00:00 my_tool.run {"x": 1}
```

### JSON mode

```json
{"tool": "my_tool", "method": "run", "timestamp": "2026-02-26T12:00:00+00:00", "args": {"x": 1}}
```

## Development

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## Links

- [GitHub Repository](https://github.com/mcp-tool-shop-org/nexus-router-adapter-stdout)
- [PyPI Package](https://pypi.org/project/nexus-router-adapter-stdout/)
- [Nexus Router](https://github.com/mcp-tool-shop-org/nexus-router)
