<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Adaptador de depuración que imprime las llamadas a herramientas en la salida estándar.

Útil para:
- Depurar flujos de trabajo
- Probar la configuración del enrutador
- Comprender qué llamadas se están realizando
- Registrar las invocaciones de herramientas

## Instalación

```bash
pip install nexus-router-adapter-stdout
```

## Uso

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

### Modo de salida JSON

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# Output: {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## Configuración

| Parámetro | Tipo | Valor predeterminado | Descripción |
| ----------- | ------ | --------- | ------------- |
| `adapter_id` | string | `"stdout"` | ID del adaptador personalizado |
| `prefix` | string | `"[nexus]"` | Prefijo para las líneas de salida |
| `include_timestamp` | boolean | `true` | Incluir marca de tiempo ISO |
| `include_args` | boolean | `true` | Incluir diccionario de argumentos |
| `json_output` | boolean | `false` | Formato de salida JSON |
| `return_echo` | boolean | `true` | Devolver información de la llamada en el resultado |

## Capacidades

- `dry_run` — Seguro para la simulación
- `apply` — Puede ejecutar operaciones

## Desarrollo

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## Licencia

MIT

---

Creado por [MCP Tool Shop](https://mcp-tool-shop.github.io/)
