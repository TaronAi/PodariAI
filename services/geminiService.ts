
import { GoogleGenAI, Type } from "@google/genai";
import { SurveyAnswers, GiftSuggestion } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getGiftSuggestions = async (answers: SurveyAnswers, language: 'ru' | 'en'): Promise<GiftSuggestion[]> => {
  const prompt = `
    You are an expert gift-giving assistant. Your response must be exclusively in the ${language === 'ru' ? 'Russian' : 'English'} language.
    The gift suggestions should be tailored for the Russian market.
    Based on the following user preferences, generate 6 creative and thoughtful gift ideas.
    
    Preferences:
    - Gift for: ${answers.recipient}
    - Occasion: ${answers.occasion}
    - Gender: ${answers.gender}
    - Budget: ${answers.budget}
    - Personality: ${answers.personality}
    - Preferred Style (based on house choice): ${answers.style}
    - Preferred Activity: ${answers.activity}
    - Gift Type: ${answers.giftType}
    ${answers.socialLink && answers.socialLink !== 'not provided' ? `- Social Media Profile for analysis (be careful with assumptions): ${answers.socialLink}` : ''}

    For each gift idea, provide:
    1. A name for the gift.
    2. A short, compelling description.
    3. An estimated price in RUB that fits the budget.
    4. A fictional but realistic-looking affiliate link for Ozon.
    5. A fictional but realistic-looking affiliate link for Wildberries.
    6. A fictional but realistic-looking affiliate link for Yandex Market.
    7. A suggestion for a local store type or a specific subscription service (e.g., "Available in electronics stores like M.Video" or "Consider a subscription to 'Amediateka'").
    8. A descriptive prompt for an image generation model to create a visually appealing, photorealistic image of the gift (e.g., "A sleek black smartwatch on a wooden desk next to a laptop").

    Return the result as a JSON array of objects.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: 'The name of the gift.' },
              description: { type: Type.STRING, description: 'A short description of the gift.' },
              price: { type: Type.STRING, description: 'Estimated price in RUB.' },
              ozonLink: { type: Type.STRING, description: 'Affiliate link for Ozon.' },
              wildberriesLink: { type: Type.STRING, description: 'Affiliate link for Wildberries.' },
              yandexMarketLink: { type: Type.STRING, description: 'Affiliate link for Yandex Market.' },
              otherOptions: { type: Type.STRING, description: 'Suggestion for a local store or subscription.' },
              imagePrompt: { type: Type.STRING, description: 'A descriptive prompt for an image generation model to create a visually appealing, photorealistic image of the gift.' },
            },
            required: ['name', 'description', 'price', 'ozonLink', 'wildberriesLink', 'yandexMarketLink', 'otherOptions', 'imagePrompt'],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    // A quick fix for potential markdown in the response
    const sanitizedJsonText = jsonText.replace(/^```json\n/, '').replace(/\n```$/, '');
    const suggestions = JSON.parse(sanitizedJsonText);
    return suggestions as GiftSuggestion[];

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get gift suggestions. Please check your API key and try again.");
  }
};
