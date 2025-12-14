import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Building2, Ruler, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import React from 'react';

const architects = [
  {
    name: 'Louis Sullivan',
    title: 'Father of Modernism',
    philosophy: '"Form follows function"',
    description: 'Pioneer of the tall office building and creator of ornamental terracotta facades that defined Chicago\'s architectural identity. His designs merged structural innovation with artistic beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1616617963476-6a2fb0eee688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI5MDY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Compass,
    notableWorks: 'Auditorium Building, Carson Pirie Scott Building, Guaranty Building',
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1616617963476-6a2fb0eee688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI5MDY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Philosophy',
      },
      {
        image: 'https://images.unsplash.com/photo-1741973944275-cbdfb806157b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwYXVkaXRvcml1bSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjkxMjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Major Works',
      },
      {
        image: 'https://images.unsplash.com/photo-1760510463110-b5a1b25c1b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcm5hdGUlMjBidWlsZGluZyUyMGRldGFpbGlzfGVufDF8fHx8MTc2MjkxMjY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Legacy',
      },
    ],
  },
  {
    name: 'Daniel Burnham',
    title: 'Master Planner',
    philosophy: '"Make no little plans"',
    description: 'Visionary architect and urban planner who gave Chicago its grandeur. He orchestrated the 1893 World\'s Columbian Exposition and created the influential Burnham Plan that still shapes the city.',
    imageUrl: 'https://images.unsplash.com/photo-1563273026-d342cef8f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwZmFjYWRlfGVufDF8fHx8MTc2Mjg1Mjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Building2,
    notableWorks: 'Flatiron Building, Monadnock Building, Reliance Building',
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1563273026-d342cef8f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwZmFjYWRlfGVufDF8fHx8MTc2Mjg1Mjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Visionary',
      },
      {
        image: 'https://images.unsplash.com/photo-1555182028-3335505b2dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0aXJvbiUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjkxMjY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Buildings',
      },
      {
        image: 'https://images.unsplash.com/photo-1563273026-d342cef8f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwZmFjYWRlfGVufDF8fHx8MTc2Mjg1Mjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'City Planning',
      },
    ],
  },
  {
    name: 'William Le Baron Jenney',
    title: 'Engineering Pioneer',
    philosophy: 'Steel frame innovation',
    description: 'Revolutionary engineer who pioneered the use of steel-frame construction, enabling buildings to rise higher than ever before. His innovations made the modern skyscraper possible.',
    imageUrl: 'https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJjaGl0ZWN0JTIwYmx1ZXByaW50c3xlbnwxfHx8fDE3NjI5MDY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Ruler,
    notableWorks: 'Home Insurance Building, Manhattan Building, Ludington Building',
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJjaGl0ZWN0JTIwYmx1ZXByaW50c3xlbnwxfHx8fDE3NjI5MDY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Engineer',
      },
      {
        image: 'https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyOTEyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Innovation',
      },
      {
        image: 'https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyOTEyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Impact',
      },
    ],
  },
  {
    name: 'John Wellborn Root',
    title: 'Structural Innovator',
    philosophy: 'Elegance through engineering',
    description: 'Brilliant structural engineer and designer who brought artistic sensitivity to technical innovation. His buildings combined elegant aesthetics with groundbreaking engineering solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1746043730852-33316de8af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwYnVpbGRpbmclMjBvcm5hdGUlMjBkZXRhaWx8ZW58MXx8fHwxNzYyOTA2NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Building2,
    notableWorks: 'Rookery Building, Monadnock Building, Masonic Temple',
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1746043730852-33316de8af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwYnVpbGRpbmclMjBvcm5hdGUlMjBkZXRhaWx8ZW58MXx8fHwxNzYyOTA2NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Designer',
      },
      {
        image: 'https://images.unsplash.com/photo-1635722786976-dcb76f092a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29rZXJ5JTIwYnVpbGRpbmclMjBjaGljYWdvfGVufDF8fHx8MTc2MjkxMjY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Masterworks',
      },
      {
        image: 'https://images.unsplash.com/photo-1746043730852-33316de8af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwYnVpbGRpbmclMjBvcm5hdGUlMjBkZXRhaWx8ZW58MXx8fHwxNzYyOTA2NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Influence',
      },
    ],
  },
  {
    name: 'Dankmar Adler',
    title: 'Engineering Genius',
    philosophy: 'Acoustics & foundations master',
    description: 'Engineering mastermind who partnered with Louis Sullivan. His revolutionary solutions in acoustics and foundation engineering enabled the construction of Chicago\'s grandest buildings.',
    imageUrl: 'https://images.unsplash.com/photo-1717445130372-e50b9b45a669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMHNrZXRjaHxlbnwxfHx8fDE3NjI5MDY0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Compass,
    notableWorks: 'Auditorium Building, Chicago Stock Exchange, Central Music Hall',
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1717445130372-e50b9b45a669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMHNrZXRjaHxlbnwxfHx8fDE3NjI5MDY0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Partnership',
      },
      {
        image: 'https://images.unsplash.com/photo-1741973944275-cbdfb806157b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwYXVkaXRvcml1bSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjkxMjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Acoustics',
      },
      {
        image: 'https://images.unsplash.com/photo-1717445130372-e50b9b45a669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMHNrZXRjaHxlbnwxfHx8fDE3NjI5MDY0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Contribution',
      },
    ],
  },
];

