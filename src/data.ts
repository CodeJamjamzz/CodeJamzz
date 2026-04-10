import { Code2, Database, Cloud, Cpu, Brain, Github, Linkedin, Mail, ExternalLink, Terminal, Trophy, Award, BookOpen, GraduationCap, Lightbulb, Rocket, Globe } from 'lucide-react';

export const personalInfo = {
  name: "Jamiel Kyne R. Pinca",
  role: "Aspiring AI Engineer",
  location: "Cebu City, Philippines",
  tagline: "passionate about innovating and building advances ai driven systems.",
  subheading: "I DO COMPETITIVE PROGRAMMING",
  about: "A passionate innovator with a strong focus on AI and software engineering. Dedicated to creating solutions that tackle real-world problems. Thrives on turning ideas into practical applications that deliver meaningful impact.",
  currentFocus: "AI-driven software solutions and autonomous systems to tackle complex real-world challenges and streamline decision-making processes",
  email: "jamielkynepinca@gmail.com",
  phone: "+63 994 260 6462",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  resume: "https://example.com/resume.pdf",
  datacamp: "https://www.datacamp.com/portfolio/jamielkyne",
  profileImage: "https://storage.googleapis.com/m-infra.appspot.com/public/res/antigravity/jamiel_profile.jpg"
};

export const projects = [
  {
    id: 1,
    category: "AI / Machine Learning",
    title: "Ceview",
    subtitle: "CebiHacks Hackathon Project",
    problem: "Need for targeted marketing insights in the aviation and tourism industry.",
    dataset: "Travel & Tourism Sentiment Data",
    approach: "Designed scalable backend and AI system architecture; built LLM framework and data pipeline for context-aware insights.",
    results: "Improved campaign targeting efficiency through automated AI workflows.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/ceview/800/600"
  },
  {
    id: 2,
    category: "AI / Machine Learning",
    title: "PocketClass",
    subtitle: "iAcademy Hackathon Project",
    problem: "Lack of accessible, high-quality educational tools in offline environments.",
    dataset: "Curated Educational Content & Student Interaction Logs",
    approach: "Designed offline-first AI system with 0% internet dependency; built context-aware AI pipelines.",
    results: "Improved learning effectiveness by 25% and increased user engagement by 20%.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/pocketclass/800/600"
  },
  {
    id: 3,
    category: "Software Engineering",
    title: "MedSync",
    subtitle: "Research & Freelance Medical Prototype",
    problem: "Inefficient real-time medical data transmission and patient monitoring.",
    dataset: "IoT Sensor Streams & Patient Records",
    approach: "Built full-stack system; integrated IoT devices for real-time data transmission; contributed to system design.",
    results: "Functional healthcare prototype with real-time monitoring capabilities.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/medsync/800/600"
  },
  {
    id: 4,
    category: "Software Engineering",
    title: "Regit – Event Management App",
    subtitle: "School/Capstone Project",
    problem: "Organizations struggled to efficiently track attendees and event participation.",
    approach: "Built a user-friendly Android app using Java and Android Studio; designed frontend interfaces and overall project architecture.",
    results: "Streamlined attendee tracking, reducing manual check-ins by 40%.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/regit/800/600"
  },
  {
    id: 5,
    category: "Software Engineering",
    title: "Quetek – Queue Management System",
    subtitle: "School/Capstone Project",
    problem: "Service delays due to inefficient queue management in organizations.",
    approach: "Developed a Kotlin-based Android app handling both frontend and backend workflows to optimize queue flow.",
    results: "Improved service efficiency and reduced average wait time by 30%.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/quetek/800/600"
  },
  {
    id: 6,
    category: "AI / Machine Learning",
    title: "RepoBased – RAG Chatbot Assistant",
    subtitle: "School/Capstone Project",
    problem: "Developers faced difficulty managing coding repositories and retrieving relevant code information quickly.",
    approach: "Built React frontend with Spring Boot and PostgreSQL backend; integrated AI features for intelligent repository management.",
    results: "Increased developer productivity by 20% and reduced time spent searching code by 35%.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/repobased/800/600"
  },
  {
    id: 7,
    category: "Software Engineering",
    title: "Univercit – Academic Guide App",
    subtitle: "School/Capstone Project",
    problem: "Students lacked easy access to course insights and study materials.",
    approach: "Created a Python Django app supporting both frontend and backend functions for course exploration.",
    results: "Enhanced student engagement with learning resources by 25% and simplified course navigation.",
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://picsum.photos/seed/univercit/800/600"
  }
];

