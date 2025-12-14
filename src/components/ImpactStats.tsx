import { motion } from 'motion/react';
import { Users, Home, DollarSign, MapPin } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    value: '3.3',
    unit: 'sq mi (8.5 km²)',
    label: 'Area Destroyed'
  },
  {
    icon: Home,
    value: '17,500',
    unit: 'buildings',
    label: 'Structures Lost'
  },
  {
    icon: Users,
    value: '100,000',
    unit: 'people',
    label: 'Left Homeless'
  },
  {
    icon: DollarSign,
    value: '200M',
    unit: 'in 1871',
    label: 'Property Damage'
  }
];

export function ImpactStats() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            The Devastation
          </h2>
          <p className="text-zinc-400">
            The fire's impact on Chicago in numbers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 66, 84, 0.1)' }}>
                  <Icon className="w-7 h-7" style={{ color: '#FF4254' }} />
                </div>
                <div className="text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-zinc-500 mb-2">
                  {stat.unit}
                </div>
                <div className="text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
