'use client'

import { motion } from 'framer-motion'
import {
    Clapperboard,
    Trophy,
    Heart,
    Music,
    TrendingUp,
    Users,
    Award,
    Star,
    Crown,
    Zap
} from 'lucide-react'

const qualities = [
    {
        icon: <Crown className="w-8 h-8 text-cinema-gold" />,
        title: 'The Box Office Emperor',
        desc: 'The undisputed ruler of opening records, consistently delivering industry hits that redefine benchmarks.',
        className: 'md:col-span-2 md:row-span-2',
        gradient: 'from-cinema-gold/20 via-transparent to-transparent'
    },
    {
        icon: <Users className="w-6 h-6 text-cinema-gold" />,
        title: 'Mass Connection',
        desc: 'A bond with the masses that transcends generations.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-blue-500/10 to-transparent'
    },
    {
        icon: <Zap className="w-6 h-6 text-cinema-gold" />,
        title: 'Screen Presence',
        desc: 'Electrifying charisma that demands attention.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-purple-500/10 to-transparent'
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-cinema-gold" />,
        title: 'Consistency',
        desc: 'Decades of staying at the absolute top.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-green-500/10 to-transparent'
    },
    {
        icon: <Heart className="w-6 h-6 text-cinema-gold" />,
        title: 'Humanitarian',
        desc: 'Vijay Makkal Iyakkam & silent charity works.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-red-500/10 to-transparent'
    },
    {
        icon: <Music className="w-6 h-6 text-cinema-gold" />,
        title: 'Playback Singer',
        desc: 'Soulful voice behind chartbuster anthems.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-pink-500/10 to-transparent'
    },
    {
        icon: <Award className="w-6 h-6 text-cinema-gold" />,
        title: 'Dance Icon',
        desc: 'Fluid grace and effortless style.',
        className: 'md:col-span-1 md:row-span-1',
        gradient: 'from-yellow-500/10 to-transparent'
    },
    {
        icon: <Clapperboard className="w-6 h-6 text-cinema-gold" />,
        title: 'Versatility',
        desc: 'From romantic hero to action titan.',
        className: 'md:col-span-2 md:row-span-1',
        gradient: 'from-orange-500/10 to-transparent'
    },
]

export default function DefinitionGrid() {
    return (
        <section className="py-32 bg-cinema-black text-cinema-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cinema-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                            Defining <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold to-yellow-600">Greatness</span>
                        </h2>
                        <div className="w-20 h-1 bg-cinema-gold mt-4 rounded-full" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-cinema-silver max-w-md text-right hidden md:block"
                    >
                        Beyond the stardom, hits, and records lies the essence of what makes him Thalapathy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`group relative p-8 rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden hover:border-cinema-gold/30 transition-all duration-500 ${item.className}`}
                        >
                            {/* Inner Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-cinema-gold/20">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className={`font-bold text-cinema-white mb-2 group-hover:text-cinema-gold transition-colors ${item.className?.includes('col-span-2') ? 'text-3xl' : 'text-xl'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-cinema-silver/80 text-sm font-light leading-relaxed group-hover:text-white transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
