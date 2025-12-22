

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright & Info */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            © {currentYear} Spandan. Built with Next.js, Tailwind & magic.
                        </p>
                    </div>

                    {/* Right Side: Spacer/Empty for now */}
                    <div className="flex items-center gap-6">
                    </div>
                </div>
            </div>
        </footer>
    );
}
