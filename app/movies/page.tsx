import { movies } from '@/data/movies'
import AntiGravityCard from '@/components/AntiGravityCard'
import MotionWrapper from '@/components/MotionWrapper'

export default function Movies() {
    return (
        <MotionWrapper>
            <section className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gold mb-14 text-center tracking-tight drop-shadow-lg">
                    Blockbuster Era
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-20">
                    {movies.map((movie, i) => (
                        <AntiGravityCard
                            key={i}
                            title={movie.title}
                            year={movie.year}
                            tag={movie.verdict || movie.category}
                        />
                    ))}
                </div>
            </section>
        </MotionWrapper>
    )
}
