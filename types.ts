export type Language = 'ru' | 'en';

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string;
  marketplace: 'Ozon' | 'Wildberries' | 'Yandex Market' | 'AliExpress' | 'Amazon' | 'Other';
  rating: number;
  reviewsCount: number;
  affiliateLink: string;
  description?: string;
  tags?: string[];
}

export interface FilterState {
  recipient: string;
  gender: string;
  age: string;
  occasion: string;
  interests: string[];
  personality: string;
  priceRange: string;
}

export interface Translation {
  nav: {
    home: string;
    findGift: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  filters: {
    title: string;
    recipient: string;
    gender: string;
    age: string;
    occasion: string;
    interests: string;
    personality: string;
    price: string;
    findButton: string;
    reset: string;
    loading: string;
  };
  product: {
    buy: string;
    currency: string;
    rating: string;
  };
  home: {
    trendingTitle: string;
    categoriesTitle: string;
    reviewsTitle: string;
  };
  footer: {
    rights: string;
  };
  wishlist: {
    title: string;
    empty: string;
    share: string;
    copied: string;
    remove: string;
    total: string;
  };
}