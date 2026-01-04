'use client'

import { motion } from 'framer-motion'
import { Role } from '@/data/roles'
import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

interface RoleAccordionItemProps {
    role: Role
    isActive: boolean
    onClick: () => void
}

export default function RoleAccordionItem({ role, isActive, onClick }: RoleAccordionItemProps) {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`relative h-[400px] md:h-[500px] cursor-pointer rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 ease-out-expo
            ${isActive ? 'flex-[3] md:flex-[3]' : 'flex-[1] md:flex-[1] opacity-70 hover:opacity-100'}`}
        >
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 bg-zinc-900">
                {role.image ? (
                    <Image
                        src={role.image}
                        alt={role.character}
                        fill
                        className={`object-cover transition-transform duration-700 ${isActive ? 'scale-100 grayscale-0' : 'scale-110 grayscale'}`}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                        <span className="text-9xl font-black text-white/5 rotate-12 select-none">{role.year}</span>
                    </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-90' : 'opacity-70'}`} />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Expanded Content */}
                {isActive ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 text-cinema-gold">
                            <Star className="w-5 h-5 fill-cinema-gold" />
                            <span className="font-bold tracking-widest uppercase text-sm">{role.movie} ({role.year})</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black uppercase text-white leading-none">
                            {role.character}
                        </h3>

                        <div className="relative pl-6 border-l-2 border-cinema-red">
                            <Quote className="absolute -top-2 -left-2 w-4 h-4 text-cinema-red fill-cinema-red opacity-50" />
                            <p className="text-lg md:text-xl font-serif italic text-white/90 leading-tight">
                                "{role.quote}"
                            </p>
                        </div>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                            {role.description}
                        </p>
                    </motion.div>
                ) : (
                    /* Collapsed Content (Vertical Title) */
                    <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-center md:pb-12">
                        <h3 className="text-2xl md:text-3xl font-black text-white/50 uppercase tracking-[0.2em] md:-rotate-90 whitespace-nowrap origin-center transition-colors group-hover:text-white">
                            {role.character}
                        </h3>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
