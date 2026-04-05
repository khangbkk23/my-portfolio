import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { 
    profile, 
    skills, 
    education, 
    research, 
    projects, 
    certificates, 
    activities, 
    languages, 
    rewards 
} from '@/data/profile'; 

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // 1. Pack all personal data into the RAG context
        const contextData = JSON.stringify({ 
            profile, 
            skills, 
            education, 
            research, 
            projects, 
            certificates, 
            activities, 
            languages, 
            rewards 
        });

        const systemPrompt = `You are Kelvin (Khang Bui)'s personal AI assistant.
Your core directive is to answer questions about Kelvin based strictly on the provided context.
Context: ${contextData}
Rules:
1. If the information is not in the context, politely state that you do not have that information and suggest contacting Kelvin directly.
2. Keep responses concise, professional, and well-structured.
3. Respond in the same language the user uses.
4. If asked about rewards, achievements or certificates, list them clearly.`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages
            ],
            model: 'qwen-2.5-32b-it',
            temperature: 0.3, 
            max_tokens: 512,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { reply: "Sorry, the server is currently busy. Please try again later." }, 
            { status: 500 }
        );
    }
}