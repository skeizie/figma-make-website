import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Flame, Zap, BarChart3, Hammer, Users, MapPin, Clock, LineChart, TrendingUp, ImageIcon, Building2, Flag, ArrowLeftRight } from 'lucide-react';

interface TimelineItem {
  id: string;
  label: string;
  year?: string;
  icon: React.ReactNode;
  children?: TimelineItem[];
}

const timelineData: TimelineItem[] = [
  { 
    id: 'hero', 
    label: 'Prologue', 
    icon: <BookOpen className="w-3.5 h-3.5" /> 
  },
  {
    id: 'pre-fire-group',
    label: 'Pre-Fire',
    icon: <Flame className="w-3.5 h-3.5" />,
    children: [
      { id: 'pre-fire', label: 'A City of Wood', year: 'Pre-Fire', icon: <Flame className="w-3 h-3" /> },
      { id: 'the-fire', label: 'The Great Fire', year: 'Oct 8', icon: <Flame className="w-3 h-3" /> },
      {
        id: 'fire-spread',
        label: 'Fire Progression',
        year: '36 Hours',
        icon: <Zap className="w-3 h-3" />,
        children: [
          { id: 'impact', label: 'Impact & Loss', year: '1871', icon: <BarChart3 className="w-2.5 h-2.5" /> }
        ]
      }
    ]
  },
  {
    id: 'post-fire-group',
    label: 'Post-Fire',
    icon: <Building2 className="w-3.5 h-3.5" />,
    children: [
      { id: 'rebuilding', label: 'Rising from Ashes', year: 'Post-Fire', icon: <Hammer className="w-3 h-3" /> },
      { id: 'chicago-school', label: 'Chicago School', year: 'Architects', icon: <Users className="w-3 h-3" /> },
      { id: 'skyscraper-map', label: 'Skyline Map', year: 'Interactive', icon: <MapPin className="w-3 h-3" /> },
      { id: 'skyline-evolution-timeline', label: 'Evolution Timeline', year: 'Timeline', icon: <Clock className="w-3 h-3" /> },
      { id: 'skyline-evolution', label: 'Skyline Evolution', year: 'Evolution', icon: <LineChart className="w-3 h-3" /> },
      { id: 'skyline-rise', label: 'The Rise of Skyline', year: '1871-2025', icon: <TrendingUp className="w-3 h-3" /> }
    ]
  },
  {
    id: 'comparison',
    label: 'Then vs Now',
    year: 'Compare',
    icon: <ArrowLeftRight className="w-3.5 h-3.5" />,
    children: [
      { id: 'transformation', label: 'Transformation', year: 'Compare', icon: <TrendingUp className="w-3 h-3" /> },
      { id: 'modern', label: 'Legacy Lives On', year: 'Today', icon: <Flame className="w-3 h-3" /> }
    ]
  },
  {
    id: 'conclusion',
    label: 'Epilogue',
    icon: <Flag className="w-3.5 h-3.5" />
  }
];

