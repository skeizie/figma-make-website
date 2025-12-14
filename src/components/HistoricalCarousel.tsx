import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface HistoricalImage {
  url: string;
  title: string;
  description: string;
  year: string;
}

const historicalImages: HistoricalImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1603884297805-3771efe4f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMENoaWNhZ28lMjAxODAwc3xlbnwxfHx8fDE3NjI2NjQyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Historic Chicago Architecture',
    description: 'Early Chicago featured predominantly wooden construction, with buildings rarely exceeding four stories. The city\'s rapid growth meant construction prioritized speed and economy over fire safety.',
    year: 'Mid-1800s'
  },
  {
    url: 'https://images.unsplash.com/photo-1674603777036-19a0c8b0772d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBDaGljYWdvJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjY2NDI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Commercial District',
    description: 'Chicago\'s commercial heart was densely packed with wooden storefronts and warehouses. The proximity of buildings and use of flammable materials created ideal conditions for fire spread.',
    year: '1860s-1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1485346158292-127cc6655324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwQ2hpY2FnbyUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NjI2NjQyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Residential Neighborhoods',
    description: 'Working-class neighborhoods featured tightly-packed wooden cottages and shanties. Streets were often wooden planks, and even sidewalks were constructed from pine boards.',
    year: '1850s-1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1663440586755-125a5b521b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMHdvb2RlbiUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NjI2NjQyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Wooden Infrastructure',
    description: 'Chicago\'s infrastructure was primarily wooden - from bridges to water towers. Even the city courthouse, its tallest building at 87 feet, relied heavily on timber construction.',
    year: 'Pre-1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1685702232231-aaeff6a32cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxODAwcyUyMGZyb250aWVyJTIwdG93bnxlbnwxfHx8fDE3NjI2NjQyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Frontier Origins',
    description: 'Chicago began as a frontier town with simple wooden structures. Its transformation from a settlement of 30,000 in the 1850s to over 300,000 by 1871 happened too quickly for infrastructure to keep pace.',
    year: '1830s-1850s'
  },
  {
    url: 'https://images.unsplash.com/photo-1593532957543-79f01d0db8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMENoaWNhZ28lMjBzdHJlZXR8ZW58MXx8fHwxNzYyNjY0Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Street Life',
    description: 'Pre-fire Chicago streets bustled with commerce and activity. The dry summer of 1871 had left the wooden city especially vulnerable, with less than three inches of rain in three months.',
    year: '1871'
  },
];

export function HistoricalCarousel() {
  const [selectedImage, setSelectedImage] = useState<HistoricalImage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [manualScrollX, setManualScrollX] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isHovered) return;
      
      e.preventDefault();
      
      setManualScrollX((prevX) => {
        const newX = prevX - e.deltaY;
        const containerWidth = container.scrollWidth / 2;
        
        // Loop back when reaching the end
        if (newX < -containerWidth) {
          return 0;
        } else if (newX > 0) {
          return -containerWidth;
        }
        
        return newX;
      });
    };

    const outerContainer = container.parentElement;
    if (outerContainer) {
      outerContainer.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        outerContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isHovered]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setManualScrollX(0);
        }}
      >
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .manual-scroll {
            animation: none !important;
          }
        `}</style>
        
        <div 
          ref={scrollContainerRef} 
          className={`flex gap-6 ${isHovered ? 'manual-scroll' : 'animate-scroll'}`}
          style={isHovered ? { transform: `translateX(${manualScrollX}px)` } : undefined}
        >
          {/* First set of images */}
          {historicalImages.map((image, index) => (
            <button
              key={`img-1-${index}`}
              onClick={() => setSelectedImage(image)}
              className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </button>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {historicalImages.map((image, index) => (
            <button
              key={`img-2-${index}`}
              onClick={() => setSelectedImage(image)}
              className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </button>
          ))}
        </div>
        
        {/* Gradient overlays to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </motion.div>

      {/* Image Detail Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle style={{ color: '#FF4254' }}>{selectedImage?.title}</DialogTitle>
            <DialogDescription className="text-zinc-400">
              {selectedImage?.year}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-zinc-800">
              {selectedImage && (
                <ImageWithFallback
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 object-cover"
                />
              )}
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {selectedImage?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}