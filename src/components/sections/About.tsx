import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-32 relative z-10 w-full overflow-hidden bg-transparent border-b border-zinc-900">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h2 className="text-zinc-500 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Origin</h2>
                        <h3 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter uppercase font-syncopate max-w-4xl">
                            THE <br className="hidden md:block" />SOUNDSCAPE <br />OF THE <span className="text-rose-600">VOID.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="md:col-span-6 lg:col-span-5"
                    >
                        {/* Editorial style image container */}
                        <div className="w-full aspect-[3/4] bg-zinc-900 overflow-hidden relative grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-[url('/assets/chatgpt-image.png')] bg-cover bg-center mix-blend-normal opacity-90 transition-transform duration-1000 hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                        </div>
                        <div className="flex justify-between mt-4 text-xs font-syncopate text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-4">
                            <span>Fig 1.</span>
                            <span>Studio Sessions</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        className="md:col-span-6 lg:col-span-7 flex flex-col justify-center"
                    >
                        <p className="text-2xl md:text-4xl text-zinc-300 font-light leading-snug mb-12 tracking-tight">
                            Dakota withthehat isn't just a moniker. It is a carefully curated aesthetic designed for the late-night overthinkers and the relentless dreamers.
                        </p>
                        <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-16 max-w-2xl">
                            Bridging introspective R&B with raw, atmospheric hip-hop. Based in the digital ether, crafting sounds that resonate in physical spaces. Every track is a descent into the void, capturing raw emotion without the filter of traditional genre boundaries.
                        </p>

                        <div className="grid grid-cols-2 gap-12 border-t border-zinc-800 pt-12">
                            <div className="flex flex-col justify-end">
                                <div className="text-xl md:text-3xl font-black text-white font-syncopate tracking-tight mix-blend-difference mb-2 uppercase leading-tight">
                                    Completely Independent
                                </div>
                                <div className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
                                    & Self-Funded
                                </div>
                            </div>
                            <div>
                                <div className="text-6xl md:text-8xl font-black text-rose-600 font-syncopate tracking-tighter mb-2">5+</div>
                                <div className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Studio Projects</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
