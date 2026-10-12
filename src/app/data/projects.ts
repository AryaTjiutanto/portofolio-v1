
type Project = {
    title: string;
    techs: string[];
    descriptionKey : string,
    liveDemo: string;
    github: string | null;
    image: string;
    date: string;
}

export const projects : Project[] = [
    {
        title: "Odiano",
        descriptionKey: "odiano.description",
        techs: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Redis", "BullMQ"],
        liveDemo: "https://odiano.vercel.app/",
        github: "https://github.com/AryaTjiutanto/odiano",
        image: "/assets/project/odiano.webp",
        date: "Sept 2026",
    },
    {
        title: "Tokosl88",
        descriptionKey: "tokosl88.description",
        techs: ["HTML", "TailwindCSS", "Javascript"],
        liveDemo: "https://www.tokosl88.com/",
        github: null,
        image: "/assets/project/tokosl88.webp",
        date: "Desc 2025",
    },
    {
        title : "Arthahub",
        descriptionKey: "arthahub.description",
        techs: ["Next.js", "TailwindCSS", "firebase"],
        liveDemo: "https://arthahub-12.vercel.app/",
        github: "https://github.com/AryaTjiutanto/arthahub-12",
        image: "/assets/project/arthahub.webp",
        date: "March 2025",
    },
    {
        title : "Antelocode",
        descriptionKey: "antelocode.description",
        techs: ["Next.js", "TailwindCSS"],
        liveDemo: "https://antelocode.vercel.app/",
        github: null,
        image: "/assets/project/antelocode.webp",
        date: "Oct 2024",
    },
    {
        title : "Usercloud",
        descriptionKey: "usercloud.description",
        techs: ["Next.js", "TailwindCSS"],
        liveDemo: "https://usercloud-mauve.vercel.app/",
        github: "https://github.com/AryaTjiutanto/usercloud",
        image: "/assets/project/UserCloud.webp",
        date: "April 2024",
    },
    {
        title : "Cinehunt",
        descriptionKey: "cinehunt.description",
        techs: ["React Js", "TailwindCSS"],
        liveDemo: "https://cinehunt.vercel.app/",
        github: null,
        image: "/assets/project/cinehunt.webp",
        date: "Oct 2023",
    },
    {
        title : "Phont",
        descriptionKey: "phont.description",
        techs: ["HTML", "CSS", "Javascript"],
        liveDemo: "https://aryatjiutanto.github.io/phont/",
        github: "https://github.com/AryaTjiutanto/phont",
        image: "/assets/project/phont.webp",
        date: "Sept 2022",
    }
];