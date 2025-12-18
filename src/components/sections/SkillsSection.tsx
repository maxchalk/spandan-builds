import Section from '@/components/Section';

const skillGroups = [
    {
        title: 'Backend',
        skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Kafka'],
    },
    {
        title: 'Frontend',
        skills: ['React', 'TypeScript', 'UI basics', 'State management'],
    },
    {
        title: 'Cloud / DevOps',
        skills: ['AWS', 'Docker', 'CI/CD', 'Observability basics'],
    },
    {
        title: 'Data / ML (practical)',
        skills: ['Python', 'SQL', 'Pandas', 'Basic modeling'],
    },
    {
        title: 'Also comfortable with',
        skills: ['Go (basic)', 'Kotlin (basic)'],
    },
];

export default function SkillsSection() {
    return (
        <Section
            id="skills"
            title="Skills"
            subtitle="Grouped by how I actually use them."
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="rounded-2xl border border-zinc-200 p-5 bg-white hover:shadow-sm transition-shadow"
                    >
                        <h3 className="text-base font-semibold text-zinc-900 mb-3">
                            {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
