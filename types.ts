
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
  label: string;
  value: string;
  imageUrl?: string;
}

export interface SurveyStepData {
  id: keyof SurveyAnswers;
  question: string;
  options: SurveyOption[];
  type: OptionType;
}