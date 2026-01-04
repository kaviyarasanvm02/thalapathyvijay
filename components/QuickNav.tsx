'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = [
    { title: 'FILM JOURNEY', path: '#film-journey', color: 'from-red-900 to-red-600' },
    { title: 'ICONIC ROLES', path: '#roles', color: 'from-amber-700 to-amber-500' },
    { title: 'BOX OFFICE', path: '#box-office', color: 'from-emerald-900 to-emerald-600' },
    { title: 'GALLERY', path: '#gallery', color: 'from-indigo-900 to-indigo-600' },
]

export default function QuickNav() {
    return (
        <section className="py-24 bg-cinema-black text-cinema-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12 text-center text-cinema-gray">Explore the Legacy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {navItems.map((item, index) => (
                        <Link href={item.path} key={index} className="block group">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`h-40 md:h-56 rounded-3xl relative overflow-hidden bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

                                <h3 className="relative z-10 text-2xl md:text-3xl font-black uppercase text-white tracking-wider group-hover:tracking-widest transition-all duration-300 drop-shadow-lg text-center px-4">
                                    {item.title}
                                </h3>

                                <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
