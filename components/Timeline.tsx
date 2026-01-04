'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
    { year: '1992', title: 'The Debut', desc: 'Naalaiya Theerpu marks the beginning of a journey.' },
    { year: '1996', title: 'The Breakthrough', desc: 'Poove Unakkaga establishes him as a romantic hero.' },
    { year: '2004', title: 'The Mass Icon', desc: 'Ghilli redefines commercial cinema in Tamil Nadu.' },
    { year: '2012', title: 'The Comeback', desc: 'Thuppakki elevates him to a new league of stardom.' },
    { year: '2023', title: 'The Global Star', desc: 'Leo becomes one of the highest-grossing Indian films.' },
]

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section ref={containerRef} className="py-24 px-6 relative min-h-[150vh] bg-navy-light/30">
            <div className="max-w-4xl mx-auto relative">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl md:text-6xl font-black text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-gold to-white"
                >
                    The Rise
                </motion.h2>

                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-40 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
                    <motion.div
                        style={{ height }}
                        className="w-full bg-gradient-to-b from-gold via-yellow-400 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                    />
                </div>

                <div className="flex flex-col gap-24 relative z-10">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content */}
                            <div className="flex-1 text-left md:text-right p-6 bg-navy/80 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-gold/30 transition-colors w-full md:w-auto">
                                <span className="text-gold font-bold text-xl tracking-wider">{item.year}</span>
                                <h3 className="text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>

                            {/* Dot */}
                            <div className="w-4 h-4 bg-navy border-2 border-gold rounded-full relative z-20 shadow-[0_0_10px_rgba(245,158,11,0.8)]">
                                <div className="absolute inset-0 bg-gold blur-[5px] opacity-50" />
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
