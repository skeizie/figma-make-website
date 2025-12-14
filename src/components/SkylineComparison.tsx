import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SkylineComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export function SkylineComparison({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel
}: SkylineComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">
            The Transformation
          </h2>
          <p className="text-zinc-400">
            Drag the slider to compare Chicago's skyline before and after
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl cursor-col-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 right-6 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              {afterLabel}
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 left-6 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              {beforeLabel}
            </div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
              <ArrowLeft className="absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
              <ArrowRight className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
              <div className="w-8 h-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
