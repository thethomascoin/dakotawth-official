import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Music() {
    const tracks = [
        { title: "My Valentine (feat. Kid Wavy)", tag: "SINGLE", year: "2024", url: "https://www.youtube.com/@JustCallMeDakota/releases" },
        { title: "No Responsibilities", tag: "SINGLE", year: "2024", url: "https://www.youtube.com/@JustCallMeDakota/releases" },
        { title: "Dakota on Spotify", tag: "SPOTIFY", year: "LIVE", url: "https://open.spotify.com/search/JustCallMeDakota" },
        { title: "Dakota on Apple Music", tag: "APPLE", year: "LIVE", url: "https://music.apple.com/us/search?term=JustCallMeDakota" },
        { title: "Dakota on YouTube", tag: "YOUTUBE", year: "LIVE", url: "https://www.youtube.com/@JustCallMeDakota" },
    ];

    return (
        <section id="music" className="py-32 relative z-10 w-full bg-transparent border-b border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">

                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black text-white uppercase font-syncopate tracking-tighter leading-none"
                    >
                        DISCOGRAPHY
                    </motion.h2>
                </div>

                <div className="w-full">
                    {tracks.map((track, i) => (
                        <motion.a
                            key={i}
                            href={track.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group border-t border-zinc-800 last:border-b py-8 md:py-12 cursor-pointer relative overflow-hidden block"
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                                    <span className="text-zinc-500 font-syncopate font-bold text-sm tracking-widest group-hover:text-zinc-600 transition-colors">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-black text-white group-hover:text-black tracking-tighter transition-colors">
                                        {track.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8 md:gap-16">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 group-hover:text-zinc-600 uppercase">
                                            {track.tag}
                                        </span>
                                        <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 group-hover:text-zinc-600 uppercase">
                                            {track.year}
                                        </span>
                                    </div>

                                    <div className="w-12 h-12 rounded-full border border-zinc-800 group-hover:border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
}
