import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { socials } from "../../data/socials";

const HeroSection = () => {
    const [isOffcanvasOpenned, setIsOffcanvasOpenned] = useState<Boolean>(false);

    const openOffcanvas = () => {
        setIsOffcanvasOpenned(true);
    }

    const closeOffcanvas = () => {
        setIsOffcanvasOpenned(false);
    }

    return (
        <section className={`w-full min-h-screen flex items-center px-6 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-150 relative`}>
            {/* social media links */}
            <div className={`absolute w-5 h-fit bottom-0 md:top-20 md:right-10 z-10 space-y-20 hidden md:inline-block`}>
                {socials.map((social) => (
                    <Link href={social.link as any} target="_blank" className={`md:rotate-90 text-neutral-200 ${social.textHoverClass} flex items-center space-x-1 duration-150`} key={`social-${social.title}`}>
                        <FontAwesomeIcon icon={social.icon} />
                        <span>
                            {social.title}
                        </span>
                    </Link>
                ))}
            </div>

            {/* offcanvas */}
            <button className="w-12 h-12 rounded border z-5 border-neutral-100 absolute top-8 left-8 sm:hidden" onClick={openOffcanvas}>
                <FontAwesomeIcon icon={faBars} className="text-neutral-100" />
            </button>

            <section className={`z-20 w-[75%] h-screen bg-black top-0 fixed border-r border-neutral-700 flex flex-col sm:hidden py-8 p-6 text-neutral-200 ${isOffcanvasOpenned ? "left-0" : "-left-full"} duration-100`}>
                <div className="w-full space-y-4">
                    {
                        socials.map((social) => (
                            <Link href={social.link as any} target="_blank" className="w-full flex items-center space-x-3" key={`mobile-social-${social.title}`}>
                                <div className="w-11 h-11 rounded border border-neutral-300 grid place-content-center">
                                    <FontAwesomeIcon icon={social.icon} className="text-neutral-100 text-xl" />
                                </div>
                                <div className="">
                                    <h1 className="font-semibold">
                                        {social.title}
                                    </h1>
                                    <h2 className="text-xs text-neutral-400">
                                        {social.shortDescription}
                                    </h2>
                                </div>
                            </Link>
                        ))
                    }
                </div>

                <button className={`w-11 h-11 rounded border border-neutral-600 bg-black absolute top-7 -right-16 ${isOffcanvasOpenned ? "block" : "hidden"}`} onClick={closeOffcanvas}>
                    <FontAwesomeIcon icon={faX} className="text-neutral-100" />
                </button>
            </section>
            <section className={`"z-19 w-screen h-screen bg-black/30 left-0 top-0 fixed sm:hidden ${isOffcanvasOpenned ? "" : "hidden"}"`} onClick={closeOffcanvas}></section>

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
        </section >
    )
}

export default HeroSection;