export type Language = 'pt' | 'en' | 'es';

export interface LinkItem {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  url?: string;
  actionType: 'external_link' | 'modal_wifi' | 'modal_info' | 'info_only';
  badge?: Record<Language, string>;
  isHighlight?: boolean;
  iconName: string;
  thumbnailUrl?: string;
}

export interface HotelDetails {
  name: string;
  rating: number;
  category: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  bookingUrl: string;
  instagramUrl: string;
  wifiSsid: string;
  checkIn: string;
  checkOut: string;
  breakfastHoursWeekdays: string;
  breakfastHoursWeekends: string;
  poolHours: string;
  gymHours: string;
}

export type PlaceCategory =
  | 'all'
  | 'restaurant'
  | 'shopping'
  | 'attraction'
  | 'nature'
  | 'sports';

export interface PlaceToVisit {
  id: string;
  name: string;
  category: PlaceCategory;
  categoryLabel: Record<Language, string>;
  distanceFromHotel: string;
  estimatedDriveTime: string;
  address: string;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  highlights?: Record<Language, string[]>;
  tips?: Record<Language, string>;
  mapsUrl: string;
}
