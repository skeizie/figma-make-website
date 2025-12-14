import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, MapPin, Clock, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface FireStage {
  id: number;
  time: string;
  title: string;
  description: string;
  location: string;
  position: { top: string; left: string };
  mapNumber: number;
  quote?: string;
  quotePerson?: string;
}

interface FireImage {
  url: string;
  title: string;
  description: string;
  year: string;
}

const fireStages: FireStage[] = [
  {
    id: 0,
    time: 'Sunday Morning, October 8',
    title: 'Before the Fire',
    description: 'The Sunday morning sun rises on four city blocks destroyed by a fire that had burned through the night. The city\'s 185 firefighters are exhausted. In the last week there have been twenty fires. Their success with controlling fires has relied so far on their quick response.',
    location: 'North Dearborn and Chestnut Streets',
    position: { top: '20%', left: '4%' },
    mapNumber: 1,
    quote: 'I was much interested to pick up large cinders about our house... We learned of the great fire that had occurred the night before... It was a wonder that these huge cinders had come so far, over two miles, and that they had not started other fires.',
    quotePerson: 'Clarence Augustus Burley, future president, Chicago Historical Society'
  },
  {
    id: 1,
    time: 'October 8, 8:30pm - 10pm',
    title: 'The Fire Begins',
    description: 'A fire starts in the O\'Leary family\'s barn at DeKoven and Jefferson Streets. A watchman spots the fire from the courthouse tower, but locates it near Canalport and Halsted. Realizing the error, he tries to change his report. But the telegraph dispatcher, fearing confusion, refuses. Meanwhile a storekeeper near the fire pulls the hook on one of the city\'s new fire-alarm boxes, but it fails to work.',
    location: 'DeKoven and Jefferson Streets',
    position: { top: '25%', left: '14%' },
    mapNumber: 2,
    quote: 'I was at the scene in a few minutes.... The land was thickly studded with one-story frame dwellings, cow stables, pig sties, corncribs, sheds innumerable; every wretched building within four feet of its neighbor, and everything of wood...',
    quotePerson: 'Joseph Edgar Chamberlin, reporter, Chicago Evening Post'
  },
  {
    id: 2,
    time: 'October 8, 10pm - Midnight',
    title: 'Jumping the River',
    description: 'The fire, fanned by the strong southwest wind, is on the move. Struggling firefighters are unable to control the flames. By 11:30pm, the raging fire has leapt the southern branch of the Chicago River. It ignites the waste and oil floating on the surface of the water. The many wooden buildings, lumber yards, and dry goods warehouses along the river feed the fire\'s steady appetite.',
    location: 'LaSalle and Adams Streets',
    position: { top: '39%', left: '28%' },
    mapNumber: 3,
    quote: 'The dogs of hell were upon the housetops of La Salle and Wells streets, just south of Adams, bounding from one to another.... A column of flame would shoot up from a burning building, catch the force of the wind, and strike the next one.',
    quotePerson: 'Horace White, editor-in-chief, Chicago Tribune'
  },
  {
    id: 3,
    time: 'October 9, Midnight - 2am',
    title: 'Downtown Engulfed',
    description: 'By midnight, the gasworks explodes, fueling the fire and leaving most of the city without lights. Shortly after that, flames engulf Conley\'s Patch, a poor Irish area, so quickly that many residents are unable to escape. Soon, the supposedly "fire-proof" Courthouse begins to burn. Authorities release prisoners held there. State Street Bridge, a major conduit to the thus-far safe North Side, also begins burning.',
    location: 'Randolph Street Bridge',
    position: { top: '30%', left: '25%' },
    mapNumber: 4,
    quote: 'The Madison Street bridge had long before become impassable, and the Randolph was the only outlet.... Drays, wagons, trucks... crowded across in indiscriminate haste. Collisions happened almost every moment...',
    quotePerson: 'Joseph Edgar Chamberlin, reporter, Chicago Evening Post'
  },
  {
    id: 4,
    time: 'October 9, 2am - 4am',
    title: 'Waterworks Destroyed',
    description: 'The fire leaps the main branch of the Chicago River and burns fiercely in the North Division. Heat, dust, and cinders drive residents to Lincoln Park and the cemetery at its southern end. By 3am, all hope of saving the city is shattered as the Waterworks goes up in flames. The wooden roof catches fire, and as it breaks apart, it destroys the pumps below. The city\'s main source of drinking water is contaminated.',
    location: 'Waterworks, Chicago Avenue and Pine Street',
    position: { top: '38%', left: '62%' },
    mapNumber: 5,
    quote: 'The pumping works became an utter wreck, nothing but the naked walls of the building and the broken and blackened skeletons of three engines were left to mark the spot from whence only a few hours before flowed millions of gallons of pure water...',
    quotePerson: 'DeWitt Cregier, city engineer and future mayor'
  },
  {
    id: 5,
    time: 'October 9, 4am - 6am',
    title: 'Trapped at the Lake',
    description: 'Escaping city residents are forced as far east as they can go -- to the edge of Lake Michigan. Clusters of people, belongings, and animals are trapped on the shoreline. People begin to wade into the water as Michigan Avenue blazes steadily. Horse-drawn wagons, furniture, personal belongings, and people clog the wooden plank-lined streets.',
    location: 'Lake Michigan at Monroe Street',
    position: { top: '55%', left: '70%' },
    mapNumber: 6,
    quote: 'The heat was so intense that it drove us down to the water\'s edge and then my uncle... took his hat and poured water on the things to keep them from burning but thousands and thousands of dollar\'s worth of goods were burned right there...',
    quotePerson: 'Fannie Belle Becker, 10 years old at the time of the fire'
  },
  {
    id: 6,
    time: 'October 9, 6am - 8am',
    title: 'Industrial District Burns',
    description: 'William Ogden\'s enormous lumber yard and railroad on the river bank burns. The fire spreads to the Illinois Central railroad complex and the McCormick Reaper Works. Thousands of people remain trapped at the lake\'s edge. North Side residents are pushed farther north to the prairie.',
    location: 'Chicago Avenue and Clark Street',
    position: { top: '40%', left: '58%' },
    mapNumber: 7,
    quote: 'My remembrance is of a steadily and sullenly advancing wall of smoke shot with fire; of a burning church on Chicago avenue. The steeple was so hot that when it ignited at the base a pillar of flame shot upward to the top.',
    quotePerson: 'A. S. Chapman, 7 years old at the time of the fire'
  },
  {
    id: 7,
    time: 'October 9, 8am - 10am',
    title: 'Survey the Ruins',
    description: 'The only route into the burned center area is now the bridge at Twelfth Street, in Chicago\'s South Side. The South Loop is full of smoky rubble; the North Side is still burning. Although much of the ground is still too hot to stand on, some men look for belongings where their homes or offices once stood. Lincoln Avenue, a main thoroughfare out of the city, is clogged with homeless city residents.',
    location: 'Adams and Des Plaines Streets',
    position: { top: '60%', left: '35%' },
    mapNumber: 8,
    quote: 'It was about 8:30 o\'clock. We could see across the river at the cross streets that where yesterday was a populous city was now a mass of smoking ruins. All the way round we encountered thousands of people; but the excitement had given way to a terrible grief and desolation.',
    quotePerson: 'Alexander Frear, New York alderman'
  },
  {
    id: 8,
    time: 'October 9, 10am - Noon',
    title: 'Buildings Demolished',
    description: 'In order to slow the blaze, General Philip H. Sheridan orders his troops to blow up the remaining buildings in the path of the fire along Michigan Avenue. Terrace Row residents watch as their homes are levelled. Thinking the fire will either die out or that the wind will change direction, many residents hold firm in the North Division, realizing at the last minute that they must flee.',
    location: 'Congress Street and South Michigan Avenue',
    position: { top: '62%', left: '65%' },
    mapNumber: 9,
    quote: 'There I sat with a few others by our household goods, calmly awaiting the destruction of our [Terrace Row] property -- one of the most splendid blocks in Chicago... Quickly and grandly [the flames] wrapped up the whole block.',
    quotePerson: 'William Bross, Co-publisher, Chicago Tribune'
  },
  {
    id: 9,
    time: 'October 9, Noon - 6pm',
    title: 'Fleeing North',
    description: 'Hordes of people stream north on Lincoln Avenue as the blaze moves further into the North Side. Although the West Side is safe, it is inaccessible from the North Side. Thus, people continue to move north, still in the path of the fire.',
    location: 'Superior and Pine Streets',
    position: { top: '28%', left: '62%' },
    mapNumber: 10,
    quote: 'I discovered a vehicle emerging from the smoke.... It proved to be a covered one-horse grocery wagon; and I soon bargained with its driver to take as many as we could get into it, to the West Side, for ten dollars...',
    quotePerson: 'Lambert Tree, Cook County Circuit Court Judge'
  },
  {
    id: 10,
    time: 'October 9, 6pm - Midnight',
    title: 'Rain Falls',
    description: 'Many city residents who have been fleeing all night and day are forced to run again as the fire reaches the prairie. Most leave behind the possessions they have brought with them. Some bury important items, which they will try to find later. Rain falls Monday night, extinguishing some of the fire.',
    location: 'Wells Street and North Avenue',
    position: { top: '22%', left: '55%' },
    mapNumber: 11,
    quote: 'I had to wake the children up, and we had to run again, and leave everything to burn, this time we felt the heat on our backs when we ran, like when one stands with the back to a grate fire...',
    quotePerson: 'Julia Lemos, North Side working mother'
  },
  {
    id: 11,
    time: 'October 10 and Beyond',
    title: 'After the Fire',
    description: 'As the last of the flames die out, Chicagoans survey their wrecked city. Seventy-three miles of streets and 17,450 buildings have been destroyed. A third of the population is homeless. An official inquiry determines that shoddy construction, lax building inspection, and a poorly-equipped fire department are to blame. In 1997 the Chicago City Council passed a resolution that finally absolved Mrs. O\'Leary of any wrongdoing.',
    location: 'Dearborn Street between Ohio and Ontario',
    position: { top: '45%', left: '58%' },
    mapNumber: 12,
    quote: 'Not a house remained...as far as the eye could reach.... The telegraph wires lay curled and tangled upon the streets, and here and there was a dead horse, cow, or animal of some kind, which had been overtaken by the fire, and perished.',
    quotePerson: 'Lambert Tree, Cook County Circuit Court Judge'
  }
];

