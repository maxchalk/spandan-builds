"use client";

import ThemeToggle from "./ThemeToggle";

export default function FixedControls() {
    return (
        <div className="fixed bottom-4 right-2 z-50 flex items-center gap-2 scale-90 origin-bottom-right">
            {/* Theme Toggle */}
            <ThemeToggle />
        </div>
    );
}
