import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StatsShowcase from './components/StatsShowcase';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-vami-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StatsShowcase />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
