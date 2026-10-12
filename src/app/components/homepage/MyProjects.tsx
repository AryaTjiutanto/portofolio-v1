import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { useTranslations } from "next-intl";

const MyProject = () => {
    const t = useTranslations("homepage.projects");

    return (
        <section className="w-full px-6 md:px-36 lg:px-44 xl:px-52 2xl:px-96 relative py-12 md:py-32 text-neutral-300 flex flex-col items-center z-10" id="my-projects">
            <div className="space-y-4 text-center">
                <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-white">
                    {t('sectionTitle')}
                </h1>
                <p className="text-center text-lg">
                   {t('sectionDescription')}
                </p>
            </div>

            <div className="w-full mt-10 flex flex-col gap-10">
                {projects.map((project) => (
                    <div key={`project-${project.title}`} className="sticky top-10 w-full h-100 md:h-130 lg:h-auto lg:aspect-[1.8] rounded-2xl border border-neutral-300 overflow-hidden bg-neutral-950">
                        <Image src={project.image} alt="Odiano" fill className="object-cover object-top" />

                        <div className="absolute grid place-content-center sm:place-content-between p-6 bottom-0 left-0 sm:bottom-10 sm:left-10 z-10 max-w-full md:max-w-[80%] lg:max-w-[45%] text-white">
                            <div className="space-y-0 flex items-center space-x-3">
                                <h1 className="font-black text-3xl">{project.title}</h1>
                                <div className="flex px-2 py-1 bg-white text-neutral-900 rounded w-fit">
                                    <h2 className="text-xs">{project.date}</h2>
                                </div>
                            </div>

                            <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                                {t(project.descriptionKey)}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4 max-w-full">
                                {project.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-[11px] font-medium text-neutral-200 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm"
                                    >
                                        {tech}
                                    </span> 
                                ))}
                            </div>

                            <div className="flex items-center space-x-3 mt-5">
                                <Link href={project.liveDemo as any} target="_blank" rel="noopener noreferrer">
                                    <button className="w-32 h-10 bg-white text-neutral-900 text-xs flex items-center group justify-center space-x-2 cursor-pointer hover:bg-neutral-200 transition-colors">
                                        <span>Live Demo</span>
                                        <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 duration-200" />
                                    </button>
                                </Link>

                                {
                                    project.github &&
                                    <Link href={project.github as any} target="_blank" rel="noopener noreferrer">
                                        <button className="w-32 h-10 bg-transparent border border-neutral-100/70 text-neutral-100 text-xs flex items-center justify-center space-x-2 cursor-pointer hover:bg-white/10 transition-colors">
                                            <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                            <span>GitHub</span>
                                        </button>
                                    </Link>
                                }
                            </div>
                        </div>

                        <div className="absolute z-[2] w-220 h-130 rounded-full bg-black/80 blur-[140px] -bottom-46 -left-46 pointer-events-none" />
                        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/0 to-neutral-700/10 pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyProject;