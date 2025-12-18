export default function HomeSection() {
    return (
        <section id="home" className="scroll-mt-24 py-20 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div>
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-zinc-700 bg-zinc-100 rounded-full">
                        Software Engineer
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4 leading-tight">
                        I build reliable full-stack systems with Java, cloud, and clean UI.
                    </h1>

                    <p className="text-lg text-zinc-600 mb-8">
                        This is my personal space to share what I've built, what I'm good at, and how I work.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                        >
                            View projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 text-sm font-medium text-zinc-900 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                            Send a message
                        </a>
                    </div>
                </div>

                {/* Right Column - Animation Placeholder */}
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                    <div className="aspect-[4/3] bg-white rounded-lg border border-zinc-200 flex items-center justify-center">
                        <p className="text-sm text-zinc-500 text-center px-4">
                            Animation placeholder<br />
                            (desk → bed → couch scenes)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
