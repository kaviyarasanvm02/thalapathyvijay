'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const journeyMilestones = [
    { year: '1984', label: 'BORN', desc: 'The Legend Arrives' },
    { year: '1992', label: 'DEBUT', desc: 'Naalaiya Theerpu' },
    { year: '1996', label: 'BREAKTHROUGH', desc: 'Poove Unakkaga' },
    { year: '2000', label: 'STARDOM', desc: 'Kushi & Friends' },
    { year: '2004', label: 'MASS ICON', desc: 'Ghilli Industry Hit' },
    { year: '2012', label: 'THALAPATHY', desc: 'Thuppakki Era' },
    { year: '2017', label: 'PHENOMENON', desc: 'Mersal & Sarkar' },
    { year: '2025', label: 'LEGACY', desc: 'The Final Chapter' },
]

export default function JourneyTimeline() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="py-24 bg-cinema-black text-cinema-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cinema-red/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold to-yellow-600 mb-4">
                    The Journey Begins
                </h2>
                <div className="w-24 h-1 bg-cinema-gold mx-auto rounded-full" />
            </div>

            <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar cursor-grab active:cursor-grabbing">
                <div className="min-w-max px-6 md:px-24 flex items-center justify-between gap-12 md:gap-24 relative pt-20">
                    {/* Connecting Line */}
                    <div className="absolute top-24 left-0 right-0 h-1 bg-cinema-silver/20 -z-10" />

                    {journeyMilestones.map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Node */}
                            <motion.div
                                className={`w-8 h-8 rounded-full border-4 transition-all duration-300 relative z-10 ${hoveredIndex === index ? 'bg-cinema-gold border-cinema-gold scale-150' : 'bg-cinema-black border-cinema-silver'}`}
                            >
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="glow"
                                        className="absolute inset-0 rounded-full bg-cinema-gold blur-lg -z-10"
                                    />
                                )}
                            </motion.div>

                            {/* Year - Always Visible */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-cinema-gold font-bold text-xl tracking-wider">
                                {item.year}
                            </div>

                            {/* Details Card - Shows on Hover */}
                            <motion.div
                                initial={{ opacity: 0.5, y: 10 }}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0.5,
                                    y: hoveredIndex === index ? 20 : 10,
                                    scale: hoveredIndex === index ? 1.1 : 1
                                }}
                                className="absolute top-full left-1/2 -translate-x-1/2 w-48 text-center"
                            >
                                <div className="text-sm font-bold tracking-widest uppercase text-cinema-white mb-1">
                                    {item.label}
                                </div>
                                <div className={`text-xs text-cinema-silver transition-colors ${hoveredIndex === index ? 'text-cinema-gold' : ''}`}>
                                    {item.desc}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
