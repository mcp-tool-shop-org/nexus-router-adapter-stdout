<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.md">English</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Adaptateur de débogage qui affiche les appels aux outils sur la sortie standard.

Utile pour :
- Le débogage des pipelines
- Le test de la configuration du routeur
- La compréhension des appels effectués
- L'enregistrement des invocations des outils

## Installation

```bash
pip install nexus-router-adapter-stdout
```

## Utilisation

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

### Mode de sortie JSON

```python
adapter = load_adapter(
    "nexus_router_adapter_stdout:create_adapter",
    json_output=True,
)

adapter.call("tool", "method", {"arg": "value"})
# Output: {"tool": "tool", "method": "method", "timestamp": "...", "args": {"arg": "value"}}
```

## Configuration

| Paramètre | Type | Valeur par défaut | Description |
| ----------- | ------ | --------- | ------------- |
| `adapter_id` | chaîne de caractères | `"stdout"` | Identifiant de l'adaptateur personnalisé |
| `prefix` | chaîne de caractères | `"[nexus]"` | Préfixe pour les lignes de sortie |
| `include_timestamp` | booléen | `true` | Inclure l'horodatage ISO |
| `include_args` | booléen | `true` | Inclure le dictionnaire des arguments |
| `json_output` | booléen | `false` | Sortie au format JSON |
| `return_echo` | booléen | `true` | Retourner les informations de l'appel dans le résultat |

## Capacités

- `dry_run` — Sûr pour la simulation
- `apply` — Peut exécuter des opérations

## Développement

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## Licence

MIT

---

Créé par [MCP Tool Shop](https://mcp-tool-shop.github.io/)
