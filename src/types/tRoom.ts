import { tReview } from "./tReview";

export type tRoomType = {
  type:
    | "Standard"
    | "Deluxe"
    | "Suite"
    | "Cabin"
    | "Executive"
    | "Treehouse"
    | "River view"
    | "Cottage"
    | "Luxury"
    | "Lake view"
    | "Log cabin";
  price: number;
  quantity: number;
};

export type tRoom = {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
  availability: boolean;
  reviews: tReview[];
  imageLocation: string;
  amenities: string[];
  rating: number;
  contact: {
    phone: string;
    email: string;
  };
  website: string;
  checkInTime: string;
  checkOutTime: string;
  nearbyAttractions: string[];
  roomsAvailable: tRoomType[];
  featured: boolean;
};
