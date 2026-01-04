import MotionWrapper from '@/components/MotionWrapper'

export default function Legacy() {
    return (
        <MotionWrapper>
            <section className="min-h-screen pt-32 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gold mb-10 drop-shadow-md">
                    Legacy
                </h2>
                <div className="bg-navy-light/50 p-8 rounded-2xl border border-gold/10 backdrop-blur-md shadow-2xl">
                    <p className="text-gray-300 leading-8 text-lg md:text-xl font-light">
                        Vijay is not just an actor — he is an <span className="text-peach font-normal">emotion</span>.
                        His movies shaped youth, inspired voices, and united millions across cultures and borders.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-navy rounded-xl border border-white/5">
                            <h3 className="text-gold font-bold text-xl">30+ Years</h3>
                            <p className="text-sm text-gray-400">Of Cinema</p>
                        </div>
                        <div className="p-4 bg-navy rounded-xl border border-white/5">
                            <h3 className="text-gold font-bold text-xl">68 Films</h3>
                            <p className="text-sm text-gray-400">And counting</p>
                        </div>
                        <div className="p-4 bg-navy rounded-xl border border-white/5">
                            <h3 className="text-gold font-bold text-xl">Millions</h3>
                            <p className="text-sm text-gray-400">Of Fans</p>
                        </div>
                    </div>
                </div>
            </section>
        </MotionWrapper>
    )
}
