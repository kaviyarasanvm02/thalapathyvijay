'use client'

import { motion } from 'framer-motion'

const qualities = [
    { icon: '🎬', title: 'Versatility', desc: 'From romantic lover to mass hero.' },
    { icon: '💪', title: 'Mass Appeal', desc: 'The pulse of the streets.' },
    { icon: '❤️', title: 'Fan Connection', desc: 'A bond beyond cinema.' },
    { icon: '🎵', title: 'Musical Hits', desc: 'Chartbusters in every film.' },
    { icon: '📈', title: 'Box Office King', desc: 'Consistent record breaker.' },
    { icon: '🎭', title: 'Character Range', desc: 'Comedy, action, emotion.' },
    { icon: '💯', title: 'Dedication', desc: 'Hard work since 1992.' },
    { icon: '⭐', title: 'Screen Presence', desc: 'Unmatched charisma.' },
]

export default function DefinitionGrid() {
    return (
        <section className="py-24 bg-zinc-950 text-cinema-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">What Defines Thalapathy?</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl border border-white/5 hover:border-cinema-gold/30 bg-white/5 transition-all text-center group cursor-pointer"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-cinema-gold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 group-hover:text-gray-200">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
