export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
};

export const profile = {
  name: "Abhishek Kumar",
  role: "Full-Stack Developer & AI Engineer",
  headline:
    "I build scalable full-stack web applications and practical AI systems — from agentic pipelines to production-ready interfaces that solve real problems.",
  email: "ak7263036@gmail.com",
  location: "NIT Meghalaya, India",
  availability: "Open to internships and freelance collaborations",
};

export const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "JavaScript",
  "C++",
  "Tailwind CSS",
  "LangChain",
  "RAG",
  "LLMs",
  "REST APIs",
  "Git & GitHub",
  "Scikit-learn",
  "Twilio",
  "Cloudinary",
];

export const aboutHighlights = [
  {
    title: "Full-Stack Engineering",
    description:
      "Experienced in building end-to-end web applications with React.js, Node.js, Express.js, and MongoDB — from authentication and REST APIs to role-based dashboards and third-party integrations.",
  },
  {
    title: "AI & Agentic Systems",
    description:
      "I design practical AI workflows using LangChain, RAG, and LLMs — including multi-agent architectures that autonomously handle research, analysis, and report generation.",
  },
  {
    title: "Impact-Driven Development",
    description:
      "I measure success in outcomes: 40% paperwork reduction, 30% faster search, 20% less dev effort. Clean code and real results go hand in hand.",
  },
];

export const projects: Project[] = [
  {
    title: "Multi-Agent Research Assistant",
    description:
      "Autonomous AI system with specialized Search, Reader, Writer, and Critic agents. Built on a LangChain LCEL pipeline with shared memory — simulating a production-level agentic research workflow.",
    image: "/project-0.png",
    tags: ["Python", "LangChain", "LLMs", "Agentic AI"],
    githubUrl: "https://github.com/Abhishek-Kumar111",
    demoUrl: "https://multi-genai-project-t7na.vercel.app/",
  },
  {
    title: "MediCampus",
    description:
      "Role-based campus dispensary system managing student records, medicine inventory, and appointments. Reduced paperwork by 40% with email-based delivery and secure authentication.",
    image: "/project-1.png",
    tags: ["React.js", "Node.js", "MongoDB", "Nodemailer"],
    githubUrl: "https://github.com/Abhishek-Kumar111",
  },
  {
    title: "Stayscape",
    description:
      "Full-stack travel accommodation platform with location-based filtering, Stripe payments, Passport.js auth, and Cloudinary image uploads. Cut search time by 30%.",
    image: "/project-2.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/Abhishek-Kumar111",
  },
];