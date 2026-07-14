export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits?: string[];
  price?: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  emoji: string;
}

export interface PackageDetail {
  name: string;
  price: string;
  oldPrice?: string;
  description?: string;
  preWedding: string[];
  eventDay?: string[];
  badge?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar: string;
}

export interface BookingFormInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  package: string;
  date: string;
  time: string;
  message: string;
  useWhatsApp: boolean;
}

export interface FeatureItem {
  name: string;
  icon: string;
}
