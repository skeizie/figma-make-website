import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';

const buildingData = [
  {
    name: 'Courthouse',
    year: 1848,
    height: 87,
    feet: '87 ft',
    meters: '27 m',
    era: 'pre-fire',
    imageUrl: 'https://images.unsplash.com/photo-1632749696359-b0fe9e9ffa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMENoaWNhZ28lMjBjb3VydGhvdXNlfGVufDF8fHx8MTc2MjY1MzUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Board of Trade',
    year: 1885,
    height: 322,
    feet: '322 ft',
    meters: '98 m',
    era: 'post-fire',
    imageUrl: 'https://images.unsplash.com/photo-1630452604403-de0aa50781f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGljYWdvJTIwQm9hcmQlMjBUcmFkZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjY1MzUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Masonic Temple',
    year: 1892,
    height: 302,
    feet: '302 ft',
    meters: '92 m',
    era: 'post-fire',
    imageUrl: 'https://images.unsplash.com/photo-1701149135903-3bb9346adb51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwQ2hpY2FnbyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI2NTM1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Montgomery Ward',
    year: 1899,
    height: 394,
    feet: '394 ft',
    meters: '120 m',
    era: 'turn-century',
    imageUrl: 'https://images.unsplash.com/photo-1747141833456-38b2b9d9f8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGljYWdvJTIwaGlzdG9yaWMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc2MjY1MzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Wrigley Building',
    year: 1924,
    height: 425,
    feet: '425 ft',
    meters: '130 m',
    era: 'roaring-20s',
    imageUrl: 'https://images.unsplash.com/photo-1589692066644-567f2df21f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXcmlnbGV5JTIwQnVpbGRpbmclMjBDaGljYWdvfGVufDF8fHx8MTc2MjY1MzUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Tribune Tower',
    year: 1925,
    height: 463,
    feet: '463 ft',
    meters: '141 m',
    era: 'roaring-20s',
    imageUrl: 'https://images.unsplash.com/photo-1548260616-56338becfa17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcmlidW5lJTIwVG93ZXIlMjBDaGljYWdvfGVufDF8fHx8MTc2MjY1MzUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Board of Trade',
    year: 1930,
    height: 605,
    feet: '605 ft',
    meters: '184 m',
    era: 'art-deco',
    imageUrl: 'https://images.unsplash.com/photo-1630452604403-de0aa50781f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGljYWdvJTIwQm9hcmQlMjBUcmFkZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjY1MzUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Prudential Plaza',
    year: 1955,
    height: 601,
    feet: '601 ft',
    meters: '183 m',
    era: 'mid-century',
    imageUrl: 'https://images.unsplash.com/photo-1745924319579-3cd923f42222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcnVkZW50aWFsJTIwUGxhemElMjBDaGljYWdvfGVufDF8fHx8MTc2MjY1MzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'John Hancock',
    year: 1969,
    height: 1128,
    feet: '1,128 ft',
    meters: '344 m',
    era: 'modern',
    imageUrl: 'https://images.unsplash.com/photo-1699255167512-5627351c3347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKb2huJTIwSGFuY29jayUyMENlbnRlciUyMENoaWNhZ298ZW58MXx8fHwxNzYyNjUzNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Willis Tower',
    year: 1973,
    height: 1450,
    feet: '1,450 ft',
    meters: '442 m',
    era: 'modern',
    imageUrl: 'https://images.unsplash.com/photo-1749492353639-1bbe75e9229b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXaWxsaXMlMjBUb3dlciUyMENoaWNhZ28lMjBza3lzY3JhcGVyfGVufDF8fHx8MTc2MjY1MzUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Trump Tower',
    year: 2009,
    height: 1389,
    feet: '1,389 ft',
    meters: '423 m',
    era: 'contemporary',
    imageUrl: 'https://images.unsplash.com/photo-1722884717009-3ad6693f3ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcnVtcCUyMFRvd2VyJTIwQ2hpY2Fnb3xlbnwxfHx8fDE3NjI2NTM1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'St. Regis Chicago',
    year: 2020,
    height: 1191,
    feet: '1,191 ft',
    meters: '363 m',
    era: 'contemporary',
    imageUrl: 'https://images.unsplash.com/photo-1656655579713-c564c7127cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdCUyMFJlZ2lzJTIwQ2hpY2FnbyUyMHRvd2VyfGVufDF8fHx8MTc2MjY1MzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden">
        <div className="relative w-64 h-40">
          <ImageWithFallback
            src={data.imageUrl}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-white mb-1">{data.name}</p>
          <p className="text-zinc-400 text-sm">Built: {data.year}</p>
          <p className="text-sm mt-2" style={{ color: '#FF4254' }}>
            Height: {data.feet} ({data.meters})
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function SkyscraperEvolution() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4 tracking-widest" style={{ color: '#FF4254' }}>
            1871-2020
          </div>
          <h2 className="text-white mb-4">
            Racing to the Sky
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            From the ashes of 1871, Chicago pioneered the skyscraper. Each new building pushed higher, 
            transforming the city's profile and redefining what was possible in architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
        >
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={buildingData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis
                dataKey="year"
                stroke="#71717a"
                tick={{ fill: '#71717a', fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                stroke="#71717a"
                tick={{ fill: '#71717a', fontSize: 12 }}
                label={{ value: 'Height (feet)', angle: -90, position: 'insideLeft', fill: '#71717a' }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 66, 84, 0.1)' }} />
              <Bar dataKey="height" radius={[8, 8, 0, 0]}>
                {buildingData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.year < 1871 ? '#71717a' : '#FF4254'}
                    opacity={entry.year < 1871 ? 0.5 : 0.8}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#71717a', opacity: 0.5 }} />
              <span className="text-zinc-400 text-sm">Pre-Fire Era</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FF4254', opacity: 0.8 }} />
              <span className="text-zinc-400 text-sm">Post-Fire Era</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
            <div className="text-white mb-2">1848</div>
            <div className="text-zinc-500 text-sm mb-3">Pre-Fire</div>
            <div className="text-zinc-400 text-sm">
              Courthouse at 87 ft (27 m) was the city's tallest
            </div>
          </div>
          <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
            <div className="text-white mb-2">1973</div>
            <div className="text-zinc-500 text-sm mb-3">Peak Achievement</div>
            <div className="text-zinc-400 text-sm">
              Willis Tower reached 1,450 ft (442 m) - world's tallest for 25 years
            </div>
          </div>
          <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
            <div className="text-white mb-2">16x</div>
            <div className="text-zinc-500 text-sm mb-3">Height Increase</div>
            <div className="text-zinc-400 text-sm">
              From pre-fire to modern skyscrapers
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
