<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.md">English</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

一个调试适配器，它会将工具调用打印到标准输出。

用途：
- 调试流水线
- 测试路由器配置
- 了解正在进行的调用
- 记录工具的调用情况

## 安装

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

### JSON 输出模式

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# Output: {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## 配置

| 参数 | 类型 | 默认值 | 描述 |
| ----------- | ------ | --------- | ------------- |
| `adapter_id` | string | `"stdout"` | 自定义适配器 ID |
| `prefix` | string | `"[nexus]"` | 输出行的前缀 |
| `include_timestamp` | boolean | `true` | 包含 ISO 时间戳 |
| `include_args` | boolean | `true` | 包含参数字典 |
| `json_output` | boolean | `false` | 输出 JSON 格式 |
| `return_echo` | boolean | `true` | 在结果中返回调用信息 |

## 功能

- `dry_run` — 适用于模拟
- `apply` — 可以执行操作

## 开发

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## 许可证

MIT

---

由 [MCP Tool Shop](https://mcp-tool-shop.github.io/) 构建。
