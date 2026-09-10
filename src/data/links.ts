import { HotelDetails, LinkItem } from '../types';

export const hotelDetails: HotelDetails = {
  name: 'Blue Tree Premium Manaus',
  rating: 4.8,
  category: 'TripAdvisor & Google',
  address: 'Av. Umberto Calderaro Filho, 817',
  neighborhood: 'Adrianópolis',
  city: 'Manaus',
  state: 'AM',
  zipCode: '69057-015',
  phone: '+559233032000',
  phoneFormatted: '+55 (92) 3303-2000',
  email: 'recepcao1.manaus@bluetree.com.br',
  bookingUrl: 'https://www.bluetree.com.br/hotel/blue-tree-premium-manaus/',
  instagramUrl: 'https://www.instagram.com/bluetreehotels/',
  wifiSsid: 'Blue Tree',
  checkIn: '14:00',
  checkOut: '12:00',
  breakfastHoursWeekdays: '06:00 às 10:00',
  breakfastHoursWeekends: '06:30 às 10:30',
  poolHours: '06:00 às 22:00',
  gymHours: '06:00 às 22:00',
};

export const linkItems: LinkItem[] = [
  // 1. Reserva Oficial
  {
    id: 'booking-direct',
    title: {
      pt: 'Reserve com a Melhor Tarifa',
      en: 'Book Direct with Best Rate',
      es: 'Reserve con la Mejor Tarifa',
    },
    subtitle: {
      pt: 'Tarifas oficiais e vantagens exclusivas direto no site da rede',
      en: 'Official rates & exclusive perks directly on hotel website',
      es: 'Tarifas oficiales y ventajas exclusivas en la web del hotel',
    },
    url: 'https://www.bluetree.com.br/hotel/blue-tree-premium-manaus/',
    actionType: 'external_link',
    badge: {
      pt: 'Site Oficial',
      en: 'Official Site',
      es: 'Sitio Oficial',
    },
    isHighlight: true,
    iconName: 'Sparkles',
  },

  // 2. Wi-Fi Informativo (sem clique, apenas texto)
  {
    id: 'wifi-access',
    title: {
      pt: 'Rede Wi-Fi: Blue Tree',
      en: 'Wi-Fi Network: Blue Tree',
      es: 'Red Wi-Fi: Blue Tree',
    },
    subtitle: {
      pt: 'Sem senha • Conecte na rede Blue Tree e confirme o acesso no navegador',
      en: 'No password • Connect to Blue Tree network and validate access in browser',
      es: 'Sin contraseña • Conéctese a la red Blue Tree y confirme el acceso en el navegador',
    },
    actionType: 'info_only',
    badge: {
      pt: 'Sem Senha',
      en: 'No Password',
      es: 'Sin Clave',
    },
    iconName: 'Wifi',
  },

  // 3. Agenda Cultural
  {
    id: 'agenda-cultural',
    title: {
      pt: 'Agenda Cultural do Amazonas 🎭',
      en: 'Amazonas Cultural Schedule 🎭',
      es: 'Agenda Cultural de Amazonas 🎭',
    },
    subtitle: {
      pt: 'Teatro Amazonas, eventos, museus e espetáculos em Manaus',
      en: 'Teatro Amazonas, live shows, museums & exhibitions',
      es: 'Teatro Amazonas, eventos, museos y espectáculos',
    },
    url: 'https://cultura.am.gov.br/agenda/',
    actionType: 'external_link',
    thumbnailUrl: 'https://s3-sa-east-1.amazonaws.com/img.guiadasartes.com.br/eve/406-museu-teatro-amazonas-/dD1VEhlp.jpg',
    iconName: 'Ticket',
  },

  // 4. Avaliação no Google
  {
    id: 'review-google',
    title: {
      pt: 'Faça-nos uma avaliação no Google ⭐⭐⭐⭐⭐',
      en: 'Leave us a review on Google ⭐⭐⭐⭐⭐',
      es: 'Déjanos una opinión en Google ⭐⭐⭐⭐⭐',
    },
    subtitle: {
      pt: 'Compartilhe sua experiência de hospedagem em Manaus',
      en: 'Share your stay experience with fellow travelers',
      es: 'Comparte tu experiencia de hospedaje en Manaus',
    },
    url: 'https://g.page/r/CSf-qZaJXYZCEBM/review',
    actionType: 'external_link',
    iconName: 'Google',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png',
  },

  // 5. Avaliação no TripAdvisor
  {
    id: 'review-tripadvisor',
    title: {
      pt: 'Faça-nos uma avaliação no TripAdvisor ⭐⭐⭐⭐⭐',
      en: 'Leave us a review on TripAdvisor ⭐⭐⭐⭐⭐',
      es: 'Déjanos una opinión en TripAdvisor ⭐⭐⭐⭐⭐',
    },
    subtitle: {
      pt: 'Ajude outros hóspedes e recomende o Blue Tree Manaus',
      en: 'Help other guests & recommend Blue Tree Manaus',
      es: 'Ayuda a otros viajeros y recomienda Blue Tree Manaus',
    },
    url: 'https://www.tripadvisor.com.br/UserReviewEdit-g303235-d1830539-Blue_Tree_Premium_Manaus-Manaus_Amazon_River_State_of_Amazonas.html',
    actionType: 'external_link',
    iconName: 'TripAdvisor',
    thumbnailUrl: 'https://static.tacdn.com/img2/brand_refresh_2025/logos/logo.svg',
  },
];
