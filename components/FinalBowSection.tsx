'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FinalBowSection() {
    const [step, setStep] = useState(0)

    // Using intersection observer logic or just simple state trigger on view
    // For this section, since it was a full page takeover, we might want to make it triggered when scrolled into view
    // But for simplicity in a long scroll, we will just make it a static-ish section that animates when viewed.
    // However, the original logic had a timer. Let's keep the timer but maybe start it when in view?
    // For now, I'll keep it simple: It plays when mounted/viewed. But since it's on a long page, we should use a viewport trigger.

    // Note: The original logic used `useEffect` with `[]` dependency, meaning it ran on mount.
    // If we put this on the main page, it will run immediately when the main page loads, which might be too early (if at bottom).
    // Let's use `whileInView` to trigger a state or just keep it simple.
    // Actually, let's keep it as is, but adding a "Trigger" wrapper might be better.
    // For this specific request, I will just port the code. NOTE: The user might miss the animation if they are at the top.

    // Improved Logic: Trigger animation when visible.

    const [hasInView, setHasInView] = useState(false)

    useEffect(() => {
        if (!hasInView) return;

        // Sequence
        const timeouts = [
            setTimeout(() => setStep(1), 1000), // Intro
            setTimeout(() => setStep(2), 5000), // Reel spin done
            setTimeout(() => setStep(3), 8000), // Text 1
            setTimeout(() => setStep(4), 11000), // Text 2
            setTimeout(() => setStep(5), 14000), // Final Message
            setTimeout(() => setStep(6), 20000), // Image
        ]
        return () => timeouts.forEach(clearTimeout)
    }, [hasInView])

    return (
        <section id="final-bow" className="bg-black min-h-screen text-white relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
            <motion.div
                className="absolute inset-0 pointer-events-none"
                onViewportEnter={() => setHasInView(true)}
                viewport={{ once: true }}
            />

            {/* Stage Spotlights */}
            {step >= 1 && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
                </>
            )}

            {/* Content Sequence */}
            <div className="relative z-10 max-w-4xl">

                {/* Step 1 & 2: Spinning Reel Illusion (Simplified with counters/text for now) */}
                {step >= 1 && step < 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: step === 2 ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        className="text-8xl md:text-[12rem] font-black text-cinema-red opacity-20"
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, ease: "linear", repeat: Infinity }}>
                            ⚙️
                        </motion.div>
                    </motion.div>
                )}

                {/* Step 3: Text 1 */}
                {step === 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold">33 Years of Cinema.</h2>
                        <h2 className="text-4xl md:text-6xl font-bold">69 Films.</h2>
                        <p className="text-xl text-gray-400">This Chapter... Closes.</p>
                    </motion.div>
                )}

                {/* Step 4: Text 2 */}
                {step === 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-6xl font-black text-cinema-red">But...</h2>
                    </motion.div>
                )}

                {/* Step 5: Final Message */}

                {step >= 5 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8 mt-80"
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold to-yellow-600">
                            Thalapathy Never Ends.
                        </h1>
                        <div className="space-y-2 text-xl md:text-2xl font-light text-gray-300">
                            <p>The Script Changes.</p>
                            <p>The Role Evolves.</p>
                            <p>The Journey Continues.</p>
                        </div>

                        <div className="py-8">
                            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">From</p>
                            <h3 className="text-3xl font-bold text-white mb-4">'I AM WAITING'</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">To</p>
                            <h3 className="text-3xl font-bold text-cinema-red">'I AM COMING'</h3>
                        </div>

                        <div className="pt-12 border-t border-white/10 mt-12 w-full max-w-md mx-auto">
                            <p className="text-cinema-gold font-serif italic text-lg">"Thank you for 33 years."</p>
                            <p className="text-xs text-gray-600 mt-4 uppercase tracking-[0.3em]">To Be Continued...</p>
                        </div>
                    </motion.div>
                )}

                {/* Fallback for Step 0 (Before view) */}
                {step === 0 && (
                    <p className="text-gray-500 animate-pulse">Scroll to view tribute...</p>
                )}
            </div>
        </section>
    )
}
