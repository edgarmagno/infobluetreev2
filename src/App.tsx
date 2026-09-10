import { useState } from 'react';
import { hotelDetails, linkItems } from './data/links';
import { Language } from './types';
import { Header } from './components/Header';
import { QuickContactBar } from './components/QuickContactBar';
import { LinkCard } from './components/LinkCard';
import { HotelInfoSection } from './components/HotelInfoSection';
import { PlacesToVisitSection } from './components/PlacesToVisitSection';
import { WifiModal } from './components/WifiModal';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';
import { Link, Compass } from 'lucide-react';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [activeTab, setActiveTab] = useState<'links' | 'places'>('links');
  const [isWifiModalOpen, setIsWifiModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const tabLabels = {
    pt: {
      links: 'Links & Hotel',
      places: 'Guia de Manaus & Rotas',
    },
    en: {
      links: 'Links & Hotel',
      places: 'Manaus Guide & Routes',
    },
    es: {
      links: 'Enlaces y Hotel',
      places: 'Guía de Manaus y Rutas',
    },
  };

  const t = tabLabels[currentLang];

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-slate-800 flex flex-col items-center">
      {/* Centered Mobile & Tablet Container */}
      <main className="w-full max-w-lg mx-auto px-3.5 sm:px-4 pt-2 sm:pt-4 pb-12 flex flex-col items-center">
        {/* Profile / Hero Header */}
        <Header
          hotel={hotelDetails}
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* Quick Contact Bar (Phone & Email only, WhatsApp removed) */}
        <QuickContactBar hotel={hotelDetails} currentLang={currentLang} />

        {/* Navigation Tabs: Links & Hotel vs Lugares a Visitar */}
        <nav
          aria-label="Abas de navegação"
          className="w-full grid grid-cols-2 p-1 bg-slate-200/80 rounded-2xl mb-3 shadow-inner text-xs sm:text-sm font-bold"
        >
          <button
            id="tab-btn-links"
            type="button"
            onClick={() => setActiveTab('links')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'links'
                ? 'bg-white text-[#0c2662] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Link className="w-4 h-4" />
            <span>{t.links}</span>
          </button>

          <button
            id="tab-btn-places"
            type="button"
            onClick={() => setActiveTab('places')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl transition-all cursor-pointer ${
              activeTab === 'places'
                ? 'bg-white text-[#0c2662] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4 text-amber-600" />
            <span>{t.places}</span>
          </button>
        </nav>

        {/* Tab 1: Links & Hotel Info */}
        {activeTab === 'links' && (
          <div className="w-full space-y-3 animate-in fade-in duration-200">
            {/* Curated Links */}
            <div className="w-full space-y-2.5">
              {linkItems.map((item) => (
                <LinkCard
                  key={item.id}
                  item={item}
                  currentLang={currentLang}
                  onOpenWifiModal={() => setIsWifiModalOpen(true)}
                />
              ))}
            </div>

            {/* Hotel Information & Schedules Section */}
            <HotelInfoSection hotel={hotelDetails} currentLang={currentLang} />
          </div>
        )}

        {/* Tab 2: Lugares a Visitar (Mini Guia de Manaus) */}
        {activeTab === 'places' && (
          <div className="w-full animate-in fade-in duration-200">
            <PlacesToVisitSection currentLang={currentLang} />
          </div>
        )}

        {/* Footer */}
        <Footer hotel={hotelDetails} />
      </main>

      {/* Direct Wi-Fi Connection Modal (Responsive to iOS & Android) */}
      <WifiModal
        isOpen={isWifiModalOpen}
        onClose={() => setIsWifiModalOpen(false)}
        ssid={hotelDetails.wifiSsid}
        currentLang={currentLang}
      />

      {/* Share / QR Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}

export default App;
