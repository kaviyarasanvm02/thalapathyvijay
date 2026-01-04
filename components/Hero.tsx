'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cinema-black text-cinema-white selection:bg-cinema-gold selection:text-cinema-black">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cinema-red)_0%,_transparent_60%)] opacity-20" />

            {/* Film Grain / Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* Spotlight Effects */}
            <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[2px] h-[150vh] bg-cinema-gold/30 blur-[2px] rotate-[15deg] origin-top z-0" />
            <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[2px] h-[150vh] bg-cinema-gold/30 blur-[2px] -rotate-[15deg] origin-top z-0" />

            {/* Spotlights Cones */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-cinema-gold/10 via-transparent to-transparent blur-3xl" />

            {/* Main Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center flex flex-col items-center px-4"
            >
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-6xl md:text-[9rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-cinema-gold via-yellow-200 to-yellow-600 uppercase tracking-tighter leading-none drop-shadow-2xl"
                >
                    Thalapathy
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-xl md:text-3xl mt-6 font-light tracking-[0.3em] text-cinema-silver uppercase"
                >
                    Joseph Vijay Chandrasekhar
                </motion.h2>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8 flex items-center gap-4 text-cinema-red font-semibold text-lg md:text-xl tracking-widest"
                >
                    <span>33 Years</span>
                    <span className="w-2 h-2 rounded-full bg-cinema-gold" />
                    <span>69 Films</span>
                    <span className="w-2 h-2 rounded-full bg-cinema-gold" />
                    <span>One Legend</span>
                </motion.div>
            </motion.div>

            {/* Film Reel Borders (Decorative) */}
            <div className="absolute left-4 top-0 bottom-0 w-8 border-r border-l border-cinema-gold/20 flex flex-col justify-around py-4 opacity-50 hidden md:flex">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-full h-4 bg-cinema-gold/10 rounded-sm" />
                ))}
            </div>
            <div className="absolute right-4 top-0 bottom-0 w-8 border-r border-l border-cinema-gold/20 flex flex-col justify-around py-4 opacity-50 hidden md:flex">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-full h-4 bg-cinema-gold/10 rounded-sm" />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-cinema-gold/60 z-20"
            >
                <span className="text-[10px] uppercase tracking-[0.4em]">Explore the Journey</span>
                <motion.div
                    className="w-[1px] h-16 bg-gradient-to-b from-cinema-gold to-transparent"
                    animate={{ height: [0, 64, 0], opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    )
}
