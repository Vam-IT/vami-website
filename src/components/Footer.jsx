import { Heart, Mail, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Produkt: [
      { name: 'Features', href: '#features' },
      { name: 'Statistiken', href: '#stats' },
      { name: 'Download', href: '#download' },
    ],
    Rechtliches: [
      { name: 'Datenschutz', href: '#' },
      { name: 'Impressum', href: '#' },
      { name: 'AGB', href: '#' },
    ],
    Kontakt: [
      { name: 'Support', href: 'mailto:support@vami.app' },
      { name: 'Feedback', href: 'mailto:feedback@vami.app' },
    ],
  };

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold text-gradient block mb-4">
              VAMI
            </a>
            <p className="text-gray-400 mb-6">
              Pushup-Training neu gedacht. Mit KI-Power und Präzision.
            </p>
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
            © {currentYear} VAMI. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Entwickelt mit <Heart size={16} className="text-red-500 fill-current" /> in Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
