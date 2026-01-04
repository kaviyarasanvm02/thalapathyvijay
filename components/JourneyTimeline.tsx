'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const journeyMilestones = [
    { year: '1984', label: 'BORN', desc: 'The Legend Arrives', image: '/born.png' },
    { year: '1992', label: 'DEBUT', desc: 'Naalaiya Theerpu', image: '/nalaiyatheerppu.png' },
    { year: '1996', label: 'BREAKTHROUGH', desc: 'Poove Unakkaga', image: '/pooveunagaka.png' },
    { year: '2000', label: 'STARDOM', desc: 'Kushi & Friends', image: '/kushi.jpg' },
    { year: '2004', label: 'MASS ICON', desc: 'Ghilli Industry Hit', image: '/ghilli.jpg' },
    { year: '2012', label: 'THALAPATHY', desc: 'Thuppakki Era', image: '/thuppakki.jpg' },
    { year: '2017', label: 'PHENOMENON', desc: 'Mersal & Sarkar', image: '/mersal.jpg' },
    { year: '2025', label: 'LEGACY', desc: 'The Final Chapter', image: '/jananayagan.jpg' },
]

export default function JourneyTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section ref={containerRef} className="py-32 bg-cinema-black text-cinema-white overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            {/* Central Line Container */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-cinema-gold/20 to-transparent">
                {/* Animated Progress Line */}
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cinema-gold via-yellow-500 to-cinema-gold shadow-[0_0_15px_var(--color-cinema-gold)]"
                >
                    {/* GLowing Head */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,215,0,0.8)]" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold to-yellow-600 mb-4"
                    >
                        The Journey
                    </motion.h2>
                    <div className="w-24 h-1 bg-cinema-gold mx-auto rounded-full shadow-[0_0_10px_var(--color-cinema-gold)]" />
                </div>

                <div className="relative flex flex-col gap-24 md:gap-32">
                    {journeyMilestones.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TimelineItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cinema-gold rounded-full shadow-[0_0_15px_var(--color-cinema-gold)] z-20 hidden md:block">
                <div className="absolute inset-0 bg-cinema-gold blur-sm animate-pulse" />
            </div>

            {/* Connector Line to Right (Text or Image) */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-y-1/2 h-[2px] bg-cinema-gold w-12 md:w-24 -z-10 hidden md:block shadow-[0_0_10px_var(--color-cinema-gold)] origin-left"
            />

            {/* Connector Line to Left (Text or Image) */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute top-1/2 right-1/2 -translate-y-1/2 h-[2px] bg-cinema-gold w-12 md:w-24 -z-10 hidden md:block shadow-[0_0_10px_var(--color-cinema-gold)] origin-right"
            />

            {/* Content Side (Text) */}
            <div className={`flex-1 text-center ${isEven ? 'md:text-right' : 'md:text-center'}`}>
                <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-black text-cinema-gold drop-shadow-lg">
                        {item.year}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-cinema-white">
                        {item.label}
                    </h4>
                    <p className="text-cinema-silver/80 font-light tracking-wide text-sm md:text-base">
                        {item.desc}
                    </p>
                </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-2 border-cinema-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.1)] group bg-black">
                    <div className="absolute inset-0 bg-cinema-gold/10 mix-blend-overlay z-10" />
                    <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Inner Border Glow */}
                    <div className="absolute inset-0 border border-cinema-gold/20 z-20" />
                </div>
            </div>
        </motion.div>
    )
}
