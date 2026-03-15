'use client';

import { useState, FormEvent } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [view, setView] = useState<'options' | 'message'>('options'); // 'options' or 'message'
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const socialLinks = [
        { name: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, url: 'https://www.linkedin.com/in/venkateshspandan/' },
        { name: 'GitHub', icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />, url: 'https://github.com/maxchalk' },
        { name: 'Instagram', icon: <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />, url: 'https://www.instagram.com/spandan__kumar/' },
        { name: 'X', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />, url: 'https://x.com/spandankumar476' },
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset form after delay
        setTimeout(() => {
            setSubmitted(false);
            setView('options');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pb-2 sm:pb-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-zinc-900/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-[26rem] bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-full duration-500 border border-zinc-200 dark:border-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-800">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between px-6 pt-6 pb-2">
                    <h2 className="text-xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {view === 'message' ? 'Send a Message' : 'Get in touch'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="px-6 pb-6">
                    {view === 'options' ? (
                        <div className="space-y-4">
                            {/* Main Options Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {/* Message Option */}
                                <button
                                    onClick={() => setView('message')}
                                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50 transition-all group hover:scale-[1.02] active:scale-95"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform text-indigo-500 dark:text-indigo-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    </div>
                                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Send Message</span>
                                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-medium">Chat directly now</span>
                                </button>

                                {/* Email Option */}
                                <a
                                    href="mailto:venkateshspandan@gmail.com"
                                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50 transition-all group hover:scale-[1.02] active:scale-95"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform text-purple-500 dark:text-purple-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Email Me</span>
                                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-medium">Send an email</span>
                                </a>
                            </div>

                            {/* Footer / Socials */}
                            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-4 text-center">Connect on Socials</p>
                                <div className="flex justify-center gap-6">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-110 transition-all"
                                            title={social.name}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Message Form
                        <div className="animate-in slide-in-from-right-8 duration-300">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400 text-2xl">✓</div>
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Message Sent!</h3>
                                    <p className="text-zinc-500 text-sm">I&apos;ll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex gap-4 items-center mb-2">
                                        <button
                                            type="button"
                                            onClick={() => setView('options')}
                                            className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1"
                                        >
                                            ← Back
                                        </button>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Write your message here..."
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
