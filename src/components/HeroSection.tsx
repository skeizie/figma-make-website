import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/e7694b77d28a33b4508e43f03afad2ca34f727da.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-12">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black z-0" 
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content - Below the image */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white mb-1"
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}
        >
          Chicago Skyline
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="text-sm" style={{ 
            color: '#D1D1D6', 
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: '700',
            letterSpacing: '0.05em'
          }}>
            Rising from the Ashes
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-zinc-300 mb-12 max-w-3xl mx-auto"
        >
          A story of destruction and rebirth. How one devastating fire transformed Chicago's skyline from a wooden frontier town into the modern steel metropolis we know today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/70 mx-auto animate-bounce" />
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
    </section>
  );
}