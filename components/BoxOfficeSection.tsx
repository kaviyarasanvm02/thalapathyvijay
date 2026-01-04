'use client'

import { motion } from 'framer-motion'
import { movies } from '@/data/movies'

const topGrossers = [
    { title: "Leo", gross: 620, year: 2023, color: "bg-cinema-gold" },
    { title: "Greatest of All Time", gross: 450, year: 2024, color: "bg-yellow-500" }, // Est
    { title: "Varisu", gross: 310, year: 2023, color: "bg-yellow-600" },
    { title: "Bigil", gross: 305, year: 2019, color: "bg-amber-600" },
    { title: "Master", gross: 260, year: 2021, color: "bg-orange-600" }, // Pandemic
    { title: "Mersal", gross: 260, year: 2017, color: "bg-red-600" },
    { title: "Sarkar", gross: 260, year: 2018, color: "bg-red-700" },
    { title: "Beast", gross: 240, year: 2022, color: "bg-red-800" },
    { title: "Theri", gross: 150, year: 2016, color: "bg-rose-700" },
    { title: "Kaththi", gross: 130, year: 2014, color: "bg-rose-800" },
]

export default function BoxOfficeSection() {
    return (
        <section id="box-office" className="bg-cinema-black text-cinema-white pb-24">
            <div className="py-24 px-6 text-center bg-gradient-to-b from-emerald-900/20 to-cinema-black">
                <h1 className="text-4xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 mb-8">
                    Box Office King
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Numbers don't lie. Records don't break easily.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Chart */}
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-12 border-l-4 border-emerald-500 pl-4">Top Grossers (in Crores)</h2>
                    <div className="space-y-6">
                        {topGrossers.map((movie, index) => (
                            <div key={index} className="relative">
                                <div className="flex justify-between items-end mb-2 text-sm">
                                    <span className="font-bold text-white">{movie.title} <span className="text-gray-500 font-normal">({movie.year})</span></span>
                                    <span className="text-emerald-400 font-mono">₹{movie.gross}Cr</span>
                                </div>
                                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(movie.gross / 700) * 100}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                                        className={`h-full ${movie.color} relative`}
                                        viewport={{ once: true }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Records */}
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-12 border-l-4 border-emerald-500 pl-4">Records & Milestones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { label: "100 Crore Club", val: "Every film since 2012 has crossed 100Cr mark.", icon: "💰" },
                            { label: "Overseas King", val: "Highest grossing Tamil actor in UK, France, Singapore.", icon: "🌍" },
                            { label: "Kerala Fort", val: "Holds the record for most fans in Kerala for a non-Malayalam actor.", icon: "🥥" },
                            { label: "Opening Day", val: "Consistently breaks Day 1 records in Tamil Nadu.", icon: "🚀" },
                            { label: "Advance Booking", val: "Leo sold 1M+ tickets in advance booking.", icon: "🎟️" },
                            { label: "Footfalls", val: "Highest footfalls for a Tamil film in recent decade (Ghilli re-release).", icon: "👥" },
                        ].map((record, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-emerald-950/20 rounded-xl border border-emerald-900 hover:border-emerald-500 transition-colors"
                            >
                                <div className="text-4xl mb-4">{record.icon}</div>
                                <h3 className="font-bold text-white mb-2">{record.label}</h3>
                                <p className="text-sm text-gray-400">{record.val}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
