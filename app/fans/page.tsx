'use client'

import { motion } from 'framer-motion'

export default function FansPage() {
    return (
        <main className="bg-cinema-black min-h-screen text-cinema-white pb-24">
            <section className="py-24 px-6 text-center">
                <h1 className="text-4xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-8">
                    Fans: The Real Thalapathy
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Millions Strong. One Voice. En Nenjil Kudiyirukkum...
                </p>
            </section>

            {/* Map Placeholder */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className=" bg-blue-900/20 rounded-3xl p-8 md:p-24 text-center border border-blue-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_with_blue_sea.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

                    <h2 className="text-3xl font-bold uppercase mb-8 relative z-10">Global Fan Base</h2>

                    {/* Animated Dots */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full"
                            style={{
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 80 + 10}%`
                            }}
                            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}

                    <p className="relative z-10 max-w-xl mx-auto text-blue-200">
                        From Chennai to California, from Kerala to Kuala Lumpur, the love for Thalapathy knows no borders.
                    </p>
                </div>
            </section>

            {/* Tribute Wall Form */}
            <section className="max-w-3xl mx-auto px-6">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold uppercase mb-6 text-center">Leave Your Tribute</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cinema-gold outline-none" />
                            <input type="text" placeholder="Your City/Country" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cinema-gold outline-none" />
                        </div>
                        <textarea placeholder="Your Message for Thalapathy..." rows={4} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cinema-gold outline-none"></textarea>
                        <button type="button" className="w-full bg-cinema-gold text-black font-bold uppercase py-4 rounded-lg hover:bg-yellow-400 transition-colors">
                            Submit Tribute
                        </button>
                    </form>
                </div>

                {/* Recent Tributes Placeholder */}
                <div className="mt-12 space-y-4">
                    <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Recent Messages</h3>
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5">
                            <p className="text-gray-300 italic mb-2">"33 years of pure magic. Thank you for entertaining us!"</p>
                            <p className="text-xs text-cinema-gold">— Fan from Madurai</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
