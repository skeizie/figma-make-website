import { motion } from 'motion/react';
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data from your Excel table
const skyscraperGrowthData = [
  { year: 1871, buildings150: 0, buildings200: 0, buildings300: 0 },
  { year: 1905, buildings150: 2, buildings200: 0, buildings300: 0 },
  { year: 1926, buildings150: 7, buildings200: 0, buildings300: 0 },
  { year: 1927, buildings150: 8, buildings200: 0, buildings300: 0 },
  { year: 1928, buildings150: 5, buildings200: 0, buildings300: 0 },
  { year: 1929, buildings150: 8, buildings200: 0, buildings300: 0 },
  { year: 1930, buildings150: 8, buildings200: 0, buildings300: 0 },
  { year: 1931, buildings150: 11, buildings200: 0, buildings300: 0 },
  { year: 1932, buildings150: 11, buildings200: 0, buildings300: 0 },
  { year: 1933, buildings150: 11, buildings200: 0, buildings300: 0 },
  { year: 1934, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1935, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1936, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1937, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1938, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1939, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1940, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1941, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1942, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1943, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1944, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1945, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1946, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1947, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1948, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1949, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1950, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1951, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1952, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1953, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1954, buildings150: 12, buildings200: 0, buildings300: 0 },
  { year: 1955, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1956, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1957, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1958, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1959, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1960, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1961, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1962, buildings150: 13, buildings200: 0, buildings300: 0 },
  { year: 1963, buildings150: 14, buildings200: 0, buildings300: 0 },
  { year: 1964, buildings150: 17, buildings200: 0, buildings300: 0 },
  { year: 1965, buildings150: 17, buildings200: 0, buildings300: 0 },
  { year: 1966, buildings150: 17, buildings200: 0, buildings300: 0 },
  { year: 1967, buildings150: 17, buildings200: 2, buildings300: 0 },
  { year: 1968, buildings150: 19, buildings200: 2, buildings300: 0 },
  { year: 1969, buildings150: 20, buildings200: 2, buildings300: 1 },
  { year: 1970, buildings150: 20, buildings200: 2, buildings300: 1 },
  { year: 1971, buildings150: 22, buildings200: 2, buildings300: 1 },
  { year: 1972, buildings150: 24, buildings200: 3, buildings300: 1 },
  { year: 1973, buildings150: 27, buildings200: 4, buildings300: 2 },
  { year: 1974, buildings150: 31, buildings200: 5, buildings300: 3 },
  { year: 1975, buildings150: 33, buildings200: 5, buildings300: 3 },
  { year: 1976, buildings150: 34, buildings200: 6, buildings300: 3 },
  { year: 1977, buildings150: 35, buildings200: 6, buildings300: 3 },
  { year: 1978, buildings150: 35, buildings200: 6, buildings300: 3 },
  { year: 1979, buildings150: 35, buildings200: 6, buildings300: 3 },
  { year: 1980, buildings150: 36, buildings200: 7, buildings300: 3 },
  { year: 1981, buildings150: 38, buildings200: 7, buildings300: 3 },
  { year: 1982, buildings150: 41, buildings200: 7, buildings300: 3 },
  { year: 1983, buildings150: 46, buildings200: 8, buildings300: 3 },
  { year: 1984, buildings150: 46, buildings200: 8, buildings300: 3 },
  { year: 1985, buildings150: 51, buildings200: 8, buildings300: 3 },
  { year: 1986, buildings150: 53, buildings200: 9, buildings300: 3 },
  { year: 1987, buildings150: 55, buildings200: 9, buildings300: 3 },
  { year: 1988, buildings150: 59, buildings200: 9, buildings300: 3 },
  { year: 1989, buildings150: 60, buildings200: 11, buildings300: 4 },
  { year: 1990, buildings150: 66, buildings200: 14, buildings300: 5 },
  { year: 1991, buildings150: 71, buildings200: 15, buildings300: 5 },
  { year: 1992, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1993, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1994, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1995, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1996, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1997, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1998, buildings150: 74, buildings200: 16, buildings300: 5 },
  { year: 1999, buildings150: 75, buildings200: 16, buildings300: 5 },
  { year: 2000, buildings150: 76, buildings200: 17, buildings300: 5 },
  { year: 2001, buildings150: 78, buildings200: 17, buildings300: 5 },
  { year: 2002, buildings150: 80, buildings200: 17, buildings300: 5 },
  { year: 2003, buildings150: 80, buildings200: 17, buildings300: 5 },
  { year: 2004, buildings150: 86, buildings200: 17, buildings300: 5 },
  { year: 2005, buildings150: 90, buildings200: 19, buildings300: 5 },
  { year: 2006, buildings150: 92, buildings200: 20, buildings300: 5 },
  { year: 2007, buildings150: 92, buildings200: 20, buildings300: 5 },
  { year: 2008, buildings150: 97, buildings200: 21, buildings300: 5 },
  { year: 2009, buildings150: 104, buildings200: 24, buildings300: 6 },
  { year: 2010, buildings150: 110, buildings200: 27, buildings300: 6 },
  { year: 2011, buildings150: 110, buildings200: 27, buildings300: 6 },
  { year: 2012, buildings150: 110, buildings200: 27, buildings300: 6 },
  { year: 2013, buildings150: 113, buildings200: 27, buildings300: 6 },
  { year: 2014, buildings150: 114, buildings200: 27, buildings300: 6 },
  { year: 2015, buildings150: 115, buildings200: 27, buildings300: 6 },
  { year: 2016, buildings150: 115, buildings200: 27, buildings300: 6 },
  { year: 2017, buildings150: 118, buildings200: 29, buildings300: 6 },
  { year: 2018, buildings150: 123, buildings200: 30, buildings300: 6 },
  { year: 2019, buildings150: 125, buildings200: 31, buildings300: 6 },
  { year: 2020, buildings150: 130, buildings200: 34, buildings300: 7 },
  { year: 2021, buildings150: 132, buildings200: 35, buildings300: 7 },
  { year: 2022, buildings150: 134, buildings200: 37, buildings300: 7 },
  { year: 2023, buildings150: 136, buildings200: 38, buildings300: 7 },
  { year: 2024, buildings150: 137, buildings200: 38, buildings300: 7 },
  { year: 2025, buildings150: 137, buildings200: 38, buildings300: 7 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-xl">
        <p className="text-white mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function SkyscraperGrowthChart() {
  const [chartType, setChartType] = useState<'area' | 'line'>('area');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
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
            1871-2025
          </div>
          <h2 className="text-white mb-4">
            The Rise of Chicago's Skyline
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Track the exponential growth of Chicago's skyscrapers from the Great Fire through today. 
            This chart shows buildings over 150m, 200m, and 300m in height.
          </p>
        </motion.div>

        {/* Chart Type Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setChartType('area')}
            className={`px-4 py-2 rounded-lg border transition-all ${
              chartType === 'area'
                ? 'border-[#FF4254] bg-[#FF4254]/10 text-white'
                : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
            }`}
          >
            Area Chart
          </button>
          <button
            onClick={() => setChartType('line')}
            className={`px-4 py-2 rounded-lg border transition-all ${
              chartType === 'line'
                ? 'border-[#FF4254] bg-[#FF4254]/10 text-white'
                : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
            }`}
          >
            Line Chart
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
        >
          <ResponsiveContainer width="100%" height={500}>
            {chartType === 'area' ? (
              <AreaChart
                data={skyscraperGrowthData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <defs>
                  <linearGradient id="colorBuildings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF4254" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF4254" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorBuildingsPlus" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSupertalls" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis
                  dataKey="year"
                  stroke="#71717a"
                  tick={{ fill: '#71717a', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  domain={[1871, 2025]}
                  ticks={[1871, 1900, 1925, 1950, 1975, 2000, 2025]}
                />
                <YAxis
                  stroke="#71717a"
                  tick={{ fill: '#71717a', fontSize: 12 }}
                  label={{ value: 'Number of Buildings', angle: -90, position: 'insideLeft', fill: '#71717a' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Area
                  type="monotone"
                  dataKey="buildings150"
                  name="Buildings 150m+"
                  stroke="#FF4254"
                  strokeWidth={2}
                  fill="url(#colorBuildings)"
                  animationDuration={1500}
                />
                <Area
                  type="monotone"
                  dataKey="buildings200"
                  name="Buildings 200m+"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#colorBuildingsPlus)"
                  animationDuration={1500}
                />
                <Area
                  type="monotone"
                  dataKey="buildings300"
                  name="Buildings 300m+"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fill="url(#colorSupertalls)"
                  animationDuration={1500}
                />
              </AreaChart>
            ) : (
              <LineChart
                data={skyscraperGrowthData}
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
                  domain={[1871, 2025]}
                  ticks={[1871, 1900, 1925, 1950, 1975, 2000, 2025]}
                />
                <YAxis
                  stroke="#71717a"
                  tick={{ fill: '#71717a', fontSize: 12 }}
                  label={{ value: 'Number of Buildings', angle: -90, position: 'insideLeft', fill: '#71717a' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Line
                  type="monotone"
                  dataKey="buildings150"
                  name="Buildings 150m+"
                  stroke="#FF4254"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="buildings200"
                  name="Buildings 200m+"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="buildings300"
                  name="Buildings 300m+"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1500}
                />
              </LineChart>
            )}
          </ResponsiveContainer>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
              <div className="text-white mb-2">137</div>
              <div className="text-zinc-500 text-sm mb-2">Buildings 150m+</div>
              <div className="text-zinc-400 text-xs">As of 2025</div>
            </div>
            <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
              <div className="text-white mb-2">38</div>
              <div className="text-zinc-500 text-sm mb-2">Buildings 200m+</div>
              <div className="text-zinc-400 text-xs">High-rise structures</div>
            </div>
            <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
              <div className="text-white mb-2">7</div>
              <div className="text-zinc-500 text-sm mb-2">Buildings 300m+</div>
              <div className="text-zinc-400 text-xs">Supertall structures</div>
            </div>
            <div className="text-center p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
              <div className="text-white mb-2">1926-1931</div>
              <div className="text-zinc-500 text-sm mb-2">Boom Period</div>
              <div className="text-zinc-400 text-xs">Rapid construction era</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}