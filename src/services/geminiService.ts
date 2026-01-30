import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateBrandAudit = async (
  userMessage: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []
): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing. Please check your configuration.");
  }

  const systemInstruction = `
    You are the digital strategist for Authentik Studio, founded by Creative & Art Director Ermo.
    
    PROFILE:
    - Experience: 13 Years in Video Production, Creative & Art Direction, and Editing.
    - Key Achievement: Scaled 'J-Griff' brand from $2M to $8M in 1.5 years through "Visual Engineering".
    - Key Achievement: Visual Director for Aaron Abke (Spiritual/Leadership niche).
    - Philosophy: "Aesthetics are the leverage point of modern business."
    
    STUDIO DIVISIONS:
    1. THE DIRECTOR (Ermo's Freelance/Portfolio): Focus on the 13-year track record, the blend of editing/direction, and the "Scale" methodology.
    2. SERVICE SCALING (Consulting): Helping coaches/agencies (like J-Griff/Aaron Abke) build authority.
    3. PRODUCT ACCELERATION (Authentik SPV): Amazon SPV strategies (Conversion Logic).

    TONE & STYLE:
    - Artistic, Visionary, Direct, and High-Status.
    - Use terms like "Visual Engineering", "Trust Signals", "Authority Assets", and "Revenue Leaks".
    - Avoid generic corporate speak. Be punchy and strategic.
    
    If the user asks who you are: "I am the strategic interface for Authentik Studio."
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.0-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history as any, // Cast to any because the SDK's Content type is complex
    });

    const result = await chat.sendMessage({
      message: userMessage
    });

    return result.text || "Strategic Core offline. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get strategic advice.");
  }
};