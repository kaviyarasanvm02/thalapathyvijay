import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import JourneyTimeline from '@/components/JourneyTimeline'
import DefinitionGrid from '@/components/DefinitionGrid'
import QuickNav from '@/components/QuickNav'

export default function Home() {
  return (
    <main className="bg-cinema-black relative text-cinema-white min-h-screen">
      {/* Cinematic Pulse Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />

      <Hero />
      <StatsSection />
      <JourneyTimeline />
      <DefinitionGrid />
      <QuickNav />

      <footer className="py-12 bg-black text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 Vijay Tribute. Made with ❤️ for Thalapathy.</p>
      </footer>
    </main>
  )
}
