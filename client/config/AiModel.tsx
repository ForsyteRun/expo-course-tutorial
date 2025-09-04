import { GoogleGenAI } from "@google/genai";

export async function generateFromGemini(input: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.EXPO_PUBLIC_HF_TOKEN });

  const contents = [
    {
      parts: [{ text: input }],
    },
  ];

  try {
    const response = await ai.models.generateContent({
      // model: "gemini-2.5-flash-lite",
      model: "models/gemini-2.0-flash",
      contents,
    });

    const candidate = response.candidates?.[0]?.content?.parts?.[0]?.text;

    return { success: true, candidate };
  } catch (err) {
    let error = "";

    if (err instanceof Error) {
      try {
        const parsed = JSON.parse(err.message);
        error = parsed?.error?.message || err.message;
      } catch {
        console.log("Unknown error parsing JSON:", err.message);
        error = err.message;
      }
    } else {
      console.log("Unknown error type:", JSON.stringify(err));
      error = JSON.stringify(err);
    }

    return { success: false, error };
  }
}
