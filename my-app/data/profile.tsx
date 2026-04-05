// data/profile.ts

export const profile = {
  name: "Khang Bui Tran Duy",
  title: "AI Engineer | Data Science",
  tagline: "Computer Science · Artificial Intelligence and Machine Learning",
  summary:
    "Third-year Computer Science student at HCMUT with a strong foundation in Machine Learning, Deep Learning, Computer Vision, and NLP — currently expanding into Reinforcement Learning.",
  shortGoal:
    "Obtain an AI Engineer position to collaborate with experienced professionals, contribute to real-world AI systems, and strengthen technical problem-solving skills.",
  longGoal:
    "Become a core AI Engineer, pursue advanced international education, and return to drive high-impact R&D initiatives.",
  contact: {
    phone: "(+84) 815 594 665",
    email: "buitranduykhang2005@gmail.com",
    github: "khangbkk23",
    linkedin: "khangbkk23",
  },
};

export const education = [
  {
    school: "Ho Chi Minh City University of Technology – VNU-HCM",
    degree: "Bachelor of Engineering in Computer Science",
    major: "Specializing in Applied Artificial Intelligence",
    gpa: "3.71 / 4.00",
    period: "Sep 2023 – Apr 2027",
  },
];

export const research = [
  {
    institution: "University of Technology – VNU-HCM, Faculty of CSE",
    role: "Research Team Member",
    topic: "Optimization of Continual Learning Strategy for RL and DNN",
    period: "May 2025 – Present",
    subject: "Nested Learning & Continuum Memory System",
    highlights: [
      "Architected ViT-CMS: Integrated Nested Learning blocks with a Continuum Memory System on a ViT-Base backbone to mitigate catastrophic forgetting without storing raw data.",
      "Nested Optimizer: Designed a multi-frequency update schedule and Temporal Isolation mechanism to ensure precise hierarchical weight organization.",
      "Performance: Achieved 73.1% F1-score and 75.0% Stability on CIFAR-10, outperforming baselines via Logit Masking and Gradient Accumulation.",
    ],
    repoUrl: "https://github.com/PenguAKAuseless/nested-learning-continual",
  },
];

export const skills = {
  languages: ["Python", "C++", "Java", "JavaScript"],
  mlDl: ["PyTorch", "TensorFlow", "Scikit-learn", "Model Optimization & Tuning"],
  nlp: ["RAG", "NER", "Sentiment Analysis", "Text Classification", "TF-IDF", "Word Embeddings"],
  cv: ["YOLO", "R-CNN", "Image Classification", "Instance Segmentation", "Feature Extraction"],
  rl: ["DDPG", "Actor–Critic", "Continual Learning"],
  mlops: ["Docker", "GitHub Actions (CI/CD)", "FastAPI", "Flask", "Django", "HuggingFace Spaces"],
  databases: ["MongoDB", "SQL Server"],
  tools: ["Git", "Conda", "Poetry"],
};

// ── Projects ──────────────────────────────────────────────────────────────────

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  goal: string;
  highlights: string[];
  tags: string[];
  repoUrl: string;
  deployUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Self-driving Car Object Detection",
    subtitle: "Reinforcement Learning · Deep Learning",
    period: "Jul 2025 – Present",
    goal: "Built an autonomous driving system integrating RL with real-time object detection for safer, adaptive navigation.",
    highlights: [
      "Applied DDPG for continuous vehicle control with object detection modules.",
      "Benchmarked YOLOv11 vs Faster R-CNN (ResNet/MobileNet) — YOLOv11 optimal for real-time inference.",
      "Robust training pipeline: AdamW, OneCycleLR, advanced augmentation, early stopping.",
      "Modular PyTorch framework ensuring stable convergence and reproducibility.",
    ],
    tags: ["PyTorch", "DDPG", "YOLOv11", "Faster R-CNN"],
    repoUrl: "https://github.com/khangbkk23/Self-DrivingCarUsingDDPG",
  },
  {
    id: 2,
    title: "Food Image Classification",
    subtitle: "Computer Vision · Deep Learning",
    period: "Jul – Aug 2025",
    goal: "Systematic experiments on Food101 benchmark (101 classes, 100K+ images) evaluating CNN performance.",
    highlights: [
      "Compared CNNs from shallow Conv2D to SOTA EfficientNet-B2.",
      "Enhanced generalization via data augmentation, early stopping, LR scheduling.",
      "Built evaluation pipeline for performance monitoring and overfitting analysis.",
      "Achieved ~88.5–90% accuracy. Deployed Django + DRF + Docker on HuggingFace Spaces.",
    ],
    tags: ["EfficientNet-B2", "PyTorch", "Django", "Docker", "HuggingFace"],
    repoUrl: "https://github.com/khangbkk23/FoodVisionBig",
    deployUrl: "https://khangbkk23-foodvisionbig.hf.space/",
  },
  {
    id: 3,
    title: "Vietnam AQI Forecasting",
    subtitle: "Spatio-temporal Regression · Deep Learning",
    period: "Nov – Dec 2025",
    goal: "Unified deep learning framework using Dual Embedding BiLSTM with Attention to forecast multi-station AQI across Vietnam.",
    highlights: [
      "ETL pipeline with Pandas: sliding windows, cyclical time encoding, lag/rolling features.",
      "Dual Embedding BiLSTM with Attention — Entity Embeddings for spatial heterogeneity.",
      "Custom weighted MSE/Huber loss, gradient clipping, LR scheduling.",
      "Recursive 7-day forecasting; Flask + Leaflet.js web app. Achieved ~0.43 RMSE.",
    ],
    tags: ["BiLSTM", "Attention", "Flask", "Leaflet.js", "Pandas"],
    repoUrl: "https://github.com/khangbkk23/TimeSeries_AQI_Forecast_Vietnam_Province.git",
  },
  {
    id: 4,
    title: "Agentic RAG Framework",
    subtitle: "NLP · LLM Engineering",
    period: "Nov – Dec 2025",
    goal: "Scalable RAG system querying 20,000+ OCR-degraded legal documents with high factual accuracy.",
    highlights: [
      "Retrieval pipeline: 256,000 vector chunks via FAISS + bge-large-en-v1.5 embeddings.",
      "Agentic workflow with LangChain + LangGraph (Grader & Query Rewriter), Llama-3.1 via Groq API.",
      "JWT-secured Django REST API with automated CI/CD on HuggingFace Spaces.",
    ],
    tags: ["RAG", "LangChain", "LangGraph", "FAISS", "Llama-3.1", "Django"],
    repoUrl: "https://github.com/khangbkk23/Epstein_Retrieval_System",
    deployUrl: "http://khangbkk23-epstein-rag-portfolio.hf.space/",
  },
];

