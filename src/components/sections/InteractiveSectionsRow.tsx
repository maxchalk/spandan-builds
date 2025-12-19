'use client';

import { useState, useEffect } from 'react';
import Section from '@/components/Section';

const tools = [
    { name: 'Windsurf', icon: '🌊' },
    { name: 'Google Antigravity', icon: '🚀' },
    { name: 'VS Code', icon: '💻' },
    { name: 'ChatGPT', icon: '🤖' },
    { name: 'Claude', icon: '🧠' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '📝' },
    { name: 'Linear', icon: '📊' },
];

const sampleComments = [
    {
        id: 1,
        message: 'Awesome portfolio! Love the clean design.',
        author: 'Alex Chen',
        date: 'Dec 15',
        color: 'bg-indigo-50 border-indigo-100 text-indigo-900',
    },
    {
        id: 2,
        message: 'By far one of the most impressive portfolios I\'ve ever seen!',
        author: 'Sarah Johnson',
        date: 'Dec 17',
        color: 'bg-purple-50 border-purple-100 text-purple-900',
    },
    {
        id: 3,
        message: 'This is sooooo cool!',
        author: 'Mike Davis',
        date: 'Dec 16',
        color: 'bg-teal-50 border-teal-100 text-teal-900',
    },
    {
        id: 4,
        message: 'Simple, effective, and beautiful.',
        author: 'Emily Zhang',
        date: 'Dec 18',
        color: 'bg-rose-50 border-rose-100 text-rose-900',
    },
    {
        id: 5,
        message: 'The interactive elements are a nice touch.',
        author: 'David Wilson',
        date: 'Dec 19',
        color: 'bg-amber-50 border-amber-100 text-amber-900',
    },
];

export default function InteractiveSectionsRow() {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeModal]);

    return (
        <Section
            id="explore"
            title="My Site"
            subtitle="Explore, experiment && say hello"
        >
            <div className="grid md:grid-cols-3 gap-6">
                {/* Tools Card */}
                <div
                    onClick={() => setActiveModal('tools')}
                    className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all hover:border-zinc-300 relative overflow-hidden"
                >
                    <div className="mb-8 flex justify-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-3xl shadow-sm rotate-3 group-hover:rotate-6 transition-transform">
                            🌊
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-3xl shadow-sm -rotate-3 group-hover:-rotate-6 transition-transform">
                            💻
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-3xl shadow-sm rotate-2 group-hover:rotate-3 transition-transform">
                            🧠
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-2 font-semibold">USES</p>
                        <h3 className="text-lg font-medium text-zinc-900">
                            Check out my favorite tools
                        </h3>
                    </div>
                </div>

                {/* Guestbook Card */}
                <div
                    onClick={() => setActiveModal('guestbook')}
                    className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all hover:border-zinc-300 relative overflow-hidden"
                >
                    <div className="mb-8 relative flex justify-center items-center h-20">
                        {/* Stacked Cards Effect */}
                        <div className="absolute w-32 h-20 bg-zinc-100 rounded-lg border border-zinc-200 transform -rotate-12 translate-y-1"></div>
                        <div className="absolute w-32 h-20 bg-zinc-50 rounded-lg border border-zinc-200 transform rotate-12 translate-y-1"></div>

                        {/* Main Preview Card */}
                        <div className="relative w-40 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-md transform group-hover:-translate-y-1 transition-transform flex items-center justify-center p-3">
                            <div className="w-full h-full border-2 border-white/20 rounded-lg flex flex-col justify-between p-2">
                                <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                                <div className="space-y-1">
                                    <div className="w-full h-1 bg-white/30 rounded-full"></div>
                                    <div className="w-2/3 h-1 bg-white/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center relative z-10">
                        <p className="text-xs uppercase tracking-wide text-zinc-500 mb-2 font-semibold">GUESTBOOK</p>
                        <h3 className="text-lg font-medium text-zinc-900">
                            Let me know you were here
                        </h3>
                    </div>
                </div>

                {/* Last Played Card */}
                <div
                    onClick={() => setActiveModal('music')}
                    className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all hover:border-zinc-300 relative overflow-hidden"
                >
                    <div className="flex justify-center mb-8">
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                            <p className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">LAST PLAYED</p>
                        </div>
                        <h3 className="text-lg font-medium text-zinc-900 truncate">
                            Strawberries & Cigarettes
                        </h3>
                        <p className="text-sm text-zinc-500">Troye Sivan</p>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {activeModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900 capitalize">
                                    {activeModal === 'tools' && 'Development Tools'}
                                    {activeModal === 'guestbook' && 'Community Wall'}
                                    {activeModal === 'music' && 'Now Playing'}
                                </h2>
                                <p className="text-sm text-zinc-500">
                                    {activeModal === 'tools' && 'What helps me build.'}
                                    {activeModal === 'guestbook' && 'Leave a thought, sign the wall.'}
                                    {activeModal === 'music' && 'On my rotation.'}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
                            {/* TOOLS CONTENT */}
                            {activeModal === 'tools' && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {tools.map((tool) => (
                                        <div key={tool.name} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 hover:bg-white transition-all hover:shadow-sm group">
                                            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">{tool.icon}</span>
                                            <span className="text-sm font-medium text-zinc-900">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* GUESTBOOK CONTENT */}
                            {activeModal === 'guestbook' && (
                                <div className="space-y-8">
                                    <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                        {sampleComments.map((comment) => (
                                            <div key={comment.id} className={`break-inside-avoid p-6 rounded-2xl border ${comment.color}`}>
                                                <p className="text-lg font-medium mb-4 leading-relaxed">"{comment.message}"</p>
                                                <div className="flex justify-between items-center text-sm opacity-80">
                                                    <span className="font-semibold">{comment.author}</span>
                                                    <span>{comment.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="break-inside-avoid p-6 rounded-2xl border border-dashed border-zinc-300 flex flex-col items-center justify-center text-center text-zinc-500 h-48 hover:bg-zinc-50 hover:border-zinc-400 transition-colors cursor-pointer">
                                            <span className="text-2xl mb-2">✍️</span>
                                            <p className="font-medium">Write your own message</p>
                                            <p className="text-xs">Join the board</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* MUSIC CONTENT */}
                            {activeModal === 'music' && (
                                <div className="max-w-md mx-auto">
                                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-3xl p-8 shadow-xl">
                                        <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 mb-8 flex items-center justify-center shadow-lg">
                                            <svg className="w-24 h-24 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                            </svg>
                                        </div>
                                        <div className="space-y-1 mb-8">
                                            <h3 className="text-2xl font-bold truncate">Strawberries & Cigarettes</h3>
                                            <p className="text-zinc-400 text-lg">Troye Sivan</p>
                                            <p className="text-zinc-500 text-sm uppercase tracking-wider font-medium">Blue Neighbourhood</p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Progress Bar */}
                                            <div className="w-full bg-zinc-700/50 rounded-full h-1.5 overflow-hidden">
                                                <div className="bg-white w-2/3 h-full rounded-full"></div>
                                            </div>
                                            <div className="flex justify-between text-xs text-zinc-500 font-medium font-mono">
                                                <span>2:14</span>
                                                <span>3:21</span>
                                            </div>

                                            {/* Controls */}
                                            <div className="flex items-center justify-center gap-8 pt-4">
                                                <button className="text-zinc-400 hover:text-white transition-colors">
                                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                                                </button>
                                                <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                                                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                </button>
                                                <button className="text-zinc-400 hover:text-white transition-colors">
                                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center text-sm text-zinc-500">
                                        <p>Played often in 2024</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
