
export interface LocalizedString {
  ru: string;
  en: string;
}

export interface SurveyAnswers {
  recipient?: string;
  occasion?: string;
  gender?: string;
  budget?: string;
  personality?: string;
  style?: string;
  activity?: string;
  giftType?: string;
  socialLink?: string;
}

export interface GiftSuggestion {
  name: string;
  description: string;
  price: string;
  ozonLink: string;
  wildberriesLink: string;
  yandexMarketLink: string;
  otherOptions: string;
  imagePrompt: string;
}

export enum OptionType {
  TEXT,
  IMAGE,
}

export interface SurveyOption {
  label: LocalizedString;
  value: string;
  imageUrl?: string;
}

export interface SurveyStepData {
  id: keyof SurveyAnswers;
  question: LocalizedString;
  options: SurveyOption[];
  type: OptionType;
  allowOther?: boolean;
}

// Updated Types for Settings
export type RegionCode = 'RU' | 'AM' | 'BY' | 'GE' | 'KZ' | 'KG' | 'TJ' | 'UZ';
export type Language = 'ru' | 'en';

export interface Region {
  code: RegionCode;
  name: string;
}
