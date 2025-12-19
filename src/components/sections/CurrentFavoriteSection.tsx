import Section from '@/components/Section';

export default function CurrentFavoriteSection() {
    return (
        <Section
            id="current-favorite"
            title="Current Favorite"
            subtitle="What I'm listening to right now."
        >
            <div className="max-w-md mx-auto">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                        {/* Album Art Placeholder */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                </svg>
                            </div>
                        </div>

                        {/* Song Info */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-zinc-900 mb-1 truncate">
                                Strawberries & Cigarettes
                            </h3>
                            <p className="text-sm text-zinc-600 mb-3">
                                Troye Sivan
                            </p>

                            {/* Spotify Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200">
                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                                <span className="text-xs font-medium text-green-700">
                                    On Repeat
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Optional: Add a subtle animation or music bars */}
                    <div className="mt-4 flex items-center gap-1 justify-center">
                        <div className="w-1 bg-zinc-300 rounded-full animate-pulse" style={{ height: '12px', animationDelay: '0ms' }}></div>
                        <div className="w-1 bg-zinc-300 rounded-full animate-pulse" style={{ height: '20px', animationDelay: '150ms' }}></div>
                        <div className="w-1 bg-zinc-300 rounded-full animate-pulse" style={{ height: '16px', animationDelay: '300ms' }}></div>
                        <div className="w-1 bg-zinc-300 rounded-full animate-pulse" style={{ height: '24px', animationDelay: '450ms' }}></div>
                        <div className="w-1 bg-zinc-300 rounded-full animate-pulse" style={{ height: '14px', animationDelay: '600ms' }}></div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
