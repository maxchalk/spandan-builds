import Image from 'next/image';
import Section from '@/components/Section';

export default function EducationSection() {
    const education = [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'University of Central Missouri',
            address: "Lee's Summit, Missouri, US",
            logo: (
                <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-zinc-100 shadow-sm">
                    <Image
                        src="/images/ucm-logo.png"
                        alt="UCM Logo"
                        fill
                        className="object-contain p-1"
                    />
                </div>
            ),
        },
        {
            degree: 'Bachelor of Engineering in Information Technology',
            institution: 'GRIET, Hyderabad',
            address: "Hyderabad, Telangana, India",
            logo: (
                <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-zinc-100 shadow-sm">
                    <Image
                        src="/images/griet-logo.png"
                        alt="GRIET Logo"
                        fill
                        className="object-contain p-1"
                    />
                </div>
            ),
        },
    ];

    return (
        <Section id="education" title="Education">
            <div className="grid sm:grid-cols-2 gap-6">
                {education.map((item) => (
                    <div
                        key={item.degree}
                        className="rounded-2xl border border-zinc-200 p-6 bg-white hover:shadow-md transition-shadow flex items-start gap-4"
                    >
                        <div className="flex-shrink-0">
                            {item.logo}
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-zinc-900 leading-tight mb-1">
                                {item.degree}
                            </h3>
                            <p className="text-sm font-medium text-zinc-800 mb-1">
                                {item.institution}
                            </p>
                            <p className="text-xs text-zinc-500 flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {item.address}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
