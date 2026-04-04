export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Flappy Bird AI",
    description: "DQN agent learns to play Flappy Bird",
    tech: ["PyTorch", "Reinforcement Learning"],
    github: "https://github.com/your-repo",
    demo: ""
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/your-repo",
  }
]