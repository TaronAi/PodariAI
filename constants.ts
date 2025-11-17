import { SurveyStepData, OptionType, LocalizedString, Region } from './types';

export const i18n: any = {
  en: {
    // Header
    headerSubtitle: 'Your AI assistant for choosing the perfect gift in Armenia',
    // SurveyStep
    other: 'Other',
    submit: 'Submit',
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
    whereToBuy: 'Available from',
    viewProduct: 'View Product',
    startOver: 'Start Over',
    showMoreGifts: 'Show More Gifts',
    loadingMore: 'Loading...',
    noMoreGiftsFound: 'No more gifts found matching your criteria.',
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
    errorNoGiftsFound: "The AI couldn't find any suitable gifts with the selected criteria. Please try different options.",
    errorNoGiftsInBudget: 'The AI found gifts, but none matched your budget. Please try a wider price range.',
    // Why
    whyTitle: 'Why Podari AI?',
    why1Title: 'True AI',
    why1Desc: 'Not just filters—our AI learns and generates new ideas by analyzing thousands of options.',
    why2Title: 'Shop Wildberries',
    why2Desc: 'We find the best options on Wildberries so you can easily find the perfect gift.',
    why4Title: 'Wishlists & Profiles',
    why4Desc: 'Save ideas to wishlists and create profiles for loved ones so you don\'t forget important dates.',
    why5Title: 'Wide Scope',
    why5Desc: 'From physical goods to subscriptions, experiences, and niche gifts.',
    why6Title: 'Price Transparency',
    why6Desc: 'We show prices to help you make a cost-effective choice.',
    // Nav & Footer
    navHome: 'Home',
    navTrending: 'Trending Gifts',
    navAbout: 'About Us',
    navSettings: 'Settings',
    settingsTitle: 'Settings',
    settingsSubtitle: 'Customize your experience',
    settingsRegion: 'Region',
    settingsLanguage: 'Language',
    footerHome: 'Home',
    footerAbout: 'About Us',
    footerCopyright: `© ${new Date().getFullYear()} Podari AI. All Rights Reserved.`,
    wishlistAria: 'Open wishlist',
    trendingTitle: 'Trending Gifts',
    aboutTitle: 'About Podari AI',
    aboutParagraph1: "We believe that the perfect gift is more than just an item—it's a thoughtful expression of connection. In a world of endless options, finding that perfect gift can be overwhelming. That's why we created Podari AI.",
    aboutMissionTitle: 'Our Mission',
    aboutMissionParagraph: "Our mission is simple: to make gift-giving joyful and effortless. We leverage the power of advanced artificial intelligence to understand the unique personality and interests of the person you're shopping for. Instead of generic recommendations, we provide personalized, creative, and thoughtful suggestions that truly resonate.",
    documentTitle: 'Podari AI - Armenia Gift Finder',
  },
  ru: {
    // Header
    headerSubtitle: 'Ваш ИИ-помощник для выбора идеального подарка в Армении',
    // SurveyStep
    other: 'Другое',
    submit: 'Отправить',
    // Loading Spinner
    loadingMessages: [
      "ИИ создает идеи...",
      "Анализ предпочтений...",
      "Поиск вдохновения во вселенной!",
      "Составление идеального списка подарков...",
      "Почти готово!",
    ],
    // Gift Opening
    openingPresent: 'Открываем ваш подарок...',
    // Gift Results
    resultsTitle: 'Вот ваши идеи для подарков!',
    whereToBuy: 'Доступно в',
    viewProduct: 'Посмотреть товар',
    startOver: 'Начать сначала',
    showMoreGifts: 'Показать еще',
    loadingMore: 'Загрузка...',
    noMoreGiftsFound: 'Больше подарков, соответствующих вашим критериям, не найдено.',
    addToWishlist: 'Добавить в избранное',
    removeFromWishlist: 'Удалить из избранного',
    // Wishlist
    wishlistTitle: 'Ваш список желаний',
    wishlistEmpty: 'Ваш список желаний пуст.',
    wishlistEmptyHint: 'Нажмите на сердце на карточке подарка, чтобы добавить его сюда.',
    closeWishlist: 'Закрыть список желаний',
    remove: 'Удалить',
    // Error
    errorTitle: 'Произошла ошибка',
    tryAgain: 'Попробовать снова',
    errorNoGiftsFound: "ИИ не смог найти подходящих подарков по выбранным критериям. Пожалуйста, попробуйте другие варианты.",
    errorNoGiftsInBudget: 'ИИ нашел подарки, но ни один не соответствовал вашему бюджету. Пожалуйста, попробуйте более широкий диапазон цен.',
    // Why
    whyTitle: 'Почему Podari AI?',
    why1Title: 'Настоящий ИИ',
    why1Desc: 'Не просто фильтры — наш ИИ учится и генерирует новые идеи, анализируя тысячи вариантов.',
    why2Title: 'Магазин Wildberries',
    why2Desc: 'Мы находим лучшие варианты на Wildberries, чтобы вы могли легко найти идеальный подарок.',
    why4Title: 'Списки желаний и профили',
    why4Desc: 'Сохраняйте идеи в списки желаний и создавайте профили для близких, чтобы не забывать важные даты.',
    why5Title: 'Широкий охват',
    why5Desc: 'От физических товаров до подписок, впечатлений и нишевых подарков.',
    why6Title: 'Прозрачность цен',
    why6Desc: 'Мы показываем цены, чтобы помочь вам сделать экономически выгодный выбор.',
    // Nav & Footer
    navHome: 'Главная',
    navTrending: 'Популярные подарки',
    navAbout: 'О нас',
    navSettings: 'Настройки',
    settingsTitle: 'Настройки',
    settingsSubtitle: 'Настройте свой опыт',
    settingsRegion: 'Регион',
    settingsLanguage: 'Язык',
    footerHome: 'Главная',
    footerAbout: 'О нас',
    footerCopyright: `© ${new Date().getFullYear()} Podari AI. Все права защищены.`,
    wishlistAria: 'Открыть список желаний',
    trendingTitle: 'Популярные подарки',
    aboutTitle: 'О Podari AI',
    aboutParagraph1: "Мы верим, что идеальный подарок — это больше, чем просто вещь. Это продуманное выражение связи. В мире бесконечных возможностей найти идеальный подарок может быть непросто. Вот почему мы создали Podari AI.",
    aboutMissionTitle: 'Наша миссия',
    aboutMissionParagraph: "Наша миссия проста: сделать процесс дарения подарков радостным и легким. Мы используем возможности передового искусственного интеллекта, чтобы понять уникальную личность и интересы человека, для которого вы покупаете. Вместо общих рекомендаций мы предоставляем персонализированные, креативные и продуманные предложения, которые действительно находят отклик.",
    documentTitle: 'Podari AI - Поиск подарков в Армении',
  },
  hy: {
    // Header
    headerSubtitle: 'Ձեր AI օգնականը Հայաստանում կատարյալ նվեր ընտրելու համար',
    // SurveyStep
    other: 'Այլ',
    submit: 'Ուղարկել',
    // Loading Spinner
    loadingMessages: [
        "AI-ն գաղափարներ է ստեղծում...",
        "Նախասիրությունների վերլուծություն...",
        "Ոգեշնչման որոնում տիեզերքում:",
        "Կատարյալ նվերների ցանկի կազմում...",
        "Գրեթե պատրաստ է:",
    ],
    // Gift Opening
    openingPresent: 'Բացում ենք ձեր նվերը...',
    // Gift Results
    resultsTitle: 'Ահա ձեր նվերների գաղափարները',
    whereToBuy: 'Հասանելի է',
    viewProduct: 'Դիտել ապրանքը',
    startOver: 'Սկսել նորից',
    showMoreGifts: 'Ցույց տալ ավելին',
    loadingMore: 'Բեռնում...',
    noMoreGiftsFound: 'Ձեր չափանիշներին համապատասխանող այլ նվերներ չեն գտնվել:',
    addToWishlist: 'Ավելացնել ցանկությունների ցուցակում',
    removeFromWishlist: 'Հեռացնել ցանկությունների ցուցակից',
    // Wishlist
    wishlistTitle: 'Ձեր ցանկությունների ցուցակը',
    wishlistEmpty: 'Ձեր ցանկությունների ցուցակը դատարկ է:',
    wishlistEmptyHint: 'Սեղմեք սրտի նշանին՝ նվերը այստեղ ավելացնելու համար:',
    closeWishlist: 'Փակել',
    remove: 'Հեռացնել',
    // Error
    errorTitle: 'Սխալ տեղի ունեցավ',
    tryAgain: 'Փորձել կրկին',
    errorNoGiftsFound: "AI-ն չկարողացավ գտնել համապատասխան նվերներ: Խնդրում ենք փորձել այլ տարբերակներ:",
    errorNoGiftsInBudget: 'AI-ն գտավ նվերներ, բայց ոչ մեկը չհամապատասխանեց ձեր բյուջեին: Խնդրում ենք փորձել ավելի լայն գնային միջակայք:',
    // Why
    whyTitle: 'Ինչու՞ Podari AI',
    why1Title: 'Իսկական AI',
    why1Desc: 'Ոչ միայն ֆիլտրեր. մեր AI-ն սովորում և ստեղծում է նոր գաղափարներ՝ վերլուծելով հազարավոր տարբերակներ:',
    why2Title: 'Գնումներ Wildberries-ում',
    why2Desc: 'Մենք գտնում ենք լավագույն տարբերակները Wildberries-ում, որպեսզի դուք հեշտությամբ գտնեք կատարյալ նվերը:',
    why4Title: 'Ցանկությունների ցուցակներ և պրոֆիլներ',
    why4Desc: 'Պահպանեք գաղափարները ցուցակներում և ստեղծեք պրոֆիլներ սիրելիների համար, որպեսզի չմոռանաք կարևոր ամսաթվերը:',
    why5Title: 'Լայն ընտրություն',
    why5Desc: 'Ֆիզիկական ապրանքներից մինչև բաժանորդագրություններ, փորձառություններ և նիշային նվերներ:',
    why6Title: 'Գների թափանցիկություն',
    why6Desc: 'Մենք ցույց ենք տալիս գները՝ օգնելով ձեզ կատարել ծախսարդյունավետ ընտրություն:',
    // Nav & Footer
    navHome: 'Գլխավոր',
    navTrending: 'Թրենդային նվերներ',
    navAbout: 'Մեր մասին',
    navSettings: 'Կարգավորումներ',
    settingsTitle: 'Կարգավորումներ',
    settingsSubtitle: 'Անհատականացրեք ձեր փորձը',
    settingsRegion: 'Տարածաշրջան',
    settingsLanguage: 'Լեզու',
    footerHome: 'Գլխավոր',
    footerAbout: 'Մեր մասին',
    footerCopyright: `© ${new Date().getFullYear()} Podari AI. Բոլոր իրավունքները պաշտպանված են.`,
    wishlistAria: 'Բացել ցանկությունների ցուցակը',
    trendingTitle: 'Թրենդային նվերներ',
    aboutTitle: 'Podari AI-ի մասին',
    aboutParagraph1: "Մենք հավատում ենք, որ կատարյալ նվերը պարզապես իր չէ, այլ կապի խոհուն արտահայտություն: Անվերջ տարբերակների աշխարհում այդ կատարյալ նվերը գտնելը կարող է ճնշող լինել: Ահա թե ինչու մենք ստեղծեցինք Podari AI-ն:",
    aboutMissionTitle: 'Մեր առաքելությունը',
    aboutMissionParagraph: "Մեր առաքելությունը պարզ է՝ նվեր տալու գործընթացը դարձնել ուրախ և անաշխատ: Մենք օգտագործում ենք առաջադեմ արհեստական բանականության ուժը՝ հասկանալու այն մարդու յուրահատուկ անհատականությունն ու հետաքրքրությունները, ում համար գնումներ եք կատարում: Ընդհանուր առաջարկությունների փոխարեն մենք տրամադրում ենք անհատականացված, ստեղծագործ և խոհուն առաջարկներ, որոնք իսկապես արձագանքում են:",
    documentTitle: 'Podari AI - Նվերների որոնում Հայաստանում',
  }
};

