import Section from '@/components/Section';

const tools = [
  {
    category: 'IDEs & Editors',
    items: [
      { name: 'Windsurf', icon: '🌊' },
      { name: 'Google Antigravity', icon: '🚀' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
  {
    category: 'AI Assistants',
    items: [
      { name: 'ChatGPT', icon: '🤖' },
      { name: 'Claude', icon: '🧠' },
      { name: 'GitHub Copilot', icon: '✨' },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📦' },
      { name: 'Postman', icon: '📮' },
    ],
  },
  {
    category: 'Design & Planning',
    items: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Notion', icon: '📝' },
      { name: 'Linear', icon: '📊' },
    ],
  },
];

export default function ToolsSection() {
  return (
    <Section
      id="tools"
      title="Tools"
      subtitle="My favorite tools from planning to deployment."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">
              {group.category}
            </h3>
            <div className="space-y-2">
              {group.items.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:shadow-sm transition-all"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-sm font-medium text-zinc-900">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
