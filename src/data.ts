import { Code2, Database, Cloud, Cpu, Brain, Github, Linkedin, Mail, ExternalLink, Terminal, Trophy, Award, BookOpen, GraduationCap, Lightbulb, Rocket, Globe } from 'lucide-react';
import profilePic from './images/jamielpicture.jpg';
import AiEngineeringCertificate from "./images/certificates/ai-engineering-certificate.jpg"
import elementsofai from "./images/certificates/Elements of AI.jpg"
import agenticworkflow from "./images/certificates/agentic-workflow.jpg"
import aws from "./images/certificates/aws.jpg"
import buildingApiPython from "./images/certificates/building-api-python.jpg"
import java from "./images/certificates/java-oop.jpg"
import python from "./images/certificates/python-programming-fundamentals.jpg"
import cProgramming from "./images/certificates/c-programming.jpg"
import AiFundaments from "./images/certificates/ai-fundamentals.jpg"
import iAcademy from "./images/competitions/iAcademy.jpg"
import CebIHacks from "./images/competitions/cebihacks.jpg"
import ceview from "./images/projects/ceview.png"
import medsync from "./images/projects/medsync.jpg"
import pocketclass from "./images/projects/pocketclass.png"
import regit from "./images/projects/regit.png"
import quetek from "./images/projects/quetek.png"
import codebased from "./images/projects/codebased.jpg"
import univercit from "./images/projects/univercit.png"
import cartoon_vae from "./images/projects/cartoon_vae_ai.png"
import ml_healthcare from "./images/projects/ml_healthcare_ai.png"
import wave_img from "./images/projects/wave.png"

export const personalInfo = {
  name: "Jamiel Kyne R. Pinca",
  role: "Aspiring AI & Software Engineer",
  location: "Cebu City, Philippines",
  tagline: "Passionate about innovating and building advances ai driven systems.",
  subheading: "I DO COMPETITIVE PROGRAMMING",
  about: "A passionate innovator with a strong focus on AI and software engineering. Dedicated to creating solutions that tackle real-world problems. Thrives on turning ideas into practical applications that deliver meaningful impact.",
  currentFocus: "AI-driven software solutions and autonomous systems to tackle complex real-world challenges and streamline decision-making processes",
  email: "jamielkynepinca@gmail.com",
  phone: "+63 994 260 6462",
  github: "https://github.com/CodeJamjamzz",
  linkedin: "https://www.linkedin.com/in/jamiel-kyne-r-pinca-92b045342/",
  facebook: "https://www.facebook.com/jamielkyne.r.pinca/",
  resume: "https://drive.google.com/file/d/1JgoDbOa4pUGwDgosloaJcBt82PeaVXR8/view?usp=sharing",
  profileImage: profilePic
};

