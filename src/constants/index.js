import { pge, sixFlags } from "../assets/images";
import {
    aws,
    python,
    sql,
    contact,
    css,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    snapgram,
    tailwindcss,
    typescript,
    aiSummarizer,
    promptopia,
    bankApp,
    snake,
    gpt3,
    fitnessApp,
    favoritePlaces,
    microsoft,
    google,
    chatGPT
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
    },
    {
        imageUrl: react,
        name: "React",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
    },
    {
        imageUrl: css,
        name: "CSS",
    },
    {
        imageUrl: express,
        name: "Express",
    },
    {
        imageUrl: github,
        name: "GitHub",
    },
    {
        imageUrl: html,
        name: "HTML",
    },
    {
        imageUrl: redux,
        name: "Redux",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
    },
    {
        imageUrl: python,
        name: "Python",
    },
    {
        imageUrl: sql,
        name: "SQL",
    },
    {
        imageUrl: aws,
        name: "AWS",
    },
    {
        imageUrl: microsoft,
        name: "Microsoft Office",
    },
    {
        imageUrl: google,
        name: "Google Workspace",
    },
    {
        imageUrl: chatGPT,
        name: "ChatGPT",
    },

];

export const experiences = [
    {
        title: "Design Engineer",
        company_name: "PG&E",
        icon: pge,
        iconBg: "#accbe1",
        date: "April 2020 - present",
        points: [
            "Generate, review, and analyze engineering reports.",
            "Execute preventive maintenance tasks in the SAP Work Management System, following established guidance documents.",
            "Collaborate with supervisors and field specialists to optimize preventive maintenance programs.",
            "Identify and propose improvements for the SAP Work Management system and work processes.",
            "Generate reports to support compliance efforts during audits and for regulatory purposes.",
            "On-going data collection and storage procedures.",
            "Develop data inventory list for asset management including Electric Transmission (ET) Line Number, Drawing Numbers, Asset Install Date, Asset Manufacturer Name, Asset Manufacturer Date.",
            "Compile project data into a SAP database.",
            "Work in a team atmosphere to resolve issues.",
            "Provide support to engineering team in the form of asset management.",
            "Review and analyze specifications of various pipe features and components to ensure compliance with codes and regulations."
            
        ],
    },
    {
        title: "Games Technician",
        company_name: "Six Flags",
        icon: sixFlags,
        iconBg: "#accbe1",
        date: "January 2019- April 2020",
        points: [
            "Repair and maintain the electric circuits, sensors, motor systems, and hydraulics of damaged theme park games including at times in the presence of several guests and team members waiting to operate the game.",
            "Improved game functionality percentage from 40% to 80%.",
            "Rewire and install new electrical and mechanical equipment.",
            "Conduct daily troubleshooting and safety inspections for the mechanical and electrical structure of games.",
            "Complete tasks assigned by upper management in a timely manner."
            
        ],
    },
    {
        title: "Lead, Unit Supervisor, Area Supervisor, Senior Supervisor",
        company_name: "Six Flags",
        icon: sixFlags,
        iconBg: "#accbe1",
        date: "Aug 2013- January 2019",
        points: [
            "Oversee the operations of every restaurant in the department.",
            "Maintain effective communication between full-time and seasonal management to ensure all department goals, issues, ideas, policies, and procedures are understood and implemented consistently throughout the department.",
            "Troubleshoot, repair, and report damaged equipment.",
            "Resolve or issue discipline in the situations in which team members have conflict or disobey company policy.",
            "Follow-up with all team members and management to confirm all policies and procedures are abided to and the business needs of every restaurant are being satisfied.",
            "Resolve guest complaints and concerns",
            "Complete numerous special tasks assigned by upper management in a timely manner.",
            "Create training programs and presentations, organize numerous forms of documentations, and communicate department goals using Microsoft Excel, Word, and Power point."
            
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Snapgram',
        description: 'Full stack social media app that includes features such as posting, liking, editing, deleting, and saving images to a public platform, infinite scrolling, signing up and signing in, smooth navigation, and beautiful styling.',
        link: 'https://snapgramapp.netlify.app',
        code: 'https://github.com/KennethSoriano/snapgram'
    },
    {
        iconUrl: promptopia,
        theme: 'btn-back-pink',
        name: 'Promptopia',
        description: 'Full stack application that allows users to create, read, update, and delete prompts on a public framework.',
        link: 'https://article-ai-summarizer-14017.netlify.app/',
        code: 'https://github.com/KennethSoriano/ai_prompts'
    },
    {
        iconUrl: aiSummarizer,
        theme: 'btn-back-pink',
        name: 'Article Summarizer',
        description: 'AI-powered web app that uses an API to generate article summaries from inputted URLs.',
        link: 'https://promptopia-8h529e0xy-kenneths-projects-a82ee88f.vercel.app/',
        code: 'https://github.com/KennethSoriano/ai_summarizer'
    },
    {
        iconUrl: fitnessApp,
        theme: 'btn-back-pink',
        name: 'Fitness App',
        description: 'AI-powered web app that uses an API to generate article summaries from inputted URLs.',
        link: 'https://exercisessearchapp.netlify.app/',
        code: 'https://github.com/KennethSoriano/fitness_app'
    },
    {
        iconUrl: snake,
        theme: 'btn-back-pink',
        name: 'Snake',
        description: 'A simulation of the classic mobile game Snake.',
        link: 'https://kss14.itch.io/snake',
        code: 'https://github.com/KennethSoriano/snake'
    },
    {
        iconUrl: favoritePlaces,
        theme: 'btn-back-pink',
        name: 'Favorite Places',
        description: 'React native mobile device that allows users to search, save, and take pictures of their favorite locations through integrating multiple APIs, including Google Maps API for location services and device camera functionality.',       
        link: 'https://github.com/KennethSoriano/FavoriteLocations',
        code: 'https://github.com/KennethSoriano/FavoriteLocations'
    },
    {
        iconUrl: bankApp,
        theme: 'btn-back-pink',
        name: 'Modern Bank App',
        description: 'Front-end react.js web application with UI/UX that showcases the unique qualities of a bank in a modern way.',
        link: 'https://modern-bank-app-14017.netlify.app/#product',
        code: 'https://github.com/KennethSoriano/modern_bank_app'
    },
    {
        iconUrl: gpt3,
        theme: 'btn-back-pink',
        name: 'GPT-3',
        description: 'Front-end React.js web application with UI/UX that showcases the uses and potentials of GPT3.',
        link: 'https://gpt3project.com/',
        code: 'https://github.com/KennethSoriano/gpt3'
    },



];