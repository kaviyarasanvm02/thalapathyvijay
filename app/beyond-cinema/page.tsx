'use client'

import { motion } from 'framer-motion'

export default function BeyondCinemaPage() {
    return (
        <main className="bg-cinema-black min-h-screen text-cinema-white pb-24">
            <section className="h-[50vh] flex items-center justify-center relative bg-zinc-900">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-5xl md:text-8xl font-black uppercase text-white mb-6"
                    >
                        Beyond Cinema
                    </motion.h1>
                    <p className="text-2xl font-serif italic text-cinema-gold">"Success is not about money. It's about making a difference."</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-24">
                {/* Timeline of Giving */}
                <h2 className="text-3xl font-bold uppercase mb-16 text-center text-cinema-silver">The Silent Philanthropist</h2>

                <div className="space-y-12 relative border-l-2 border-cinema-gold/30 ml-4 md:ml-0 pl-8 md:pl-0">
                    {[
                        { year: "2006", title: "Education Support", desc: "Started quiet educational support for underprivileged students." },
                        { year: "2015", title: "Chennai Floods", desc: "Provided massive ground-level relief work." },
                        { year: "2018", title: "Tuticorin & Cyclone Gaja", desc: "Monetary aid to families affected by police firing and cyclone." },
                        { year: "2020", title: "COVID-19 Relief", desc: "Donated ₹1.3 Crore to various relief funds." },
                        { year: "2023", title: "VMI Toppers", desc: "Honored top-ranking students from all 234 constituencies." },
                    ].map((item, index) => (
                        <div key={index} className="relative md:grid md:grid-cols-2 gap-12 items-center">
                            <div className="md:text-right hidden md:block">
                                <span className="text-4xl font-black text-white/10">{item.year}</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-3.25rem] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-cinema-black border-4 border-cinema-gold z-10" />

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-50px" }}
                                className="bg-white/5 p-6 rounded-xl border border-white/10"
                            >
                                <span className="md:hidden text-2xl font-black text-white/20 mb-2 block">{item.year}</span>
                                <h3 className="text-xl font-bold text-cinema-gold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Humble Star */}
            <section className="bg-white/5 py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold uppercase mb-12">The Humble Star</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-4xl mb-4">🙏</div>
                            <h3 className="font-bold mb-2">No Inaugurations</h3>
                            <p className="text-sm text-gray-400">Refuses to cut ribbons or attend commercial opening ceremonies.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="font-bold mb-2">Simple Lifestyle</h3>
                            <p className="text-sm text-gray-400">Known for his grounded nature despite massive stardom.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl mb-4">🏆</div>
                            <h3 className="font-bold mb-2">Shying from Awards</h3>
                            <p className="text-sm text-gray-400">Often skips award shows, letting his work speak.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