export const projects = [
  {
    id: 8,
    category: "AI / Machine Learning",
    title: "Wave",
    subtitle: "ASEAN AI Hackathon Project",
    problem: "Need for intelligent workflow orchestration and automated task execution.",
    dataset: "Various",
    approach: "Designed and developed AI agent architecture using Django, PostgreSQL, LangChain, LangGraph, and LangSmith. Integrated AI agent functionalities and managed AI workflow strategies.",
    results: "Improved agent reliability and performance through iterative optimization and RAG pipelines.",
    github: "https://github.com/Fernsz1/Wave.git",
    demo: "https://drive.google.com/file/d/1aI2r65CCUHviB0WCJ81fQnljsIf9Pg9N/view?usp=drive_link",
    image: wave_img
  },
  {
    id: 1,
    category: "AI / Machine Learning",
    title: "Ceview",
    subtitle: "Research & CebiHacks Hackathon Project",
    problem: "Need for targeted marketing insights in the aviation and tourism industry.",
    dataset: "Travel & Tourism Sentiment Data",
    approach: "Developed a fine-tuned customized BERT multi-classification model. Led the development of selective marketing algorithm and built three AI agents. Integrated into a FastAPI microservices architecture with RAG pipelines.",
    results: "Improved campaign targeting efficiency through automated AI workflows.",
    github: "https://github.com/CodeJamjamzz/CeView.git",
    demo: "https://drive.google.com/file/d/1VnCDXGoXxHGsqdU48yLB9cV-r79p08X6/view?usp=sharing",
    image: ceview
  },
  {
    id: 2,
    category: "AI / Machine Learning",
    title: "PocketClass",
    subtitle: "iAcademy Hackathon Project",
    problem: "Lack of accessible, high-quality educational tools in offline environments.",
    dataset: "Curated Educational Content",
    approach: "Led system architecture designing scalable offline-first components. Developed context-aware AI pipelines and engineered AI-driven workflows for adaptive learning using React Native, LangChain, and SQLite.",
    results: "Improved learning effectiveness and increased accessibility for users in digitally underserved areas by 30%.",
    github: "https://www.youtube.com/watch?v=5PT7hGa-Mbs",
    demo: "https://www.youtube.com/watch?v=5PT7hGa-Mbs",
    image: pocketclass
  },
  {
    id: 9,
    category: "AI / Machine Learning",
    title: "Cartoon VAE: Character Interpolation",
    subtitle: "Personal Project",
    problem: "Need for automated character generation and interpolation.",
    dataset: "Cartoon Images",
    approach: "Trained a deep learning VAE model to learn latent representations of cartoon characters using React, FastAPI, and TensorFlow Keras.",
    results: "Built a Fullstack AI-powered system for character generation and latent space manipulation.",
    github: "https://github.com/CodeJamjamzz/Cartoon_VAE_Project.git",
    demo: "https://github.com/CodeJamjamzz/Cartoon_VAE_Project.git",
    image: cartoon_vae
  },
  {
    id: 10,
    category: "AI / Machine Learning",
    title: "Machine Learning Neural Network Projects",
    subtitle: "Personal AI Training Work",
    problem: "Healthcare prediction tasks like heart disease and diabetes risk classification.",
    dataset: "Healthcare Data",
    approach: "Developed and trained neural network models using TensorFlow Keras. Implemented full ML pipelines covering data preprocessing, model design, training, and evaluation.",
    results: "Improved predictive accuracy and model reliability.",
    github: "https://github.com/CodeJamjamzz/Diabetes_Risk_NN.git",
    demo: "https://github.com/CodeJamjamzz/Heart_Disease_NN.git",
    image: ml_healthcare
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
    github: "https://github.com/CodeJamjamzz/Automated_Pillbox.git",
    demo: "https://drive.google.com/file/d/1DBk1CFnpmNWetp21Qg4e2jBFNeCNkUDy/view?usp=sharing",
    image: medsync
  },
  {
    id: 4,
    category: "Software Engineering",
    title: "Regit – Event Management App",
    subtitle: "School/Capstone Project",
    problem: "Organizations struggled to efficiently track attendees and event participation.",
    approach: "Built a user-friendly Android app using Java and Android Studio; designed frontend interfaces and overall project architecture.",
    results: "Streamlined attendee tracking, reducing manual check-ins by 40%.",
    github: "https://github.com/CodeJamjamzz/OOP227_CAPSTONE.git",
    demo: "https://github.com/CodeJamjamzz/OOP227_CAPSTONE",
    image: regit
  },
  {
    id: 5,
    category: "Software Engineering",
    title: "Quetek – Queue Management System",
    subtitle: "School/Capstone Project",
    problem: "Service delays due to inefficient queue management in organizations.",
    approach: "Developed a Kotlin-based Android app handling both frontend and backend workflows to optimize queue flow.",
    results: "Improved service efficiency and reduced average wait time by 30%.",
    github: "https://github.com/MRhagz/QueTek",
    demo: "https://github.com/MRhagz/QueTek",
    image: quetek
  },
  {
    id: 6,
    category: "AI / Machine Learning",
    title: "CodeBased – RAG Chatbot Assistant",
    subtitle: "School/Capstone Project",
    problem: "Developers faced difficulty managing coding repositories and retrieving relevant code information quickly.",
    approach: "Built React frontend with Spring Boot and PostgreSQL backend; integrated AI features for intelligent repository management.",
    results: "Increased developer productivity by 20% and reduced time spent searching code by 35%.",
    github: "https://gitshare.me/repo/51dafdd8-167a-4d37-914f-5981d86c7a2b",
    demo: "https://gitshare.me/repo/51dafdd8-167a-4d37-914f-5981d86c7a2b",
    image: codebased
  },
  {
    id: 7,
    category: "Software Engineering",
    title: "Univercit – Academic Guide App",
    subtitle: "School/Capstone Project",
    problem: "Students lacked easy access to course insights and study materials.",
    approach: "Created a Python Django app supporting both frontend and backend functions for course exploration.",
    results: "Enhanced student engagement with learning resources by 25% and simplified course navigation.",
    github: "https://github.com/CodeJamjamzz/_Univercit.git",
    demo: "https://github.com/CodeJamjamzz/_Univercit.git",
    image: univercit
  }
];

