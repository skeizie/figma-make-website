import { motion } from 'motion/react';
import { useState } from 'react';
import Layer1 from '../imports/Layer1';

interface SkylineData {
  year: string;
  height: number; // relative height multiplier
  description: string;
  buildings: string;
  avgHeight: string;
}

const skylineData: SkylineData[] = [
  {
    year: 'Pre-1871',
    height: 0.3,
    description: 'Pre-Fire Chicago',
    buildings: 'Wooden structures, church spires',
    avgHeight: '2-4 stories'
  },
  {
    year: '1880',
    height: 0.45,
    description: 'Early Reconstruction',
    buildings: 'First fireproof buildings, masonry construction',
    avgHeight: '4-6 stories'
  },
  {
    year: '1893',
    height: 0.65,
    description: 'World\'s Fair Era',
    buildings: 'Early steel-frame buildings, Chicago School emerges',
    avgHeight: '10-16 stories'
  },
  {
    year: '1920',
    height: 0.85,
    description: 'Skyscraper Boom',
    buildings: 'Wrigley Building, Tribune Tower',
    avgHeight: '20-35 stories'
  },
  {
    year: 'Today',
    height: 1.0,
    description: 'Modern Metropolis',
    buildings: 'Willis Tower, John Hancock, modern high-rises',
    avgHeight: '40-110 stories'
  }
];

export function SkylineEvolutionTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate a simple skyline silhouette based on height
  const generateSkyline = (heightMultiplier: number, index: number) => {
    const baseHeight = 200;
    const maxHeight = baseHeight * heightMultiplier;
    const buildings = 8;
    
    let path = 'M 0 200 ';
    
    for (let i = 0; i < buildings; i++) {
      const buildingWidth = 300 / buildings;
      const x = i * buildingWidth;
      const variation = Math.sin(i * 0.7 + index) * 0.3 + 0.7;
      const buildingHeight = maxHeight * variation;
      const y = 200 - buildingHeight;
      
      path += `L ${x} ${y} L ${x + buildingWidth - 2} ${y} L ${x + buildingWidth - 2} 200 `;
    }
    
    path += 'L 300 200 Z';
    return path;
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Skyline Evolution</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Watch how Chicago's skyline transformed from a low wooden frontier town to a soaring steel metropolis
          </p>
        </motion.div>

        <div className="space-y-12">
          {skylineData.map((data, index) => (
            <motion.div
              key={data.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-8">
                {/* Year Label */}
                <motion.div
                  className="w-24 text-right transition-colors duration-300 whitespace-nowrap"
                  style={{
                    color: hoveredIndex === index ? '#FF4254' : '#71717a'
                  }}
                >
                  <span className="text-2xl font-bold">{data.year}</span>
                </motion.div>

                {/* Skyline Outline */}
                <div className="flex-1 relative">
                  {index === 0 ? (
                    <div 
                      className="h-32 transition-all duration-300 cursor-pointer flex items-center justify-center"
                      style={{
                        '--stroke-0': hoveredIndex === index ? '#FF4254' : '#52525b'
                      } as React.CSSProperties}
                    >
                      <Layer1 />
                    </div>
                  ) : (
                    <svg
                      viewBox="0 0 300 200"
                      className="w-full h-32 transition-all duration-300 cursor-pointer"
                      preserveAspectRatio="xMidYMax meet"
                    >
                      <path
                        d={generateSkyline(data.height, index)}
                        className="transition-all duration-300"
                        fill="none"
                        stroke={hoveredIndex === index ? '#FF4254' : '#52525b'}
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  )}

                  {/* Info Box on Hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 right-0 bg-zinc-900/95 border border-zinc-800 rounded-lg p-4 min-w-[280px] pointer-events-none z-10"
                    style={{
                      visibility: hoveredIndex === index ? 'visible' : 'hidden'
                    }}
                  >
                    <h3 className="text-white mb-2" style={{ fontSize: '1rem' }}>
                      {data.description}
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-zinc-400">
                        <span className="text-zinc-500">Buildings:</span> {data.buildings}
                      </p>
                      <p className="text-zinc-400">
                        <span className="text-zinc-500">Avg Height:</span> {data.avgHeight}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Horizontal line separator */}
              {index < skylineData.length - 1 && (
                <div className="mt-8 ml-32 border-t border-zinc-800/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
