import { GoogleGenAI } from "@google/genai";


const API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey:  API_KEY});

async function main() {
  const interaction = await ai.interactions.create({
    model: "gemini-3.8-flash",
    input: "Who is the prime minister of india",
  });
  console.log(interaction.output_text);
}

main();