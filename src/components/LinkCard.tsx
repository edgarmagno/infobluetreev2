import React from 'react';
import {
  ExternalLink,
  Sparkles,
  Ticket,
  Star,
  Award,
  Wifi,
  ChevronRight,
  Smartphone,
} from 'lucide-react';
import { LinkItem, Language } from '../types';

interface LinkCardProps {
  item: LinkItem;
  currentLang: Language;
  onOpenWifiModal: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  item,
  currentLang,
  onOpenWifiModal,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'Ticket':
        return Ticket;
      case 'Star':
        return Star;
      case 'Award':
        return Award;
      case 'Wifi':
        return Wifi;
      default:
        return ExternalLink;
    }
  };

  const IconComponent = getIcon(item.iconName);

  const handleClick = (e: React.MouseEvent) => {
    if (item.actionType === 'modal_wifi') {
      e.preventDefault();
      onOpenWifiModal();
    }
  };

  const isModalAction = item.actionType === 'modal_wifi';
  const title = item.title[currentLang];
  const subtitle = item.subtitle[currentLang];
  const badge = item.badge ? item.badge[currentLang] : null;

  const cardContent = (
    <div
      className={`relative w-full overflow-hidden rounded-2xl p-3.5 sm:p-4 transition-all duration-200 flex items-center gap-3.5 group cursor-pointer ${
        item.isHighlight
          ? 'bg-gradient-to-r from-blue-900 to-[#0c2662] text-white shadow-md hover:shadow-lg border border-blue-800'
          : isModalAction
          ? 'bg-white text-slate-800 border-2 border-blue-200/90 hover:border-[#0c2662] hover:shadow-md shadow-xs'
          : 'bg-white text-slate-800 border border-slate-200/90 hover:border-blue-300 hover:shadow-md shadow-xs'
      }`}
    >
      {/* Left Icon or Thumbnail */}
      <div className="shrink-0 relative">
        {item.thumbnailUrl ? (
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-slate-200 shadow-xs group-hover:scale-105 transition-transform">
            <img
              src={item.thumbnailUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
              item.isHighlight
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : isModalAction
                ? 'bg-blue-100/90 text-[#0c2662] border border-blue-200 group-hover:bg-[#0c2662] group-hover:text-white'
                : 'bg-blue-50 text-[#0c2662] border border-blue-100 group-hover:bg-[#0c2662] group-hover:text-white'
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Main Info */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <h2
            className={`text-sm sm:text-base font-bold tracking-tight leading-snug ${
              item.isHighlight ? 'text-white' : 'text-slate-900 group-hover:text-[#0c2662]'
            }`}
          >
            {title}
          </h2>
          {badge && (
            <span
              className={`inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${
                item.isHighlight
                  ? 'bg-amber-400 text-slate-950'
                  : isModalAction
                  ? 'bg-[#0c2662] text-white'
                  : 'bg-blue-50 text-[#0c2662] border border-blue-200'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        <p
          className={`text-xs leading-relaxed ${
            item.isHighlight ? 'text-blue-100' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>

        {isModalAction && (
          <div className="flex items-center gap-1.5 mt-1.5 text-[11px] font-bold text-[#0c2662]">
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span>Compatível com iOS (iPhone) & Android</span>
          </div>
        )}
      </div>

      {/* Right Indicator Icon */}
      <div className="shrink-0 flex items-center justify-center">
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
            item.isHighlight
              ? 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#0c2662]'
              : isModalAction
              ? 'bg-blue-50 text-[#0c2662] group-hover:bg-[#0c2662] group-hover:text-white'
              : 'bg-slate-50 text-slate-400 group-hover:bg-[#0c2662] group-hover:text-white'
          }`}
        >
          {isModalAction ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ExternalLink className="w-3.5 h-3.5" />
          )}
        </div>
      </div>
    </div>
  );

  if (isModalAction) {
    return (
      <div id={`link-card-${item.id}`} onClick={handleClick}>
        {cardContent}
      </div>
    );
  }

  return (
    <a
      id={`link-card-${item.id}`}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
    >
      {cardContent}
    </a>
  );
};