const fireImages: FireImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1593111415629-479b8c735255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWlucyUyMGRlc3RydWN0aW9uJTIwYWZ0ZXJtYXRofGVufDF8fHx8MTc2MjgwNzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Devastated City Blocks',
    description: 'The fire reduced entire city blocks to rubble. Where once stood thriving businesses and homes, only charred remains and smoke-filled air remained. The destruction was so complete that survivors struggled to identify where their homes had been.',
    year: 'October 1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1761886200055-3986e7ee407e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZGFtYWdlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNzI3MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Burned Buildings',
    description: 'The intense heat of the fire was so extreme that it melted metal and stone. Buildings that were considered "fireproof" proved vulnerable as their wooden interiors and roofs ignited, causing total structural collapse.',
    year: 'Post-Fire 1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1571840615922-50fb24649d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGRpc2FzdGVyJTIwcnViYmxlfGVufDF8fHx8MTc2MjgwNzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Streets of Rubble',
    description: 'Once-bustling streets were transformed into mazes of debris and ash. The wooden plank streets themselves had burned, leaving treacherous terrain. Citizens wandered through the ruins searching for any salvageable possessions.',
    year: 'October 1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1663518354618-ac9968e1b56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJuZWQlMjBhcmNoaXRlY3R1cmUlMjBkZXN0cm95ZWR8ZW58MXx8fHwxNzYyODA3NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Structural Devastation',
    description: 'The fire consumed over 17,450 buildings across more than three square miles. From grand hotels to simple cottages, from churches to saloons, everything in the fire\'s path was reduced to skeletal ruins.',
    year: 'Late October 1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1567617171179-7a20660266e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2l0eXNjYXBlJTIwZGV2YXN0YXRpb258ZW58MXx8fHwxNzYyODA3NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'A City in Ruins',
    description: 'The scope of destruction was unprecedented in American history. Nearly 100,000 residents were left homeless, and property damage exceeded $200 million (equivalent to over $4 billion today). The city\'s economic heart had been obliterated.',
    year: 'October 1871'
  },
  {
    url: 'https://images.unsplash.com/photo-1571840615922-50fb24649d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwdXJiYW4lMjBkYW1hZ2V8ZW58MXx8fHwxNzYyODA3NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'The Morning After',
    description: 'When the rain finally came and the fires died down, Chicagoans emerged to witness the full extent of the catastrophe. Seventy-three miles of streets lay in ruins, and the entire downtown and North Side had been consumed.',
    year: 'October 10, 1871'
  },
];

