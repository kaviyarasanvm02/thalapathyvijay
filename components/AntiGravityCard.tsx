'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'

type Props = {
    title: string
    year: number
    tag: string
}

export default function AntiGravityCard({ title, year, tag }: Props) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-50, 50], [10, -10])
    const rotateY = useTransform(x, [-50, 50], [-10, 10])

    return (
        <motion.div
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={0.12}
            whileHover={{ scale: 1.08 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
            }}
            className="bg-navy-light border border-gold/30 rounded-2xl p-6
                 shadow-xl cursor-grab active:cursor-grabbing backdrop-blur-sm"
        >
            <h3 className="text-2xl font-bold text-gold drop-shadow-md">{title}</h3>
            <p className="text-gray-400 mt-1 font-mono">{year}</p>
            <span className="inline-block mt-3 text-xs uppercase tracking-wider text-darkgold border border-darkgold/30 px-2 py-1 rounded">
                {tag}
            </span>
        </motion.div>
    )
}
