import { SurveyStepData, OptionType, LocalizedString, Region } from './types';

export const i18n: any = {
  cy: {
    // Header
    headerSubtitle: 'Ο AI βοηθός σας για την επιλογή του τέλειου δώρου',
    // SurveyStep
    other: 'Άλλο',
    submit: 'Υποβολή',
    socialLinkPlaceholder: 'https://instagram.com/example',
    findGifts: 'Βρες Δώρα',
    skip: 'Παράλειψη',
    // Loading Spinner
    loadingMessages: [
        "Η AI δημιουργεί ιδέες...",
        "Αναλύοντας προτιμήσεις...",
        "Αναζητώντας έμπνευση στο σύμπαν!",
        "Συντάσσοντας την τέλεια λίστα δώρων...",
        "Σχεδόν έτοιμο!",
    ],
    // Gift Opening
    openingPresent: 'Ανοίγοντας το δώρο σας...',
    // Gift Results
    resultsTitle: 'Ορίστε οι ιδέες δώρων σας!',
    whereToBuy: 'Πού να αγοράσετε',
    buyOnAmazon: 'Αγορά στο Amazon',
    startOver: 'Ξεκινήστε από την αρχή',
    showMoreGifts: 'Δείξε περισσότερα δώρα',
    loadingMore: 'Φόρτωση...',
    addToWishlist: 'Προσθήκη στη λίστα επιθυμιών',
    removeFromWishlist: 'Αφαίρεση από τη λίστα επιθυμιών',
    // Wishlist
    wishlistTitle: 'Η Λίστα Επιθυμιών σας',
    wishlistEmpty: 'Η λίστα επιθυμιών σας είναι άδεια.',
    wishlistEmptyHint: 'Κάντε κλικ στην καρδιά σε μια κάρτα δώρου για να την προσθέσετε εδώ.',
    closeWishlist: 'Κλείσιμο λίστας επιθυμιών',
    remove: 'Αφαίρεση',
    // Error
    errorTitle: 'Παρουσιάστηκε σφάλμα',
    tryAgain: 'Προσπαθήστε ξανά',
    // Why
    whyTitle: 'Γιατί το GiftFinder AI;',
    why1Title: 'Πραγματική AI',
    why1Desc: 'Όχι απλά φίλτρα—η AI μας μαθαίνει και δημιουργεί νέες ιδέες αναλύοντας χιλιάδες επιλογές.',
    why2Title: 'Όλα τα καταστήματα ταυτόχρονα',
    why2Desc: 'Βρίσκουμε τις καλύτερες επιλογές σε Public.cy, Stephanis και Skroutz ώστε να μπορείτε να συγκρίνετε.',
    why3Title: 'Ανάλυση Social Media',
    why3Desc: 'Προαιρετικό: επικολλήστε έναν σύνδεσμο προφίλ για να μαντέψει η AI με μεγαλύτερη ακρίβεια τα ενδιαφέροντα του ατόμου.',
    why4Title: 'Λίστες Επιθυμιών & Προφίλ',
    why4Desc: 'Αποθηκεύστε ιδέες σε λίστες επιθυμιών και δημιουργήστε προφίλ για αγαπημένα πρόσωπα για να μην ξεχνάτε σημαντικές ημερομηνίες.',
    why5Title: 'Ευρύ φάσμα',
    why5Desc: 'Από φυσικά αγαθά μέχρι συνδρομές, εμπειρίες και εξειδικευμένα δώρα.',
    why6Title: 'Διαφάνεια τιμών',
    why6Desc: 'Δείχνουμε τις τιμές σε διάφορα καταστήματα, βοηθώντας σας να κάνετε μια οικονομικά αποδοτική επιλογή.',
    // Nav & Footer
    navHome: 'Αρχική',
    navTrending: 'Δημοφιλή Δώρα',
    navAbout: 'Σχετικά με εμάς',
    navSettings: 'Ρυθμίσεις',
    settingsTitle: 'Ρυθμίσεις',
    settingsSubtitle: 'Προσαρμόστε την εμπειρία σας',
    settingsRegion: 'Περιοχή',
    settingsLanguage: 'Γλώσσα',
    footerHome: 'Αρχική',
    footerAbout: 'Σχετικά με εμάς',
    footerCopyright: `© ${new Date().getFullYear()} GiftFinder AI. Με επιφύλαξη παντός δικαιώματος.`,
    wishlistAria: 'Άνοιγμα λίστας επιθυμιών',
    trendingTitle: 'Δημοφιλή Δώρα',
    aboutTitle: 'Σχετικά με το GiftFinder AI',
    aboutParagraph1: "Πιστεύουμε ότι το τέλειο δώρο είναι κάτι περισσότερο από ένα απλό αντικείμενο—είναι μια στοχαστική έκφραση σύνδεσης. Σε έναν κόσμο ατελείωτων επιλογών, η εύρεση του τέλειου δώρου μπορεί να είναι συντριπτική. Γι' αυτό δημιουργήσαμε το GiftFinder AI.",
    aboutMissionTitle: 'Η αποστολή μας',
    aboutMissionParagraph: "Η αποστολή μας είναι απλή: να κάνουμε τη διαδικασία της προσφοράς δώρων χαρούμενη και αβίαστη. Αξιοποιούμε τη δύναμη της προηγμένης τεχνητής νοημοσύνης για να κατανοήσουμε τη μοναδική προσωπικότητα και τα ενδιαφέροντα του ατόμου για το οποίο ψωνίζετε. Αντί για γενικές συστάσεις, παρέχουμε εξατομικευμένες, δημιουργικές και στοχαστικές προτάσεις που πραγματικά έχουν απήχηση.",
    documentTitle: 'GiftFinder AI - Βρες το τέλειο δώρο',
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
    buyOnAmazon: 'Buy on Amazon',
    startOver: 'Start Over',
    showMoreGifts: 'Show More Gifts',
    loadingMore: 'Loading...',
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
    // Why
    whyTitle: 'Why GiftFinder AI?',
    why1Title: 'True AI',
    why1Desc: 'Not just filters—our AI learns and generates new ideas by analyzing thousands of options.',
    why2Title: 'All Stores at Once',
    why2Desc: 'We find the best options on Public.cy, Stephanis, and Skroutz so you can compare.',
    why3Title: 'Social Media Analysis',
    why3Desc: 'Optional: paste a profile link for the AI to more accurately guess the person\'s interests.',
    why4Title: 'Wishlists & Profiles',
    why4Desc: 'Save ideas to wishlists and create profiles for loved ones so you don\'t forget important dates.',
    why5Title: 'Wide Scope',
    why5Desc: 'From physical goods to subscriptions, experiences, and niche gifts.',
    why6Title: 'Price Transparency',
    why6Desc: 'We show prices across different stores, helping you make a cost-effective choice.',
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
    footerCopyright: `© ${new Date().getFullYear()} GiftFinder AI. All Rights Reserved.`,
    wishlistAria: 'Open wishlist',
    trendingTitle: 'Trending Gifts',
    aboutTitle: 'About GiftFinder AI',
    aboutParagraph1: "We believe that the perfect gift is more than just an item—it's a thoughtful expression of connection. In a world of endless options, finding that perfect gift can be overwhelming. That's why we created GiftFinder AI.",
    aboutMissionTitle: 'Our Mission',
    aboutMissionParagraph: "Our mission is simple: to make gift-giving joyful and effortless. We leverage the power of advanced artificial intelligence to understand the unique personality and interests of the person you're shopping for. Instead of generic recommendations, we provide personalized, creative, and thoughtful suggestions that truly resonate.",
    documentTitle: 'GiftFinder AI - Gift Finder',
  }
};

