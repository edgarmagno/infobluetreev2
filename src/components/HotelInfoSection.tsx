import React from 'react';
import { Coffee, Waves, Dumbbell, Clock, Bell, Dog } from 'lucide-react';
import { HotelDetails, Language } from '../types';

interface HotelInfoSectionProps {
  hotel: HotelDetails;
  currentLang: Language;
}

export const HotelInfoSection: React.FC<HotelInfoSectionProps> = ({
  hotel,
  currentLang,
}) => {
  const content = {
    pt: {
      title: 'Informações & Horários do Hotel',
      subtitle: 'Tudo o que você precisa para uma estada perfeita',
      breakfastTitle: 'Café da Manhã Buffet',
      breakfastWeekdays: `Seg a Sex: ${hotel.breakfastHoursWeekdays}`,
      breakfastWeekends: `Sáb, Dom e Feriados: ${hotel.breakfastHoursWeekends}`,
      poolTitle: 'Piscina ao Ar Livre',
      poolHours: `${hotel.poolHours} (Diariamente)`,
      gymTitle: 'Academia & Fitness',
      gymHours: `${hotel.gymHours} (Diariamente)`,
      checkInOutTitle: 'Check-in & Check-out',
      checkInOutValue: `Entrada: ${hotel.checkIn} • Saída: ${hotel.checkOut}`,
      receptionTitle: 'Recepção & Atendimento',
      receptionValue: 'Disponível 24 horas',
      petTitle: 'Hospedagem Pet Friendly',
      petValue: 'Aceitamos pets até 10 kg',
    },
    en: {
      title: 'Hotel Info & Schedules',
      subtitle: 'Everything you need for a comfortable stay',
      breakfastTitle: 'Buffet Breakfast',
      breakfastWeekdays: `Mon to Fri: ${hotel.breakfastHoursWeekdays}`,
      breakfastWeekends: `Sat, Sun & Holidays: ${hotel.breakfastHoursWeekends}`,
      poolTitle: 'Outdoor Pool',
      poolHours: `${hotel.poolHours} (Daily)`,
      gymTitle: 'Gym & Fitness',
      gymHours: `${hotel.gymHours} (Daily)`,
      checkInOutTitle: 'Check-in & Check-out',
      checkInOutValue: `Check-in: ${hotel.checkIn} • Check-out: ${hotel.checkOut}`,
      receptionTitle: 'Front Desk Service',
      receptionValue: 'Available 24 hours',
      petTitle: 'Pet Friendly Hotel',
      petValue: 'Pets up to 10 kg welcome',
    },
    es: {
      title: 'Información y Horarios del Hotel',
      subtitle: 'Todo lo necesario para una estadía placentera',
      breakfastTitle: 'Desayuno Buffet',
      breakfastWeekdays: `Lun a Vie: ${hotel.breakfastHoursWeekdays}`,
      breakfastWeekends: `Sáb, Dom y Feriados: ${hotel.breakfastHoursWeekends}`,
      poolTitle: 'Piscina al Aire Libre',
      poolHours: `${hotel.poolHours} (Todos los días)`,
      gymTitle: 'Gimnasio & Fitness',
      gymHours: `${hotel.gymHours} (Todos los días)`,
      checkInOutTitle: 'Check-in & Check-out',
      checkInOutValue: `Entrada: ${hotel.checkIn} • Salida: ${hotel.checkOut}`,
      receptionTitle: 'Recepción y Asistencia',
      receptionValue: 'Disponible las 24 horas',
      petTitle: 'Política Pet Friendly',
      petValue: 'Aceptamos mascotas hasta 10 kg',
    },
  };

  const t = content[currentLang];

  const infoItems = [
    {
      icon: Coffee,
      title: t.breakfastTitle,
      line1: t.breakfastWeekdays,
      line2: t.breakfastWeekends,
      accent: 'bg-amber-50 text-amber-700 border-amber-200/70',
      iconColor: 'text-amber-600',
    },
    {
      icon: Waves,
      title: t.poolTitle,
      line1: t.poolHours,
      line2: null,
      accent: 'bg-sky-50 text-sky-800 border-sky-200/70',
      iconColor: 'text-sky-600',
    },
    {
      icon: Dumbbell,
      title: t.gymTitle,
      line1: t.gymHours,
      line2: null,
      accent: 'bg-emerald-50 text-emerald-800 border-emerald-200/70',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Clock,
      title: t.checkInOutTitle,
      line1: t.checkInOutValue,
      line2: null,
      accent: 'bg-blue-50 text-blue-900 border-blue-200/70',
      iconColor: 'text-[#0c2662]',
    },
    {
      icon: Bell,
      title: t.receptionTitle,
      line1: t.receptionValue,
      line2: null,
      accent: 'bg-indigo-50 text-indigo-900 border-indigo-200/70',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Dog,
      title: t.petTitle,
      line1: t.petValue,
      line2: null,
      accent: 'bg-orange-50 text-orange-900 border-orange-200/70',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="w-full mt-5 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
      {/* Header */}
      <div className="mb-3.5">
        <h3 className="text-sm sm:text-base font-bold text-[#0c2662] tracking-tight">
          {t.title}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {t.subtitle}
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {infoItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-3 rounded-xl border ${item.accent} flex items-start gap-2.5 transition-colors`}
            >
              <div className="p-2 rounded-lg bg-white shadow-xs shrink-0 mt-0.5">
                <Icon className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] opacity-90 mt-0.5 font-medium leading-tight">
                  {item.line1}
                </p>
                {item.line2 && (
                  <p className="text-[11px] opacity-80 mt-0.5 leading-tight">
                    {item.line2}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
