import { GoogleGenAI } from "@google/genai";
import { SurveyAnswers, GiftSuggestion, Language } from '../types';

// Mapping language codes to full language names for the prompt
const languageMap: Record<Language, string> = {
  en: 'English',
  ru: 'Russian',
  hy: 'Armenian',
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

    // Create a more explicit budget constraint for the prompt
    const budgetConstraint = answers.budget
        ? `This is a HARD constraint. You MUST ONLY find gifts within the price range of "${answers.budget}" AMD. Do not suggest items outside this range.`
        : 'The user has not specified a budget, so you can suggest gifts at any price point.';

    const prompt = `
      You are an expert gift finder and web scraper for the Armenian market. Your task is to return a valid JSON array of gift ideas.

      Your goal is to find between 5 and 10 real-world gift ideas based on the user's preferences.
      
      **CRITICAL INSTRUCTIONS:**
      1.  **SEARCH ON WILDBERRIES:** You MUST search for products on the Armenian version of Wildberries ("wildberries.am"). Use Google Search to find products on this specific site. The seller for all items will be "Wildberries".
      2.  **URL VERIFICATION:** After finding a product URL, you must verify that it is a working, valid link to a product page and does not result in a 404 error. ALL URLs must be from "wildberries.am".
      3.  **DATA EXTRACTION:**
          *   **title:** Extract the full product title.
          *   **description:** Create a compelling, short description of the gift.
          *   **price:** Extract the price exactly as it's displayed, including the currency symbol (e.g., "5,900 ֏").
          *   **url:** Provide the full, direct, and valid URL to the product page.
          *   **imageUrl:** Find the primary product image URL.
          *   **seller:** This should always be "Wildberries".
      4.  **LANGUAGE:** The response language for text fields ("title", "description") must be ${fullLanguageName}.
      5.  **FAILURE CASE:** If you absolutely cannot find any suitable gifts that meet the criteria after searching thoroughly, you MUST return an empty JSON array \`[]\`. **DO NOT** return an apology, explanation, or any text other than \`[]\`.
      
      ${existingSuggestionsConstraint}
      
      **USER PREFERENCES:**
      - Gift for: ${answers.recipient || 'any'}
      - Occasion: ${answers.occasion || 'any'}
      - Gender: ${answers.gender || 'any'}
      - Budget (AMD): ${answers.budget || 'any'}

      **BUDGET ENFORCEMENT:**
      ${budgetConstraint}

      **OUTPUT FORMAT:**
      Your entire response MUST be a single, valid JSON array of objects. Do not include any text, markdown, or explanation before or after the JSON array.

      The structure for each object in the array must be:
      {
        "title": "Product Title in ${fullLanguageName}",
        "description": "Product description in ${fullLanguageName}.",
        "price": "X,XXX ֏",
        "url": "https://www.wildberries.am/product/...",
        "imageUrl": "https://images.wbstatic.net/....jpg",
        "seller": "Wildberries"
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{googleSearch: {}}],
      },
    });

    let rawText = response.text.trim();
    if (!rawText) {
        throw new Error("The AI returned an empty response. Please try again.");
    }
    
    // Clean potential markdown formatting
    if (rawText.startsWith('```json')) {
        rawText = rawText.substring(7, rawText.length - 3).trim();
    } else if (rawText.startsWith('```')) {
        rawText = rawText.substring(3, rawText.length - 3).trim();
    }
    
    try {
        const suggestions = JSON.parse(rawText);
        
        if (!Array.isArray(suggestions)) {
          // Handle case where AI returns a single object instead of an array of one
          if (typeof suggestions === 'object' && suggestions !== null) {
            return [suggestions] as GiftSuggestion[];
          }
          return []; // Return empty if it's not an array or a single object
        }
        
        return suggestions as GiftSuggestion[];
    } catch (parseError) {
        console.error("Failed to parse JSON string:", rawText, parseError);
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