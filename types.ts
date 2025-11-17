
export interface LocalizedString {
  en: string;
  ru: string;
  hy: string;
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
}

export interface GiftSuggestion {
  title: string;
  description: string;
  price: string;
  url: string;
  imageUrl: string;
  seller?: string;
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
export type RegionCode = 'AM';
export type Language = 'en' | 'ru' | 'hy';

export interface Region {
  code: RegionCode;
  name: string;
}