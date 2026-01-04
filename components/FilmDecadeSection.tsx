'use client'

import { motion } from 'framer-motion'
import { Movie } from '@/data/movies'
import MovieCard from './MovieCard'

export default function FilmDecadeSection({ title, movies, description, highlight }: { title: string, movies: Movie[], description?: string, highlight?: string }) {
    if (movies.length === 0) return null

    return (
        <section className="py-20 border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black uppercase text-cinema-white mb-2"
                        >
                            {title}
                        </motion.h2>
                        {description && <p className="text-gray-400 max-w-xl">{description}</p>}
                    </div>
                </div>

                {/* Highlight Card if present */}
                {highlight && (
                    <div className="mb-12 p-6 bg-cinema-gold/10 border-l-4 border-cinema-gold rounded-r-lg">
                        <p className="text-cinema-gold font-medium italic">"{highlight}"</p>
                    </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.map((movie, index) => (
                        <MovieCard key={movie.id} movie={movie} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
