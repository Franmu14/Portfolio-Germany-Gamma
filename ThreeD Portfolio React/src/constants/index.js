import { gobiernoargentina, meta, openbank, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,

    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Android Developer",
        company_name: "Openbank",
        icon: openbank,
        iconBg: "#accbe1",
        date: "June 2023 - November 2023",
        points: [
            "Developing and maintaining web applications using Kotlin and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Clean Code, Unit Tests"
        ],
    },

    {
        title: "Software Developer",
        company_name: "Freelance",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Mar 2023 - Jun 2023",
        points: [
            "Stretching my stack in the following technologies:",
            "Mobile (Android, Kotlin)",
            "Web (Front: Angular, React and Vue, Back: C#, Spring, Django and Express)",
            "Data (Python, Streamlit, Pandas and Jupyter Notebooks).",
        ],
    },

    {
        title: "Argentina Programa",
        company_name: "Industria del Software",
        icon: gobiernoargentina,
        iconBg: "#fbc3bc",
        date: "Mar 2022 - Mar 2023",
        points: [
            "Developing and maintaining web applications using Angular.js and Java Spring",
            "Final project create a Full-Stack application using Angular in the Front-End and Spring in the Back-End",
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
        link: 'https://github.com/Franmu14',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/francisco-javier-mu%C3%B1oz-b18893233/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'LinguT',
        description: 'Developed a web application that analyzes grammar, morphology and lingusitics stadistics of texts submitted by the users improving their quality',
        link: 'https://github.com',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'List of Beer',
        description: 'Created a Mobile Application in Android which shows a list of beers and its information. Potential use for restaurants, bar and commerces',
        link: 'https://github.com',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'La Rosarina',
        description: 'Built a complete E-Commerce for a bakery in Madrid. It allows users to contact, ask for groceries and investigate further information',
        link: 'https://github.com',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Jumpy Jumpy',
        description: 'Developed a videogame which its style is jumpers',
        link: 'https://github.com',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Harry Potter Quiz',
        description: 'Harry Potter quiz. It emulates the sorting hat giving the user a nice experience being sortd into one of the famous story houses',
        link: 'https://github.com',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Kun Sergio Aguero the Striker',
        description: 'Extracted, cleaned and designed the data of the goals from Sergio Aguero career on Manchester City devealing the strenghts from the legendary striker',
        link: 'https://github.com',
    }
];