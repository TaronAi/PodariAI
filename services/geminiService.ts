import { GoogleGenAI, Type, Schema } from "@google/genai";
import { FilterState, Product } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGiftRecommendations = async (filters: FilterState, language: 'ru' | 'en'): Promise<Product[]> => {
  // If no API key, return empty array (UI should handle this gracefully or show mock)
  if (!apiKey) {
    console.warn("No API Key provided for Gemini");
    return [];
  }

  const prompt = `
    Generate a list of 6-8 gift ideas based on the following criteria:
    Recipient: ${filters.recipient}
    Gender: ${filters.gender}
    Age: ${filters.age}
    Occasion: ${filters.occasion}
    Interests: ${filters.interests.join(', ')}
    Personality: ${filters.personality}
    Price Range: ${filters.priceRange}
    Language: ${language === 'ru' ? 'Russian' : 'English'}
    Target Market: Russia (Currency RUB/₽).

    Return ONLY a JSON array. Each object must have:
    - id: string (unique)
    - title: string (in ${language === 'ru' ? 'Russian' : 'English'})
    - price: number (approximate in RUB)
    - marketplace: One of 'Ozon', 'Wildberries', 'Yandex Market', 'AliExpress', 'Amazon'
    - description: string (short reason why it fits)
    - affiliateLink: string (use a placeholder starting with https://)
    - rating: number (between 3.5 and 5.0)
    - reviewsCount: number (random integer between 10 and 5000)
    
    Ensure the gifts are diverse and truly fit the "Personality" trait.
  `;

  // Define schema for structured output
  const productSchema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        title: { type: Type.STRING },
        price: { type: Type.NUMBER },
        marketplace: { type: Type.STRING },
        description: { type: Type.STRING },
        affiliateLink: { type: Type.STRING },
        rating: { type: Type.NUMBER },
        reviewsCount: { type: Type.INTEGER },
      },
      required: ['id', 'title', 'price', 'marketplace', 'description', 'affiliateLink', 'rating', 'reviewsCount'],
    }
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: productSchema,
      }
    });

    const text = response.text;
    if (!text) return [];
    
    const data = JSON.parse(text);

    // Hydrate with placeholder images since AI can't generate real valid URLs for products yet
    // We use a deterministic random seed based on title length to get consistent-ish images
    return data.map((item: any, index: number) => ({
      ...item,
      currency: '₽',
      imageUrl: `https://picsum.photos/seed/${item.id + index}/400/400`,
    }));

  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};