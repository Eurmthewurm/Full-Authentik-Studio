import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateBrandAudit = async (
  userBusinessDescription: string, 
  history: { role: string; parts: { text: string }[] }[] = []
): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing. Please check your configuration.");
  }

  const systemInstruction = `
    You are the digital strategist for Authentik Studio, founded by Creative Director Ermo.
    
    PROFILE:
    - Experience: 13 Years in Video Production, Creative Direction, and Editing.
    - Key Achievement 1: Helped scale 'J-Griff' brand from $2M to $8M in 1.5 years through visual engineering.
    - Key Client 2: Worked with Aaron Abke (Spiritual/Education niche).
    - Philosophy: "Aesthetics are the leverage point of modern business."
    
    STUDIO DIVISIONS:
    1. THE DIRECTOR (Ermo's Freelance/Portfolio): Focus on the 13-year track record, the blend of editing/direction, and the "Scale" methodology.
    2. SERVICE SCALING (Consulting): Helping coaches/agencies (like J-Griff/Aaron Abke) build authority.
    3. PRODUCT ACCELERATION (Authentik SPV): Amazon SPV strategies (Conversion Logic).

    Tone: Artistic, Visionary, Direct, High-Status.
    
    If the user asks who you are: "I am the strategic interface for Authentik Studio."
  `;

  try {
    const model = 'gemini-3-flash-preview';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      }
    });
    
    const result = await chat.sendMessage({
      message: userBusinessDescription
    });

    return result.text || "Strategic Core offline. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get strategic advice.");
  }
};