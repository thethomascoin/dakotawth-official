import { useState, useEffect } from 'react';

export const useScrollSequence = (frameCount: number) => {
    const [frameIndex, setFrameIndex] = useState(1);

    useEffect(() => {
        // Pre-load images into browser cache for 60Hz performance
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/assets/scroll-frames/frame_${i.toString().padStart(3, '0')}.png`;
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            let scrollFraction = 0;

            if (maxScroll > 0) {
                scrollFraction = scrollTop / maxScroll;
            }

            // Map scroll progress to image index (1 to frameCount)
            let index = Math.floor(scrollFraction * frameCount) + 1;
            if (index > frameCount) {
                index = frameCount;
            }
            if (index < 1) {
                index = 1;
            }

            setFrameIndex(index);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [frameCount]);

    return frameIndex;
};
