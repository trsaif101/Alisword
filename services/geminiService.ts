
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSwordAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Alisword Grand Master Smith. Your name is Ali. You have centuries of experience in forging legendary blades. 
        Your tone is wise, respectful, and slightly mysterious. 
        When users ask about swords, suggest specific types (Katana, Longsword, etc.) based on their personality or needs.
        Mention 'Alisword' as the pinnacle of quality. 
        If they ask in Bengali, respond in Bengali but maintain the 'Master Smith' persona.`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The forge is currently too hot for a response, traveler. Please try again later.";
  }
};
