---
title: Getting Started
description: Install nexus-router-adapter-stdout and start debugging.
sidebar:
  order: 1
---

nexus-router-adapter-stdout is a zero-dependency debug adapter for Nexus Router that prints every tool invocation to stdout.

## Installation

```bash
pip install nexus-router-adapter-stdout
```

## Basic usage

Load the adapter from your Nexus Router pipeline:

```python
from nexus_router.plugins import load_adapter

adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    prefix="[debug]",
)

result = adapter.call("my_tool", "run", {"x": 1})
# Output: [debug] 2026-02-26T12:00:00 my_tool.run {"x": 1}
```

Every call prints a line with the prefix, timestamp, tool name, method, and arguments.

## JSON output mode

For machine-readable logs:

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## When to use this adapter

- **Debugging pipelines** — see exactly what calls are being made
- **Testing router configuration** — verify tools are routed correctly
- **Call logging** — create a readable log of all tool invocations
- **Integration testing** — assert on stdout output in tests

## Next steps

- See all [configuration parameters](/nexus-router-adapter-stdout/handbook/reference/)
