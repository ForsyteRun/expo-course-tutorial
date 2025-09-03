import { GoogleGenAI } from "@google/genai";

export type AIResponse = {
  textOutputs: string[];
  imageBase64: string[];
};

export async function generateContentFromGemini(input: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.EXPO_PUBLIC_HF_TOKEN });

  const contents = [
    {
      parts: [{ text: input }],
    },
  ];

  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-2.0-flash",
      contents,
    });

    const candidate = response.candidates?.[0]?.content;
    console.log("AI response:", candidate);
  } catch (error) {
    console.log("error:", error);
  }
}
