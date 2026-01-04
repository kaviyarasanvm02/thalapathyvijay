'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
    { label: 'Years in Cinema', value: 33, suffix: '' },
    { label: 'Films Released', value: 69, suffix: '+' },
    { label: 'Box Office', value: 300, suffix: '+ Cr' },
    { label: 'Fans Worldwide', value: 100, suffix: 'M+' }, // Symbolic infinite
]

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
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
        <section className="py-24 bg-cinema-black text-cinema-gold relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cinema-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cinema-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="text-5xl md:text-7xl font-bold font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cinema-gold to-yellow-700">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-cinema-silver/80">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
