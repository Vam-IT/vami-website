import { Heart, Mail, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Statistics', href: '#stats' },
      { name: 'Download', href: '#download' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Imprint', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    Contact: [
      { name: 'Support', href: 'mailto:support@vami.app' },
      { name: 'Feedback', href: 'mailto:feedback@vami.app' },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 py-16 md:py-20 px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-950" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold text-gradient block mb-4">
              VAMI
            </a>
            <p className="text-gray-400 mb-6">
              AI-powered push-up training for iPhone.
              <br />
              <span className="text-white font-semibold">Free. Private. Powerful.</span>
            </p>
            <motion.a
              href="https://apps.apple.com/app/vami"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm border border-white/20 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Get on App Store
            </motion.a>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:hello@vami.app"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="E-Mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-vami-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} VAMI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-current" /> in Germany
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
