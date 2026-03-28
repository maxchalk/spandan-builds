import Section from '@/components/Section';

const projects = [
    {
        title: 'DocMind',
        tag: 'AI · Enterprise',
        description:
            'Self-hosted AI document intelligence platform. Upload company docs, ask questions in plain English, and get answers with exact source citations, page numbers, and role-based access control built in.',
        skills: ['Spring Boot', 'React', 'pgvector', 'RAG', 'Groq API'],
        github: 'https://github.com/maxchalk/docmind',
    },
    {
        title: 'NexaFlow',
        tag: 'Microservices · Enterprise',
        description:
            'Enterprise-grade order management platform on microservices. Event-driven with Kafka, circuit-breaker fault tolerance, distributed tracing, and live Grafana dashboards built to mirror production scale.',
        skills: ['Spring Boot', 'Apache Kafka', 'React', 'PostgreSQL', 'Grafana'],
        github: 'https://github.com/maxchalk/NexaFlow',
    },
];

export default function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects"
            subtitle="Real-world systems built end-to-end, from data layer to UI."
        >
            <div className="grid lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                        <div className="mb-3">
                            <span className="inline-block rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                                {project.tag}
                            </span>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                {project.title}
                            </h3>
                        </div>

                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                >
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
