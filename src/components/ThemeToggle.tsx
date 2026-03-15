"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-20 h-10 rounded-full border border-zinc-200 bg-white/50 animate-pulse" />
        );
    }

    return (
        <div className="relative flex items-center p-1 rounded-full border border-zinc-200 bg-white/50 dark:bg-zinc-900/50 dark:border-zinc-800 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            {/* Sliding Background */}
            <div
                className={`absolute top-1 left-1 h-8 w-9 rounded-full bg-zinc-100 dark:bg-zinc-800 shadow-sm transition-all duration-300 ease-spring ${theme === "dark" ? "translate-x-9" : "translate-x-0"
                    }`}
            />

            {/* Sun Button */}
            <button
                onClick={() => setTheme("light")}
                className={`relative z-10 w-9 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${theme === "light"
                        ? "text-orange-500"
                        : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    }`}
                aria-label="Switch to light mode"
            >
                <FiSun className="w-4 h-4" />
            </button>

            {/* Moon Button */}
            <button
                onClick={() => setTheme("dark")}
                className={`relative z-10 w-9 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${theme === "dark"
                        ? "text-blue-400"
                        : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    }`}
                aria-label="Switch to dark mode"
            >
                <FiMoon className="w-4 h-4" />
            </button>
        </div>
    );
}
