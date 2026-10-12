
type Project = {
    title: string;
    description: string;
    techs: string[];
    liveDemo: string;
    github: string | null;
    image: string;
    date: string;
}

export const projects : Project[] = [
    {
        title: "Odiano",
        description: "A social media platform built for sharing posts, discovering content, and connecting with others.",
        techs: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Redis", "BullMQ"],
        liveDemo: "https://odiano.vercel.app/",
        github: "https://github.com/AryaTjiutanto/odiano",
        image: "/assets/project/odiano.webp",
        date: "Sept 2026",
    },
    {
        title: "Tokosl88",
        description: "Company profile landing page for Tokosl88, a retail store in Tangerang. Built to highlight product offerings and connect customers directly to store info.",
        techs: ["HTML", "TailwindCSS", "Javascript"],
        liveDemo: "https://www.tokosl88.com/",
        github: null,
        image: "/assets/project/tokosl88.webp",
        date: "Desc 2025",
    },
    {
        title : "Arthahub",
        description: "This one look like a joke 😅, indeed. I build this for my civics class in high school. If you want to try it out, You can only visit homepage, dashboard and page in quick link (Tentang arthahub -> link cepat). I'm not sure if I will continue to develop this project, but I'm still proud of it.",
        techs: ["Next.js", "TailwindCSS", "firebase"],
        liveDemo: "https://arthahub-12.vercel.app/",
        github: "https://github.com/AryaTjiutanto/arthahub-12",
        image: "/assets/project/arthahub.webp",
        date: "March 2025",
    },
    {
        title : "Antelocode",
        description: "A portfolio website for Antelocode, my freelance development profile.",
        techs: ["Next.js", "TailwindCSS"],
        liveDemo: "https://antelocode.vercel.app/",
        github: null,
        image: "/assets/project/antelocode.webp",
        date: "Oct 2024",
    },
    {
        title : "Usercloud",
        description: "A single company landing page I make for studying.",
        techs: ["Next.js", "TailwindCSS"],
        liveDemo: "https://usercloud-mauve.vercel.app/",
        github: "https://github.com/AryaTjiutanto/usercloud",
        image: "/assets/project/UserCloud.webp",
        date: "April 2024",
    },
    {
        title : "Cinehunt",
        description: "A movie database website for cinema lovers. I build this to learn how to use third party api.",
        techs: ["React Js", "TailwindCSS"],
        liveDemo: "https://cinehunt.vercel.app/",
        github: null,
        image: "/assets/project/cinehunt.webp",
        date: "Oct 2023",
    },
    {
        title : "Phont",
        description: "A fake company website i made for study, this website has no responsive design, and yes, this one is look like a joke too 😅.",
        techs: ["HTML", "CSS", "Javascript"],
        liveDemo: "https://aryatjiutanto.github.io/phont/",
        github: "https://github.com/AryaTjiutanto/phont",
        image: "/assets/project/phont.webp",
        date: "Sept 2022",
    }
];