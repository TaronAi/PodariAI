
export interface LocalizedString {
  cy: string;
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
}

export interface GiftSuggestion {
  title: string;
  description: string;
  price: string;
  url: string;
  imageUrl: string;
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
export type RegionCode = 'CY';
export type Language = 'cy' | 'en';

export interface Region {
  code: RegionCode;
  name: string;
}