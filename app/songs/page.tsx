'use client'

import { motion } from 'framer-motion'

const chartbusters = [
    { title: "Appadi Podu", movie: "Ghilli", year: "2004" },
    { title: "Vaathi Coming", movie: "Master", year: "2021" },
    { title: "Aalaporan Thamizhan", movie: "Mersal", year: "2017" },
    { title: "Arabic Kuthu", movie: "Beast", year: "2022" },
    { title: "Google Google", movie: "Thuppakki", year: "2012" },
    { title: "Verithanam", movie: "Bigil", year: "2019" },
    { title: "Naa Ready", movie: "Leo", year: "2023" },
    { title: "Selfie Pulla", movie: "Kaththi", year: "2014" },
]

const danceMoves = [
    { name: "The Ghilli Step", movie: "Ghilli" },
    { name: "Shoulder Drop", movie: "Master" },
    { name: "Halamathi Habibo", movie: "Beast" },
    { name: "Glass Step", movie: "Theri" },
]

export default function SongsPage() {
    return (
        <main className="bg-cinema-black min-h-screen text-cinema-white pb-24">
            <section className="py-24 px-6 text-center bg-gradient-to-b from-purple-900/20 to-cinema-black">
                <h1 className="text-4xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
                    Songs & Dance
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The Moves. The Grooves. The Magic.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Chartbusters List */}
                <section>
                    <h2 className="text-2xl font-bold uppercase mb-8 border-l-4 border-purple-500 pl-4">All Time Chartbusters</h2>
                    <div className="space-y-4">
                        {chartbusters.map((song, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-colors group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-sm font-bold text-purple-400">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">{song.title}</h3>
                                        <p className="text-xs text-gray-400">{song.movie} • {song.year}</p>
                                    </div>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Dance Moves Grid */}
                <section>
                    <h2 className="text-2xl font-bold uppercase mb-8 border-l-4 border-pink-500 pl-4">Signature Moves</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {danceMoves.map((move, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square bg-zinc-800 rounded-xl overflow-hidden relative group cursor-pointer"
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
                                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-pink-500/50 flex items-center justify-center animate-spin-slow">
                                        <span className="text-2xl">🕺</span>
                                    </div>
                                    <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">GIF Placeholder</p>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="font-bold text-white text-center">{move.name}</h3>
                                    <p className="text-xs text-pink-400 text-center">{move.movie}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