export function ArchitectsSection() {
  const [selectedArchitect, setSelectedArchitect] = useState<typeof architects[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);

  const handleArchitectClick = (architect: typeof architects[0]) => {
    setSelectedArchitect(architect);
    setCurrentSlide(0);
  };

  const handleCloseDialog = () => {
    setSelectedArchitect(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedArchitect && currentSlide < selectedArchitect.slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setDirection(slideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #FF4254 2px, #FF4254 3px)`,
          backgroundSize: '100% 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4 tracking-widest" style={{ color: '#FF4254' }}>
            1880s-1910s
          </div>
          <h2 className="text-white mb-6">
            The Chicago School: Architects of Innovation
          </h2>
          <div className="relative inline-block">
            <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed inline">
              The devastation created by the Great Fire made Chicago a blank canvas for architectural experimentation. A group of visionary architects emerged to define what became known as the Chicago School of Architecture—inventing the modern city and establishing principles that would define skylines worldwide for generations to come.
            </p>
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
          </div>
        </motion.div>

        {/* Architects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {architects.slice(0, 3).map((architect, index) => {
            const Icon = architect.icon;
            return (
              <motion.div
                key={architect.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => handleArchitectClick(architect)}
              >
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF4254] transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={architect.imageUrl}
                      alt={architect.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 bg-[#FF4254]/20 backdrop-blur-sm p-3 rounded-full border border-[#FF4254]/50">
                      <Icon className="w-6 h-6" style={{ color: '#FF4254' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white mb-1">{architect.name}</h3>
                    <p className="text-zinc-400 text-sm mb-2">{architect.title}</p>
                    <div className="text-xs italic" style={{ color: '#FF4254' }}>
                      {architect.philosophy}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#FF4254]/0 group-hover:bg-[#FF4254]/10 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom two architects - wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {architects.slice(3, 5).map((architect, index) => {
            const Icon = architect.icon;
            return (
              <motion.div
                key={architect.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer h-64"
                onClick={() => handleArchitectClick(architect)}
              >
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF4254] transition-all duration-300 flex h-full">
                  {/* Image */}
                  <div className="relative w-2/5 overflow-hidden">
                    <img
                      src={architect.imageUrl}
                      alt={architect.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900" />
                  </div>

                  {/* Content */}
                  <div className="w-3/5 p-6 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white mb-1">{architect.name}</h3>
                        <p className="text-zinc-400 text-sm">{architect.title}</p>
                      </div>
                      <div className="bg-[#FF4254]/20 backdrop-blur-sm p-2 rounded-full border border-[#FF4254]/50">
                        <Icon className="w-5 h-5" style={{ color: '#FF4254' }} />
                      </div>
                    </div>
                    <div className="text-xs italic mb-3" style={{ color: '#FF4254' }}>
                      {architect.philosophy}
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-3">
                      {architect.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#FF4254]/0 group-hover:bg-[#FF4254]/10 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Architect Detail Dialog */}
      <Dialog open={!!selectedArchitect} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-2xl bg-zinc-950 border-zinc-800">
          {selectedArchitect && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-2xl flex items-center gap-3">
                  {React.createElement(selectedArchitect.icon, { 
                    className: "w-6 h-6",
                    style: { color: '#FF4254' }
                  })}
                  {selectedArchitect.name}
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  {selectedArchitect.title}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={selectedArchitect.slides[currentSlide].image}
                      alt={selectedArchitect.slides[currentSlide].title}
                      className="w-full h-64 object-cover rounded-lg mb-3"
                    />
                    
                    {/* Navigation Controls - Under the image */}
                    <div className="flex items-center justify-between px-2 mb-6">
                      <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800 hover:border-[#FF4254] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-zinc-800 transition-all"
                      >
                        <ChevronLeft className="w-3 h-3" style={{ color: currentSlide === 0 ? '#71717a' : '#FF4254' }} />
                        <span className="text-zinc-400 text-xs">Prev</span>
                      </button>

                      {/* Page Indicators */}
                      <div className="flex gap-1.5">
                        {selectedArchitect.slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="w-1.5 h-1.5 rounded-full transition-all"
                            style={{
                              backgroundColor: index === currentSlide ? '#FF4254' : '#3f3f46',
                              transform: index === currentSlide ? 'scale(1.3)' : 'scale(1)',
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextSlide}
                        disabled={currentSlide === selectedArchitect.slides.length - 1}
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800 hover:border-[#FF4254] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-zinc-800 transition-all"
                      >
                        <span className="text-zinc-400 text-xs">Next</span>
                        <ChevronRight className="w-3 h-3" style={{ color: currentSlide === selectedArchitect.slides.length - 1 ? '#71717a' : '#FF4254' }} />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="mb-4 p-4 bg-zinc-900/50 rounded-lg border-l-4" style={{ borderColor: '#FF4254' }}>
                  <p className="italic text-zinc-300">{selectedArchitect.philosophy}</p>
                </div>
                
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {selectedArchitect.description}
                </p>
                
                <div className="bg-zinc-900/30 p-4 rounded-lg">
                  <h4 className="text-white mb-2">Notable Works</h4>
                  <p className="text-zinc-400 text-sm">{selectedArchitect.notableWorks}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Reference Dialog */}
      <Dialog open={isReferenceOpen} onOpenChange={setIsReferenceOpen}>
        <DialogContent className="max-w-2xl bg-zinc-950 border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-white">References</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Sources and citations for the Chicago School of Architecture
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-zinc-300 leading-relaxed space-y-4">
            <p className="text-sm">
              Condit, C. W. (1964). <em>The Chicago School of Architecture: A History of Commercial and Public Building in the Chicago Area, 1875-1925</em>. University of Chicago Press.
            </p>
            <p className="text-sm">
              Bruegmann, R. (2005). <em>The Architects and the City: Holabird & Roche of Chicago, 1880-1918</em>. University of Chicago Press.
            </p>
            <p className="text-sm">
              Larson, G. R., & Pridmore, J. (1993). <em>Chicago Architecture and Design</em>. Harry N. Abrams.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}