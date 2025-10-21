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
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const fullLanguageName = languageMap[language] || 'English';
    
    const existingSuggestionsPrompt = existingSuggestions.length > 0
      ? `Please generate 6 NEW and DIFFERENT gift ideas. Do not repeat any of the following already suggested gifts: ${existingSuggestions.map(g => `"${g.title}"`).join(', ')}.`
      : `Based on the following user preferences, act as a Product Search API for cyprusemall.com.cy to find 6 real-world gift ideas available for delivery in Cyprus.`;

    const prompt = `
      You are an expert gift-giving assistant who simulates a product search on the Cypriot e-commerce marketplace cyprusemall.com.cy. Your response must be exclusively in the ${fullLanguageName} language.
      The gift suggestions must be realistic products that could be found on this website.
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
      1. title: A realistic product title that could be found on cyprusemall.com.cy.
      2. description: A short, compelling description of the product.
      3. price: An estimated price in Euros that fits the budget (e.g., "€45", "€90").
      4. url: A plausible, but not necessarily real, URL to the product on cyprusemall.com.cy.
      5. imageUrl: A direct, realistic URL to a high-quality product image from a public source.
      6. seller: The name of a plausible Cypriot store or seller on the marketplace (e.g., "Super Home Center", "Electroline", "GadgetStore CY").

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
              title: { type: Type.STRING, description: 'The product title.' },
              description: { type: Type.STRING, description: 'A short description of the gift.' },
              price: { type: Type.STRING, description: 'Estimated price in Euros.' },
              url: { type: Type.STRING, description: 'Plausible link for the product on cyprusemall.com.cy.' },
              imageUrl: { type: Type.STRING, description: 'A direct URL to a high-quality product image.' },
              seller: { type: Type.STRING, description: 'The name of the seller or store.' },
            },
            required: ['title', 'description', 'price', 'url', 'imageUrl', 'seller'],
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
    if (error instanceof Error) {
      // Re-throw the original error to be handled by the calling component.
      throw error;
    }
    // For cases where the thrown object is not an Error instance
    throw new Error("An unknown error occurred while fetching gift suggestions.");
  }
};