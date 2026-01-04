'use client'

import { motion } from 'framer-motion'
import { Movie } from '@/data/movies'
import Image from 'next/image'

export default function MovieCard({ movie, index }: { movie: Movie; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }} // Triggers earlier
            className="group relative w-[280px] aspect-[2/3] bg-cinema-black rounded-sm overflow-hidden border-x-[8px] border-black shadow-2xl cursor-pointer transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500"
        >
            {/* Film Holes (Visual Detail) */}
            <div className="absolute left-1 top-0 bottom-0 w-[4px] bg-transparent border-r border-dashed border-white/10 z-20 pointer-events-none" />
            <div className="absolute right-1 top-0 bottom-0 w-[4px] bg-transparent border-l border-dashed border-white/10 z-20 pointer-events-none" />

            {/* Poster Placeholder (or Image if available) */}
            <div className="absolute inset-0 bg-zinc-900 z-0">
                {movie.poster ? (
                    <Image
                        src={movie.poster}
                        alt={movie.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-cinema-silver/10">
                        <span className="text-6xl font-black rotate-90">{movie.year}</span>
                    </div>
                )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-cinema-gold text-lg font-black tracking-widest">{movie.year}</span>
                        <div className="h-[2px] w-8 bg-cinema-gold" />
                    </div>

                    <h3 className="text-2xl font-black text-white leading-none mb-2 uppercase drop-shadow-lg">{movie.title}</h3>
                    <p className="text-sm text-gray-300 mb-3 font-medium">{movie.director}</p>

                    {movie.verdict && (
                        <span className="inline-block px-3 py-1 bg-cinema-red text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-lg mb-3">
                            {movie.verdict}
                        </span>
                    )}

                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <span className="text-xs text-cinema-gold font-bold uppercase tracking-widest flex items-center gap-2">
                            View Film <span className="text-lg">→</span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
