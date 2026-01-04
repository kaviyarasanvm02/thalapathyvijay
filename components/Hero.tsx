'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cinema-black text-cinema-white selection:bg-cinema-gold selection:text-cinema-black">
            {/* Background Image Layer */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-90 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-cinema-black/30 via-transparent to-transparent z-10" />
                <Image
                    src="/hero2.jpg"
                    alt="Thalapathy Vijay"
                    fill
                    className="object-cover object-top"
                    priority
                    unoptimized
                />
            </motion.div>

            {/* Cinematic Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cinema-gold)_0%,_transparent_70%)] opacity-[0.03] z-[1]" />
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-[20]" />

            {/* Animated Spotlights */}
            <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[2px] h-[150vh] bg-cinema-gold/30 blur-[2px] rotate-[15deg] origin-top z-[5] animate-pulse" />
            <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[2px] h-[150vh] bg-cinema-gold/30 blur-[2px] -rotate-[15deg] origin-top z-[5] animate-pulse delay-700" />

            {/* Main Content */}
            <motion.div
                style={{ y: titleY, opacity: textOpacity }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 border border-cinema-gold/30 rounded-full bg-cinema-black/40 backdrop-blur-sm text-cinema-gold text-xs md:text-sm tracking-[0.3em] font-medium mb-6">
                        THE GREATEST OF ALL TIME
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-[#e2e2e2] to-[#999] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-4"
                >
                    THALAPATHY <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-cinema-gold via-[#FCD34D] to-[#B45309]">
                        VIJAY
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex items-center gap-4 mt-8"
                >
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-cinema-gold/50 to-transparent" />
                    <span className="text-cinema-silver/60 text-sm tracking-[0.2em] font-light">
                        EST. 1992
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-cinema-gold/50 to-transparent" />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-cinema-gold/60 z-20 mix-blend-screen"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-60">Scroll</span>
                <motion.div
                    className="w-[1px] h-16 bg-gradient-to-b from-cinema-gold to-transparent"
                    animate={{ height: [0, 64, 0], opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    )
}
