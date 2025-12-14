import image_dd0ff7e29d77e48567fd3358f1677945ce394f37 from 'figma:asset/dd0ff7e29d77e48567fd3358f1677945ce394f37.png';
import image_0ff9d801205b9bbac865bbe13d2c0211480c0f52 from 'figma:asset/0ff9d801205b9bbac865bbe13d2c0211480c0f52.png';
import image_f93a4f5155bbba818324cd082647f61bfcabf447 from 'figma:asset/f93a4f5155bbba818324cd082647f61bfcabf447.png';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { ImpactStats } from './components/ImpactStats';
import { SkylineComparison } from './components/SkylineComparison';
import { ScrollTimeline } from './components/ScrollTimeline';
import { SkyscraperEvolution } from './components/SkyscraperEvolution';
import { SkyscraperGrowthChart } from './components/SkyscraperGrowthChart';
import { FireSpreadMap } from './components/FireSpreadMap';
import { FlameMarker } from './components/FlameMarker';
import { SkylineEvolutionTimeline } from './components/SkylineEvolutionTimeline';
import { HistoricalCarousel } from './components/HistoricalCarousel';
import { ArchitectsSection } from './components/ArchitectsSection';
import { InteractiveSkyscraperMap } from './components/InteractiveSkyscraperMap';
import { motion } from 'motion/react';
import { Building2, TrendingUp } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Timeline Navigation */}
      <ScrollTimeline />
      
      {/* Hero */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Before the Fire */}
      <div id="pre-fire">
        <TimelineSection
          year="PRE-1871"
          title="A City of Wood"
          description="Chicago's skyline before 1871 was a modest horizon of wooden structures rising just a few stories above the prairie. Church spires and bell towers punctuated the low-slung cityscape - no towering monuments, no steel frames reaching skyward. As the population exploded from 30,000 to over 300,000, this humble, fragile silhouette grew denser but never higher, soon to be transformed forever."
          imageUrl={image_0ff9d801205b9bbac865bbe13d2c0211480c0f52}
          reference="Miller, D. L. (1996). City of the Century: The Epic of Chicago and the Making of America. Simon & Schuster. pp. 143-156. | Chicago Historical Society. (2003). The Great Chicago Fire and the Web of Memory. Retrieved from https://www.chicagohs.org/fire/ | City of Chicago. Historic Preservation Division. Great Chicago Fire Tour. Retrieved from https://webapps1.chicago.gov/landmarksweb/web/tourdetails.htm?touId=14"
        >
          <HistoricalCarousel />
        </TimelineSection>
      </div>

      {/* The Fire */}
      <div 
        id="the-fire"
        className="relative min-h-screen flex items-center justify-end py-20 px-6 overflow-hidden"
      >
        {/* Background Image Container - Fixed for consistent marker positioning */}
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/mrYVjr2t/Burned-district-3-scaled.jpg"
            alt="Burned district after Chicago fire"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* Gradient fade at top and bottom */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #000000 0%, transparent 15%, transparent 85%, #000000 100%)'
            }}
          />
        </div>
        
        {/* Flame Marker - Shows where fire started */}
        <FlameMarker 
          position={{ left: '23%', top: '38%' }}
          imageUrl="https://greatchicagofire.org/sites/greatchicagofire.org/files/imagecache/item-node-poster-920wide/i02741_poster.jpg"
          imageTitle="The O'Leary Cottage"
          imageDescription="The fire began on the evening of October 8, 1871, in the O'Leary barn on DeKoven Street on Chicago's southwest side."
        />
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 w-full md:w-[30%] bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-zinc-800 mr-0 md:mr-12"
        >
          <div className="mb-4 tracking-widest" style={{ color: '#FF4254' }}>
            OCTOBER 8, 1871
          </div>
          <h2 className="text-white mb-6">
            A Spark Becomes an Inferno
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The fire started in the O'Leary barn on DeKoven Street. For 36 hours, from the evening of October 8 to the morning of October 10, Chicago burned. Strong southwestern winds created a firestorm that jumped the Chicago River. Flames soared hundreds of feet into the air, creating their own weather system and reaching temperatures of 3,000 degrees. The fire finally ended when rain fell on October 10, helping firefighters extinguish the remaining flames.
          </p>
        </motion.div>
      </div>

      {/* Fire Spread Map */}
      <div id="fire-spread">
        <FireSpreadMap />
      </div>

      {/* Impact Statistics */}
      <div id="impact">
        <ImpactStats />
      </div>

      {/* Rebuilding */}
      <div id="rebuilding">
        <TimelineSection
          year="1871-1890s"
          title="Rising from the Ashes"
          description="Chicago refused to surrender to disaster. Within weeks, reconstruction began. But this time, the city would be built differently. New fire codes mandated fireproof materials, and stone and brick replaced the old wooden structures. Architects such as William Le Baron Jenney began experimenting with iron and steel framing systems to support taller commercial buildings. Although Jenney's 1885 Home Insurance Building is often popularly remembered as the first skyscraper, architectural historians now describe it as an important evolutionary step rather than the true first. The myth of it being the 'world's first skyscraper' largely emerged from a public relations campaign in the 1890s, rather than from the building's actual structural originality. Even so, Chicago's post-fire construction era became a turning point: it transformed the city into a laboratory for new building technologies and design ideas. This environment attracted visionary architects who would go on to define the principles of modern urban architecture and shape the skyline of the twentieth century."
          imageUrl={image_f93a4f5155bbba818324cd082647f61bfcabf447}
          reference="Bruegmann, R. (2005). The Architects and the City: Holabird & Roche of Chicago, 1880-1918. University of Chicago Press. pp. 23-45. | Condit, C. W. (1964). The Chicago School of Architecture: A History of Commercial and Public Building in the Chicago Area, 1875-1925. University of Chicago Press. | Larson, G. R., & Pridmore, J. (1993). Chicago Architecture and Design. Harry N. Abrams. Retrieved from https://www.architecture.org/learn/resources/architecture-dictionary/entry/chicago-school/"
          showSkyscraperBadges={true}
          imageCaption="Exterior view of the Home Insurance Building, designed by William Le Baron Jenney and completed in 1885, photographed in 1920."
        />
      </div>

      {/* The Chicago School - Architects */}
      <div id="chicago-school">
        <ArchitectsSection />
      </div>

      {/* Interactive Skyscraper Map */}
      <div id="skyscraper-map">
        <InteractiveSkyscraperMap />
      </div>

      {/* Skyline Evolution Timeline */}
      <div id="skyline-evolution-timeline">
        <SkylineEvolutionTimeline />
      </div>

      {/* Skyscraper Evolution Chart */}
      <div id="skyline-evolution">
        <SkyscraperEvolution />
      </div>

      {/* The Rise of Chicago's Skyline */}
      <div id="skyline-rise">
        <SkyscraperGrowthChart />
      </div>

      {/* Skyline Comparison */}
      <div id="transformation">
        <SkylineComparison
          beforeImage={image_0ff9d801205b9bbac865bbe13d2c0211480c0f52}
          afterImage={image_dd0ff7e29d77e48567fd3358f1677945ce394f37}
          beforeLabel="Pre-1871: City of Wood"
          afterLabel="Today: City of Steel & Glass"
        />
      </div>

      {/* Modern Chicago */}
      <div id="modern" style={{ backgroundColor: 'black' }}>
        <TimelineSection
          year="TODAY"
          title="The Legacy Lives On"
          description="Modern Chicago stands as a testament to resilience and innovation. The skyline that emerged from the ashes pioneered vertical architecture. Icons like the Willis Tower, John Hancock Center, and countless others define the city's profile. The Great Fire didn't just destroy Chicago - it created the conditions for architectural revolution. Chicago became the birthplace of the modern American city, influencing urban design worldwide."
          imageUrl="https://i.ibb.co/B2K2YSx0/Chicago-Skyline-1.webp"
          reverse
        >
          <div className="flex items-center gap-2 text-green-400 mt-4">
            <TrendingUp className="w-5 h-5" />
            <span>From disaster to architectural innovation</span>
          </div>
        </TimelineSection>
      </div>

      {/* Closing Section */}
      <motion.section
        id="conclusion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-gradient-to-t from-zinc-950 to-black text-center"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            From Ruins to Revolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-400 mb-4"
          >
            The Great Chicago Fire of 1871 was one of the most devastating urban disasters in American history. Yet from its ashes rose not just a city, but a new vision of what cities could be.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-zinc-400"
          >
            Chicago's transformation from a wooden frontier town to a steel metropolis changed architecture forever, giving birth to the modern skyline and shaping cities around the world.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}