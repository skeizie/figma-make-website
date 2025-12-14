import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Ruler } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Building {
  id: string;
  name: string;
  year: string;
  height: string;
  architect: string;
  story: string;
  imageUrl: string;
  lat: number;
  lng: number;
}

const buildings: Building[] = [
  {
    id: 'willis',
    name: 'Willis Tower',
    year: '1973',
    height: '442.1 m (1,450 ft)',
    architect: 'Skidmore, Owings & Merrill',
    story: 'Formerly known as the Sears Tower, this iconic structure held the title of the world\'s tallest building for 25 years. Its bundled tube design revolutionized skyscraper engineering and remains one of Chicago\'s most recognizable landmarks.',
    imageUrl: 'https://images.unsplash.com/photo-1594090564380-c8ed4103ceba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxsaXMlMjB0b3dlciUyMGNoaWNhZ298ZW58MXx8fHwxNzY0MDAxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8789,
    lng: -87.6359
  },
  {
    id: 'hancock',
    name: 'John Hancock Center',
    year: '1969',
    height: '344 m (1,128 ft)',
    architect: 'Skidmore, Owings & Merrill',
    story: 'With its distinctive X-bracing visible on the exterior, the John Hancock Center pioneered the use of a structural system that allowed for both commercial and residential spaces in one tower. The observation deck offers breathtaking views of Lake Michigan.',
    imageUrl: 'https://images.unsplash.com/photo-1540683393417-ed857b2f24f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2huJTIwaGFuY29jayUyMGNlbnRlciUyMGNoaWNhZ298ZW58MXx8fHwxNzY0MDAxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8989,
    lng: -87.6230
  },
  {
    id: 'tribune',
    name: 'Tribune Tower',
    year: '1925',
    height: '141 m (463 ft)',
    architect: 'Raymond Hood & John Mead Howells',
    story: 'A Neo-Gothic masterpiece that emerged from an international design competition, Tribune Tower features stones from famous structures worldwide embedded in its walls, including pieces from the Taj Mahal, the Parthenon, and the Great Wall of China.',
    imageUrl: 'https://images.unsplash.com/photo-1548260616-56338becfa17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlidW5lJTIwdG93ZXIlMjBjaGljYWdvfGVufDF8fHx8MTc2NDAwMTA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8902,
    lng: -87.6234
  },
  {
    id: 'wrigley',
    name: 'Wrigley Building',
    year: '1924',
    height: '133 m (437 ft)',
    architect: 'Graham, Anderson, Probst & White',
    story: 'Inspired by the Seville Cathedral\'s Giralda tower, the Wrigley Building\'s gleaming white terra cotta facade was illuminated by spotlights - a first for Chicago. This Spanish Colonial Revival landmark became an instant icon along the Chicago River.',
    imageUrl: 'https://images.unsplash.com/photo-1589699434333-007774ed62ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmlnbGV5JTIwYnVpbGRpbmclMjBjaGljYWdvfGVufDF8fHx8MTc2NDAwMTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8897,
    lng: -87.6248
  },
  {
    id: 'cbot',
    name: 'Chicago Board of Trade Building',
    year: '1930',
    height: '184 m (605 ft)',
    architect: 'Holabird & Root',
    story: 'Crowned with a 31-foot aluminum statue of Ceres, the Roman goddess of agriculture, this Art Deco skyscraper symbolizes Chicago\'s role as a grain trading center. The building was the tallest in Chicago until 1965.',
    imageUrl: 'https://images.unsplash.com/photo-1630452605502-848cb6905881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGljYWdvJTIwYm9hcmQlMjB0cmFkZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NDAwMTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8779,
    lng: -87.6320
  },
  {
    id: 'rookery',
    name: 'The Rookery',
    year: '1888',
    height: '55 m (181 ft)',
    architect: 'Daniel Burnham & John Wellborn Root',
    story: 'One of the oldest standing high-rises in Chicago, The Rookery showcases the transition from load-bearing masonry to steel-frame construction. Its light court, later redesigned by Frank Lloyd Wright, remains a stunning example of innovative architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1635722786976-dcb76f092a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29rZXJ5JTIwYnVpbGRpbmclMjBjaGljYWdvfGVufDF8fHx8MTc2NDAwMTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8791,
    lng: -87.6298
  },
  {
    id: 'marina',
    name: 'Marina City',
    year: '1964',
    height: '179 m (588 ft)',
    architect: 'Bertrand Goldberg',
    story: 'These iconic twin corncob towers revolutionized urban living by creating a self-contained "city within a city." The innovative exposed concrete design and circular floor plans made Marina City an instant architectural sensation.',
    imageUrl: 'https://images.unsplash.com/photo-1682978029683-5a1ef8293a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmElMjBjaXR5JTIwY2hpY2Fnb3xlbnwxfHx8fDE3NjQwMDEwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8875,
    lng: -87.6273
  },
  {
    id: 'monadnock',
    name: 'Monadnock Building',
    year: '1893',
    height: '60 m (197 ft)',
    architect: 'Burnham & Root, Holabird & Roche',
    story: 'The tallest commercial building ever constructed with load-bearing masonry walls, the Monadnock Building represents both the end of an era and the beginning of modern skyscraper design. Its walls are six feet thick at the base.',
    imageUrl: 'https://images.unsplash.com/photo-1699255167512-5627351c3347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hZG5vY2slMjBidWlsZGluZyUyMGNoaWNhZ298ZW58MXx8fHwxNzY0MDAxMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lat: 41.8762,
    lng: -87.6291
  }
];

