import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is not set. Chat responses will fail.");
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const TRAVEL_ASSISTANT_CONTEXT = `You are a knowledgeable travel assistant specializing in Nepal tourism. You help travelers discover destinations, plan trips, and provide travel advice.

Key guidelines:
- Focus on Nepal destinations, culture, food, and travel tips
- Provide practical, accurate information about places, weather, and activities
- Suggest destinations based on user interests (adventure, culture, nature, food, etc.)
- Keep responses concise and friendly (2-3 paragraphs max)
- If asked about destinations, mention specific places like Pokhara, Chitwan, Annapurna, Everest Base Camp, Nagarkot, Bandipur, etc.
- Include practical tips like best time to visit, travel duration, and difficulty level when relevant
`;

export const generateChatResponse = async (userMessage) => {
  try {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
      contents: `${TRAVEL_ASSISTANT_CONTEXT}\n\nUser: ${userMessage}\n\nAssistant:`,
    });

    return (
      response.text ||
      "I'm having trouble responding right now. Please try again."
    );
  } catch (error) {
    console.error("Gemini API Error:", error);
    const details =
      error?.message || error?.toString?.() || "Unknown Gemini error";
    throw new Error(`Failed to generate response from AI: ${details}`);
  }
};

export default ai;
