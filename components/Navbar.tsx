'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
    { name: 'Journey', href: '#film-journey' },
    { name: 'Roles', href: '#roles' },
    { name: 'Records', href: '#box-office' },
    { name: 'Fans', href: '#fans' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'The Final Bow', href: '#final-bow', special: true },
]

export default function Navbar() {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50)
    })

    return (
        <motion.nav
            animate={{
                backgroundColor: scrolled ? 'rgba(196, 30, 58, 0.95)' : 'rgba(0, 0, 0, 0)',
                backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 w-full z-50 transition-colors"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-xl md:text-2xl font-black text-cinema-gold tracking-widest uppercase hover:scale-105 transition-transform">
                    Thalapathy
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6 text-sm font-bold tracking-wide uppercase">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors relative group ${link.special ? 'text-cinema-gold border border-cinema-gold px-3 py-1 rounded hover:bg-cinema-gold hover:text-black' : 'text-white hover:text-cinema-gold'}`}
                        >
                            {link.name}
                            {!link.special && (
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cinema-gold transition-all group-hover:w-full" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white p-2"
                >
                    <div className="w-6 h-0.5 bg-white mb-1.5" />
                    <div className="w-6 h-0.5 bg-white mb-1.5" />
                    <div className="w-6 h-0.5 bg-white" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="lg:hidden bg-cinema-black/95 backdrop-blur-xl border-b border-white/10"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-sm font-bold uppercase tracking-wider ${link.special ? 'text-cinema-gold' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
