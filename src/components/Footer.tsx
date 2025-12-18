export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-sm text-zinc-600 text-center">
                    © {currentYear} Spandan. Built with Next.js.
                </p>
            </div>
        </footer>
    );
}
