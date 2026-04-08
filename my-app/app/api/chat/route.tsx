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

        const lastMessage = messages[messages.length - 1].content;

        function detectLang(text: string) {
            const hasVietnamese = /[ăâđêôơưáàảãạ]/i.test(text);
            return hasVietnamese ? "vi" : "en";
        }
        const userLang = detectLang(lastMessage);

        function buildContext(query: string) {

            // Phan biet giua ngon ngu va ngon ngu lap trinh
            let q = query.toLowerCase().replace(/[.,!?]/g, "");
            const programmingLangRegex = /(ngôn ngữ lập trình|lập trình bằng ngôn ngữ|ngôn ngữ code|code bằng ngôn ngữ|programming language|coding language)/g;
            q = q.replace(programmingLangRegex, "programming_language_token");

            function getScore(text: string, keywords: string[]) {
                return keywords.reduce((acc, k) => {
                    const paddedText = ` ${text} `;
                    const paddedKeyword = ` ${k.toLowerCase()} `;
                    return acc + (paddedText.includes(paddedKeyword) ? 1 : 0);
                }, 0);
            }

            const intents = [
                {
                    name: "projects",
                    keywords: ["project", "projects", "build", "dự án", "sản phẩm", "system", "app", "github", "deploy", "portfolio", "làm ra"],
                    data: { projects },
                },
                {
                    name: "skills",
                    keywords: ["skill", "skills", "kỹ năng", "stack", "technology", "công nghệ", "framework", "tool", "ml", "ai", "code", "lập trình", "python", "c++", "java", "programming_language_token"],
                    data: { skills },
                },
                {
                    name: "research",
                    keywords: ["research", "nghiên cứu", "paper", "bài báo", "study", "lab", "continual learning", "vit-cms", "khoa học"],
                    data: { research },
                },
                {
                    name: "education",
                    keywords: ["education", "học vấn", "trường", "đại học", "university", "gpa", "bách khoa", "hcmut", "degree", "major", "sinh viên", "học"],
                    data: { education },
                },
                {
                    name: "certificates",
                    keywords: ["certificate", "chứng chỉ", "course", "khóa học", "udemy", "bằng cấp"],
                    data: { certificates },
                },
                {
                    name: "activities",
                    keywords: ["activity", "hoạt động", "volunteer", "tình nguyện", "đoàn", "union", "leader", "ngoại khóa", "mùa hè xanh", "xuân tình nguyện"],
                    data: { activities },
                },
                {
                    name: "rewards",
                    keywords: ["reward", "giải thưởng", "thành tích", "merit", "student with 5 merits", "sinh viên 5 tốt", "khen thưởng"],
                    data: { rewards },
                },
                {
                    name: "languages",
                    keywords: ["english", "tiếng anh", "ngoại ngữ", "toeic", "giao tiếp", "nói", "ngôn ngữ"],
                    data: { languages },
                }
            ];

            const scored = intents.map((intent) => ({
                ...intent,
                score: getScore(q, intent.keywords),
            }));

            scored.sort((a, b) => b.score - a.score);

            const coreProfile = {
                name: profile.name,
                title: profile.title,
                shortGoal: profile.shortGoal,
                contact: profile.contact
            };

            let finalContext: any = { core_profile: coreProfile };

            if (scored[0].score > 0) {
                finalContext[scored[0].name] = scored[0].data;
                if (scored[1] && scored[1].score > 0) {
                    finalContext[scored[1].name] = scored[1].data;
                }
            } else {
                finalContext.profile_summary = profile.summary;
            }

            return finalContext;
        }

        const activeContext = buildContext(lastMessage);
        const contextDataString = JSON.stringify(activeContext);

        const systemPrompt = `
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
Pronouns and Addressing Rules (Vietnamese) 
- Strict communication rules in Vietnamese:
    + The assistant MUST refer to itself as "em" in ALL Vietnamese responses.
    + The assistant MUST address the user as "anh" or "chị". If gender is unknown, use "anh/chị".
    + The assistant MUST refer to Khang as "anh ấy" or "anh Khang".
    + ABSOLUTELY FORBIDDEN to use: "ông", "ông ấy", "ông Khang".
    + Any violation is considered a critical failure.
- University: "Trường Đại học Bách khoa - ĐHQG TP.HCM" (HCMUT). CRITICAL: This is explicitly NOT "Đại học Công nghệ TP.HCM (HUTECH)". Never confuse the two.
- My major: "Computer Science (Khoa học Máy tính). NEVER refer to it as "Công nghệ thông tin" or "Information Technology".
- My specialization: "Artificial Intelligence (Kỹ thuật Trí tuệ Nhân tạo)". NEVER refer to it as "AI" or "Trí tuệ Nhân tạo" alone.

Context Data:
${contextDataString}

CORE DIRECTIVES: 
1. Tone & Personality: Professional, academic, confident, and deeply knowledgeable about AI/ML.
2. Formatting: Use Markdown (bolding for key tech like **PyTorch**, bullet points for lists). Keep responses brief and straight to the point.
3. STRICT LANGUAGE POLICY:
    - Detect the user's input language. 
    - If English → respond ONLY in English. 
    - If Vietnamese → respond ONLY in Vietnamese.
    - Violating this is a critical failure.
4. STRICT ANTI-HALLUCINATION & ZERO EXTRAPOLATION (CRITICAL):
    - You MUST base your answers PURELY and STRICTLY on the Context Data provided.
    - DO NOT invent, assume, or extrapolate use cases, projects, or experience that are not explicitly stated in the JSON.
    - Example: If the context lists "Java" or "C++" as a skill, but DOES NOT mention what Khang built with them, DO NOT assume he uses them for Android, Web, or Competitive Programming. Just state he knows the language.
    - If the user asks about something not in the context, politely decline, state you don't know, and provide Khang's email. DO NOT hallucinate.
`;

        const chatHistory = messages.slice(-8);

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                ...chatHistory
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.2,
            max_tokens: 512,
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