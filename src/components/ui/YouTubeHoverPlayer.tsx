import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export function YouTubeHoverPlayer() {
    const [videoId, setVideoId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const ref = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Framer Motion 3D Hover Effect setup
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring configuration for smooth returning after hover
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    // Map mouse position to rotation angle
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

    useEffect(() => {
        async function fetchLatestVideo() {
            try {
                // Fetch JustCallMeDakota RSS feed via rss2json proxy to bypass CORS
                const response = await fetch(
                    'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCACh5OXnDwDkOhxC77tKXPQ'
                );
                const data = await response.json();

                if (data && data.items && data.items.length > 0) {
                    const latestVideoUrl = data.items[0].link;
                    // Extract video ID from something like: "https://www.youtube.com/watch?v=358tAMxeR54"
                    const urlObj = new URL(latestVideoUrl);
                    const id = urlObj.searchParams.get('v');
                    setVideoId(id);
                }
            } catch (error) {
                console.error('Error fetching YouTube video:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchLatestVideo();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized position -0.5 to 0.5
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (iframeRef.current && iframeRef.current.contentWindow) {
            const command = isMuted ? 'unMute' : 'mute';
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: command, args: [] }),
                '*'
            );
            setIsMuted(!isMuted);
        }
    };

    if (loading || !videoId) {
        return null; // Do not render if loading or if fetching failed
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            className="absolute top-24 right-6 md:top-32 md:right-12 z-50 w-64 md:w-80 group cursor-pointer"
            initial={{ opacity: 0, y: -20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
            <div
                className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl relative border border-white/10 bg-black/40 backdrop-blur-md"
                style={{ transform: "translateZ(30px)" }}
            >
                {/* Glow effect that follows the mouse could be added here if desired */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10 mix-blend-overlay"></div>

                <iframe
                    ref={iframeRef}
                    className="w-full h-full pointer-events-none"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&enablejsapi=1`}
                    title="Latest YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

                {/* Mute toggle button */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-2 right-2 z-20 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors pointer-events-auto cursor-pointer"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
            </div>

            {/* Label / indicator underneath */}
            <motion.div
                className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full w-fit ml-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ transform: "translateZ(20px)" }}
            >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-mono text-zinc-300 uppercase tracking-widest">
                    Latest transmission
                </span>
            </motion.div>
        </motion.div>
    );
}
