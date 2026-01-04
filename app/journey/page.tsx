import MotionWrapper from '@/components/MotionWrapper'

export default function Journey() {
    return (
        <MotionWrapper>
            <section className="min-h-screen pt-32 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gold mb-10 drop-shadow-md">
                    The Journey
                </h2>
                <div className="bg-navy-light/50 p-8 rounded-2xl border border-gold/10 backdrop-blur-md shadow-2xl">
                    <p className="text-gray-300 leading-8 text-lg md:text-xl font-light">
                        From a child artist to a global icon, <strong>Vijay’s</strong> journey is filled with
                        perseverance, evolution, and unmatched fan love. Every decade brought
                        a new version of him — actor, dancer, performer, leader.
                    </p>
                    <p className="mt-6 text-gray-300 leading-8 text-lg md:text-xl font-light">
                        He redefined mass cinema, blending style with substance, and creating
                        records that stand tall in Indian cinema history.
                    </p>
                </div>
            </section>
        </MotionWrapper>
    )
}