const t = (cy: string, en: string): LocalizedString => ({ cy, en });

export const REGIONS: Region[] = [
  { code: 'CY', name: 'Cyprus' },
];

export const SURVEY_STEPS: SurveyStepData[] = [
  {
    id: 'recipient',
    question: t('Για ποιον ψάχνετε δώρο;', 'Who are you looking for a gift for?'),
    type: OptionType.TEXT,
    allowOther: true,
    options: [
      { label: t('Σύντροφος', 'Partner'), value: 'partner' },
      { label: t('Μέλος Οικογένειας', 'Family Member'), value: 'family member' },
      { label: t('Φίλος', 'Friend'), value: 'friend' },
      { label: t('Συνάδελφος', 'Colleague'), value: 'colleague' },
      { label: t('Παιδί', 'Child'), value: 'child' },
      { label: t('Γονέας', 'Parent'), value: 'parent' },
    ],
  },
  {
    id: 'occasion',
    question: t('Ποια είναι η περίσταση;', "What's the occasion?"),
    type: OptionType.TEXT,
    allowOther: true,
    options: [
        { label: t('Γενέθλια', 'Birthday'), value: 'birthday' },
        { label: t('Χριστούγεννα', 'Christmas'), value: 'christmas' },
        { label: t('Επέτειος', 'Anniversary'), value: 'anniversary' },
        { label: t('Ονομαστική Εορτή', 'Name Day'), value: 'name day' },
        { label: t('Έτσι απλά', 'Just because'), value: 'just because' },
    ]
  },
  {
    id: 'gender',
    question: t('Ποιο είναι το φύλο του/της;', 'What is their gender?'),
    type: OptionType.TEXT,
    options: [
      { label: t('Άνδρας', 'Male'), value: 'male' },
      { label: t('Γυναίκα', 'Female'), value: 'female' },
      { label: t('Δεν έχει σημασία', "Doesn't matter"), value: 'any' },
    ],
  },
  {
    id: 'budget',
    question: t('Ποιος είναι ο προϋπολογισμός σας;', 'What is your budget?'),
    type: OptionType.TEXT,
    options: [
      { label: t('έως €50', 'Under €50'), value: 'under 50 EUR' },
      { label: t('€50 - €100', '€50 - €100'), value: '50-100 EUR' },
      { label: t('€100 - €250', '€100 - €250'), value: '100-250 EUR' },
      { label: t('€250+', 'Over €250'), value: 'over 250 EUR' },
    ],
  },
   {
    id: 'personality',
    question: t('Τι είδους άτομο είναι;', 'What is their personality like?'),
    type: OptionType.IMAGE,
    options: [
        { label: t('Η ψυχή του πάρτι', 'Life of the party'), value: 'extrovert, social, life of the party', imageUrl: 'https://picsum.photos/seed/party1/400/300' },
        { label: t('Σπιτόγατος/α', 'Homebody'), value: 'introvert, homebody, cozy', imageUrl: 'https://picsum.photos/seed/home1/400/300' },
        { label: t('Δημιουργική ψυχή', 'Creative Soul'), value: 'creative, artistic, unique', imageUrl: 'https://picsum.photos/seed/art1/400/300' },
        { label: t('Αθλητικός τύπος', 'Athlete'), value: 'active, sporty, outdoorsy', imageUrl: 'https://picsum.photos/seed/sport1/400/300' },
        { label: t('Διανοούμενος', 'Intellectual'), value: 'intellectual, curious, loves to learn', imageUrl: 'https://picsum.photos/seed/book1/400/300' },
        { label: t('Πραγματιστής', 'Pragmatist'), value: 'pragmatic, organized, minimalist', imageUrl: 'https://picsum.photos/seed/minimal1/400/300' },
    ],
  },
  {
    id: 'style',
    question: t('Διαλέξτε το σπίτι που θα του/της άρεσε περισσότερο', 'Choose the house they would love the most'),
    type: OptionType.IMAGE,
    options: [
        { label: t('Μοντέρνο μινιμαλιστικό', 'Modern Minimalist'), value: 'modern, minimalist, clean lines', imageUrl: 'https://picsum.photos/seed/modernhouse/400/300' },
        { label: t('Άνετο εξοχικό', 'Cozy Countryside'), value: 'cozy, rustic, countryside', imageUrl: 'https://picsum.photos/seed/cottage/400/300' },
        { label: t('Μποέμ', 'Bohemian'), value: 'bohemian, eclectic, artistic', imageUrl: 'https://picsum.photos/seed/bohohouse/400/300' },
        { label: t('Κλασική κομψότητα', 'Classic Elegance'), value: 'classic, elegant, traditional', imageUrl: 'https://picsum.photos/seed/classichouse/400/300' },
    ]
  },
  {
    id: 'activity',
    question: t('Πώς του/της αρέσει να περνάει τον ελεύθερο του/της χρόνο;', 'How do they like to spend their free time?'),
    type: OptionType.IMAGE,
    options: [
        { label: t('Ταξίδια & Περιπέτεια', 'Traveling & Adventure'), value: 'travel, adventure, hiking', imageUrl: 'https://picsum.photos/seed/travel/400/300' },
        { label: t('Βραδιά με βιβλίο ή ταινία', 'A night with a book or movie'), value: 'reading, movies, relaxing at home', imageUrl: 'https://picsum.photos/seed/reading/400/300' },
        { label: t('Μαγειρική & Γαστρονομία', 'Cooking & Gastronomy'), value: 'cooking, food, gastronomy', imageUrl: 'https://picsum.photos/seed/cooking/400/300' },
        { label: t('Τεχνολογία & Gadgets', 'Tech & Gadgets'), value: 'technology, gadgets, gaming', imageUrl: 'https://picsum.photos/seed/tech/400/300' },
        { label: t('Αθλητισμός', 'Playing Sports'), value: 'sports, fitness, gym', imageUrl: 'https://picsum.photos/seed/fitness/400/300' },
        { label: t('Τέχνες & Χειροτεχνίες', 'Arts & Crafts'), value: 'crafts, painting, music', imageUrl: 'https://picsum.photos/seed/crafts/400/300' },
    ]
  },
  {
    id: 'giftType',
    question: t('Τι είδους δώρο ψάχνετε;', 'What type of gift are you looking for?'),
    type: OptionType.TEXT,
    allowOther: true,
    options: [
      { label: t('Τεχνολογία & Gadgets', 'Tech & Gadgets'), value: 'tech and gadgets' },
      { label: t('Μόδα & Αξεσουάρ', 'Fashion & Accessories'), value: 'fashion and accessories' },
      { label: t('Βιβλία & Χόμπι', 'Books & Hobbies'), value: 'books and hobbies' },
      { label: t('Για το σπίτι', 'Home & Cozy'), value: 'home and decor' },
      { label: t('Εμπειρίες', 'Experiences'), value: 'experiences (e.g., tickets, trips)' },
      { label: t('Φαγητό & Ποτό', 'Food & Drink'), value: 'gourmet food and drink' },
    ]
  },
  {
    id: 'socialLink',
    question: t('Θέλετε η AI να αναλύσει τα social media του/της για καλύτερες προτάσεις; (προαιρετικό)', 'Want the AI to analyze their social media for better recommendations? (optional)'),
    type: OptionType.TEXT, // This is a special input field handled in SurveyStep.tsx
    options: [],
  },
];
