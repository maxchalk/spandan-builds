'use client';

import { useState } from 'react';
import Section from '@/components/Section';

const sampleComments = [
    {
        id: 1,
        message: 'Awesome portfolio! Love the clean design.',
        author: 'Alex Chen',
        date: 'Dec 15',
        color: 'bg-purple-100 border-purple-200',
    },
    {
        id: 2,
        message: 'By far one of the most impressive portfolios I\'ve ever seen! The attention to detail is incredible.',
        author: 'Sarah Johnson',
        date: 'Dec 17',
        color: 'bg-blue-100 border-blue-200',
    },
    {
        id: 3,
        message: 'This is sooooo cool!',
        author: 'Mike Davis',
        date: 'Dec 16',
        color: 'bg-teal-100 border-teal-200',
    },
    {
        id: 4,
        message: 'Inspiring portfolio, best seen till now. Keep up the great work!',
        author: 'Emma Wilson',
        date: 'Dec 18',
        color: 'bg-indigo-100 border-indigo-200',
    },
    {
        id: 5,
        message: 'This has to be the coolest website I\'ve ever seen. The interactive elements are amazing!',
        author: 'James Brown',
        date: 'Dec 14',
        color: 'bg-violet-100 border-violet-200',
    },
];

export default function CommunityWallSection() {
    const [showForm, setShowForm] = useState(false);

    return (
        <Section
            id="community"
            title="Community Wall"
            subtitle="Leave your mark and join the conversation."
        >
            <div className="mb-8">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Write a message
                </button>

                {showForm && (
                    <div className="mt-6 p-6 rounded-2xl border border-zinc-200 bg-zinc-50">
                        <p className="text-sm text-zinc-600 mb-4">
                            Sign in to pin your message to this board forever.
                        </p>
                        <p className="text-xs text-zinc-500">
                            (Feature coming soon - backend integration required)
                        </p>
                    </div>
                )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleComments.map((comment) => (
                    <div
                        key={comment.id}
                        className={`p-5 rounded-2xl border ${comment.color} hover:shadow-md transition-shadow`}
                    >
                        <p className="text-zinc-900 font-medium mb-4 leading-relaxed">
                            "{comment.message}"
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-semibold">
                                    {comment.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-sm font-medium text-zinc-700">
                                    {comment.author}
                                </span>
                            </div>
                            <span className="text-xs text-zinc-500">{comment.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
