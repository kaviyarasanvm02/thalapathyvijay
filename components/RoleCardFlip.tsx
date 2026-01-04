'use client'

import { motion } from 'framer-motion'
import { Role } from '@/data/roles'
import { useState } from 'react'
import Image from 'next/image'

export default function RoleCardFlip({ role }: { role: Role }) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return (
        <div
            className="w-full h-[400px] cursor-pointer perspective-1000 group"
            onClick={handleFlip}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl bg-cinema-black border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    {/* Placeholder for Character Image */}
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-8xl text-cinema-silver/10 font-black">
                        {role.character[0]}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-black text-white uppercase drop-shadow-md">{role.character}</h3>
                        <p className="text-cinema-gold font-bold">{role.movie} ({role.year})</p>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl bg-cinema-red text-white p-8 flex flex-col justify-center items-center text-center rotate-y-180 border border-cinema-gold/30"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1 : 0.8 }}
                        transition={{ delay: 0.1 }}
                        className="relative z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-cinema-gold mx-auto mb-4 opacity-50">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.0171 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21H14.017ZM12 14C14.2091 14 16 12.2091 16 10V5C16 2.79086 14.2091 1 12 1C9.79086 1 8 2.79086 8 5V10C8 12.2091 9.79086 14 12 14Z" />
                        </svg>

                        <p className="text-2xl font-serif italic text-cinema-gold mb-6 leading-tight">"{role.quote}"</p>
                        <p className="text-sm font-medium opacity-80">{role.description}</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
