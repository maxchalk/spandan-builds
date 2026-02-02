'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Background() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* LIGHT MODE BACKGROUND */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <div className="absolute inset-0 bg-white"></div>
                {/* Animated Gradient Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-200/50 blur-[100px] animate-blob"></div>
                <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-100/30 blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            {/* DARK MODE BACKGROUND */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="absolute inset-0 bg-zinc-950">
                    {/* Stars generated via CSS in globals.css or efficient inline SVG */}
                    <div className="stars-container absolute inset-0"></div>
                </div>

                {/* Horizon Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-indigo-950/20 via-zinc-950/10 to-transparent"></div>
            </div>
        </div>
    );
}
