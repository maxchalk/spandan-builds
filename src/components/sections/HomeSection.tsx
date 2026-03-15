import WorkAnimation from '../WorkAnimation';

export default function HomeSection() {
    return (
        <section id="home" className="scroll-mt-24 py-20 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div>
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                        Software Engineer
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
                        I build reliable full-stack systems with Java, cloud, and clean UI.
                    </h1>

                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                        This is my personal space to share what I&apos;ve built, what I&apos;m good at, and how I work.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                        >
                            View projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                        >
                            Send a message
                        </a>
                    </div>
                </div>

                {/* Right Column - Work Animation */}
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-3">
                    <WorkAnimation />
                </div>
            </div>
        </section>
    );
}

