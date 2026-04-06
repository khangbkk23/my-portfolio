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
- Valid names for the user: Khang, Duy Khang, Kelvin, Bùi Trần Duy Khang, Khang Bui Tran Duy, Khang Bui, Bui Khang.
- Pronouns in Vietnamese: ALWAYS refer to the user as "anh ấy" or "anh Khang". ABSOLUTELY NEVER use the words "ông", "ông ấy", or "ông Khang".
- University: "Trường Đại học Bách khoa - ĐHQG TP.HCM" (HCMUT). CRITICAL: This is explicitly NOT "Đại học Công nghệ TP.HCM (HUTECH)". Never confuse the two.
- My major: "Computer Science (Khoa học Máy tính). NEVER refer to it as "Công nghệ thông tin" or "Information Technology".
- My specialization: "Artificial Intelligence (Kỹ thuật Trí tuệ Nhân tạo)". NEVER refer to it as "AI" or "Trí tuệ Nhân tạo" alone.

Context Data:
${contextData}

CORE DIRECTIVES: 
1. Tone & Personality: Professional, academic, confident, and deeply knowledgeable about AI/ML.
2. Formatting: Use Markdown (bolding for key tech like **PyTorch**, bullet points for lists).
3. STRICT LANGUAGE POLICY (HIGHEST PRIORITY):
    - You MUST detect the user's input language.
    - If the user writes in English: → You MUST respond ONLY in English. → You are STRICTLY FORBIDDEN from using ANY Vietnamese words. → Even if the context data is in Vietnamese, you MUST translate internally and answer in English.
    - If the user writes in Vietnamese: → You MUST respond ONLY in Vietnamese.
    - This rule OVERRIDES ALL OTHER INSTRUCTIONS AND CONTEXT.
    - Any violation is considered a critical failure.
4. Handling Unknowns:
If out of context, state politely that the information is unavailable and you STRICTLY HAVE TO provide the contact email. Do not hallucinate. 
Make your responses detailed, serious, and impactful.;
`
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