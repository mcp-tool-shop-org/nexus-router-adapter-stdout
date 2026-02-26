<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.md">English</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

एक डिबग एडेप्टर जो टूल कॉल्स को स्टैंडर्ड आउटपुट पर प्रिंट करता है।

उपयोगी:
- डिबगिंग पाइपलाइनों के लिए
- राउटर कॉन्फ़िगरेशन का परीक्षण करने के लिए
- यह समझने के लिए कि कौन सी कॉल्स की जा रही हैं
- टूल के उपयोग को लॉग करने के लिए

## इंस्टॉलेशन

```bash
pip install nexus-router-adapter-stdout
```

## उपयोग

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

### JSON आउटपुट मोड

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# Output: {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## कॉन्फ़िगरेशन

| पैरामीटर | प्रकार | डिफ़ॉल्ट | विवरण |
| ----------- | ------ | --------- | ------------- |
| `adapter_id` | string (स्ट्रिंग) | `"stdout"` | कस्टम एडेप्टर आईडी |
| `prefix` | string (स्ट्रिंग) | `"[nexus]"` | आउटपुट लाइनों के लिए उपसर्ग |
| `include_timestamp` | boolean (बूलियन) | `true` | आईएसओ टाइमस्टैम्प शामिल करें |
| `include_args` | boolean (बूलियन) | `true` | आर्ग्यूमेंट्स डिक्शनरी शामिल करें |
| `json_output` | boolean (बूलियन) | `false` | JSON फॉर्मेट में आउटपुट |
| `return_echo` | boolean (बूलियन) | `true` | परिणाम में कॉल जानकारी लौटाएं |

## क्षमताएं

- `dry_run` — सिमुलेशन के लिए सुरक्षित
- `apply` — ऑपरेशन निष्पादित कर सकता है

## विकास

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## लाइसेंस

MIT

---

[MCP Tool Shop](https://mcp-tool-shop.github.io/) द्वारा बनाया गया।
