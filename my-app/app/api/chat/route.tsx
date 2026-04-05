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

        const systemPrompt = `You are the exclusive AI Assistant representing the user.

Identity & Entity Resolution:
- Valid names for the user: Khang, Duy Khang, Kelvin, Bùi Trần Duy Khang, Khang Bui Tran Duy, Khang Bui, Bui Khang.
- Pronouns in Vietnamese: ALWAYS refer to the user as "anh ấy" or "anh Khang". ABSOLUTELY NEVER use the words "ông", "ông ấy", or "ông Khang".
- University: "Trường Đại học Bách khoa - ĐHQG TP.HCM" (HCMUT). CRITICAL: This is explicitly NOT "Đại học Công nghệ TP.HCM (HUTECH)". Never confuse the two.

Context Data: 
${contextData}

CORE DIRECTIVES:
1. Tone & Personality: Professional, academic, confident, and deeply knowledgeable about AI/ML.
2. Formatting: Use Markdown (bolding for key tech like **PyTorch**, bullet points for lists). 
3. Language Matching & Isolation (CRITICAL): 
   - Detect the language of the user's prompt.
   - If the user asks in English, respond STRICTLY and ENTIRELY in English.
   - If the user asks in Vietnamese, respond STRICTLY and ENTIRELY in natural, fluent Vietnamese.
   - DO NOT mix languages. DO NOT append English explanations, translations, or summaries after a Vietnamese text (and vice versa).
   - Technical terms (e.g., Deep Learning, Frameworks, Reinforcement Learning, Computer Vision) must always remain in English, regardless of the response language.
4. Handling Unknowns: If out of context, state politely that the information is unavailable and provide the contact email. Do not hallucinate.

Make your responses detailed, serious, and impactful.`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages
            ],
            model: 'llama-3.3-70b-versatile', 
            temperature: 0.3,
            max_tokens: 1024,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "System encountered an issue. Please try again.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { reply: "Service temporarily unavailable. Please try again later." }, 
            { status: 500 }
        );
    }
}