import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { HotelDetails, Language } from '../types';

interface QuickContactBarProps {
  hotel: HotelDetails;
  currentLang: Language;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({
  hotel,
  currentLang,
}) => {
  const labels = {
    pt: {
      phone: 'Ligar para a Recepção',
      phoneSub: hotel.phoneFormatted,
      email: 'Enviar E-mail',
      emailSub: 'recepcao1.manaus@bluetree...',
    },
    en: {
      phone: 'Call Front Desk',
      phoneSub: hotel.phoneFormatted,
      email: 'Send Email',
      emailSub: 'recepcao1.manaus@bluetree...',
    },
    es: {
      phone: 'Llamar a Recepción',
      phoneSub: hotel.phoneFormatted,
      email: 'Enviar Correo',
      emailSub: 'recepcao1.manaus@bluetree...',
    },
  };

  const t = labels[currentLang];

  return (
    <div className="w-full my-3">
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {/* Telefone */}
        <a
          id="btn-contact-phone"
          href={`tel:${hotel.phone}`}
          className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl bg-white hover:bg-blue-50/70 text-[#0c2662] border border-slate-200/90 hover:border-blue-300 transition-all font-semibold text-xs sm:text-sm no-underline shadow-xs hover:shadow-sm group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-[#0c2662] group-hover:text-white text-[#0c2662] flex items-center justify-center transition-colors shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs font-bold text-slate-800 group-hover:text-[#0c2662] truncate">
              {t.phone}
            </div>
            <div className="text-[11px] text-slate-500 font-normal truncate">
              {t.phoneSub}
            </div>
          </div>
        </a>

        {/* E-mail */}
        <a
          id="btn-contact-email"
          href={`mailto:${hotel.email}?subject=Informações%20Blue%20Tree%20Premium%20Manaus`}
          className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 hover:border-slate-300 transition-all font-semibold text-xs sm:text-sm no-underline shadow-xs hover:shadow-sm group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-700 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs font-bold text-slate-800 group-hover:text-slate-900 truncate">
              {t.email}
            </div>
            <div className="text-[11px] text-slate-500 font-normal truncate">
              {t.emailSub}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