export function FireSpreadMap() {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<FireImage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [manualScrollX, setManualScrollX] = useState(0);

  const nextStage = () => {
    if (currentStage < fireStages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const currentData = fireStages[currentStage];

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
    <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4 tracking-widest" style={{ color: '#FF4254' }}>
            THE PROGRESSION
          </div>
          <h2 className="text-white mb-4">
            How the Fire Spread
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Follow the devastating path of the Great Chicago Fire as it consumed the city over 36 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-zinc-800/50 rounded-lg border border-zinc-700 overflow-hidden">
              {/* Historical Map Image */}
              <div className="relative w-full" style={{ aspectRatio: '1000/449' }}>
                <ImageWithFallback
                  src="https://www.pbs.org/wgbh/americanexperience/media/filer_public_thumbnails/filer_public/c1/5d/c15dcda3-c134-4d3f-872a-caedf708b0f7/chicago-fire-map.jpg__1000x449_q85_crop_subsampling-2_upscale.jpg"
                  alt="Historical map of the Great Chicago Fire progression"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for better marker visibility */}
                <div className="absolute inset-0 bg-black/40" />

                {/* All numbered markers */}
                {fireStages.map((stage, index) => (
                  <motion.button
                    key={stage.id}
                    onClick={() => setCurrentStage(index)}
                    className="absolute w-5 h-5 rounded-full flex items-center justify-center border transition-all cursor-pointer"
                    style={{
                      top: stage.position.top,
                      left: stage.position.left,
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: index === currentStage ? '#FF4254' : index < currentStage ? '#dc2626' : '#3f3f46',
                      borderColor: index === currentStage ? '#fff' : index < currentStage ? '#fca5a5' : '#71717a',
                      zIndex: index === currentStage ? 20 : 10,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: index === currentStage ? 1.2 : 1,
                      boxShadow: index === currentStage 
                        ? '0 0 20px rgba(255, 66, 84, 0.6)' 
                        : '0 0 0px rgba(0, 0, 0, 0)'
                    }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  >
                    <span className="text-white text-xs font-bold">{stage.mapNumber}</span>
                  </motion.button>
                ))}

                {/* Animated pulse on current marker */}
                <motion.div
                  key={`pulse-${currentStage}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    top: currentData.position.top,
                    left: currentData.position.left,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#FF4254',
                    width: '20px',
                    height: '20px',
                  }}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Animated flames around current marker */}
                <AnimatePresence>
                  {[0, 1, 2, 3, 4, 5].map((flameIndex) => {
                    const angle = (flameIndex * 60 * Math.PI) / 180; // 60 degrees apart
                    const radius = 25; // Distance from center
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={`flame-${currentStage}-${flameIndex}`}
                        className="absolute pointer-events-none"
                        style={{
                          top: currentData.position.top,
                          left: currentData.position.left,
                          transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0.4, 0.8, 0.4],
                          scale: [0.8, 1.2, 0.8],
                          x: [x * 0.8, x, x * 1.2, x],
                          y: [y * 0.8, y, y * 1.2, y],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: 2 + flameIndex * 0.2,
                          repeat: Infinity,
                          delay: flameIndex * 0.15,
                          ease: "easeInOut"
                        }}
                      >
                        <Flame 
                          className="w-4 h-4"
                          fill="#FF4254"
                          stroke="#FFA500"
                          strokeWidth={1}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Stage indicator */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-zinc-700 scale-[0.6] origin-top-left">
                <div className="text-white">
                  <span className="text-zinc-400">Stage </span>
                  {currentStage + 1} of {fireStages.length}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevStage}
                disabled={currentStage === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              {/* Progress dots */}
              <div className="flex gap-2">
                {fireStages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setCurrentStage(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor: index === currentStage ? '#FF4254' : '#3f3f46',
                      width: index === currentStage ? '24px' : '8px',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextStage}
                disabled={currentStage === fireStages.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-700 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Fire Damage Carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden mt-8"
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
                className={`flex gap-4 ${isHovered ? 'manual-scroll' : 'animate-scroll'}`}
                style={isHovered ? { transform: `translateX(${manualScrollX}px)` } : undefined}
              >
                {/* First set of images */}
                {fireImages.map((image, index) => (
                  <button
                    key={`fire-img-1-${index}`}
                    onClick={() => setSelectedImage(image)}
                    className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 cursor-pointer group"
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </button>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {fireImages.map((image, index) => (
                  <button
                    key={`fire-img-2-${index}`}
                    onClick={() => setSelectedImage(image)}
                    className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 cursor-pointer group"
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
              <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
              >
                {/* Time badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: '#FF4254' }} />
                  <span className="text-zinc-400">{currentData.time}</span>
                </div>

                {/* Title */}
                <h3 className="text-white mb-4">
                  {currentData.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {currentData.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 mb-6">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FF4254' }} />
                  <div>
                    <div className="text-zinc-400 text-sm mb-1">Location</div>
                    <div className="text-white">{currentData.location}</div>
                  </div>
                </div>

                {/* Eyewitness Quote */}
                {currentData.quote && (
                  <div className="p-4 bg-black/30 rounded-lg border-l-4 mb-6" style={{ borderLeftColor: '#FF4254' }}>
                    <p className="text-zinc-300 italic mb-2 leading-relaxed">
                      "{currentData.quote}"
                    </p>
                    {currentData.quotePerson && (
                      <p className="text-zinc-500 text-sm">
                        — {currentData.quotePerson}
                      </p>
                    )}
                  </div>
                )}

                {/* Timeline progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-500 mb-2">
                    <span>Sunday Morning</span>
                    <span>After the Fire</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: '#FF4254' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStage + 1) / fireStages.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

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
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {selectedImage?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
