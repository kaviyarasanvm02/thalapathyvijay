'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

const MovieCard = ({ title, year, image, color }: { title: string, year: string, image: string, color: string }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const { currentTarget, clientX, clientY } = event
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        x.set(clientX - left - width / 2)
        y.set(clientY - top - height / 2)
    }

    function onMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseY, [-200, 200], [10, -10])
    const rotateY = useTransform(mouseX, [-200, 200], [-10, 10])

    return (
        <motion.div
            style={{ perspective: 1000 }}
            className="w-full md:w-[350px] relative group cursor-pointer"
        >
            <motion.div
                style={{ rotateX, rotateY, rotate: "0deg" }}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                whileHover={{ scale: 1.05 }}
                className={`relative h-[500px] w-full bg-navy rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-shadow hover:shadow-${color}/20`}
            >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-60`} />

                {/* Placeholder Image (Replace with real assets) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image} opacity-30 group-hover:scale-110 transition-transform duration-700`} />

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                        {title}
                    </h3>
                    <p className={`text-${color} font-mono text-sm tracking-widest`}>
                        {year}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function Filmography() {
    return (
        <section className="min-h-screen py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <h2 className="text-5xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                        Select <br /> FiImography
                    </h2>
                    <p className="text-gray-400 text-lg max-w-sm text-right mt-6 md:mt-0">
                        Defining moments in a legendary career.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    <MovieCard
                        title="Leo"
                        year="2023"
                        image="from-red-900 to-black"
                        color="red-500"
                    />
                    <MovieCard
                        title="Master"
                        year="2021"
                        image="from-blue-900 to-black"
                        color="blue-400"
                    />
                    <MovieCard
                        title="Mersal"
                        year="2017"
                        image="from-orange-900 to-black"
                        color="orange-500"
                    />
                </div>
            </motion.div>
        </section>
    )
}
