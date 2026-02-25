import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Social() {
    const socials = [
        { name: "INSTAGRAM", handle: "@JustCallMeDakota", url: "https://instagram.com/JustCallMeDakota" },
        { name: "YOUTUBE", handle: "@JustCallMeDakota", url: "https://www.youtube.com/@JustCallMeDakota" },
        { name: "SPOTIFY", handle: "Dakota withthehat", url: "https://open.spotify.com/search/JustCallMeDakota" },
        { name: "APPLE MUSIC", handle: "Dakota withthehat", url: "https://music.apple.com/us/search?term=JustCallMeDakota" }
    ];

    return (
        <section id="connect" className="py-32 relative z-10 w-full overflow-hidden bg-transparent">

            {/* Infinite Marquee text */}
            <div className="w-full overflow-hidden flex whitespace-nowrap mb-24 opacity-20">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="text-[12vw] font-black font-syncopate uppercase tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "2px #52525b" }}
                >
                    CONNECT CONNECT CONNECT CONNECT CONNECT CONNECT
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.3em] uppercase text-xs">Direct Link</h2>
                    <div className="flex flex-col gap-1">
                        <a href="mailto:daddyturtle23@gmail.com" className="text-2xl md:text-5xl font-black text-white font-syncopate uppercase tracking-tighter hover:text-rose-500 transition-colors cursor-pointer break-all">
                            DADDYTURTLE23<br />@GMAIL<br />.COM
                        </a>
                    </div>
                    <p className="text-zinc-500 font-light mt-4 text-xs font-syncopate tracking-[0.1em] uppercase">
                        Booking & Features
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4"
                >
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href="#"
                            className="group flex justify-between items-center py-4 border-b border-zinc-900 border-zinc-800 hover:border-zinc-500 transition-colors"
                        >
                            <span className="text-zinc-400 group-hover:text-white font-bold tracking-[0.2em] font-syncopate text-xs transition-colors">
                                {social.name}
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="text-zinc-600 font-light text-xs">{social.handle}</span>
                                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
