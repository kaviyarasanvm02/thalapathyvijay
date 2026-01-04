'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
    { label: 'Years in Cinema', value: 33, suffix: '' },
    { label: 'Films Released', value: 68, suffix: '+' },
    { label: 'Box Office', value: 500, suffix: '+ Cr' },
    { label: 'Fans Worldwide', value: 100, suffix: 'M+' },
]

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })
    const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 })
    const display = useTransform(spring, (current) => Math.round(current) + suffix)

    useEffect(() => {
        if (inView) {
            spring.set(value)
        }
    }, [inView, value, spring])

    return <motion.span ref={ref}>{display}</motion.span>
}

export default function StatsSection() {
    return (
        <section className="py-24 bg-cinema-black text-cinema-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cinema-gold/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative"
                    >
                        {/* Glassmorphic Card */}
                        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-cinema-gold/10 rounded-xl transition-all duration-300 group-hover:bg-cinema-gold/[0.05] group-hover:border-cinema-gold/30" />

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                        <div className="relative p-8 flex flex-col items-center justify-center text-center gap-3">
                            <motion.div
                                className="text-5xl lg:text-6xl font-black font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cinema-gold via-[#FFEC8B] to-[#B48E00] drop-shadow-lg"
                            >
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </motion.div>

                            <div className="h-[1px] w-12 bg-cinema-gold/20 my-2 group-hover:w-24 group-hover:bg-cinema-gold/50 transition-all duration-300" />

                            <div className="text-xs uppercase tracking-[0.25em] text-cinema-silver/70 font-medium group-hover:text-cinema-white transition-colors">
                                {stat.label}
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cinema-gold/20 rounded-tl-lg group-hover:border-cinema-gold/60 transition-colors" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cinema-gold/20 rounded-br-lg group-hover:border-cinema-gold/60 transition-colors" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
