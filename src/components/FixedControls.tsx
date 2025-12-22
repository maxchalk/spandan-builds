"use client";

import ThemeToggle from "./ThemeToggle";

export default function FixedControls() {
    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4">
            {/* 'N' Logo */}
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-lg shadow-lg">
                N
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
        </div>
    );
}
