import { GoogleGenerativeAI } from "@google/generative-ai";

export async function geminiResponse(prompt: string):Promise<string> {
  console.log(prompt);
  
  const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" })
  const result =await model.generateContent(JSON.stringify(prompt))
  return result.response.text().toString(); 
}

