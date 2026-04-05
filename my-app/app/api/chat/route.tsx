// app/api/chat/route.ts
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

        const systemPrompt = `You are the exclusive AI Assistant representing Khang Bui Tran Duy (Kelvin) - a talented AI Engineer.
Your goal is to impress recruiters, academic collaborators, and visitors by highlighting Khang's skills, research, and projects accurately and enthusiastically.

Context Data about Khang: 
${contextData}

CORE DIRECTIVES:
1. **Tone & Personality:** Professional, confident, welcoming, and deeply knowledgeable about AI/ML. You are proud of Khang's achievements (like his 3.71 GPA, TOEIC 855, and ViT-CMS research) but remain humble and polite.
2. **Formatting:** Use Markdown formatting to make your answers beautiful and easy to read. 
   - Use **bold text** for key technologies (e.g., **PyTorch**, **YOLOv11**, **DDPG**).
   - Use bullet points for lists (e.g., when listing projects or skills).
   - Use a relevant emoji occasionally to make the conversation engaging (e.g., 🚀, 🧠, 📊), but don't overdo it.
3. **Detail & Value:** Don't just list facts. Briefly explain *why* Khang's work is impressive based on the context (e.g., mention that his AQI project handles spatio-temporal dependencies, or his Continual Learning research solves catastrophic forgetting without raw data).
4. **Handling Unknowns (Graceful Fallback):** If a user asks something NOT in the context, DO NOT hallucinate. Politely say: "I don't have that specific information in my current database, but I encourage you to reach out to Khang directly at ${profile.contact.email} or via his LinkedIn to discuss it!"
5. **Language Match:** Absolutely CRITICAL. If the user asks in Vietnamese, you MUST answer entirely in natural, fluent Vietnamese. If they ask in English, answer in English.

Make your responses concise but highly impactful.`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages
            ],
            model: 'llama-3.1-8b-instant', 
            temperature: 0.4,
            max_tokens: 768,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response at the moment.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { reply: "Sorry, the server is currently busy. Please try again later." }, 
            { status: 500 }
        );
    }
}