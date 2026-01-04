'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/50 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center backdrop-blur-[1px]"
        >
            <div className={`w-1 h-1 bg-gold rounded-full`} />
        </motion.div>
    )
}
