import Section from '@/components/Section';

const education = [
    {
        degree: 'Master of Science in Computer Science',
        institution: 'University of Central Missouri',
    },
    {
        degree: 'Bachelor of Engineering in Information Technology',
        institution: 'GRIET, Hyderabad',
    },
];

export default function EducationSection() {
    return (
        <Section id="education" title="Education">
            <div className="grid sm:grid-cols-2 gap-6">
                {education.map((item) => (
                    <div
                        key={item.degree}
                        className="rounded-2xl border border-zinc-200 p-6 bg-white"
                    >
                        <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                            {item.degree}
                        </h3>
                        <p className="text-zinc-600">
                            {item.institution}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
