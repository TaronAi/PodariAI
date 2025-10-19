import { GoogleGenAI, Type } from "@google/genai";
import { SurveyAnswers, GiftSuggestion, Language } from '../types';

// Mapping language codes to full language names for the prompt
const languageMap: Record<Language, string> = {
  cy: 'Greek',
  en: 'English',
};

export const getGiftSuggestions = async (
  answers: SurveyAnswers, 
  language: Language, 
  region: string,
  existingSuggestions: GiftSuggestion[] = []
): Promise<GiftSuggestion[]> => {
  try {
    // Lazy Initialization: Create the AI instance only when the function is called.
    // This prevents the app from crashing on startup if the API key is missing.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const fullLanguageName = languageMap[language] || 'English';
    
    const existingSuggestionsPrompt = existingSuggestions.length > 0
      ? `Please generate 6 NEW and DIFFERENT gift ideas. Do not repeat any of the following already suggested gifts: ${existingSuggestions.map(g => `"${g.title}"`).join(', ')}.`
      : `Based on the following user preferences, act as an Amazon Product Search API to find 6 real-world gift ideas available on amazon.co.uk for delivery to Cyprus.`;

    const prompt = `
      You are an expert gift-giving assistant who simulates the Amazon Product Advertising API. Your response must be exclusively in the ${fullLanguageName} language.
      The gift suggestions must be real products found on amazon.co.uk.
      ${existingSuggestionsPrompt}
      
      Preferences:
      - Gift for: ${answers.recipient}
      - Occasion: ${answers.occasion}
      - Gender: ${answers.gender}
      - Budget: ${answers.budget}
      - Personality: ${answers.personality}
      - Preferred Style (based on house choice): ${answers.style}
      - Preferred Activity: ${answers.activity}
      - Gift Type: ${answers.giftType}

      For each gift idea, provide:
      1. title: The exact product title from Amazon.
      2. description: A short, compelling description of the product.
      3. price: An estimated price in Euros that fits the budget (e.g., "€45", "€90").
      4. url: A valid affiliate link to the product on amazon.co.uk. It must include the affiliate tag "?tag=podariai-21".
      5. imageUrl: A direct, realistic URL to a high-quality product image from Amazon's servers (e.g., "https://m.media-amazon.com/images/I/....jpg").

      Return the result as a JSON array of objects. Do not include any markdown formatting.
    `;

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
              title: { type: Type.STRING, description: 'The exact product title from Amazon.' },
              description: { type: Type.STRING, description: 'A short description of the gift.' },
              price: { type: Type.STRING, description: 'Estimated price in Euros.' },
              url: { type: Type.STRING, description: 'Affiliate link for the product on amazon.co.uk.' },
              imageUrl: { type: Type.STRING, description: 'A direct URL to a high-quality product image from Amazon.' },
            },
            required: ['title', 'description', 'price', 'url', 'imageUrl'],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("The AI returned an empty response.");
    }
    const suggestions = JSON.parse(jsonText);
    return suggestions as GiftSuggestion[];

  } catch (error) {
    console.error("Error during getGiftSuggestions:", error);
    // Provide a more user-friendly error message that covers common issues.
    throw new Error("Failed to get gift suggestions. Please check that your API key is correct and has been added to your environment variables. The AI service may also be temporarily unavailable.");
  }
};