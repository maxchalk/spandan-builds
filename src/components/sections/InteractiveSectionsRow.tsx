'use client';

import { useState } from 'react';
import Section from '@/components/Section';

const tools = [
    { name: 'Windsurf', icon: '🌊' },
    { name: 'Google Antigravity', icon: '🚀' },
    { name: 'VS Code', icon: '💻' },
    { name: 'ChatGPT', icon: '🤖' },
    { name: 'Claude', icon: '🧠' },
    { name: 'Docker', icon: '🐳' },
];

const sampleComments = [
    {
        id: 1,
        message: 'Awesome portfolio! Love the clean design.',
        author: 'Alex Chen',
        date: 'Dec 15',
    },
    {
        id: 2,
        message: 'By far one of the most impressive portfolios I\'ve ever seen!',
        author: 'Sarah Johnson',
        date: 'Dec 17',
    },
    {
        id: 3,
        message: 'This is sooooo cool!',
        author: 'Mike Davis',
        date: 'Dec 16',
    },
];

export default function InteractiveSectionsRow() {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    return (
        <Section
            id="explore"
            title="My Site"
            subtitle="Explore, experiment && say hello"
        >
            <div className="grid md:grid-cols-3 gap-6">
                {/* Tools Card */}
                <div
                    onClick={() => setActiveCard(activeCard === 'tools' ? null : 'tools')}
                    className="group cursor-pointer"
                >
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all h-full">
                        {/* Card Preview */}
                        <div className="mb-4">
                            <p className="text-xs uppercase tracking-wide text-zinc-500 mb-3">USES</p>
                            <div className="flex gap-3 mb-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-2xl">
                                    🌊
                                </div>
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-2xl">
                                    💻
                                </div>
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-2xl">
                                    🤖
                                </div>
                            </div>
                            <h3 className="text-base font-medium text-zinc-900">
                                Check out my favorite tools
                            </h3>
                        </div>

                        {/* Expanded Content */}
                        {activeCard === 'tools' && (
                            <div className="mt-4 pt-4 border-t border-zinc-200 space-y-2">
                                {tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50"
                                    >
                                        <span className="text-xl">{tool.icon}</span>
                                        <span className="text-sm text-zinc-700">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Guestbook Card */}
                <div
                    onClick={() => setActiveCard(activeCard === 'guestbook' ? null : 'guestbook')}
                    className="group cursor-pointer"
                >
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all h-full">
                        {/* Card Preview */}
                        <div className="mb-4">
                            <p className="text-xs uppercase tracking-wide text-zinc-500 mb-3">GUESTBOOK</p>
                            <div className="mb-4 relative">
                                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center transform -rotate-2">
                                    <div className="w-11/12 h-24 bg-white/90 rounded-lg shadow-sm transform rotate-1 flex items-center justify-center">
                                        <div className="text-center px-4">
                                            <p className="text-xs text-zinc-600 italic">"Awesome portfolio!"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-base font-medium text-zinc-900">
                                Let me know you were here
                            </h3>
                        </div>

                        {/* Expanded Content */}
                        {activeCard === 'guestbook' && (
                            <div className="mt-4 pt-4 border-t border-zinc-200 space-y-3">
                                {sampleComments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="p-3 rounded-lg bg-zinc-50 border border-zinc-100"
                                    >
                                        <p className="text-xs text-zinc-700 mb-2">"{comment.message}"</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium text-zinc-600">{comment.author}</span>
                                            <span className="text-xs text-zinc-400">{comment.date}</span>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full px-4 py-2 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                                    Write a message
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Last Played Card */}
                <div
                    onClick={() => setActiveCard(activeCard === 'music' ? null : 'music')}
                    className="group cursor-pointer"
                >
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all h-full">
                        {/* Card Preview */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                                <p className="text-xs uppercase tracking-wide text-zinc-500">Last Played</p>
                            </div>

                            <div className="mb-4">
                                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center mb-3">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium text-zinc-900 mb-1 truncate">
                                    Strawberries & Cigarettes
                                </p>
                                <p className="text-xs text-zinc-600">by Troye Sivan</p>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {activeCard === 'music' && (
                            <div className="mt-4 pt-4 border-t border-zinc-200">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-zinc-600">Album</span>
                                        <span className="text-zinc-900 font-medium">Blue Neighbourhood</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-zinc-600">Released</span>
                                        <span className="text-zinc-900 font-medium">2015</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                        </svg>
                                        <span className="text-xs font-medium text-green-700">On Repeat</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
