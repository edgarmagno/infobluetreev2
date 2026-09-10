import React from 'react';
import { Instagram, Globe, MapPin } from 'lucide-react';
import { HotelDetails } from '../types';

interface FooterProps {
  hotel: HotelDetails;
}

export const Footer: React.FC<FooterProps> = ({ hotel }) => {
  return (
    <footer className="w-full mt-10 pt-6 pb-10 border-t border-slate-200 text-center text-xs text-slate-500">
      {/* Social & Web Icons */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <a
          id="footer-link-instagram"
          href={hotel.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Blue Tree Hotels"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#e1306c] hover:border-pink-300 flex items-center justify-center transition-all shadow-xs"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          id="footer-link-website"
          href={hotel.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website Blue Tree Hotels"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0c2662] hover:border-blue-300 flex items-center justify-center transition-all shadow-xs"
        >
          <Globe className="w-4 h-4" />
        </a>
      </div>

      {/* Address */}
      <div className="flex items-center justify-center gap-1 text-slate-600 font-medium mb-1">
        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>
          {hotel.address} • {hotel.neighborhood}, {hotel.city} - {hotel.state}
        </span>
      </div>

      <p className="text-[11px] text-slate-400 mt-2">
        © {new Date().getFullYear()} {hotel.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
};
