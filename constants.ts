import { Translation, Product } from './types';

export const TRANSLATIONS: Record<'ru' | 'en', Translation> = {
  ru: {
    nav: {
      home: 'Главная',
      findGift: 'Найти подарок',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      title: 'Подбери идеальный подарок с AI',
      subtitle: 'Умный поиск подарков по интересам, поводу и бюджету.',
      cta: 'Найти подарок',
    },
    filters: {
      title: 'Параметры поиска',
      recipient: 'Для кого',
      gender: 'Пол',
      age: 'Возраст',
      occasion: 'Повод',
      interests: 'Интересы',
      personality: 'Тип личности',
      price: 'Бюджет',
      findButton: 'Подобрать подарки',
      reset: 'Сбросить',
      loading: 'AI ищет лучшие варианты...',
    },
    product: {
      buy: 'Купить',
      currency: '₽',
      rating: 'Рейтинг',
    },
    home: {
      trendingTitle: 'Популярное сейчас',
      categoriesTitle: 'Категории',
      reviewsTitle: 'Отзывы пользователей',
    },
    footer: {
      rights: 'Все права защищены.',
    },
    wishlist: {
      title: 'Ваш вишлист',
      empty: 'Пока пусто. Добавьте понравившиеся подарки!',
      share: 'Поделиться вишлистом',
      copied: 'Скопировано!',
      remove: 'Удалить',
      total: 'Итого',
    },
  },
  en: {
    nav: {
      home: 'Home',
      findGift: 'Find a Gift',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Find the perfect gift using AI',
      subtitle: 'Smart gift search based on interests, occasion, and budget.',
      cta: 'Find a gift',
    },
    filters: {
      title: 'Search Filters',
      recipient: 'For Whom',
      gender: 'Gender',
      age: 'Age',
      occasion: 'Occasion',
      interests: 'Interests',
      personality: 'Personality',
      price: 'Budget',
      findButton: 'Find Gifts',
      reset: 'Reset',
      loading: 'AI is finding best options...',
    },
    product: {
      buy: 'Buy Now',
      currency: '₽',
      rating: 'Rating',
    },
    home: {
      trendingTitle: 'Trending Now',
      categoriesTitle: 'Categories',
      reviewsTitle: 'User Reviews',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    wishlist: {
      title: 'Your Wishlist',
      empty: 'Empty for now. Add gifts you like!',
      share: 'Share Wishlist',
      copied: 'Copied!',
      remove: 'Remove',
      total: 'Total',
    },
  },
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Smart Sunset Lamp',
    price: 1200,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/10/400/400',
    marketplace: 'Ozon',
    rating: 4.8,
    reviewsCount: 152,
    affiliateLink: '#',
    description: 'Creates a cozy atmosphere.'
  },
  {
    id: '2',
    title: 'Wireless Noise Cancelling Headphones',
    price: 4500,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/3/400/400',
    marketplace: 'Yandex Market',
    rating: 4.5,
    reviewsCount: 89,
    affiliateLink: '#',
    description: 'Great for travelers.'
  },
  {
    id: '3',
    title: 'Eco-Friendly Yoga Mat',
    price: 2300,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/7/400/400',
    marketplace: 'Wildberries',
    rating: 4.9,
    reviewsCount: 340,
    affiliateLink: '#',
    description: 'Non-slip surface.'
  },
  {
    id: '4',
    title: 'Instant Print Camera',
    price: 8990,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/96/400/400',
    marketplace: 'Ozon',
    rating: 4.7,
    reviewsCount: 210,
    affiliateLink: '#',
    description: 'Capture memories instantly.'
  },
  {
    id: '5',
    title: 'Mechanical Keyboard RGB',
    price: 3500,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/119/400/400',
    marketplace: 'AliExpress',
    rating: 4.6,
    reviewsCount: 542,
    affiliateLink: '#',
    description: 'Clicky switches for gamers.'
  },
  {
    id: '6',
    title: 'Minimalist Backpack',
    price: 2800,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/180/400/400',
    marketplace: 'Ozon',
    rating: 4.8,
    reviewsCount: 120,
    affiliateLink: '#',
    description: 'Waterproof and stylish.'
  },
  {
    id: '7',
    title: 'Portable Coffee Maker',
    price: 1900,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/106/400/400',
    marketplace: 'Yandex Market',
    rating: 4.4,
    reviewsCount: 78,
    affiliateLink: '#',
    description: 'Espresso on the go.'
  },
  {
    id: '8',
    title: 'Levitating Moon Lamp',
    price: 5600,
    currency: '₽',
    imageUrl: 'https://picsum.photos/id/111/400/400',
    marketplace: 'Wildberries',
    rating: 4.9,
    reviewsCount: 890,
    affiliateLink: '#',
    description: 'Magical decor piece.'
  },
];

export const CATEGORIES = [
  { id: 'her', ru: 'Для нее', en: 'For Her', img: 'https://picsum.photos/seed/her/300/300' },
  { id: 'him', ru: 'Для него', en: 'For Him', img: 'https://picsum.photos/seed/him/300/300' },
  { id: 'kids', ru: 'Детям', en: 'For Kids', img: 'https://picsum.photos/seed/kids/300/300' },
  { id: 'tech', ru: 'Гаджеты', en: 'Tech', img: 'https://picsum.photos/seed/tech/300/300' },
  { id: 'home', ru: 'Для дома', en: 'Home Decor', img: 'https://picsum.photos/seed/home/300/300' },
];

export const REVIEWS = [
  { id: 1, user: 'Anna K.', text: 'Saved me so much time for New Year gifts!', rating: 5 },
  { id: 2, user: 'Dmitry V.', text: 'The AI recommendations were surprisingly accurate.', rating: 5 },
  { id: 3, user: 'Elena S.', text: 'Loved the interface, very clean and easy.', rating: 4 },
];