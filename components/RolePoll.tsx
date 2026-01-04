'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { roles } from '@/data/roles'

export default function RolePoll() {
    const [voted, setVoted] = useState<string | null>(null)
    const [votes, setVotes] = useState<Record<string, number>>(
        Object.fromEntries(roles.map(r => [r.id, Math.floor(Math.random() * 1000) + 500]))
    )

    const handleVote = (id: string) => {
        if (!voted) {
            setVotes(prev => ({ ...prev, [id]: prev[id] + 1 }))
            setVoted(id)
        }
    }

    const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0)

    return (
        <section className="py-24 bg-zinc-900 mx-6 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cinema-red/10 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-cinema-white uppercase">
                    Which role defined a generation?
                </h2>

                <div className="space-y-4">
                    {roles.map((role) => {
                        const percent = ((votes[role.id] / totalVotes) * 100).toFixed(1)
                        const isSelected = voted === role.id

                        return (
                            <div key={role.id} className="relative">
                                <button
                                    onClick={() => handleVote(role.id)}
                                    disabled={!!voted}
                                    className={`w-full relative overflow-hidden rounded-xl p-4 flex items-center justify-between group transition-all ${voted ? 'cursor-default' : 'hover:bg-white/5 cursor-pointer'}`}
                                >
                                    {/* Progress Bar Background */}
                                    {voted && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percent}%` }}
                                            transition={{ duration: 1, ease: 'easeOut' }}
                                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${isSelected ? 'from-cinema-gold to-yellow-600' : 'from-gray-700 to-gray-600'} opacity-30 z-0`}
                                        />
                                    )}

                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${isSelected ? 'bg-cinema-gold text-black' : 'bg-white/10 text-white'}`}>
                                            {role.year.toString().slice(2)}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-lg text-white">{role.character}</h4>
                                            <p className="text-xs text-gray-400">{role.movie}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 text-right">
                                        {voted ? (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-2xl font-bold text-white"
                                            >
                                                {percent}%
                                            </motion.span>
                                        ) : (
                                            <span className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors">
                                                Vote
                                            </span>
                                        )}
                                    </div>
                                </button>
                            </div>
                        )
                    })}
                </div>

                {voted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-8 text-gray-400 italic"
                    >
                        Thank you for voting! Thalapathy fans represent! 🔥
                    </motion.div>
                )}
            </div>
        </section>
    )
}
