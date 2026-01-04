'use client'

import { motion } from 'framer-motion'
import RoleAccordionItem from '@/components/RoleAccordionItem'
import RolePoll from '@/components/RolePoll'
import { roles } from '@/data/roles'
import { useState } from 'react'

export default function RolesSection() {
    const [activeRoleId, setActiveRoleId] = useState(roles[0].id)

    return (
        <section id="roles" className="bg-cinema-black text-cinema-white pb-24">
            <div className="h-[50vh] flex flex-col items-center justify-center relative bg-gradient-to-b from-gray-900 to-cinema-black text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-cinema-gold to-yellow-800 mb-6"
                >
                    Iconic Roles
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl font-light text-cinema-silver tracking-widest uppercase"
                >
                    Characters that defined a generation
                </motion.p>
            </div>

            {/* Expanding Accordion Container */}
            <div className="max-w-7xl mx-auto px-6 mb-24 min-h-[500px]">
                <div className="flex flex-col md:flex-row gap-4 h-full">
                    {roles.map((role) => (
                        <RoleAccordionItem
                            key={role.id}
                            role={role}
                            isActive={activeRoleId === role.id}
                            onClick={() => setActiveRoleId(role.id)}
                        />
                    ))}
                </div>
            </div>

            <RolePoll />
        </section>
    )
}
