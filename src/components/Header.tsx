import React from 'react';
import { Share2, Globe, CheckCircle2, Instagram, Star, MapPin } from 'lucide-react';
import { Language, HotelDetails } from '../types';

interface HeaderProps {
  hotel: HotelDetails;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  hotel,
  currentLang,
  onLanguageChange,
  onOpenShare,
}) => {
  const translations = {
    pt: {
      location: 'Adrianópolis, Manaus - AM',
      ratingText: '4.8 • Avaliações no Google e TripAdvisor',
      share: 'Compartilhar',
      instagram: 'Instagram Oficial',
    },
    en: {
      location: 'Adrianópolis, Manaus - Brazil',
      ratingText: '4.8 • Rated on Google & TripAdvisor',
      share: 'Share',
      instagram: 'Official Instagram',
    },
    es: {
      location: 'Adrianópolis, Manaus - Brasil',
      ratingText: '4.8 • Opiniones en Google y TripAdvisor',
      share: 'Compartir',
      instagram: 'Instagram Oficial',
    },
  };

  const t = translations[currentLang];

  return (
    <header className="relative w-full bg-white border-b border-slate-200/80 rounded-b-3xl shadow-sm overflow-hidden">
      {/* Top Banner Image with Light Ambient Gradient */}
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <img
          src="https://lirp.cdn-website.com/fb21f8a1/dms3rep/multi/opt/BT+Manaus+Area+Interna+%288%29-1920w.jpg"
          alt="Blue Tree Premium Manaus"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/25" />

        {/* Top Floating Controls */}
        <div className="absolute top-3.5 inset-x-3.5 flex justify-between items-center z-10">
          {/* Language Switcher */}
          <div className="inline-flex items-center bg-white/95 backdrop-blur-md rounded-full p-1 border border-slate-200 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" />
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                id={`btn-lang-${lang}`}
                type="button"
                onClick={() => onLanguageChange(lang)}
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full transition-all uppercase tracking-wide cursor-pointer ${
                  currentLang === lang
                    ? 'bg-[#0c2662] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Action Icons: Instagram & Share */}
          <div className="flex items-center gap-2">
            {/* Instagram as an icon */}
            <a
              id="link-header-instagram"
              href={hotel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.instagram}
              title={t.instagram}
              className="p-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#e1306c] hover:bg-white hover:scale-105 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Share Button */}
            <button
              id="btn-header-share"
              type="button"
              onClick={onOpenShare}
              aria-label={t.share}
              title={t.share}
              className="p-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#0c2662] hover:bg-white hover:scale-105 transition-all shadow-sm cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hotel Identity Area: Title ONLY (no logo box as requested) + TripAdvisor & Google Stars */}
      <div className="relative px-5 pb-5 pt-4 flex flex-col items-center text-center z-10">
        {/* Title */}
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#0c2662] tracking-tight">
            {hotel.name}
          </h1>
          <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-50 shrink-0" />
        </div>

        {/* TripAdvisor & Google Star Rating (Restored as requested) */}
        <div className="flex items-center justify-center gap-1.5 mb-1.5 flex-wrap">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-800">
            {t.ratingText}
          </span>
        </div>

        {/* Location Subtitle */}
        <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          <span>{t.location}</span>
        </p>
      </div>
    </header>
  );
};
