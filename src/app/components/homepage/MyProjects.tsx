import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const MyProject = () => {
    return (
        <section className="w-full px-6 md:px-36 lg:px-44 xl:px-52 2xl:px-96 relative py-12 md:py-32 text-neutral-300 flex flex-col items-center z-10">
            <div className="space-y-4 text-center">
                <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-white">
                    My Projects
                </h1>
                <p className="text-center text-lg">
                    I don't have many projects, as I tend to spend more time diving deep into specific topics. Here are some of the projects I've built along the way. 😅
                </p>
            </div>

            <div className="w-full mt-10 flex flex-col gap-10">
                <div className="sticky top-10 w-full h-[550px] rounded-2xl border border-neutral-300 overflow-hidden bg-neutral-950">
                    <Image src="/assets/project/odiano.webp" alt="Odiano" fill className="object-cover object-center" />

                    <div className="absolute grid place-content-center sm:place-content-between p-6 bottom-0 left-0 sm:bottom-10 sm:left-10 z-10 max-w-full sm:max-w-[45%] text-white">
                        <div className="space-y-0">
                            <h1 className="font-black text-3xl">Odiano</h1>
                            <h2 className="text-xs text-neutral-400">Sept 2026</h2>
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                            A social media platform built for sharing posts, discovering content, and connecting with others.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 max-w-full">
                            {["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Redis", "BullMQ"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-[11px] font-medium text-neutral-200 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center space-x-3 mt-5">
                            <Link href="https://odiano.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="w-32 h-10 bg-white text-neutral-900 text-xs flex items-center group justify-center space-x-2 cursor-pointer hover:bg-neutral-200 transition-colors">
                                    <span>Live Demo</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 duration-200" />
                                </button>
                            </Link>

                            <Link href="https://github.com/AryaTjiutanto/odiano" target="_blank" rel="noopener noreferrer">
                                <button className="w-32 h-10 bg-transparent border border-neutral-100/70 text-neutral-100 text-xs flex items-center justify-center space-x-2 cursor-pointer hover:bg-white/10 transition-colors">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                    <span>GitHub</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute z-[2] w-[600px] h-[350px] bg-black/80 blur-[90px] -bottom-10 -left-10 pointer-events-none" />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/0 to-neutral-700/10 pointer-events-none" />
                </div>

                <div className="sticky top-12 w-full h-[550px] rounded-2xl border border-neutral-300 overflow-hidden bg-neutral-950">
                    <Image src="/assets/project/tokosl88.webp" alt="Odiano" fill className="object-cover object-center" />

                    <div className="absolute grid place-content-center sm:place-content-between p-6 bottom-0 left-0 sm:bottom-10 sm:left-10 z-10 max-w-full sm:max-w-[45%] text-white">
                        <div className="space-y-0">
                            <h1 className="font-black text-3xl">Tokosl88</h1>
                            <h2 className="text-xs text-neutral-400">Desc 2025</h2>
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                            Company profile landing page for Tokosl88, a retail store in Tangerang. Built to highlight product offerings and connect customers directly to store info.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 max-w-full">
                            {["HTML", "TailwindCSS", "Javascript"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-[11px] font-medium text-neutral-200 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center space-x-3 mt-5">
                            <Link href="https://www.tokosl88.com/" target="_blank" rel="noopener noreferrer">
                                <button className="w-32 h-10 bg-white text-neutral-900 text-xs flex items-center group justify-center space-x-2 cursor-pointer hover:bg-neutral-200 transition-colors">
                                    <span>Live Demo</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 duration-200" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute z-[2] w-[600px] h-[450px] bg-black/80 blur-[180px] -bottom-30 -left-20 pointer-events-none" />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/30 to-neutral-700/10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default MyProject;