export const competitions = [
  {
    id: 1,
    name: "MCIA Cebi-Hacks Hackathon 2026",
    description: "Developed 'Ceview', a targeted marketing AI system for the Mactan-Cebu International Airport.",
    role: "Team Leader",
    team: "A.I.Con",
    project: "Ceview",
    result: "1st Runner Up",
    tech: ["LLMs", "Data Pipelines", "Scalable Backend"],
    icon: Trophy,
    link: "https://linkedin.com/posts/example1",
    image: "https://picsum.photos/seed/cebihacks/800/400"
  },
  {
    id: 2,
    name: "iAcademy Code the Future Hackathon 2026",
    description: "Developed 'PocketClass', an offline-first AI learning system.",
    role: "Team Leader",
    team: "A.I.Con",
    project: "PocketClass",
    result: "2nd Place",
    tech: ["Offline AI", "Context-aware Pipelines", "Adaptive Workflows"],
    icon: Award,
    link: "https://linkedin.com/posts/example2",
    image: "https://picsum.photos/seed/iacademy/800/400"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Associate AI Engineer for Developers",
    issuer: "DataCamp",
    date: "2025",
    icon: Brain,
    link: "https://datacamp.com/certificate/1",
    image: "https://picsum.photos/seed/ai-eng/400/200"
  },
  {
    id: 2,
    title: "AI Fundamentals Certification",
    issuer: "DataCamp",
    date: "2025",
    icon: Award,
    link: "https://datacamp.com/certificate/2",
    image: "https://picsum.photos/seed/ai-fund/400/200"
  },
  {
    id: 3,
    title: "Elements of AI",
    issuer: "University of Helsinki",
    date: "2026",
    icon: Globe,
    link: "https://elementsofai.com/certificate/3",
    image: "https://picsum.photos/seed/helsinki/400/200"
  },
  {
    id: 4,
    title: "Agentic Workflow",
    issuer: "Sololearn",
    date: "2026",
    icon: Rocket,
    link: "https://sololearn.com/certificate/4",
    image: "https://picsum.photos/seed/agentic/400/200"
  },
  {
    id: 5,
    title: "Java & C Programming",
    issuer: "CodeChum",
    date: "2024 & 2025",
    icon: Code2,
    link: "https://codechum.com/certificate/5",
    image: "https://picsum.photos/seed/java-c/400/200"
  },
  {
    id: 6,
    title: "Python & JavaScript Essentials",
    issuer: "Sololearn",
    date: "2024",
    icon: Terminal,
    link: "https://sololearn.com/certificate/6",
    image: "https://picsum.photos/seed/python-js/400/200"
  }
];

export const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "Kotlin"]
  },
  {
    category: "Frameworks",
    icon: Brain,
    items: ["Django", "Spring Boot", "React", "TensorFlow", "FastAPI", "LangChain", "Scikit-Learn"]
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git/GitHub", "Docker", "Figma", "Canva", "VS Code", "PyCharm", "Postman"]
  },
  {
    category: "Interests",
    icon: Lightbulb,
    items: ["AI/ML", "Innovation", "Startups", "Tech for Social Impact", "Product Ideation"]
  }
];

export const experience = [
  {
    title: "Software Developer",
    company: "Team Freelance (Team A.I.Con)",
    period: "January 2026 - Present",
    description: "Contributing to AI and software engineering projects. Building full-stack apps using React, Django, and Spring Boot. Integrated AI/ML features improving inference efficiency by 20% and reducing latency by 30%."
  },
  {
    title: "Computer Science Student",
    company: "Cebu Institute of Technology - University",
    period: "August 2023 - Present",
    description: "Started my journey in Computer Science, focusing on Intelligent Systems and Software Engineering. Academic Achiever and College Scholar."
  }
];

export const education = [
  {
    school: "Cebu Institute of Technology - University",
    degree: "BS Computer Science",
    period: "Expected June 2027",
    awards: ["Academic Achiever", "College Scholar", "CHED Merit Scholar"],
    courses: ["Intelligent Systems", "Software Engineering", "Data Analytics"]
  }
];
