const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-6 px-6">
      <div className="container mx-auto flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <span className="text-white/10">•</span>
          <a href="#" className="hover:text-gray-300 transition-colors">Imprint</a>
          <span className="text-white/10">•</span>
          <a href="mailto:support@vami.app" className="hover:text-gray-300 transition-colors">Support</a>
        </div>
        <p className="text-[11px] text-gray-600">
          © {currentYear} VAMI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
