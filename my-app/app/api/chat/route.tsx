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

        function detectLang(text: string) {
            const hasVietnamese = /[ăâđêôơưáàảãạ]/i.test(text);
            const hasEnglishWords = /\b(the|is|are|what|where|how)\b/i.test(text);

            if (hasVietnamese) return "vi";
            if (hasEnglishWords) return "en";

            return "en";
        }

        const userLang = detectLang(
            messages[messages.length - 1].content
        );

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

        const systemPrompt = `
User language: ${userLang}

STRICT LANGUAGE POLICY (HIGHEST PRIORITY):
- If User language is "en":
  → Respond ONLY in English.
  → ABSOLUTELY NO Vietnamese words allowed.

- If User language is "vi":
  → Respond ONLY in Vietnamese.

- This OVERRIDES ALL OTHER CONTEXT.

IMPORTANT:
- Context data may be in Vietnamese. You MUST translate internally to match the user's language.

Identity & Entity Resolution:
- Valid names for the user: Khang, Duy Khang, Kelvin...
- Pronouns in Vietnamese: "anh ấy" or "anh Khang" (NEVER "ông")

Context Data:
${contextData}

Tone:
- Professional, academic, AI-focused
- Use Markdown (**PyTorch**, bullet points)

If unknown → say you don't know + provide contact email.
`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.3,
            max_tokens: 1024,
        });

        const reply = chatCompletion.choices[0]?.message?.content 
            || "System encountered an issue. Please try again.";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { reply: "Service temporarily unavailable. Please try again later." }, 
            { status: 500 }
        );
    }
}