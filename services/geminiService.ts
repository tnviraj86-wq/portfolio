
import { GoogleGenAI } from "@google/genai";

export const getCreativeInspiration = async (): Promise<string> => {
  try {
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    if (!apiKey) {
      console.warn("API Key is missing for Gemini service.");
      return "Design something that tells a story through color and negative space.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate a unique, creative design prompt for a student portfolio. It should be one sentence, inspiring, and focus on communication design, branding, or illustration. Avoid generic advice.",
      config: {
        temperature: 0.9,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text || "Design something that tells a story through color and negative space.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The best designs are yet to be imagined. Keep creating.";
  }
};
