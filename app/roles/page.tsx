'use client'

import { motion } from 'framer-motion'
import RoleCardFlip from '@/components/RoleCardFlip'
import RolePoll from '@/components/RolePoll'
import { roles } from '@/data/roles'

export default function RolesPage() {
    return (
        <main className="bg-cinema-black min-h-screen text-cinema-white pb-24">
            <section className="h-[50vh] flex flex-col items-center justify-center relative bg-gradient-to-b from-gray-900 to-cinema-black text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-cinema-gold to-yellow-800 mb-6"
                >
                    Iconic Roles
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl font-light text-cinema-silver tracking-widest uppercase"
                >
                    Characters that defined a generation
                </motion.p>
            </section>

            <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roles.map((role) => (
                    <RoleCardFlip key={role.id} role={role} />
                ))}
            </section>

            <RolePoll />
        </main>
    )
}
