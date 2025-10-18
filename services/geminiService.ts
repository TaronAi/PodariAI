
import { GoogleGenAI, Type } from "@google/genai";
import { SurveyAnswers, GiftSuggestion, Language } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

// Mapping language codes to full language names for the prompt
const languageMap: Record<Language, string> = {
  cy: 'Greek',
  en: 'English',
};

export const getGiftSuggestions = async (answers: SurveyAnswers, language: Language, region: string): Promise<GiftSuggestion[]> => {
  const fullLanguageName = languageMap[language] || 'English';
  
  const prompt = `
    You are an expert gift-giving assistant. Your response must be exclusively in the ${fullLanguageName} language.
    The gift suggestions should be tailored for the Cyprus market.
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
    3. An estimated price in Euros that fits the budget (e.g., €45, €90).
    4. A fictional but realistic-looking affiliate link for a major local or international online marketplace popular in Cyprus (e.g., Public.cy, Stephanis).
    5. A fictional but realistic-looking affiliate link for a second major online marketplace (e.g., Skroutz.com.cy, Amazon).
    6. A fictional but realistic-looking affiliate link for a third option.
    7. A suggestion for a local store type or a specific subscription service relevant to Cyprus (e.g., "Available in electronics stores like Stephanis" or "Consider a subscription to a local service").
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
              price: { type: Type.STRING, description: 'Estimated price in Euros.' },
              marketplace1Link: { type: Type.STRING, description: 'Affiliate link for a major local/international marketplace.' },
              marketplace2Link: { type: Type.STRING, description: 'Affiliate link for a second marketplace.' },
              marketplace3Link: { type: Type.STRING, description: 'Affiliate link for a third marketplace.' },
              otherOptions: { type: Type.STRING, description: 'Suggestion for a local store or subscription.' },
              imagePrompt: { type: Type.STRING, description: 'A descriptive prompt for an image generation model to create a visually appealing, photorealistic image of the gift.' },
            },
            required: ['name', 'description', 'price', 'marketplace1Link', 'marketplace2Link', 'marketplace3Link', 'otherOptions', 'imagePrompt'],
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