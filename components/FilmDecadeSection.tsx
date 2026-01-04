'use client'

import { motion } from 'framer-motion'
import { Movie } from '@/data/movies'
import MovieCard from './MovieCard'
import { useRef } from 'react'

export default function FilmDecadeSection({ title, movies, description, highlight }: { title: string, movies: Movie[], description?: string, highlight?: string }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    if (movies.length === 0) return null

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Film Strip Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black border-b-2 border-dashed border-white/20 z-10" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-black border-t-2 border-dashed border-white/20 z-10" />

            <div className="max-w-[95vw] mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pl-4">
                    <div className="z-20">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold via-white to-cinema-gold mb-4 opacity-20"
                        >
                            {title}
                        </motion.h2>
                        {description && <p className="text-gray-400 max-w-xl text-lg border-l-2 border-cinema-gold pl-4">{description}</p>}
                    </div>
                    {/* Highlight Card if present */}
                    {highlight && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-4 bg-cinema-gold/10 border border-cinema-gold/30 rounded-lg max-w-md backdrop-blur-sm"
                        >
                            <p className="text-cinema-gold font-medium italic">"{highlight}"</p>
                        </motion.div>
                    )}
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 scrollbar-hide snap-x snap-mandatory mask-linear-fade"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {movies.map((movie, index) => (
                        <div key={movie.id} className="snap-center shrink-0 first:pl-4 last:pr-4">
                            <MovieCard movie={movie} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
