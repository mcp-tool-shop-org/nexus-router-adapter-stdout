# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | Yes       |

## Reporting a Vulnerability

Email: **64996768+mcp-tool-shop@users.noreply.github.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Version affected
- Potential impact

### Response timeline

| Action | Target |
|--------|--------|
| Acknowledge report | 48 hours |
| Assess severity | 7 days |
| Release fix | 30 days |

## Scope

nexus-router-adapter-stdout is a **Python debug adapter** that prints tool calls to stdout.

- **Data touched:** Tool call metadata printed to stdout. nexus-router event payloads
- **Data NOT touched:** No telemetry. No analytics. No files written. No network. No credential storage
- **Network:** None — stdout only
- **Permissions:** Read: router events. Write: stdout only
- **No telemetry** is collected or sent