export function ScrollTimeline() {
  const [activeSection, setActiveSection] = useState('hero');

  // Flatten all subsections (children and grandchildren) into a single array
  const getAllSubsections = (item: TimelineItem): TimelineItem[] => {
    if (!item.children) return [];
    
    const subsections: TimelineItem[] = [];
    item.children.forEach(child => {
      subsections.push(child);
      if (child.children) {
        subsections.push(...child.children);
      }
    });
    return subsections;
  };

  // Flatten all IDs for tracking
  const getAllIds = (): string[] => {
    const ids: string[] = [];
    const traverse = (items: TimelineItem[]) => {
      items.forEach(item => {
        ids.push(item.id);
        if (item.children) traverse(item.children);
      });
    };
    traverse(timelineData);
    return ids;
  };

  // Check if currently in this section or its descendants
  const isInSection = (item: TimelineItem): boolean => {
    if (activeSection === item.id) return true;
    if (!item.children) return false;
    
    const checkChildren = (children: TimelineItem[]): boolean => {
      for (const child of children) {
        if (activeSection === child.id) return true;
        if (child.children && checkChildren(child.children)) return true;
      }
      return false;
    };
    
    return checkChildren(item.children);
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const allIds = getAllIds();
      const sections = allIds
        .map(id => {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            return { id, top: rect.top, bottom: rect.bottom };
          }
          return null;
        })
        .filter(Boolean);

      if (window.scrollY < 200) {
        setActiveSection('hero');
        return;
      }

      const viewportMiddle = window.innerHeight / 2;
      let closest = sections[0];
      let closestDistance = Math.abs(sections[0]!.top - viewportMiddle);

      sections.forEach(section => {
        if (section) {
          const distance = Math.abs(section.top - viewportMiddle);
          if (distance < closestDistance && section.bottom > 0 && section.top < window.innerHeight) {
            closestDistance = distance;
            closest = section;
          }
        }
      });

      if (closest) setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to section
  const scrollToSection = (id: string) => {
    // Find the item in the timeline data
    const findItem = (items: TimelineItem[], targetId: string): TimelineItem | null => {
      for (const item of items) {
        if (item.id === targetId) return item;
        if (item.children) {
          const found = findItem(item.children, targetId);
          if (found) return found;
        }
      }
      return null;
    };

    const item = findItem(timelineData, id);
    
    // If item has children, navigate to the first child instead
    const targetId = item && item.children && item.children.length > 0 
      ? item.children[0].id 
      : id;
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[999] hidden lg:block">
      <nav className="relative flex flex-col gap-3" aria-label="Timeline navigation">
        {timelineData.map((item, index) => {
          const isActive = activeSection === item.id;
          const inSection = isInSection(item);
          const subsections = getAllSubsections(item);

          return (
            <div key={item.id} className="relative">
              <div className="flex items-center gap-2 group/parent">
                {/* Main Timeline Dot */}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300 bg-black hover:scale-110"
                  style={{
                    borderColor: inSection ? '#FF4254' : '#27272a',
                    backgroundColor: isActive ? '#FF4254' : '#000',
                  }}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <div
                    className="transition-colors duration-300"
                    style={{
                      color: isActive ? '#000' : inSection ? '#FF4254' : '#71717a',
                    }}
                  >
                    {item.icon}
                  </div>
                </button>

                {/* Subsection Dots - All children and grandchildren */}
                {subsections.length > 0 && (
                  <div className="flex gap-1.5 items-center relative group/parent-hover">
                    {subsections.map((subsection, subIndex) => {
                      const isSubActive = activeSection === subsection.id;
                      
                      return (
                        <div key={subsection.id} className="relative group/dot">
                          <motion.button
                            onClick={() => scrollToSection(subsection.id)}
                            className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-150"
                            style={{
                              backgroundColor: isSubActive ? '#FF4254' : inSection ? 'rgba(255, 66, 84, 0.4)' : '#3f3f46',
                            }}
                            animate={{
                              scale: isSubActive ? 1.3 : 1,
                              opacity: isSubActive ? 1 : inSection ? 0.7 : 0.5,
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            aria-label={`Navigate to ${subsection.label}`}
                          />

                          {/* Active glow for subsection dot */}
                          {isSubActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full pointer-events-none"
                              style={{
                                background: 'radial-gradient(circle, rgba(255, 66, 84, 0.6) 0%, transparent 70%)',
                                filter: 'blur(4px)',
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1.5 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}

                          {/* Tooltip for subsection dot */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover/dot:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-[9999]">
                            <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 rounded px-2 py-1 shadow-xl">
                              {subsection.year && (
                                <div className="text-[8px] uppercase tracking-wider mb-0.5" style={{ color: '#FF4254' }}>
                                  {subsection.year}
                                </div>
                              )}
                              <div className="text-[10px] text-white">{subsection.label}</div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full -mb-0.5 w-1 h-1 bg-zinc-900/95 border-t border-l border-zinc-700/50 rotate-45" />
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Parent tooltip - positioned after last dot */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover/parent:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-[9999]">
                      <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 rounded px-2.5 py-1.5 shadow-xl">
                        {item.year && (
                          <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: '#FF4254' }}>
                            {item.year}
                          </div>
                        )}
                        <div className="text-xs text-white">{item.label}</div>
                        {subsections.length > 0 && (
                          <div className="text-[9px] text-zinc-400 mt-1">
                            {subsections.length} {subsections.length === 1 ? 'section' : 'sections'}
                          </div>
                        )}
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 bg-zinc-900/95 border-l border-b border-zinc-700/50 rotate-45" />
                    </div>
                  </div>
                )}
                
                {/* Parent tooltip for sections without subsections - next to icon */}
                {subsections.length === 0 && (
                  <div className="absolute left-11 top-1/2 -translate-y-1/2 opacity-0 group-hover/parent:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-[9999]">
                    <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 rounded px-2.5 py-1.5 shadow-xl">
                      {item.year && (
                        <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: '#FF4254' }}>
                          {item.year}
                        </div>
                      )}
                      <div className="text-xs text-white">{item.label}</div>
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 bg-zinc-900/95 border-l border-b border-zinc-700/50 rotate-45" />
                  </div>
                )}
              </div>

              {/* Active indicator glow */}
              {isActive && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute left-0 top-0 w-7 h-7 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 66, 84, 0.3) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}