
import { SurveyStepData, OptionType } from './types';

export const SURVEY_STEPS: SurveyStepData[] = [
  {
    id: 'recipient',
    question: 'Для кого вы ищете подарок? (Who are you looking for a gift for?)',
    type: OptionType.TEXT,
    options: [
      { label: 'Партнер (Partner)', value: 'partner' },
      { label: 'Член семьи (Family)', value: 'family member' },
      { label: 'Друг (Friend)', value: 'friend' },
      { label: 'Коллега (Colleague)', value: 'colleague' },
      { label: 'Ребенок (Child)', value: 'child' },
      { label: 'Родитель (Parent)', value: 'parent' },
    ],
  },
  {
    id: 'occasion',
    question: 'По какому поводу подарок? (What\'s the occasion?)',
    type: OptionType.TEXT,
    options: [
        { label: 'День рождения (Birthday)', value: 'birthday' },
        { label: 'Новый год (New Year)', value: 'new year' },
        { label: 'Годовщина (Anniversary)', value: 'anniversary' },
        { label: '8 марта / 23 февраля', value: '8th march or 23rd february' },
        { label: 'Просто так (Just because)', value: 'just because' },
    ]
  },
  {
    id: 'gender',
    question: 'Какого он/она пола? (What is their gender?)',
    type: OptionType.TEXT,
    options: [
      { label: 'Мужчина (Male)', value: 'male' },
      { label: 'Женщина (Female)', value: 'female' },
      { label: 'Не имеет значения (Doesn\'t matter)', value: 'any' },
    ],
  },
  {
    id: 'budget',
    question: 'Какой у вас бюджет? (What is your budget?)',
    type: OptionType.TEXT,
    options: [
      { label: 'до 3,000₽ (Under 3,000₽)', value: 'under 3000 RUB' },
      { label: '3,000₽ - 10,000₽', value: '3000-10000 RUB' },
      { label: '10,000₽ - 25,000₽', value: '10000-25000 RUB' },
      { label: '25,000₽+ (25,000₽+)', value: 'over 25000 RUB' },
    ],
  },
   {
    id: 'personality',
    question: 'Какой он/она человек? (What is their personality like?)',
    type: OptionType.IMAGE,
    options: [
        { label: 'Душа компании (Life of the party)', value: 'extrovert, social, life of the party', imageUrl: 'https://picsum.photos/seed/party1/400/300' },
        { label: 'Домосед (Homebody)', value: 'introvert, homebody, cozy', imageUrl: 'https://picsum.photos/seed/home1/400/300' },
        { label: 'Интеллектуал (Intellectual)', value: 'intellectual, loves learning, books', imageUrl: 'https://picsum.photos/seed/book1/400/300' },
        { label: 'Творческая личность (Creative Soul)', value: 'creative, artistic, loves making things', imageUrl: 'https://picsum.photos/seed/creative1/400/300' },
    ]
  },
  {
    id: 'style',
    question: 'Какой стиль дома он/она бы предпочел(а)? (Which house style would they prefer?)',
    type: OptionType.IMAGE,
    options: [
      { label: 'Современный минимализм (Modern Minimalist)', value: 'modern minimalist', imageUrl: 'https://picsum.photos/seed/house1/400/300' },
      { label: 'Уютный деревенский (Cozy Rustic)', value: 'cozy rustic', imageUrl: 'https://picsum.photos/seed/house2/400/300' },
      { label: 'Роскошный классический (Luxury Classic)', value: 'luxury classic', imageUrl: 'https://picsum.photos/seed/house3/400/300' },
      { label: 'Богемный шик (Bohemian Chic)', value: 'bohemian chic', imageUrl: 'https://picsum.photos/seed/house4/400/300' },
    ],
  },
   {
    id: 'activity',
    question: 'Какое занятие ему/ей больше по душе? (Which activity do they prefer?)',
    type: OptionType.IMAGE,
    options: [
      { label: 'Спорт и фитнес (Sports & Fitness)', value: 'sports and fitness', imageUrl: 'https://picsum.photos/seed/sport1/400/300' },
      { label: 'Технологии и гаджеты (Tech & Gadgets)', value: 'tech and gadgets', imageUrl: 'https://picsum.photos/seed/tech1/400/300' },
      { label: 'Искусство и творчество (Art & Creativity)', value: 'art and creativity', imageUrl: 'https://picsum.photos/seed/art1/400/300' },
      { label: 'Путешествия и приключения (Travel & Adventure)', value: 'travel and adventure', imageUrl: 'https://picsum.photos/seed/travel1/400/300' },
    ],
  },
  {
    id: 'giftType',
    question: 'Какой тип подарка вы рассматриваете? (What type of gift are you considering?)',
    type: OptionType.TEXT,
    options: [
      { label: 'Физический предмет (Physical Item)', value: 'physical item' },
      { label: 'Онлайн-подписка (Online Subscription)', value: 'online subscription' },
      { label: 'Впечатление (Experience)', value: 'an experience' },
      { label: 'Любой (Any)', value: 'any' },
    ],
  },
  {
    id: 'socialLink',
    question: 'Необязательно: Вставьте ссылку на соцсеть для лучших рекомендаций (Optional: Paste a social media link for better suggestions)',
    type: OptionType.TEXT,
    options: [], // This will be a text input field
  }
];