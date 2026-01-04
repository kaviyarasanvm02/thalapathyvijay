'use client'

import { motion } from 'framer-motion'
import { movies } from '@/data/movies'
import FilmDecadeSection from '@/components/FilmDecadeSection'

export default function FilmJourneySection() {
    // Group movies
    const beginning = movies.filter(m => m.category === 'Beginning')
    const rising = movies.filter(m => m.category === 'Rising Stardom')
    const thaleEra = movies.filter(m => m.category === 'Thalapathy Era')
    const peak = movies.filter(m => m.category === 'Peak & Legacy')

    return (
        <section id="film-journey" className="bg-cinema-black text-cinema-white pb-24">
            {/* Hero */}
            <div className="h-[60vh] relative flex items-center justify-center bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinema-black" />

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-cinema-red font-bold tracking-[0.5em] uppercase text-sm md:text-base block mb-4"
                    >
                        33 Years of Cinema
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
                    >
                        The Film Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-gray-400 max-w-2xl mx-auto"
                    >
                        From a child artist to the biggest superstar of Tamil Cinema. Explore the complete filmography of Thalapathy Vijay.
                    </motion.p>
                </div>
            </div>

            {/* Sections */}
            <FilmDecadeSection
                title="1992-1999"
                movies={beginning}
                description="The Beginning. Finding his footing and establishing himself as a romantic hero."
                highlight="Poove Unakkaga - The film that started it all! First major success. Romantic hero image born. 💘"
            />

            <FilmDecadeSection
                title="2000-2009"
                movies={rising}
                description="Rising Stardom. The birth of the mass hero."
                highlight="GHILLI - The game changer! 200+ days theatrical run. Redefined mass cinema. The birth of modern Thalapathy! ⚡"
            />

            <FilmDecadeSection
                title="2010-2019"
                movies={thaleEra}
                description="The Thalapathy Era. Breaking records and setting new benchmarks."
                highlight="THUPPAKKI - Intelligence meets action! AR Murugadoss magic. New dimension to his acting. 🎯"
            />

            <FilmDecadeSection
                title="2020-2025"
                movies={peak}
                description="Peak & Legacy. The global phenomenon."
                highlight="LEO - Lokesh Cinematic Universe! Global blockbuster. 🦁"
            />

        </section>
    )
}
