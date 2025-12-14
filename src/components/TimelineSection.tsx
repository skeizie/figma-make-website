import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';
import { Building2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface TimelineSectionProps {
  year?: string;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  children?: ReactNode;
  reference?: string;
  showSkyscraperBadges?: boolean;
  imageCaption?: string;
}

export function TimelineSection({
  year,
  title,
  description,
  imageUrl,
  reverse = false,
  children,
  reference,
  showSkyscraperBadges = false,
  imageCaption,
}: TimelineSectionProps) {
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);

  // Parse references - split by pipe and extract URLs
  const parseReferences = (refString: string) => {
    return refString.split('|').map(ref => ref.trim()).map(ref => {
      // Check if there's a "Retrieved from" pattern
      const urlMatch = ref.match(/Retrieved from (https?:\/\/[^\s]+)/);
      if (urlMatch) {
        const url = urlMatch[1];
        const text = ref.replace(/Retrieved from https?:\/\/[^\s]+/, '').trim();
        return { text, url };
      }
      return { text: ref, url: null };
    });
  };

  const references = reference ? parseReferences(reference) : [];

  return (
    <>
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`min-h-screen flex items-center py-20 px-6 ${
        reverse ? 'bg-black' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={reverse ? 'md:order-2' : 'md:order-1'}
          >
            {year && (
              <div className="mb-4 tracking-widest" style={{ color: '#FF4254' }}>
                {year}
              </div>
            )}
            <h2 className="text-white mb-6">
              {title}
            </h2>
            <div className="relative mb-6">
              <p className="text-zinc-400 leading-relaxed inline">
                {description}
              </p>
              {reference && (
                <motion.button
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onClick={() => setIsReferenceOpen(true)}
                  className="inline-block w-2 h-2 rounded-full ml-1 align-middle cursor-pointer hover:scale-150 transition-transform"
                  style={{ backgroundColor: '#FF4254' }}
                  title="View reference"
                  aria-label="View reference"
                />
              )}
            </div>
            
            {showSkyscraperBadges && (
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg">
                  <Building2 className="w-5 h-5" style={{ color: '#FF4254' }} />
                  <span className="text-white">Steel Frame Construction</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg">
                  <Building2 className="w-5 h-5" style={{ color: '#FF4254' }} />
                  <span className="text-white">Birth of the Skyscrapers</span>
                </div>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={reverse ? 'md:order-1' : 'md:order-2'}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-contain"
              />
              {imageCaption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-zinc-300 text-sm p-2">
                  {imageCaption}
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {children && (
          <div className="w-full mt-16">
            {children}
          </div>
        )}
      </div>
    </motion.section>

    {reference && (
      <Dialog open={isReferenceOpen} onOpenChange={setIsReferenceOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle style={{ color: '#FF4254' }}>References</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Source information for "{title}"
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div key={index} className="text-zinc-300 leading-relaxed">
                <span className="inline-block w-6 text-zinc-500">{index + 1}.</span>
                <span className="inline">
                  {ref.text}
                  {ref.url && (
                    <>
                      {' '}
                      <a 
                        href={ref.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline transition-colors"
                        style={{ color: '#FF4254' }}
                      >
                        {ref.url}
                      </a>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
}