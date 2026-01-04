import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import JourneyTimeline from '@/components/JourneyTimeline'
import DefinitionGrid from '@/components/DefinitionGrid'
import QuickNav from '@/components/QuickNav'
import FilmJourneySection from '@/components/FilmJourneySection'
import RolesSection from '@/components/RolesSection'
import BoxOfficeSection from '@/components/BoxOfficeSection'
import FansSection from '@/components/FansSection'
import GallerySection from '@/components/GallerySection'
import FinalBowSection from '@/components/FinalBowSection'

export default function Home() {
  return (
    <main className="bg-cinema-black relative text-cinema-white min-h-screen">
      {/* Cinematic Pulse Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />

      <Hero />
      <StatsSection />
      <JourneyTimeline />
      <DefinitionGrid />

      <FilmJourneySection />
      <RolesSection />
      <BoxOfficeSection />
      <FansSection />
      <GallerySection />
      <FinalBowSection />
    </main>
  )
}
