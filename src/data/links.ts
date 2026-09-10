import { HotelDetails, LinkItem } from '../types';

export const hotelDetails: HotelDetails = {
  name: 'Blue Tree Premium Manaus',
  rating: 4.8,
  category: 'TripAdvisor & Google',
  address: 'Av. Umberto Calderaro Filho, 455',
  neighborhood: 'Adrianópolis',
  city: 'Manaus',
  state: 'AM',
  zipCode: '69057-015',
  phone: '+559233032000',
  phoneFormatted: '+55 (92) 3303-2000',
  email: 'recepcao1.manaus@bluetree.com.br',
  bookingUrl: 'https://www.bluetree.com.br/hotel/blue-tree-premium-manaus/',
  instagramUrl: 'https://www.instagram.com/bluetreehotels/',
  wifiSsid: 'bluetree',
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

  // 2. Wi-Fi Direto (botão clicável direto para bluetree responsivo iOS e Android)
  {
    id: 'wifi-access',
    title: {
      pt: 'Conectar ao Wi-Fi (Rede bluetree)',
      en: 'Connect to Wi-Fi (Network bluetree)',
      es: 'Conectar al Wi-Fi (Red bluetree)',
    },
    subtitle: {
      pt: 'Clique para conectar direto • Sem senha • Redirecionamento automático',
      en: 'Tap to connect directly • No password required • Automatic login redirect',
      es: 'Toque para conectar directo • Sin contraseña • Redirección automática',
    },
    actionType: 'modal_wifi',
    badge: {
      pt: '1-Toque',
      en: '1-Tap',
      es: '1-Toque',
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
    iconName: 'Star',
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
    iconName: 'Award',
  },
];
