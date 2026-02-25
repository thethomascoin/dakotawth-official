import { motion, useScroll, useTransform } from 'framer-motion';
import { YouTubeHoverPlayer } from '../ui/YouTubeHoverPlayer';

export function Hero() {
    const { scrollYProgress } = useScroll();

    // Create massive oppose-scrolling text effects
    const x1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -800]);

    return (
        <section id="home" className="relative h-[110vh] w-full flex flex-col justify-center overflow-hidden z-20 bg-transparent pointer-events-none">

            <YouTubeHoverPlayer />

            {/* Main Kinetic Typography */}
            <div className="flex flex-col gap-0 leading-[0.8] mt-20 relative z-30">
                <motion.div
                    style={{ x: x1 }}
                    className="whitespace-nowrap flex"
                >
                    <h1 className="text-[12vw] md:text-[15vw] font-black text-rose-50 uppercase tracking-tighter drop-shadow-2xl pr-8">
                        DAKOTA DAKOTA DAKOTA
                    </h1>
                    <h1 className="text-[12vw] md:text-[15vw] font-black outlined-text text-white uppercase tracking-tighter">
                        DAKOTA DAKOTA DAKOTA
                    </h1>
                </motion.div>

                <motion.div
                    style={{ x: x2 }}
                    className="whitespace-nowrap flex -translate-x-[20%]"
                >
                    <h2 className="text-[12vw] md:text-[15vw] font-black outlined-text text-zinc-500 uppercase tracking-tighter pr-8">
                        WITHTHEHAT WITHTHEHAT
                    </h2>
                    <h2 className="text-[12vw] md:text-[15vw] font-black text-rose-50 uppercase tracking-tighter drop-shadow-2xl">
                        WITHTHEHAT WITHTHEHAT
                    </h2>
                </motion.div>
            </div>

            <div className="absolute bottom-32 md:bottom-32 px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-end relative z-30 pointer-events-auto mt-24">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white font-medium max-w-sm leading-relaxed text-base md:text-lg mb-8 md:mb-0 drop-shadow-md"
                >
                    An independent artist shaping the void. <br />
                    Raw R&B / Atmospheric Hip-Hop.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a href="#music" className="inline-block px-12 py-5 bg-white text-black font-syncopate font-bold text-xs tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors uppercase shadow-xl">
                        Listen Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
