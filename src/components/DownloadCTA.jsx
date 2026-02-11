import { motion } from 'framer-motion';
import { Download, Apple, Smartphone } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-effect rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background Gradient Blobs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-4 bg-vami-primary/20 rounded-full mb-6"
            >
              <Download className="w-12 h-12 text-vami-primary" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Bereit für dein{' '}
              <span className="text-gradient">bestes Workout?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Lade VAMI jetzt herunter und erlebe Pushup-Training auf einem
              völlig neuen Level. Kostenlos für iOS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-vami-primary hover:bg-orange-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80 flex items-center gap-3"
              >
                <Apple size={24} />
                Laden im App Store
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <Smartphone size={24} />
                TestFlight Beta
              </motion.a>
            </div>

            <p className="text-sm text-gray-500">
              iOS 15.0 oder neuer erforderlich • Kostenlos • Keine In-App-Käufe
            </p>

            {/* App Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center justify-center gap-8 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2">4.8 von 5</span>
              </div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-400">5.000+ Downloads</div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-400">500+ Bewertungen</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
