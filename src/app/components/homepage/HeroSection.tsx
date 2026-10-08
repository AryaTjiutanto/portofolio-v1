import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className={`w-full min-h-screen flex items-center px-10 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-150 relative`}>
            {/* social media links */}
            <div className={`absolute w-5 h-fit bottom-0 md:top-20 md:right-10 z-10 space-y-20 hidden md:inline-block`}>
                <Link href="https://github.com/AryaTjiutanto" target="_blank" className={`md:rotate-90 text-neutral-200 hover:text-slate-400 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>
                        Github
                    </span>
                </Link>
                <Link href="https://www.linkedin.com/in/arya-tjiutanto-4969a5295/" target="_blank" className={`md:rotate-90 text-neutral-200 hover:text-sky-400 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>
                        LinkedIn
                    </span>
                </Link>
                <Link href="https://wa.me/6285183105812" target="_blank" className={`md:rotate-90 text-neutral-200 hover:text-emerald-500 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>
                        Whatsapp
                    </span>
                </Link>
                <Link href="mailto:aryatjiutanto.dev@gmail.com" className={`md:rotate-90 text-neutral-200 hover:text-red-500 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>
                        Email
                    </span>
                </Link>
            </div>

            {/* content */}
            <div className="z-10">
                <h1 className={`text-neutral-100 text-[60px] md:text-[80px] xl:text-[130px] font-bold duration-150 leading-[1]`}>
                    FullStack<br></br>
                    Web Developer
                </h1>
                <div>
                    <div className={`text-lg md:text-xl xl:text-2xl text-neutral-200 mt-4 leading-[1.6] text-justify md:text-left`}>
                        I'm an {" "}
                        <span className="inline-flex items-center gap-1"> {" "}
                            Indonesian {" "}
                            <div className="w-5 h-5 mr-2 rounded overflow-hidden flex flex-col">
                                <div className="h-[50%] w-full bg-red-500"></div>
                                <div className="h-[50%] w-full bg-white"></div>
                            </div>
                        </span> {" "}
                        programmer who loves building things with code, hates dealing with bugs, and is still figuring out how to fix them.
                    </div>
                    <div className={`text-lg md:text-xl xl:text-2xl text-neutral-200 mt-4 leading-[1.6] text-justify md:text-left`}>
                        I like{" "}
                        <span className={`font-medium bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text`}>
                            Laravel
                        </span>,{" "}
                        <span className={`font-medium bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text`}>
                            MERN
                        </span> , badminton, and Chicken noodles.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;