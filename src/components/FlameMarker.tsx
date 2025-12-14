import { motion } from 'motion/react';
import { Flame } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface FlameMarkerProps {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  imageUrl?: string;
  imageTitle?: string;
  imageDescription?: string;
}

export function FlameMarker({ 
  position = { left: '20%', top: '50%' }, 
  imageUrl,
  imageTitle = "Historical Image",
  imageDescription = "Click to view details"
}: FlameMarkerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="absolute z-20 cursor-pointer"
        style={{ ...position, transform: 'scale(1.1)' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1.1, 1.32, 1.1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => imageUrl && setIsOpen(true)}
      >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ backgroundColor: '#facc15' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md"
        style={{ backgroundColor: '#facc15' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      />

      {/* Flame icon */}
      <div
        className="relative rounded-full p-1.5 border"
        style={{ 
          backgroundColor: '#facc15',
          borderColor: '#FF4254'
        }}
      >
        <Flame className="w-3 h-3" style={{ color: '#FF4254' }} fill="#FF4254" />
      </div>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: '#facc15' }}
        animate={{
          scale: [1, 2, 2],
          opacity: [1, 0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.div>

    {/* Image Dialog Popup */}
    {imageUrl && (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle style={{ color: '#FF4254' }}>{imageTitle}</DialogTitle>
            <DialogDescription className="text-zinc-400">
              {imageDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ImageWithFallback
              src={imageUrl}
              alt={imageTitle}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
}
