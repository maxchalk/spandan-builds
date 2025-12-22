import Section from '@/components/Section';

const projects = [
    {
        title: 'FinTech Ledger & Payments',
        tag: 'FinTech',
        description: 'Transaction flows, idempotent APIs, and ledger-style data modeling.',
    },
    {
        title: 'E-commerce Order & Inventory',
        tag: 'E-commerce',
        description: 'Order lifecycle, inventory updates, and admin-friendly UI.',
    },
    {
        title: 'Healthcare Wellness Insights',
        tag: 'Healthcare',
        description: 'Activity tracking, insights, and recommendation-ready APIs.',
    },
    {
        title: 'Data Analytics Dashboard',
        tag: 'Data',
        description: 'Python-based analytics + services that expose metrics cleanly.',
    },
    {
        title: 'Platform Tooling Service',
        tag: 'Platform',
        description: 'Cloud-friendly service patterns, CI/CD, and reliable operations basics.',
    },
];

export default function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects"
            subtitle="Five projects across the domains that show up in most companies."
        >
            <div className="grid lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                        <div className="mb-3">
                            <span className="inline-block rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 mb-3">
                                {project.tag}
                            </span>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                {project.title}
                            </h3>
                        </div>

                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                            {project.description}
                        </p>

                        <div className="flex gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                Details (soon)
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                GitHub (soon)
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