export function InteractiveSkyscraperMap() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Dynamically import Leaflet
    const loadMap = async () => {
      const L = await import('leaflet@1.9.4');
      
      if (!mapRef.current || leafletMapRef.current) return;

      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
        
        // Wait for CSS to load
        await new Promise(resolve => {
          link.onload = resolve;
          setTimeout(resolve, 1000); // Fallback timeout
        });
      }

      // Initialize map centered on Chicago downtown
      const map = L.map(mapRef.current, {
        center: [41.8820, -87.6272],
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      leafletMapRef.current = map;

      // Add OpenStreetMap tiles with dark theme
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Force map to recalculate size after a short delay
      setTimeout(() => {
        map.invalidateSize();
      }, 100);

      // Add custom markers for each building
      buildings.forEach((building, index) => {
        // Create custom icon HTML
        const iconHtml = `
          <div style="position: relative;">
            <div style="
              width: 16px;
              height: 16px;
              background-color: #FF4254;
              border-radius: 50%;
              box-shadow: 0 0 20px rgba(255, 66, 84, 0.6);
              cursor: pointer;
              animation: pulse 2s ease-in-out infinite;
            "></div>
          </div>
        `;

        const customIcon = L.divIcon({
          html: iconHtml,
          className: 'custom-marker',
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });

        const marker = L.marker([building.lat, building.lng], {
          icon: customIcon,
        }).addTo(map);

        marker.on('click', () => {
          setSelectedBuilding(building);
        });

        // Add tooltip on hover
        marker.bindTooltip(building.name, {
          permanent: false,
          direction: 'top',
          offset: [0, -10],
          className: 'custom-tooltip'
        });

        markersRef.current.push(marker);
      });
    };

    loadMap();

    // Cleanup
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
      markersRef.current = [];
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        .custom-marker {
          background: none !important;
          border: none !important;
        }
        .custom-tooltip {
          background-color: rgba(0, 0, 0, 0.9) !important;
          backdrop-filter: blur(8px);
          border: 1px solid #3f3f46 !important;
          border-radius: 0.5rem !important;
          padding: 0.5rem 0.75rem !important;
          color: white !important;
          font-size: 0.875rem !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5) !important;
        }
        .custom-tooltip::before {
          border-top-color: rgba(0, 0, 0, 0.9) !important;
        }
        .leaflet-container {
          background: #000 !important;
          font-family: inherit !important;
        }
        .leaflet-control-zoom {
          border: 1px solid #3f3f46 !important;
          border-radius: 0.5rem !important;
          overflow: hidden;
        }
        .leaflet-control-zoom a {
          background-color: rgba(0, 0, 0, 0.8) !important;
          backdrop-filter: blur(8px);
          color: white !important;
          border: none !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: #FF4254 !important;
        }
        .leaflet-control-attribution {
          background-color: rgba(0, 0, 0, 0.8) !important;
          backdrop-filter: blur(8px);
          color: #a1a1aa !important;
          border-radius: 0.375rem !important;
          border: 1px solid #3f3f46 !important;
        }
        .leaflet-control-attribution a {
          color: #FF4254 !important;
        }
      `}</style>
      
      <section className="relative min-h-screen bg-black py-20 px-6 overflow-hidden">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 tracking-widest"
            style={{ color: '#FF4254' }}
          >
            EXPLORE THE SKYLINE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            Chicago's Architectural Landmarks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-3xl mx-auto"
          >
            Discover the stories behind Chicago's most iconic skyscrapers. Click on any marker to learn about the building's history, architecture, and impact on the city's skyline.
          </motion.p>
        </div>

        {/* Interactive Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
        >
          {/* Leaflet Map */}
          <div ref={mapRef} className="w-full h-full" />
        </motion.div>

        {/* Building Details Modal */}
        <AnimatePresence>
          {selectedBuilding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBuilding(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800 shadow-2xl"
              >
                {/* Image Header */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <ImageWithFallback
                    src={selectedBuilding.imageUrl}
                    alt={selectedBuilding.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedBuilding(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Building Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-3xl mb-2">
                      {selectedBuilding.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: '#FF4254' }} />
                        <span>{selectedBuilding.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4" style={{ color: '#FF4254' }} />
                        <span>{selectedBuilding.height}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <div className="text-sm text-zinc-500 mb-1">ARCHITECT</div>
                    <div className="text-white">{selectedBuilding.architect}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-zinc-500 mb-2">STORY</div>
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedBuilding.story}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedBuilding(null)}
                    className="w-full py-3 rounded-lg border transition-colors"
                    style={{ 
                      borderColor: '#FF4254',
                      color: '#FF4254'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF4254';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#FF4254';
                    }}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}