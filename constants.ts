import { SurveyStepData, OptionType, LocalizedString, Region } from './types';

export const i18n: any = {
  ru: {
    // Header
    headerSubtitle: 'Ваш ИИ-помощник в выборе идеального подарка',
    // SurveyStep
    other: 'Другое',
    submit: 'Подтвердить',
    socialLinkPlaceholder: 'https://vk.com/example',
    findGifts: 'Найти подарки',
    skip: 'Пропустить',
    // Loading Spinner
    loadingMessages: [
        "ИИ подбирает идеи...",
        "Анализируем предпочтения...",
        "Ищем вдохновение во вселенной!",
        "Составляем список идеальных подарков...",
        "Почти готово!",
    ],
    // Gift Opening
    openingPresent: 'Открываем ваш подарок...',
    // Gift Results
    resultsTitle: 'Вот что мы подобрали для вас!',
    whereToBuy: 'Где купить',
    startOver: 'Начать заново',
    addToWishlist: 'Добавить в вишлист',
    removeFromWishlist: 'Удалить из вишлиста',
    // Wishlist
    wishlistTitle: 'Ваш вишлист',
    wishlistEmpty: 'Ваш вишлист пуст.',
    wishlistEmptyHint: 'Нажмите на сердечко на карточке подарка, чтобы добавить его сюда.',
    closeWishlist: 'Закрыть вишлист',
    remove: 'Удалить',
    // Error
    errorTitle: 'Произошла ошибка',
    tryAgain: 'Попробовать снова',
    // Why Podari
    whyTitle: 'Почему Podari.AI?',
    why1Title: 'Настоящий ИИ',
    why1Desc: 'Не просто фильтры — наш ИИ учится и генерирует новые идеи, анализируя тысячи вариантов.',
    why2Title: 'Все магазины сразу',
    why2Desc: 'Мы находим лучшие варианты на Ozon, Wildberries и Яндекс.Маркете, чтобы вы могли сравнить.',
    why3Title: 'Анализ соцсетей',
    why3Desc: 'Опционально: вставьте ссылку на профиль, чтобы ИИ точнее угадал интересы человека.',
    why4Title: 'Вишлисты и профили',
    why4Desc: 'Сохраняйте идеи в вишлисты и создавайте профили для близких, чтобы не забыть о важных датах.',
    why5Title: 'Широкий охват',
    why5Desc: 'От физических товаров до подписок, впечатлений и нишевых подарков.',
    why6Title: 'Прозрачность цен',
    why6Desc: 'Показываем цены в разных магазинах, помогая вам сделать выгодный выбор.',
    // New Translations
    navHome: 'Главная',
    navTrending: 'В тренде',
    navAbout: 'О нас',
    navSettings: 'Настройки',
    settingsTitle: 'Настройки',
    settingsSubtitle: 'Настройте ваш опыт',
    settingsRegion: 'Регион',
    settingsLanguage: 'Язык',
    settingsFlameAnimation: 'Анимация пламени',
    settingsFlameDescription: 'Включить эффект пламени для курсора',
    footerHome: 'Главная',
    footerAbout: 'О нас',
    footerCopyright: `© ${new Date().getFullYear()} Podari.AI. Все права защищены.`,
    wishlistAria: 'Открыть вишлист',
    trendingTitle: 'Популярные подарки',
    aboutTitle: 'О Podari.AI',
    aboutParagraph1: 'Мы верим, что идеальный подарок — это не просто вещь, а продуманное проявление связи. В мире бесконечных вариантов найти тот самый подарок может быть непросто. Поэтому мы создали Podari.AI.',
    aboutMissionTitle: 'Наша миссия',
    aboutMissionParagraph: 'Наша миссия проста: сделать процесс дарения подарков радостным и легким. Мы используем мощь продвинутого искусственного интеллекта, чтобы понять уникальную личность и интересы человека, для которого вы ищете подарок. Вместо общих рекомендаций мы предлагаем персонализированные, креативные и продуманные предложения, которые действительно находят отклик.',
    documentTitle: 'Podari Ai - Поиск подарков',
  },
  en: {
    // Header
    headerSubtitle: 'Your AI assistant for choosing the perfect gift',
    // SurveyStep
    other: 'Other',
    submit: 'Submit',
    socialLinkPlaceholder: 'https://instagram.com/example',
    findGifts: 'Find Gifts',
    skip: 'Skip',
    // Loading Spinner
    loadingMessages: [
      "AI is crafting ideas...",
      "Analyzing preferences...",
      "Searching the universe for inspiration!",
      "Compiling the perfect gift list...",
      "Almost there!",
    ],
    // Gift Opening
    openingPresent: 'Opening your present...',
    // Gift Results
    resultsTitle: 'Here are your gift ideas!',
    whereToBuy: 'Where to buy',
    startOver: 'Start Over',
    addToWishlist: 'Add to wishlist',
    removeFromWishlist: 'Remove from wishlist',
    // Wishlist
    wishlistTitle: 'Your Wishlist',
    wishlistEmpty: 'Your wishlist is empty.',
    wishlistEmptyHint: 'Click the heart on a gift card to add it here.',
    closeWishlist: 'Close wishlist',
    remove: 'Remove',
    // Error
    errorTitle: 'An Error Occurred',
    tryAgain: 'Try Again',
    // Why Podari
    whyTitle: 'Why Podari.AI?',
    why1Title: 'True AI',
    why1Desc: 'Not just filters—our AI learns and generates new ideas by analyzing thousands of options.',
    why2Title: 'All Stores at Once',
    why2Desc: 'We find the best options on Ozon, Wildberries, and Yandex.Market so you can compare.',
    why3Title: 'Social Media Analysis',
    why3Desc: 'Optional: paste a profile link for the AI to more accurately guess the person\'s interests.',
    why4Title: 'Wishlists & Profiles',
    why4Desc: 'Save ideas to wishlists and create profiles for loved ones so you don\'t forget important dates.',
    why5Title: 'Wide Scope',
    why5Desc: 'From physical goods to subscriptions, experiences, and niche gifts.',
    why6Title: 'Price Transparency',
    why6Desc: 'We show prices across different stores, helping you make a cost-effective choice.',
    // New Translations
    navHome: 'Home',
    navTrending: 'Trending Gifts',
    navAbout: 'About Us',
    navSettings: 'Settings',
    settingsTitle: 'Settings',
    settingsSubtitle: 'Customize your experience',
    settingsRegion: 'Region',
    settingsLanguage: 'Language',
    settingsFlameAnimation: 'Flame Animation',
    settingsFlameDescription: 'Enable cursor flame effect',
    footerHome: 'Home',
    footerAbout: 'About Us',
    footerCopyright: `© ${new Date().getFullYear()} Podari.AI. All Rights Reserved.`,
    wishlistAria: 'Open wishlist',
    trendingTitle: 'Trending Gifts',
    aboutTitle: 'About Podari.AI',
    aboutParagraph1: "We believe that the perfect gift is more than just an item—it's a thoughtful expression of connection. In a world of endless options, finding that perfect gift can be overwhelming. That's why we created Podari.AI.",
    aboutMissionTitle: 'Our Mission',
    aboutMissionParagraph: "Our mission is simple: to make gift-giving joyful and effortless. We leverage the power of advanced artificial intelligence to understand the unique personality and interests of the person you're shopping for. Instead of generic recommendations, we provide personalized, creative, and thoughtful suggestions that truly resonate.",
    documentTitle: 'Podari Ai - Gift Finder',
  }
};