const t = (en: string, ru: string, hy: string): LocalizedString => ({ en, ru, hy });

export const REGIONS: Region[] = [
  { code: 'AM', name: 'Armenia' },
];

export const SURVEY_STEPS: SurveyStepData[] = [
  {
    id: 'recipient',
    question: t('Who are you looking for a gift for?', 'Для кого вы ищете подарок?', 'Ո՞ւմ համար եք նվեր փնտրում:'),
    type: OptionType.TEXT,
    options: [
      { label: t('Partner', 'Партнеру', 'Գործընկերոջ'), value: 'partner' },
      { label: t('Friend', 'Другу/Подруге', 'Ընկերոջ/Ընկերուհու'), value: 'friend' },
      { label: t('Parent', 'Родителю', 'Ծնողի'), value: 'parent' },
      { label: t('Sibling', 'Брату/Сестре', 'Եղբոր/Քրոջ'), value: 'sibling' },
      { label: t('Child', 'Ребенку', 'Երեխայի'), value: 'child' },
      { label: t('Colleague', 'Коллеге', 'Կոլեգայի'), value: 'colleague' },
    ],
    allowOther: true,
  },
  {
    id: 'occasion',
    question: t('What is the occasion?', 'Какой повод?', 'Ի՞նչ առիթ է:'),
    type: OptionType.TEXT,
    options: [
      { label: t('Birthday', 'День рождения', 'Ծննդյան օր'), value: 'birthday' },
      { label: t('Name Day', 'Именины', 'Անվան օր'), value: 'name-day' },
      { label: t('Anniversary', 'Годовщина', 'Տարեդարձ'), value: 'anniversary' },
      { label: t('New Year', 'Новый год', 'Նոր Տարի'), value: 'new-year' },
      { label: t('Easter', 'Пасха', 'Զատիկ'), value: 'easter' },
      { label: t('Graduation', 'Выпускной', 'Ավարտական'), value: 'graduation' },
      { label: t('Just because...', 'Просто так...', 'Ուղղակի այդպես...'), value: 'just-because' },
    ],
    allowOther: true,
  },
  {
    id: 'gender',
    question: t('What is their gender?', 'Какой у них пол?', 'Ի՞նչ սեռի են նրանք:'),
    type: OptionType.TEXT,
    options: [
      { label: t('Woman', 'Женщина', 'Կին'), value: 'woman' },
      { label: t('Man', 'Мужчина', 'Տղամարդ'), value: 'man' },
      { label: t('Other / Does not matter', 'Другое / Не имеет значения', 'Այլ / Կարևոր չէ'), value: 'any' },
    ],
  },
  {
    id: 'budget',
    question: t('What is your budget?', 'Какой у вас бюджет?', 'Որքա՞ն է ձեր բյուջեն:'),
    type: OptionType.TEXT,
    options: [
      { label: t('֏0 - ֏10,000', '֏0 - ֏10,000', '֏0 - ֏10,000'), value: '0-10000' },
      { label: t('֏10,000 - ֏25,000', '֏10,000 - ֏25,000', '֏10,000 - ֏25,000'), value: '10000-25000' },
      { label: t('֏25,000 - ֏50,000', '֏25,000 - ֏50,000', '֏25,000 - ֏50,000'), value: '25000-50000' },
      { label: t('֏50,000+', '֏50,000+', '֏50,000+'), value: '50000+' },
    ],
  },
];