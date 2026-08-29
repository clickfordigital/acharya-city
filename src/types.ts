export interface AstrologerService {
  id: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  badge?: string;
  popularFor: string[];
}

export interface CityLocality {
  id: string;
  name: string;
  pincode: string;
  zone: string;
  landmark: string;
  consultationModes: string[];
  travelTimeFromChamber: string;
  description: string;
  clientsServed: number;
  avgRating: number;
  popularServices: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  locality: string;
  rating: number;
  serviceUsed: string;
  date: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  consultationMode: 'in_person_indirapuram' | 'in_person_rajnagar' | 'video_call' | 'phone_call' | 'whatsapp_report';
  serviceType: string;
  dob: string;
  birthTime: string;
  birthCity: string;
  localityInGhaziabad: string;
  preferredDate: string;
  preferredTimeSlot: string;
  specificConcerns: string;
}

export interface RashiInfo {
  name: string;
  hindiName: string;
  element: string;
  rulingPlanet: string;
  luckyNumber: number;
  luckyColor: string;
  gemstone: string;
  currentTransitFocus: string;
  advice: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'remedies' | 'accuracy' | 'ghaziabad_chamber';
}
