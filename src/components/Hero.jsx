import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 md:pt-20 md:pb-40 px-4 md:px-6 overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

      {/* Floating Orbs - Hidden on mobile for performance */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div style={{ y, opacity }} className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-ultra px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 border border-orange-500/20 text-sm md:text-base"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-orange-400" />
              <span className="text-xs md:text-sm text-gray-300">AI-Powered Training</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-[1.1] md:leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Perfect Your{' '}
              <span className="text-gradient-premium inline-block">
                Push-ups
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 md:mb-10 leading-relaxed font-light px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              AI-powered form analysis, automatic counting, and real-time feedback.
              <span className="text-white font-medium"> Join 5,000+ users.</span>
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 mb-8 md:mb-12 px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a
                href="https://apps.apple.com/app/vami"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-3 touch-manipulation border border-white/10"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[11px] leading-tight opacity-90">Download on the</div>
                  <div className="text-2xl font-semibold leading-tight tracking-tight">App Store</div>
                </div>
              </motion.a>

              <p className="text-center text-xs md:text-sm text-gray-500">
                Free • iOS 15.0+ • No Ads • Offline AI
              </p>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 md:order-2 flex justify-center items-center"
          >
            {/* Phone Mockup Container */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative glass-card rounded-[2.5rem] p-3 shadow-2xl max-w-[300px]"
              >
                <img
                  src="/assets/app-main.png"
                  alt="VAMI App Interface"
                  className="rounded-[2rem] w-full"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-6 -right-6 glass-ultra rounded-2xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold text-gradient-premium">+25</div>
                <div className="text-xs text-gray-400">Pushups</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-ultra rounded-2xl p-4 shadow-xl border border-green-500/20"
              >
                <div className="text-3xl font-bold text-green-400">98%</div>
                <div className="text-xs text-gray-400">Form</div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
