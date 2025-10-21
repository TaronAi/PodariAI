import { GoogleGenAI } from "@google/genai";
import { SurveyAnswers, GiftSuggestion, Language } from '../types';

// Mapping language codes to full language names for the prompt
const languageMap: Record<Language, string> = {
  cy: 'Greek',
  en: 'English',
};

export const getGiftSuggestions = async (
  answers: SurveyAnswers, 
  language: Language, 
  existingSuggestions: GiftSuggestion[] = []
): Promise<GiftSuggestion[]> => {
  try {
    // Lazy Initialization: Create the AI instance only when the function is called.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const fullLanguageName = languageMap[language] || 'English';
    
    const existingSuggestionsConstraint = existingSuggestions.length > 0
      ? `Important: Please generate NEW and DIFFERENT gift ideas. Do not repeat any of the following already suggested gifts: ${existingSuggestions.map(g => `"${g.title}"`).join(', ')}.`
      : '';

    const prompt = `
      You are an expert gift-finding API for Cyprus. Your ONLY task is to return a valid JSON array of objects. Do not write any other text, markdown, or explanations.

      Your goal is to find between 5 and 10 real-world gift ideas based on the user's preferences. You MUST ALWAYS return at least 5 suggestions, even if they are a broader match.
      
      **CRITICAL INSTRUCTIONS:**
      1.  **SEARCH EXCLUSIVELY ON "cyprusemall.com.cy"**. You MUST use your search tool and restrict it to this domain.
      2.  **ALL URLs MUST BE VALID** and point to a product page on "https://www.cyprusemall.com.cy".
      3.  **The response language for text fields ("title", "description") must be ${fullLanguageName}.**
      4.  **The output MUST be a single, valid JSON array of objects.** Just the array.
      
      ${existingSuggestionsConstraint}
      
      **USER PREFERENCES (use these as a guide):**
      - Gift for: ${answers.recipient || 'any'}
      - Occasion: ${answers.occasion || 'any'}
      - Gender: ${answers.gender || 'any'}
      - Budget: ${answers.budget || 'any'}

      **HOW TO FIND GIFTS:**
      1.  Analyze the user preferences as a guide for your search.
      2.  Use your search tool to find suitable products on "site:cyprusemall.com.cy". Be creative with search terms based on the preferences.
      3.  If you cannot find perfect matches, find popular and well-regarded items from the website that could be appropriate for the occasion.
      4.  For each product, extract the exact title, a compelling description, the price as a string (e.g., "€49.99"), the full product URL, and a direct image URL.
      5.  Format the result into the JSON structure below.

      **JSON OUTPUT FORMAT:**
      Each object in the array must contain these exact keys: "title", "description", "price", "url", "imageUrl", "seller".
      - "seller" MUST be "CyprusEmall".
      
      Example of one object:
      {
        "title": "Deluxe Wooden Backgammon Set",
        "description": "A beautiful large wooden backgammon set for long afternoons at the local 'kafeneio' or at home.",
        "price": "€45.00",
        "url": "https://www.cyprusemall.com.cy/product/deluxe-backgammon-set-large/",
        "imageUrl": "https://www.cyprusemall.com.cy/wp-content/uploads/2023/11/61Z6Q3Z3J7L._AC_SL1001_-300x300.jpg",
        "seller": "CyprusEmall"
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{googleSearch: {}}],
      },
    });

    const rawText = response.text.trim();
    if (!rawText) {
        throw new Error("The AI returned an empty response. Please try again.");
    }
    
    let jsonString = '';
    const markdownMatch = rawText.match(/```json\s*([\s\S]*?)\s*```/);

    if (markdownMatch && markdownMatch[1]) {
      // Extract from markdown code block if present
      jsonString = markdownMatch[1];
    } else {
      // Otherwise, find the outermost array or object
      const startIndex = rawText.indexOf('[');
      const endIndex = rawText.lastIndexOf(']');
      if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        jsonString = rawText.substring(startIndex, endIndex + 1);
      } else {
          // Fallback for a single object response
          const startObjIndex = rawText.indexOf('{');
          const endObjIndex = rawText.lastIndexOf('}');
          if (startObjIndex !== -1 && endObjIndex !== -1 && endObjIndex > startObjIndex) {
              jsonString = rawText.substring(startObjIndex, endObjIndex + 1);
          }
      }
    }

    if (!jsonString) {
      console.error("Could not extract JSON from AI response:", rawText);
      throw new Error("The AI returned a response that did not contain valid JSON. Please try again.");
    }

    try {
        const suggestions = JSON.parse(jsonString.trim());
        
        if (!Array.isArray(suggestions)) {
          // Handle case where AI returns a single object instead of an array of one
          if (typeof suggestions === 'object' && suggestions !== null) {
            return [suggestions] as GiftSuggestion[];
          }
          return []; // Return empty if it's not an array or a single object
        }
        
        return suggestions as GiftSuggestion[];
    } catch (parseError) {
        console.error("Failed to parse JSON string:", jsonString, parseError);
        throw new Error("The AI returned suggestions in an unexpected format. Please try again.");
    }

  } catch (error) {
    console.error("Error during getGiftSuggestions:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred while fetching gift suggestions.");
  }
};
