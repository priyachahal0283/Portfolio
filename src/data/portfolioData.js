import jaloraImage from '../assets/image.png';
import dermaImage from '../assets/image2.png';

export const PORTFOLIO_DATA = {
    personal: {
        name: "Priya",
        role: "Full Stack Developer",
        tagline: "Building scalable web experiences and intelligent systems.",
        about: "I am a passionate Full Stack Developer with experience in building robust web applications, from responsive frontends to scalable backends. I thrive on solving complex problems and continuously learning new technologies to build better software.",
        email: "priyachahl0283@gmail.com",
        mobile: "+91 7015778525",
        linkedin: "https://www.linkedin.com/in/priyachahal0283/",
        github: "https://github.com/priyachahal0283",
    },
    skills: {
        frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
        backend: ["Node.js", "Express.js", "Python", "Flask", "Java", "C++", "PHP"],
        database: ["MongoDB", "MySQL"],
        tools: ["Git & GitHub", "VS Code", "Gemini AI", "phpMyAdmin"],
        soft: ["Analytical thinking", "Adaptability", "Leadership", "Communication"]
    },
    projects: [
        {
            id: 1,
            title: "Manufacturing Management System",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            description: "Custom MERN application to digitize workflows and inventory. Features a scalable MongoDB schema and secure RESTful APIs to facilitate seamless data communication.",
            image: jaloraImage,
            liveLink: "https://jalota-tools-manufacturing.vercel.app/",
            githubLink: "https://github.com/jhanvi-11/jalota-tools-manufacturing",
        },
        {
            id: 2,
            title: "DermaScan AI",
            tech: ["Python", "Flask", "HTML", "Gemini AI"],
            description: "Dermatological AI assistant integrating Google Gemini with a Flask backend for symptom analysis. Features a JSON-controlled interaction pipeline and high-performance chatbot.",
            image: dermaImage,
            liveLink: "#",
            githubLink: "https://github.com/priyachahal0283/AI-Project-ChatBot-",
        },
        {
            id: 3,
            title: "Virtual Memory Management Simulator",
            tech: ["HTML", "CSS", "JavaScript"],
            description: "Interactive OS memory simulator visualizing paging and address translation via a custom JavaScript engine. Includes interactive grids and stats dashboard.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 4,
            title: "Training Management System",
            tech: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
            description: "Production-ready LMS enabling course creation, user enrollment, and content delivery. Features secure authentication, session management, and responsive UI.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
            liveLink: "#",
            githubLink: "https://github.com/priyachahal0283/training-management-website",
        }
    ],
    education: [
        {
            id: 1,
            title: "Bachelor of Technology, CSE",
            institution: "Lovely Professional University (Phagwara, Punjab)",
            date: "Aug '23 - Present",
            details: "CGPA: 7.63. Engaged in competitive programming and full-stack web development projects."
        },
        {
            id: 2,
            title: "Intermediate (PCM)",
            institution: "RPS Public School (Hisar, Haryana)",
            date: "Mar '22 - May '23",
            details: "Score: 76.6%. Participated in science fairs and coding competitions."
        },
        {
            id: 3,
            title: "Matriculation",
            institution: "RPS Public School (Hisar, Haryana)",
            date: "Mar '20 - May '21",
            details: "Score: 93.4%. Foundation years focused on analytical skills."
        }
    ],
    experience: [
        {
            id: 1,
            title: "Java Programming Trainee",
            company: "Cipher Schools (Edtech)",
            date: "June '25",
            description: "Learned core Java concepts (OOP, collections, multi-threading). Developed mini projects that enhanced logical thinking and backend problem-solving skills."
        }
    ]
};
