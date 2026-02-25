import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 152;
// The images are in public/assets/scroll-frames
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, '0');
  return `/assets/scroll-frames/ezgif-frame-${paddedIndex}.png`;
};

export function ScrollFrames() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Track the entire document's scroll without limiting it to a container
  const { scrollYProgress } = useScroll();

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (val: number) => {
      const index = Math.round(val);
      if (images[index] && images[index].complete) {
        // Match canvas logical size to its physical size
        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
          canvas.width = rect.width;
          canvas.height = rect.height;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const img = images[index];
        // Calculate scale (Math.max computes "cover"). We multiply by 0.85 to make it slightly smaller
        const rawScale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const scale = rawScale * 0.85;

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        // Keep it vertically centered
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        // Draw image keeping ratio
        ctx.globalAlpha = 0.5; // Blend it with the background
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const unsubscribe = currentFrameIndex.on('change', render);

    // Initial Render
    if (images.length > 0) {
      if (images[0].complete) {
        render(0);
      } else {
        images[0].onload = () => render(0);
      }
    }

    const handleResize = () => render(currentFrameIndex.get());
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, currentFrameIndex]);

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden mix-blend-screen pointer-events-none z-[1]">
      <canvas ref={canvasRef} className="w-full h-full object-cover opacity-60 filter contrast-125 saturate-50" />
    </div>
  );
}
