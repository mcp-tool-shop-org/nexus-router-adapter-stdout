import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'nexus-router-adapter-stdout',
  description: 'Debug adapter that prints tool calls to stdout. Inspect every call your Nexus Router pipeline makes — with timestamps, args, and optional JSON output.',
  logoBadge: 'N>',
  brandName: 'nexus-router-adapter-stdout',
  repoUrl: 'https://github.com/mcp-tool-shop-org/nexus-router-adapter-stdout',
  footerText: 'MIT Licensed — built by <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">mcp-tool-shop-org</a>',

  hero: {
    badge: 'Debug adapter',
    headline: 'See every tool call,',
    headlineAccent: 'right in your terminal.',
    description: 'A zero-dependency debug adapter for Nexus Router that prints every tool invocation to stdout. Perfect for pipeline debugging, integration testing, and call logging.',
    primaryCta: { href: '#usage', label: 'Get started' },
    secondaryCta: { href: '#features', label: 'Learn more' },
    previews: [
      { label: 'Install', code: 'pip install nexus-router-adapter-stdout' },
      { label: 'Load', code: 'adapter = load_adapter(\n  "nexus_router_adapter_stdout:create_adapter"\n)' },
      { label: 'Output', code: '[nexus] 2026-02-26T12:00:00 my_tool.run {"x": 1}' },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'features',
      title: 'Features',
      subtitle: 'Everything you need to debug Nexus Router pipelines.',
      features: [
        { title: 'Prefixed output', desc: 'Tag each line with a custom prefix to distinguish adapters in multi-adapter setups.' },
        { title: 'JSON mode', desc: 'Switch to structured JSON output for machine-readable logs and downstream processing.' },
        { title: 'Timestamps', desc: 'Every call is timestamped with ISO 8601 so you can trace execution order at a glance.' },
      ],
    },
    {
      kind: 'code-cards',
      id: 'usage',
      title: 'Usage',
      cards: [
        {
          title: 'Basic',
          code: 'from nexus_router.plugins import load_adapter\n\nadapter = load_adapter(\n    "nexus_router_adapter_stdout:create_adapter",\n    prefix="[debug]",\n)\n\nresult = adapter.call("my_tool", "run", {"x": 1})\n# [debug] 2026-02-26T12:00:00 my_tool.run {"x": 1}',
        },
        {
          title: 'JSON output',
          code: 'adapter = load_adapter(\n    "nexus_router_adapter_stdout:create_adapter",\n    json_output=True,\n)\n\nadapter.call("tool", "method", {"arg": "value"})\n# {"tool":"tool","method":"method",\n#  "timestamp":"...","args":{"arg":"value"}}',
        },
      ],
    },
    {
      kind: 'data-table',
      id: 'config',
      title: 'Configuration',
      subtitle: 'All parameters are optional and have sensible defaults.',
      columns: ['Parameter', 'Type', 'Default', 'Description'],
      rows: [
        ['adapter_id', 'string', '"stdout"', 'Custom adapter identifier'],
        ['prefix', 'string', '"[nexus]"', 'Prefix for each output line'],
        ['include_timestamp', 'bool', 'True', 'Include ISO 8601 timestamp'],
        ['include_args', 'bool', 'True', 'Include the args dictionary'],
        ['json_output', 'bool', 'False', 'Output as structured JSON'],
        ['return_echo', 'bool', 'True', 'Return call info in result dict'],
      ],
    },
  ],
};
