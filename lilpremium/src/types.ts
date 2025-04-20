export interface Service {
  id: number;
  name: string;
  price: string;
  period: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}