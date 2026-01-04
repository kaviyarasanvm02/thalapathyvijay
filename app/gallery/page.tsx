'use client'

import { motion } from 'framer-motion'

export default function GalleryPage() {
    return (
        <main className="bg-cinema-black min-h-screen text-cinema-white pb-24">
            <section className="py-24 px-6 text-center">
                <h1 className="text-4xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-8">
                    33 Years in Frames
                </h1>
            </section>

            <section className="max-w-7xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
                    >
                        <div className={`w-full bg-zinc-800 ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-video'} relative`}>
                            {/* Placeholder */}
                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-gray-700 font-bold uppercase tracking-widest">
                                Image {i + 1}
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white font-bold">Caption for Image {i + 1}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </main>
    )
}