export const competitions = [
  {
    id: 1,
    name: "MCIA Cebi-Hacks Hackathon 2026",
    description: "1st Runner Up, MCIA Cebu-Hacks Hackathon 2026 — As Team Leader of A.I.Con, I led the design, architecture, and overall AI workflow of our project “Ceview,” ensuring the system effectively addressed targeted marketing challenges for Mactan-Cebu International Airport. My role focused on integrating AI into the system, defining the end-to-end pipeline, and selecting appropriate frameworks and technologies to build a scalable and efficient backend.",
    role: "Team Leader",
    team: "A.I.Con",
    project: "Ceview",
    result: "1st Runner Up",
    tech: ["LLMs", "Data Pipelines", "Scalable Backend"],
    icon: Trophy,
    link: "https://www.facebook.com/share/p/18X59Jgx1y/",
    image: CebIHacks
  },
  {
    id: 2,
    name: "iAcademy Code the Future Hackathon 2026",
    description: "2nd Place, iAcademy Code the Future Hackathon 2026 — As Team Leader of A.I.Con, I led the design, architecture, and AI workflow of “PocketClass,” an offline-first learning system built to deliver adaptive and context-aware educational experiences. My role focused on integrating AI into the system, defining the end-to-end pipeline, and selecting the appropriate frameworks and technologies to ensure efficient offline functionality and scalable system design.",
    role: "Team Leader",
    team: "A.I.Con",
    project: "PocketClass",
    result: "2nd Place",
    tech: ["Offline AI", "Context-aware Pipelines", "Adaptive Workflows"],
    icon: Award,
    link: "https://www.facebook.com/share/p/1AwS7BkxbE/",
    image: iAcademy
  }
];

export const certifications = [
  {
    id: 1,
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    date: "2026",
    icon: Brain,
    link: "https://www.datacamp.com/certificate/AIEDA0012901247592",
    image: AiEngineeringCertificate
  },
  {
    id: 2,
    title: "AI Fundamentals Certification",
    issuer: "DataCamp",
    date: "2025",
    icon: Award,
    link: "https://www.datacamp.com/skill-verification/AIF0021209163243",
    image: AiFundaments
  },
  {
    id: 3,
    title: "Elements of AI",
    issuer: "University of Helsinki",
    date: "2026",
    icon: Globe,
    link: "https://certificates.mooc.fi/validate/eethy391dti",
    image: elementsofai
  },
  {
    id: 4,
    title: "Agentic Workflow",
    issuer: "Sololearn",
    date: "2026",
    icon: Brain,
    link: "https://www.sololearn.com/certificates/CC-OV05YJPI",
    image: agenticworkflow
  },
  {
    id: 5,
    title: "Java Object Oriented Programming",
    issuer: "CodeChum",
    date: "2025",
    icon: Code2,
    link: "https://citu.codechum.com/certificates/10052",
    image: java
  },
  {
    id: 6,
    title: "C Programming",
    issuer: "CodeChum",
    date: "2024",
    icon: Code2,
    link: "https://citu.codechum.com/certificates/834",
    image: cProgramming
  },
  {
    id: 7,
    title: "Python Programming Fundamentals",
    issuer: "DataCamp",
    date: "2025",
    icon: Code2,
    link: "https://www.datacamp.com/statement-of-accomplishment/track/7c8e78eba93c50bde40318ca7c10d1946ce9ccff?raw=1",
    image: python
  },
  {
    id: 8,
    title: "AWS Cloud Practicioner (CLF-CO2)",
    issuer: "DataCamp",
    date: "2025",
    icon: Rocket,
    link: "https://www.datacamp.com/statement-of-accomplishment/track/109df6bbf47af1278424924b70dc3567cba1e146?raw=1",
    image: aws
  },
  {
    id: 9,
    title: "Buidling API in Python",
    issuer: "DataCamp",
    date: "2025",
    icon: Terminal,
    link: "https://www.datacamp.com/statement-of-accomplishment/track/713cbfe8510021a2f1077474a6861c024f077e67?raw=1",
    image: buildingApiPython
  },
  
];

export const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "C", "C#", "Java", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    icon: Brain,
    items: ["Spring Boot", "React", "React-Native", "NextJS", "Django", "TensorFlow Keras", "FastAPI", "LangChain", "LangGraph", "LangSmith", "Scikit-Learn"]
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git/GitHub", "Docker", "Figma", "Canva", "VS Code", "PyCharm", "Postman", "Antigravity", "Codex"]
  },
  {
    category: "Interests",
    icon: Lightbulb,
    items: ["AI/ML", "Agentic Workflows", "Innovation", "Startups", "Tech for Social Impact", "Product Ideation"]
  }
];

export const experience = [
  {
    title: "Software Developer Intern",
    company: "Symph Inc.",
    period: "June 2026 - Present",
    description: "Contributed as an Android mobile and web developer for Squibly Mobile App 1.0, building responsive screens, implementing new functionality, and supporting its successful deployment. Developed cross-platform applications using React Native, React, Next.js, and Tailwind CSS. Integrated Firebase, REST APIs, RevenueCat, and Google Play Billing, while leveraging AI agents and Model Context Protocol (MCP)."
  },
  {
    title: "Software Developer",
    company: "Team Freelance",
    period: "January 2026 - Present",
    description: "Developed and integrated full-stack applications using React, Django, and Spring Boot, reducing API latency by 30%. Implemented AI and machine learning features using Python, TensorFlow, LangChain, and LangGraph, decreasing processing time by 25% and improving model inference efficiency by 20%."
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
    awards: ["Academic Achiever", "Gear Awardee", "CHED Merit Scholar"],
    courses: ["Intelligent Systems", "Software Engineering", "Applications Development"]
  }
];
