'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const scenes = [
    { src: '/animations/scene-desk.png', alt: 'Working at home desk', direction: 'zoom-in' },
    { src: '/animations/scene-office.png', alt: 'Working at office cubicle', direction: 'pan-right' },
    { src: '/images/scene_bed_striped_polo_3d.png', alt: 'Working by the bed', direction: 'pan-left' },
    { src: '/images/scene_couch_blue_sweater_3d.png', alt: 'Working on the couch', direction: 'zoom-out' },
];

export default function WorkAnimation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Mouse tracking state for interactive 3D tilt
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cycle = () => {
            const next = (activeIndex + 1) % scenes.length;
            setNextIndex(next);

            timeoutRef.current = setTimeout(() => {
                setActiveIndex(next);
                setNextIndex(null);
            }, 1200); 
        };

        const interval = setInterval(cycle, 5000);

        return () => {
            clearInterval(interval);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [activeIndex]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-[4/3] rounded-2xl bg-black border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden group pointer-events-auto"
            style={{
                perspective: '1200px', 
            }}
        >
            {/* The 3D tilting container */}
            <div 
                className="w-full h-full relative transition-[transform] duration-700 ease-out"
                style={{
                    transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg) scale3d(1.08, 1.08, 1.08)`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* 1. Base Image Layer (Ken Burns) */}
                <div className="absolute inset-0 z-10 bg-black">
                    <Image
                        src={scenes[activeIndex].src}
                        alt={scenes[activeIndex].alt}
                        fill
                        className={`object-cover animate-${scenes[activeIndex].direction}`}
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {nextIndex !== null && (
                    <div
                        className="absolute inset-0 z-20 bg-black"
                        style={{
                            animation: 'fadeIn 1200ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                        }}
                    >
                        <Image
                            src={scenes[nextIndex].src}
                            alt={scenes[nextIndex].alt}
                            fill
                            className={`object-cover animate-${scenes[nextIndex].direction}`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                )}

                {/* 2. Coding Environment "Live Video" Simulation Overlays */}

                {/* Simulated Screen Flicker (glow pulsating on the subject's face to imply active typing and screen updates) */}
                <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay bg-blue-500/15 animate-screen-flicker"></div>

                {/* Simulated Scrolling Code Reflection (suggesting a terminal or IDE reflecting on screen/glasses) */}
                <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30 overflow-hidden flex flex-col items-center justify-center mask-radial">
                    <div className="text-[10px] md:text-xs text-cyan-400 font-mono leading-relaxed tracking-widest whitespace-pre opacity-60 animate-code-scroll" style={{ textShadow: '0 0 8px rgba(6,182,212,0.8)' }}>
                        {`function optimize_kernel(ctx, buf) {\n  const ptr = ctx.alloc(buf.length);\n  for(let i=0; i<buf.length; i++) {\n    ptr[i] = buf[i] ^ 0x42;\n    if(ptr[i] > 0xFF) await ctx.flush();\n  }\n  return ctx.compile(ptr);\n}\n\nasync function render_loop() {\n  while(true) {\n    await requestAnimationFrame();\n    update_physics();\n    draw_scene();\n  }\n}`.repeat(5)}
                    </div>
                </div>

                {/* Interactive Flashlight (follows cursor) */}
                <div 
                    className="absolute inset-0 z-40 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-overlay"
                    style={{
                        background: `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
                        transform: 'translateZ(30px)',
                    }}
                />

                {/* Dynamic Film Grain (scrolling ultra-fast to mimic actual video playback) */}
                <div 
                    className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-25 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-noise"
                    style={{ transform: 'translateZ(40px)' }}
                ></div>
                
                {/* Subtle dark vignette framing */}
                <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.7)] rounded-2xl"></div>

            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes noiseScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(10%); }
                }
                @keyframes codeScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-30%); }
                }
                @keyframes screenFlicker {
                    0%, 100% { opacity: 0.1; }
                    5%, 15% { opacity: 0.3; }
                    10% { opacity: 0.15; }
                    25% { opacity: 0.05; }
                    30%, 35% { opacity: 0.5; }
                    45% { opacity: 0.2; }
                    60% { opacity: 0.1; }
                    70%, 80% { opacity: 0.4; }
                    90% { opacity: 0.05; }
                }
                @keyframes zoomIn {
                    0% { transform: scale(1) translate(0, 0); }
                    100% { transform: scale(1.15) translate(-1%, -1%); }
                }
                @keyframes zoomOut {
                    0% { transform: scale(1.15) translate(-1%, -1%); }
                    100% { transform: scale(1) translate(0, 0); }
                }
                @keyframes panRight {
                    0% { transform: scale(1.1) translate(-2%, 0); }
                    100% { transform: scale(1.1) translate(2%, 0); }
                }
                @keyframes panLeft {
                    0% { transform: scale(1.1) translate(2%, 0); }
                    100% { transform: scale(1.1) translate(-2%, 0); }
                }
                
                .animate-noise {
                    animation: noiseScroll 0.2s infinite linear alternate;
                }
                .animate-code-scroll {
                    animation: codeScroll 25s infinite linear;
                }
                .animate-screen-flicker {
                    animation: screenFlicker 6s infinite ease-in-out;
                }
                .animate-zoom-in {
                    animation: zoomIn 7s linear forwards;
                }
                .animate-zoom-out {
                    animation: zoomOut 7s linear forwards;
                }
                .animate-pan-right {
                    animation: panRight 7s linear forwards;
                }
                .animate-pan-left {
                    animation: panLeft 7s linear forwards;
                }
                .mask-radial {
                    -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
                    mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
                }
            `}</style>
        </div>
    );
}
