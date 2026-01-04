'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const dialogues = [
    { text: "I am waiting!", movie: "Thuppakki", audio: "#" },
    { text: "Ennaku pudikkanum nu aasai paduravanda...", movie: "Ghilli", audio: "#" },
    { text: "Nammala pathhi evanum kavalai pada maataan...", movie: "Kaththi", audio: "#" },
    { text: "En peru Surya... En veedu Theni...", movie: "Theri", audio: "#" },
    { text: "Vaathi Coming!", movie: "Master", audio: "#" },
    { text: "Naa Ready!", movie: "Leo", audio: "#" },
    { text: "Bloody Sweet!", movie: "Leo", audio: "#" },
    { text: "Oru vote... Oru note...", movie: "Sarkar", audio: "#" },
]

const scenes = [
    { title: "Interval Block", movie: "Ghilli", desc: "The chase sequence that redefined action." },
    { title: "Coin Fight", movie: "Kaththi", desc: "One man army showing his fighting prowess." },
    { title: "Transformation", movie: "Theri", desc: "From Joseph Kuruvilla to Vijay Kumar." },
    { title: "Intro Scene", movie: "Master", desc: "The swag of JD walking into the college." },
]

export default function DialoguesPage() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null)

    const handlePlay = (index: number) => {
        setPlayingIndex(index)
        // Simulate playback
        setTimeout(() => setPlayingIndex(null), 2000)
    }

    return (
        <main className="bg-cinema-black min-h-screen text-cinema-white pb-24">
            <section className="py-24 px-6 text-center">
                <h1 className="text-4xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold to-yellow-600 mb-8">
                    Dialogues & Scenes
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Words that became mantras. Scenes that became memories.
                </p>
            </section>

            {/* Dialogues Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <h2 className="text-2xl font-bold uppercase mb-8 border-l-4 border-cinema-gold pl-4">Iconic Dialogues</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dialogues.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handlePlay(index)}
                            className={`p-6 rounded-xl border cursor-pointer transition-all ${playingIndex === index ? 'bg-cinema-gold border-cinema-gold text-black' : 'bg-white/5 border-white/10 hover:border-cinema-gold/50'}`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-lg md:text-xl font-bold italic mb-2 ${playingIndex === index ? 'text-black' : 'text-cinema-white'}`}>"{item.text}"</p>
                                    <p className={`text-sm ${playingIndex === index ? 'text-black/70' : 'text-gray-400'}`}>- {item.movie}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${playingIndex === index ? 'bg-black text-cinema-gold' : 'bg-cinema-gold text-black'}`}>
                                    {playingIndex === index ? (
                                        <div className="flex gap-1 h-4 items-end">
                                            <motion.div animate={{ height: [4, 16, 8, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-current" />
                                            <motion.div animate={{ height: [8, 4, 16, 8, 12] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-current" />
                                            <motion.div animate={{ height: [12, 8, 4, 16, 8] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-current" />
                                        </div>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Scenes Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold uppercase mb-8 border-l-4 border-cinema-gold pl-4">Unforgettable Scenes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {scenes.map((scene, index) => (
                        <div key={index} className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative group">
                            {/* Placeholder Video Thumb */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <span className="text-cinema-silver/20 text-4xl font-black uppercase tracking-tighter w-full text-center">{scene.movie}</span>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-cinema-red/90 flex items-center justify-center backdrop-blur-sm shadow-xl hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-lg font-bold text-white">{scene.title}</h3>
                                <p className="text-xs text-cinema-gold">{scene.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