export interface GridItemProps {
  id: number;
  title: string;
  description: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const gridItems: GridItemProps[] = [
  {
    id: 1,
    title: "Continual Learning Research @ VNU-HCM",
    description: "ViT-CMS · Nested Learning · Continuum Memory System",
    className: "md:col-span-2",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    title: "Open to AI Engineer roles & research collaborations",
    description: "",
    className: "md:col-span-1",
    titleClassName: "justify-start",
  },
  {
    id: 3,
    title: "Tech stack: PyTorch · LangChain · Docker · FastAPI",
    description: "From model training to production deployment",
    className: "md:col-span-1",
    titleClassName: "justify-center",
  },
  {
    id: 4,
    title: "GPA 3.71 / 4.00 · TOEIC 855",
    description: "HCMUT Computer Science, Applied AI specialization",
    className: "md:col-span-2",
    titleClassName: "justify-start",
  },
];


export const certificates = [
  {
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
    platform: "Udemy",
    company: "SuperDataScienceTeam",
    status: "Completed",
    period: "June 2024 – May 2025",
    desc: "100% of 47-hour Machine Learning fundamentals implementation.",
    url: "https://www.udemy.com/course/machinelearning/?couponCode=KEEPLEARNING",
  },
  {
    title: "TensorFlow for Deep Learning Bootcamp",
    platform: "Udemy",
    company: "ZTM",
    status: "Completed",
    period: "Dec 2024 – June 2025",
    desc: "100% of 62.5-hour comprehensive training in Neural Networks implementation.",
    url: "https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/",
  },
  {
    title: "The Complete Python Bootcamp: From Zero to Hero",
    platform: "Udemy",
    status: "Completed",
    period: "Dec 2024 – Mar 2025",
    desc: "Advanced core Python programming concepts through coding exercises and projects.",
    url: "https://www.udemy.com/course/python-cho-ai-tu-so-0-thanh-nguoi-hung/?couponCode=KEEPLEARNING",
  },
  {
    title: "LLM Engineering: Master AI, Large Language Models & Agents",
    platform: "Udemy",
    company: "Ligacy Team",
    status: "In Progress (50%)",
    period: "Aug 2025 – Present",
    desc: "Build & deploy LLM applications — GenAI, RAG, QLoRA, AI agents.",
    url: "https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/?couponCode=KEEPLEARNING",
  },
  {
    title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    platform: "Udemy",
    company: "Ligacy Team",
    status: "In Progress (30%)",
    period: "Nov 2025 – Present",
    desc: "Agentic AI systems, RAG pipelines, QLoRA fine-tuning, deploying GenAI applications.",
    url: "https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/",
  },
];


export const activities = [
  "Member of the Executive Committee, Ho Chi Minh Communist Youth Union – Faculty of CSE",
  'Leader – Volunteer campaign "Xuân Tình Nguyện" 2025, Faculty of CSE',
  'Vice Leader – Volunteer campaign "Mùa Hè Xanh" 2024, Ho Chi Minh City Front, Faculty of CSE',
  "Vice Leader – CSE Summer School 2024, Faculty of CSE",
];

export const languages = [
  { lang: "Vietnamese", level: "Native" },
  {
    lang: "English",
    level: "TOEIC L&R: 855 — technical discussions, documentation, cross-cultural collaboration",
  },
];