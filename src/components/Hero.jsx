import { motion } from 'framer-motion';
import { Play, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Pushups auf dem{' '}
              <span className="text-gradient">nächsten Level.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              VAMI analysiert deine Form, zählt Reps und trackt deine Ermüdung.
              Alles mit KI.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#download"
                className="group bg-vami-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Laden im App Store
              </a>
              <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Play size={20} />
                Demo ansehen
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold text-vami-primary">95%</div>
                <div className="text-sm text-gray-400">Genauigkeit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vami-primary">5k+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vami-primary">4.8</div>
                <div className="text-sm text-gray-400">Bewertung</div>
              </div>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* iPhone Frame Effect */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="glass-effect rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-vami-secondary rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* App Screenshot - Hauptbildschirm */}
                    <img
                      src="/assets/app-main.png"
                      alt="VAMI App Hauptbildschirm"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback wenn Bild nicht gefunden
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-vami-secondary to-vami-dark flex items-center justify-center">
                            <div class="text-center p-8">
                              <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-vami-primary/20 flex items-center justify-center">
                                <span class="text-4xl font-bold text-vami-primary">V</span>
                              </div>
                              <p class="text-gray-400 text-sm">
                                Speichere den Home-Screenshot als<br/>/public/assets/app-main.png
                              </p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-2xl font-bold text-vami-primary">+25</div>
                <div className="text-xs text-gray-400">Pushups</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-effect rounded-2xl p-4 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-xs text-gray-400">Form</div>
              </motion.div>
            </div>

            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vami-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
