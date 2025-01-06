import OpenAI from "openai";
import {streamText} from 'ai';

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
})

export const runtime = 'edge';

export async function POST(req: Request){
   try {
     const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be seperated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What's a hobby you'hve recently started? || If you could have dinner with any historical figure, who would it be? || what's a simple thing that makes you happy?. Ensure the questions are intriguing, foster curiosity, and contribute to be positive and welcoming conversational environment"
 
     const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         stream: true,
         messages
         
 
     })
   } catch (error) {
    console.error("An unexpected error occured")
    throw error
   }

    
}
