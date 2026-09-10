import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Compass,
  Lightbulb,
  Search,
  ChevronDown,
  UtensilsCrossed,
  ShoppingBag,
  Trees,
  Trophy,
  Landmark,
  ExternalLink,
  Car,
} from 'lucide-react';
import { PlaceToVisit, PlaceCategory, Language } from '../types';
import { placesToVisit } from '../data/places';

interface PlacesToVisitSectionProps {
  currentLang: Language;
}

export const PlacesToVisitSection: React.FC<PlacesToVisitSectionProps> = ({
  currentLang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PlaceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterLabels: Record<
    PlaceCategory,
    Record<Language, string>
  > = {
    all: {
      pt: 'Todos',
      en: 'All',
      es: 'Todos',
    },
    restaurant: {
      pt: 'Restaurantes',
      en: 'Restaurants',
      es: 'Restaurantes',
    },
    shopping: {
      pt: 'Shoppings',
      en: 'Malls',
      es: 'Shoppings',
    },
    nature: {
      pt: 'CIGS, INPA & Selva',
      en: 'Wildlife & Nature',
      es: 'Fauna y Selva',
    },
    sports: {
      pt: 'Arenas & Esportes',
      en: 'Sports & Arenas',
      es: 'Arenas y Deportes',
    },
    attraction: {
      pt: 'Histórico & Pontos',
      en: 'Attractions & Sights',
      es: 'Atracciones Históricas',
    },
  };

  const sectionTexts = {
    pt: {
      title: 'Guia de Manaus & Roteiros',
      subtitle: 'Restaurantes, shoppings, CIGS, INPA, arenas e pontos turísticos',
      searchPlaceholder: 'Buscar: tambaqui, manauara, cigs, teatro...',
      openRoute: 'Abrir Rota no Google Maps',
      fromHotel: 'Partindo do Blue Tree Manaus',
      driveTime: 'Tempo de carro:',
      hotelTip: 'Dica do Blue Tree:',
      emptyState: 'Nenhum local encontrado para esta busca.',
      resultsCount: (count: number) => `${count} locais encontrados`,
    },
    en: {
      title: 'Manaus Guide & Directions',
      subtitle: 'Restaurants, shopping malls, CIGS, INPA, arenas & sights',
      searchPlaceholder: 'Search: tambaqui, mall, zoo, theater...',
      openRoute: 'Open Route in Google Maps',
      fromHotel: 'Departing from Blue Tree Manaus',
      driveTime: 'Drive time:',
      hotelTip: 'Blue Tree Concierge Tip:',
      emptyState: 'No places found matching your search.',
      resultsCount: (count: number) => `${count} places found`,
    },
    es: {
      title: 'Guía de Manaus y Rutas',
      subtitle: 'Restaurantes, centros comerciales, CIGS, INPA, arenas y atracciones',
      searchPlaceholder: 'Buscar: tambaqui, compras, teatro, zoo...',
      openRoute: 'Abrir Ruta en Google Maps',
      fromHotel: 'Saliendo del Blue Tree Manaus',
      driveTime: 'Tiempo en coche:',
      hotelTip: 'Consejo del Blue Tree:',
      emptyState: 'No se encontraron lugares para esta búsqueda.',
      resultsCount: (count: number) => `${count} lugares encontrados`,
    },
  };

  const t = sectionTexts[currentLang];

  const getCategoryIcon = (category: PlaceCategory) => {
    switch (category) {
      case 'restaurant':
        return UtensilsCrossed;
      case 'shopping':
        return ShoppingBag;
      case 'nature':
        return Trees;
      case 'sports':
        return Trophy;
      default:
        return Landmark;
    }
  };

  const getCategoryColor = (category: PlaceCategory) => {
    switch (category) {
      case 'restaurant':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'shopping':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'nature':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'sports':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      default:
        return 'bg-blue-50 text-[#0c2662] border-blue-200';
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredPlaces = placesToVisit.filter((place) => {
    const matchesCategory =
      selectedCategory === 'all' || place.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const name = place.name.toLowerCase();
    const desc = place.description[currentLang]?.toLowerCase() || '';
    const tagline = place.tagline[currentLang]?.toLowerCase() || '';
    const address = place.address.toLowerCase();

    return (
      matchesCategory &&
      (name.includes(query) ||
        desc.includes(query) ||
        tagline.includes(query) ||
        address.includes(query))
    );
  });

  return (
    <section className="w-full mt-2 space-y-3">
      {/* Search & Filter Header Box */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 rounded-lg bg-blue-50 text-[#0c2662]">
            <Compass className="w-4 h-4" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-[#0c2662] tracking-tight">
            {t.title}
          </h2>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed mb-3">
          {t.subtitle}
        </p>

        {/* Live Search Input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="input-search-places"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c2662]/20 focus:border-[#0c2662] transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {(
            [
              'all',
              'restaurant',
              'shopping',
              'nature',
              'sports',
              'attraction',
            ] as PlaceCategory[]
          ).map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                id={`btn-filter-${category}`}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0c2662] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {filterLabels[category][currentLang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-1 flex justify-between items-center text-[11px] text-slate-500 font-medium">
        <span>{t.resultsCount(filteredPlaces.length)}</span>
        <span>Toque para ver detalhes e rota</span>
      </div>

      {/* Retractable Accordion List */}
      <div className="space-y-2">
        {filteredPlaces.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {t.emptyState}
          </div>
        ) : (
          filteredPlaces.map((place) => {
            const isExpanded = expandedId === place.id;
            const Icon = getCategoryIcon(place.category);
            const colorClass = getCategoryColor(place.category);

            return (
              <div
                key={place.id}
                id={`place-item-${place.id}`}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#0c2662]/40 shadow-md ring-1 ring-[#0c2662]/10'
                    : 'border-slate-200/90 hover:border-blue-200 shadow-xs'
                }`}
              >
                {/* Accordion Header (Click to Expand) */}
                <button
                  id={`btn-toggle-place-${place.id}`}
                  type="button"
                  onClick={() => toggleExpand(place.id)}
                  className="w-full p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Category Icon */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border ${colorClass}`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Name and Tagline */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {place.name}
                        </h3>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {place.tagline[currentLang]}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Distance Badge + Arrow */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-bold text-[#0c2662] bg-blue-50/90 border border-blue-100/80 px-2 py-0.5 rounded-lg whitespace-nowrap">
                      {place.distanceFromHotel}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isExpanded
                          ? 'rotate-180 bg-[#0c2662] text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>

                {/* Retractable Body Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-slate-50/50 space-y-3 animate-in fade-in duration-150">
                    {/* Key Info Pills: Distance, Drive time, Category */}
                    <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-[#0c2662] bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                        <Car className="w-3.5 h-3.5 text-blue-600" />
                        <span>
                          {place.distanceFromHotel} • {place.estimatedDriveTime}
                        </span>
                      </span>

                      <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded-lg">
                        {place.categoryLabel[currentLang]}
                      </span>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-1.5 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{place.address}</span>
                    </div>

                    {/* Full Description */}
                    <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/80">
                      {place.description[currentLang]}
                    </p>

                    {/* Hotel Concierge Tip */}
                    {place.tips && place.tips[currentLang] && (
                      <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-bold block mb-0.5 text-amber-950">
                            {t.hotelTip}
                          </span>
                          <span>{place.tips[currentLang]}</span>
                        </div>
                      </div>
                    )}

                    {/* Open Route in Google Maps Button */}
                    <a
                      id={`btn-route-${place.id}`}
                      href={place.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-[#0c2662] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer no-underline"
                    >
                      <Navigation className="w-4 h-4 text-amber-400" />
                      <span>{t.openRoute}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-200 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