const t = (ru: string, en: string): LocalizedString => ({ ru, en });

export const REGIONS: Region[] = [
  { code: 'RU', name: 'Russia' },
  { code: 'AM', name: 'Armenia' },
  { code: 'BY', name: 'Belarus' },
  { code: 'GE', name: 'Georgia' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'UZ', name: 'Uzbekistan' },
];

export const SURVEY_STEPS: SurveyStepData[] = [
  {
    id: 'recipient',
    question: t('Для кого вы ищете подарок?', 'Who are you looking for a gift for?'),
    type: OptionType.TEXT,
    allowOther: true,
    options: [
      { label: t('Партнер', 'Partner'), value: 'partner' },
      { label: t('Член семьи', 'Family Member'), value: 'family member' },
      { label: t('Друг', 'Friend'), value: 'friend' },
      { label: t('Коллега', 'Colleague'), value: 'colleague' },
      { label: t('Ребенок', 'Child'), value: 'child' },
      { label: t('Родитель', 'Parent'), value: 'parent' },
    ],
  },
  {
    id: 'occasion',
    question: t('По какому поводу подарок?', "What's the occasion?"),
    type: OptionType.TEXT,
    allowOther: true,
    options: [
        { label: t('День рождения', 'Birthday'), value: 'birthday' },
        { label: t('Новый год', 'New Year'), value: 'new year' },
        { label: t('Годовщина', 'Anniversary'), value: 'anniversary' },
        { label: t("8 марта / 23 февраля", "International Women's / Defender of the Fatherland Day"), value: '8th march or 23rd february' },
        { label: t('Просто так', 'Just because'), value: 'just because' },
    ]
  },
  {
    id: 'gender',
    question: t('Какого он/она пола?', 'What is their gender?'),
    type: OptionType.TEXT,
    options: [
      { label: t('Мужчина', 'Male'), value: 'male' },
      { label: t('Женщина', 'Female'), value: 'female' },
      { label: t('Не имеет значения', "Doesn't matter"), value: 'any' },
    ],
  },
  {
    id: 'budget',
    question: t('Какой у вас бюджет?', 'What is your budget?'),
    type: OptionType.TEXT,
    options: [
      { label: t('до 3,000₽', 'Under 3,000₽'), value: 'under 3000 RUB' },
      { label: t('3,000₽ - 10,000₽', '3,000₽ - 10,000₽'), value: '3000-10000 RUB' },
      { label: t('10,000₽ - 25,000₽', '10,000₽ - 25,000₽'), value: '10000-25000 RUB' },
      { label: t('25,000₽+', 'Over 25,000₽'), value: 'over 25000 RUB' },
    ],
  },
   {
    id: 'personality',
    question: t('Какой он/она человек?', 'What is their personality like?'),
    type: OptionType.IMAGE,
    options: [
        { label: t('Душа компании', 'Life of the party'), value: 'extrovert, social, life of the party', imageUrl: 'https://picsum.photos/seed/party1/400/300' },
        { label: t('Домосед', 'Homebody'), value: 'introvert, homebody, cozy', imageUrl: 'https://picsum.photos/seed/home1