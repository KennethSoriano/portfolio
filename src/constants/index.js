import { pge, sixFlags } from "../assets/images";
import {
    aws,
    python,
    sql,
    contact,
    css,
    express,
    git,
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
    typescript
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
        imageUrl: git,
        name: "Git",
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
    }
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
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
        code: ''
    },


];