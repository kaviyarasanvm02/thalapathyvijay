'use client'

import { motion } from 'framer-motion'
import { Movie } from '@/data/movies'
import Image from 'next/image'

export default function MovieCard({ movie, index }: { movie: Movie; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
            className="group relative aspect-[2/3] bg-cinema-black rounded-lg overflow-hidden border border-white/10 hover:border-cinema-gold/50 shadow-lg cursor-pointer transition-colors"
        >
            {/* Poster Placeholder (or Image if available) */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0">
                {movie.poster ? (
                    <Image src={movie.poster} alt={movie.title} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-cinema-silver/10 text-6xl font-black rotate-12">
                        {movie.year}
                    </div>
                )}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-cinema-gold text-sm font-bold tracking-wider mb-1 block">{movie.year}</span>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1">{movie.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{movie.director}</p>

                    {movie.verdict && (
                        <span className="inline-block px-2 py-0.5 bg-cinema-red/80 text-white text-[10px] font-bold uppercase rounded-sm mb-2">
                            {movie.verdict}
                        </span>
                    )}

                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <button className="text-xs text-cinema-gold uppercase tracking-widest border-b border-cinema-gold pb-0.5 hover:text-white hover:border-white transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
