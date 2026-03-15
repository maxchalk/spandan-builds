'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const scenes = [
    { src: '/animations/scene-desk.png', alt: 'Working at home desk' },
    { src: '/animations/scene-office.png', alt: 'Working at office cubicle' },
    { src: '/animations/scene-bed.png', alt: 'Working by the bed' },
    { src: '/animations/scene-couch.png', alt: 'Working on the couch' },
];

export default function WorkAnimation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const cycle = () => {
            const next = (activeIndex + 1) % scenes.length;
            setNextIndex(next);

            // After the crossfade completes, swap active
            timeoutRef.current = setTimeout(() => {
                setActiveIndex(next);
                setNextIndex(null);
            }, 800); // match the CSS transition duration
        };

        // Increase interval to 3000ms so the slow motion is enjoyed longer
        const interval = setInterval(cycle, 3000);

        return () => {
            clearInterval(interval);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [activeIndex]);

    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            {/* Current active scene */}
            <div className="absolute inset-0 z-10 overflow-hidden">
                <Image
                    src={scenes[activeIndex].src}
                    alt={scenes[activeIndex].alt}
                    fill
                    className="object-cover animate-ken-burns"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Next scene fading in on top */}
            {nextIndex !== null && (
                <div
                    className="absolute inset-0 z-20 overflow-hidden"
                    style={{
                        animation: 'fadeIn 800ms ease-in-out forwards',
                    }}
                >
                    <Image
                        src={scenes[nextIndex].src}
                        alt={scenes[nextIndex].alt}
                        fill
                        className="object-cover animate-ken-burns"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes kenBurns {
                    0% { transform: scale(1) translate(0, 0); }
                    100% { transform: scale(1.08) translate(-1%, -1%); }
                }
                .animate-ken-burns {
                    /* The animation runs over 5s so it's always moving while the scene is active */
                    animation: kenBurns 5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
