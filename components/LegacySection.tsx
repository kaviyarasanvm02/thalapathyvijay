'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const StatCard = ({ value, label, index }: { value: string, label: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-navy/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-gold/20 transition-colors group"
        >
            <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                {value}
            </h3>
            <p className="text-gray-400 font-medium tracking-wide">
                {label}
            </p>
        </motion.div>
    )
}

export default function LegacySection() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative">
            <div className="max-w-6xl mx-auto w-full">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                        >
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
                                Phenomenon
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-lg leading-relaxed max-w-xl"
                        >
                            Spanning over three decades, Thalapathy Vijay has redefined stardom.
                            From a child artist to the biggest superstar of Tamil cinema, his journey is a testament to
                            hard work, humility, and an unshakeable bond with his fans.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatCard value="30+" label="Years of Cinema" index={0} />
                        <StatCard value="68" label="Films Released" index={1} />
                        <StatCard value="∞" label="Unconditional Fans" index={2} />
                        <StatCard value="#1" label="Box Office King" index={3} />
                    </div>
                </div>

            </div>
        </section>
    )
}
