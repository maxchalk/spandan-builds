'use client';

import { useState, useEffect } from 'react';
import Section from '@/components/Section';



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
            subtitle="Explore, experiment & say hello"
        >
            <div className="grid md:grid-cols-3 gap-6">
                {/* Tools Card */}
                <div
                    onClick={() => setActiveModal('tools')}
                    className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:shadow-lg transition-all hover:border-zinc-300 dark:hover:border-zinc-700 relative overflow-hidden flex flex-col justify-center items-center h-full gap-8"
                >
                    <div className="flex justify-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center text-3xl shadow-sm rotate-3 group-hover:rotate-6 transition-transform">
                            🌊
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center text-3xl shadow-sm -rotate-3 group-hover:-rotate-6 transition-transform">
                            💻
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 flex items-center justify-center text-3xl shadow-sm rotate-2 group-hover:rotate-3 transition-transform">
                            🧠
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2 font-semibold">USES</p>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                            Check out my favorite tools
                        </h3>
                    </div>
                </div>

                {/* Guestbook Card */}
                <div
                    onClick={() => setActiveModal('guestbook')}
                    className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:shadow-lg transition-all hover:border-zinc-300 dark:hover:border-zinc-700 relative overflow-hidden flex flex-col justify-center items-center h-full gap-8"
                >
                    <div className="flex justify-center gap-4 py-2">
                        {/* Guestbook Card Visual Equivalent to Tools/Music */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-md flex items-center justify-center transform group-hover:-translate-y-1 transition-transform">
                            <div className="w-full h-full border-2 border-white/20 rounded-xl flex flex-col justify-between p-3">
                                <div className="w-8 h-1 bg-white/40 rounded-full"></div>
                                <div className="space-y-1">
                                    <div className="w-full h-1 bg-white/40 rounded-full"></div>
                                    <div className="w-2/3 h-1 bg-white/40 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center relative z-10">
                        <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2 font-semibold">GUESTBOOK</p>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                            Let me know you were here
                        </h3>
                    </div>
                </div>

                {/* Last Played Card */}
                <div
                    onClick={() => setActiveModal('music')}
                    className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:shadow-lg transition-all hover:border-zinc-300 dark:hover:border-zinc-700 relative overflow-hidden flex flex-col justify-center items-center h-full gap-8"
                >
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden shadow-md">
                            <img
                                src="/images/yt-music-logo-final.png"
                                alt="Last Played"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                            </svg>
                            <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 font-semibold">LAST PLAYED</p>
                        </div>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 truncate">
                            Strawberries & Cigarettes
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Troye Sivan</p>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {activeModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className="bg-white dark:bg-zinc-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-zinc-200 dark:border-zinc-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 capitalize">
                                    {activeModal === 'tools' && 'Development Tools'}
                                    {activeModal === 'guestbook' && 'Community Wall'}
                                    {activeModal === 'music' && 'Now Playing'}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {activeModal === 'tools' && 'What helps me build.'}
                                    {activeModal === 'guestbook' && 'Leave a thought, sign the wall.'}
                                    {activeModal === 'music' && 'On my rotation.'}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)] bg-white dark:bg-zinc-900">
                            {/* TOOLS CONTENT */}
                            {activeModal === 'tools' && (
                                <div className="space-y-12">
                                    {/* 01 WORKSTATION */}
                                    <section>
                                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 ml-1">01 Workstation</h3>
                                        <div className="bg-zinc-50 rounded-3xl p-6 md:p-8 border border-zinc-100 flex flex-col md:flex-row gap-8 items-center group hover:border-zinc-200 transition-colors">
                                            {/* Laptop Visual Placeholder */}
                                            <div className="w-full md:w-1/2 aspect-[16/10] bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 rounded-2xl relative shadow-inner overflow-hidden flex items-center justify-center">
                                                <div className="absolute inset-[3px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
                                                    {/* Screen Content */}
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-zinc-900 to-black opacity-80 flex flex-col items-center justify-center p-4">
                                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                                        <span className="relative z-10 text-zinc-200 font-mono text-xs tracking-widest opacity-50">HP OMNIBOOK X</span>
                                                    </div>
                                                </div>
                                                {/* Reflection */}
                                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
                                            </div>

                                            {/* Laptop Details */}
                                            <div className="space-y-6 w-full md:w-1/2">
                                                <div>
                                                    <h4 className="text-2xl font-bold text-zinc-900 mb-2">HP Omnibook X Flip</h4>
                                                    <p className="text-zinc-500 text-sm">My daily driver for everything from heavy compilation to creative work.</p>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1.5 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-600 uppercase tracking-wide">14&quot; 2.8K OLED</span>
                                                    <span className="px-3 py-1.5 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-600 uppercase tracking-wide">Snapdragon X Elite</span>
                                                    <span className="px-3 py-1.5 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-600 uppercase tracking-wide">16GB RAM</span>
                                                    <span className="px-3 py-1.5 rounded-md bg-white border border-zinc-200 text-[11px] font-bold text-zinc-600 uppercase tracking-wide">1TB SSD</span>
                                                </div>

                                                <div className="pt-2 border-t border-zinc-200/50">
                                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                                        <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                                                        <span className="font-medium">Meteor Silver Finish</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 02 DEVELOPMENT */}
                                    <section>
                                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 ml-1">02 Development</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                { name: 'IntelliJ IDEA', icon: '☕', url: 'https://www.jetbrains.com/idea/', category: 'Core' },
                                                { name: 'VS Code', icon: '💻', url: 'https://code.visualstudio.com/', category: 'Core' },
                                                { name: 'Windows Terminal', icon: '⌨️', url: 'https://github.com/microsoft/terminal', category: 'Core' },
                                                { name: 'Docker', icon: '🐳', url: 'https://www.docker.com/', category: 'DevOps' },
                                                { name: 'Postman', icon: '🚀', url: 'https://www.postman.com/', category: 'Testing' },
                                                { name: 'DBeaver', icon: '🗄️', url: 'https://dbeaver.io/', category: 'Database' },
                                                { name: 'Windsurf', icon: '🌊', url: 'https://windsurf.ai/', category: 'AI' },
                                                { name: 'Cursor', icon: '🖱️', url: 'https://cursor.sh/', category: 'AI' },
                                                { name: 'Google Antigravity', icon: '🌌', url: '#', category: 'AI' },
                                                { name: 'Code Rabbit', icon: '🐰', url: 'https://coderabbit.ai/', category: 'AI' },
                                                { name: 'Linear', icon: '📅', url: 'https://linear.app/', category: 'Productivity' },
                                                { name: 'Notion', icon: '📝', url: 'https://www.notion.so/', category: 'Productivity' },
                                                { name: 'Arc', icon: '🌐', url: 'https://arc.net/', category: 'Browser' },
                                                { name: 'Spotify', icon: '🎵', url: 'https://open.spotify.com/', category: 'Music' },
                                                { name: 'ChatGPT', icon: '🤖', url: 'https://chat.openai.com', category: 'AIRef' },
                                                { name: 'Claude', icon: '🧠', url: 'https://claude.ai', category: 'AIRef' },
                                            ].map((tool) => (
                                                <a
                                                    key={tool.name}
                                                    href={tool.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 hover:bg-white transition-all hover:shadow-md group h-32"
                                                >
                                                    <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200 filter grayscale group-hover:grayscale-0">{tool.icon}</span>
                                                    <span className="text-xs font-semibold text-zinc-700 group-hover:text-zinc-900">{tool.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            )}

                            {/* GUESTBOOK CONTENT */}
                            {activeModal === 'guestbook' && (
                                <div className="space-y-8">
                                    <div className="columns-1 md:columns-2 gap-4 space-y-4">
                                        {sampleComments.map((comment) => (
                                            <div key={comment.id} className={`break-inside-avoid p-6 rounded-2xl border ${comment.color}`}>
                                                <p className="text-lg font-medium mb-4 leading-relaxed">&quot;{comment.message}&quot;</p>
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
                                    <div className="bg-zinc-900 text-white rounded-3xl p-8 shadow-xl">
                                        <div className="aspect-square w-full rounded-md mb-8 flex items-center justify-center shadow-lg relative overflow-hidden group bg-black">
                                            <img
                                                src="/images/apple-music-final.png"
                                                alt="Strawberries & Cigarettes Album Art"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-1 mb-6 text-center">
                                            <h3 className="text-2xl font-bold truncate">Strawberries & Cigarettes</h3>
                                            <p className="text-zinc-400 text-lg">Troye Sivan</p>
                                            <p className="text-zinc-500 text-sm uppercase tracking-wider font-medium">Blue Neighbourhood</p>
                                        </div>

                                        <div className="space-y-6">
                                            {/* Progress Bar */}
                                            <div className="w-full bg-zinc-700/50 rounded-full h-1 cursor-pointer group">
                                                <div className="bg-white w-2/3 h-full rounded-full group-hover:bg-red-500 transition-colors relative">
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs text-zinc-500 font-medium font-mono px-1">
                                                <span>2:14</span>
                                                <span>3:21</span>
                                            </div>

                                            {/* Controls */}
                                            <div className="flex items-center justify-center gap-10">
                                                <button className="text-zinc-400 hover:text-white transition-colors">
                                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                                                </button>
                                                <a
                                                    href="https://music.youtube.com/watch?v=Mw5mAozjC6M&si=GZBPdKegnymSauza"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-lg shadow-white/10"
                                                >
                                                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                </a>
                                                <button className="text-zinc-400 hover:text-white transition-colors">
                                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                                                </button>
                                            </div>

                                            {/* Extra Controls */}
                                            <div className="flex justify-between px-4 pt-2">
                                                <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                    </svg>
                                                </button>
                                                <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                                    </svg>
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
