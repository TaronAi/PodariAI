import { SurveyStepData, OptionType, LocalizedString, Region } from './types';

export const i18n: any = {
  cy: {
    // Header
    headerSubtitle: 'Ο AI βοηθός σας για την επιλογή του τέλειου δώρου',
    // SurveyStep
    other: 'Άλλο',
    submit: 'Υποβολή',
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
    whereToBuy: 'Διαθέσιμο από',
    viewProduct: 'Δείτε το Προϊόν',
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
    errorNoGiftsFound: 'Η AI δεν μπόρεσε να βρει κατάλληλα δώρα με τα επιλεγμένα κριτήρια. Παρακαλώ δοκιμάστε διαφορετικές επιλογές.',
    // Why
    whyTitle: 'Γιατί το Podari AI;',
    why1Title: 'Πραγματική AI',
    why1Desc: 'Όχι απλά φίλτρα—η AI μας μαθαίνει και δημιουργεί νέες ιδέες αναλύοντας χιλιάδες επιλογές.',
    why2Title: 'Όλα τα καταστήματα ταυτόχρονα',
    why2Desc: 'Βρίσκουμε τις καλύτερες επιλογές σε Public.cy, Stephanis, και Skroutz ώστε να μπορείτε να συγκρίνετε.',
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
    footerCopyright: `© ${new Date().getFullYear()} Podari AI. Με επιφύλαξη παντός δικαιώματος.`,
    wishlistAria: 'Άνοιγμα λίστας επιθυμιών',
    trendingTitle: 'Δημοφιλή Δώρα',
    aboutTitle: 'Σχετικά με το Podari AI',
    aboutParagraph1: "Πιστεύουμε ότι το τέλειο δώρο είναι κάτι περισσότερο από ένα απλό αντικείμενο—είναι μια στοχαστική έκφραση σύνδεσης. Σε έναν κόσμο ατελείωτων επιλογών, η εύρεση του τέλειου δώρου μπορεί να είναι συντριπτική. Γι' αυτό δημιουργήσαμε το Podari AI.",
    aboutMissionTitle: 'Η αποστολή μας',
    aboutMissionParagraph: "Η αποστολή μας είναι απλή: να κάνουμε τη διαδικασία της προσφοράς δώρων χαρούμενη και αβίαστη. Αξιοποιούμε τη δύναμη της προηγμένης τεχνητής νοημοσύνης για να κατανοήσουμε τη μοναδική προσωπικότητα και τα ενδιαφέροντα του ατόμου για το οποίο ψωνίζετε. Αντί για γενικές συστάσεις, παρέχουμε εξατομικευμένες, δημιουργικές και στοχαστικές προτάσεις που πραγματικά έχουν απήχηση.",
    documentTitle: 'Podari AI - Βρες το τέλειο δώρο',
  },
  en: {
    // Header
    headerSubtitle: 'Your AI assistant for choosing the perfect gift',
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
    // Why
    whyTitle: 'Why Podari AI?',
    why1Title: 'True AI',
    why1Desc: 'Not just filters—our AI learns and generates new ideas by analyzing thousands of options.',
    why2Title: 'All Stores at Once',
    why2Desc: 'We find the best options on Public.cy, Stephanis, and Skroutz so you can compare.',
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
    footerCopyright: `© ${new Date().getFullYear()} Podari AI. All Rights Reserved.`,
    wishlistAria: 'Open wishlist',
    trendingTitle: 'Trending Gifts',
    aboutTitle: 'About Podari AI',
    aboutParagraph1: "We believe that the perfect gift is more than just an item—it's a thoughtful expression of connection. In a world of endless options, finding that perfect gift can be overwhelming. That's why we created Podari AI.",
    aboutMissionTitle: 'Our Mission',
    aboutMissionParagraph: "Our mission is simple: to make gift-giving joyful and effortless. We leverage the power of advanced artificial intelligence to understand the unique personality and interests of the person you're shopping for. Instead of generic recommendations, we provide personalized, creative, and thoughtful suggestions that truly resonate.",
    documentTitle: 'Podari AI - Gift Finder',
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
    options: [
      { label: t('Σύντροφος', 'Partner'), value: 'partner' },
      { label: t('Φίλος/η', 'Friend'), value: 'friend' },
      { label: t('Γονέας', 'Parent'), value: 'parent' },
      { label: t('Αδέλφι', 'Sibling'), value: 'sibling' },
      { label: t('Παιδί', 'Child'), value: 'child' },
      { label: t('Συνάδελφος', 'Colleague'), value: 'colleague' },
    ],
    allowOther: true,
  },
  {
    id: 'occasion',
    question: t('Για ποια περίσταση;', 'What is the occasion?'),
    type: OptionType.TEXT,
    options: [
      { label: t('Γενέθλια', 'Birthday'), value: 'birthday' },
      { label: t('Γιορτή', 'Name Day'), value: 'name-day' },
      { label: t('Επέτειος', 'Anniversary'), value: 'anniversary' },
      { label: t('Χριστούγεννα', 'Christmas'), value: 'christmas' },
      { label: t('Πάσχα', 'Easter'), value: 'easter' },
      { label: t('Αποφοίτηση', 'Graduation'), value: 'graduation' },
      { label: t('Απλά επειδή...', 'Just because...'), value: 'just-because' },
    ],
    allowOther: true,
  },
  {
    id: 'gender',
    question: t('Ποιο είναι το φύλο τους;', 'What is their gender?'),
    type: OptionType.TEXT,
    options: [
      { label: t('Γυναίκα', 'Woman'), value: 'woman' },
      { label: t('Άνδρας', 'Man'), value: 'man' },
      { label: t('Άλλο / Δεν έχει σημασία', 'Other / Does not matter'), value: 'any' },
    ],
  },
  {
    id: 'budget',
    question: t('Ποιος είναι ο προϋπολογισμός σας;', 'What is your budget?'),
    type: OptionType.TEXT,
    options: [
      { label: t('€0 - €25', '€0 - €25'), value: '0-25' },
      { label: t('€25 - €50', '€25 - €50'), value: '25-50' },
      { label: t('€50 - €100', '€50 - €100'), value: '50-100' },
      { label: t('€100+', '€100+'), value: '100+' },
    ],
  },
];
