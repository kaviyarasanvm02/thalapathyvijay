'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const images = [
    { src: 'from-gray-800 to-gray-900', title: 'Cinema' },
    { src: 'from-blue-900 to-black', title: 'Dance' },
    { src: 'from-red-900 to-black', title: 'Action' },
    { src: 'from-purple-900 to-black', title: 'Style' },
    { src: 'from-green-900 to-black', title: 'Leader' },
]

export default function ParallaxGallery() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-65%'])

    return (
        <section ref={sectionRef} className="h-[300vh] relative bg-navy">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-24">
                    {images.map((img, i) => (
                        <div key={i} className="relative group min-w-[300px] md:min-w-[500px] h-[400px] md:h-[600px] bg-gray-900 rounded-[3rem] overflow-hidden border border-white/10 shrink-0">
                            {/* Placeholder for Image */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${img.src} opacity-60 group-hover:scale-110 transition-transform duration-1000`} />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-white/10 to-transparent group-hover:from-white/30 transition-all uppercase tracking-tighter">
                                    {img.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="absolute bottom-12 left-12 text-sm text-gray-500 uppercase tracking-widest animate-pulse">
                    Scroll Down to Explore
                </div>
            </div>
        </section>
    )
}
