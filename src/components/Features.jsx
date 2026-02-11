import { motion } from 'framer-motion';
import { Brain, Hash, TrendingDown } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'KI-Formkorrektur',
      description: 'Echtzeit-Feedback zu Tiefe und Haltung. Die KI erkennt fehlerhafte Bewegungen und gibt dir sofortiges visuelles Feedback.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: 'Auto-Zähler',
      description: 'Vergiss das Mitzählen. Konzentriere dich auf die Ausführung. VAMI zählt automatisch jede Wiederholung.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Ermüdungsanalyse',
      description: 'Erkenne, wann deine Form nachlässt. Die App visualisiert deine Muskelermüdung und hilft dir, Verletzungen zu vermeiden.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Intelligentes Training mit{' '}
            <span className="text-gradient">KI-Power</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            VAMI nutzt fortschrittliche Computer Vision, um dein Training auf
            das nächste Level zu bringen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-effect rounded-3xl p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Komplett{' '}
              <span className="text-gradient">offline & privat</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Alle KI-Analysen laufen direkt auf deinem Gerät. Deine
              Trainingsdaten bleiben zu 100% privat und werden nie hochgeladen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
