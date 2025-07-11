import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = ({colorThemeData}) => {
    return (
        <section className={`w-full min-h-screen flex items-center px-10 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-150 relative`}>
            {/* social media links */}
            <div className={`absolute w-5 h-fit bottom-0 md:top-20 md:right-10 z-10 space-y-20 hidden md:inline-block`}>
                <Link href="https://github.com/AryaTjiu" target="_blank" className={`md:rotate-90 ${colorThemeData.descriptionTextColor} ${colorThemeData.textHoverSlateColor} flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>
                    Github
                    </span>
                </Link>
                <Link href="https://www.linkedin.com/in/arya-tjiutanto-4969a5295/" target="_blank" className={`md:rotate-90 ${colorThemeData.descriptionTextColor} ${colorThemeData.textHoverSkyBlueColor} flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>
                        LinkedIn
                    </span>
                </Link>
                <Link href="https://wa.me/6285183105812" target="_blank" className={`md:rotate-90 ${colorThemeData.descriptionTextColor} ${colorThemeData.textHoverEmeraldColor} flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>
                        Whatsapp
                    </span>
                </Link>
                <Link href="mailto:aryatjiu.dev@gmail.com" className={`md:rotate-90 ${colorThemeData.descriptionTextColor} ${colorThemeData.textHoverRedColor} flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>
                        Email
                    </span>
                </Link>
            </div>

            {/* content */}
            <div className="z-10">
            <h1 className={`${colorThemeData.headingTextColor} text-[60px] md:text-[80px] xl:text-[130px] font-bold duration-150 leading-[1]`}>
                FullStack<br></br>
                Web Developer
            </h1>
            <p className={`text-lg md:text-xl xl:text-2xl ${colorThemeData.descriptionTextColor} mt-4 leading-[1.6] text-justify md:text-left`}>
                I'm an <span className="inline-flex items-center gap-1">
                Indonesian <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png" className="w-5"/>
                </span>   programmer with 3 years of experience in code, bugs, and caffeine. <br />
                
                I love{" "}
                <span className={`font-medium bg-gradient-to-r ${colorThemeData.gradientLaravel} text-transparent bg-clip-text`}>
                Laravel
                </span>,{" "}
                <span className={`font-medium bg-gradient-to-r ${colorThemeData.gradientTailwind} text-transparent bg-clip-text`}>
                TailwindCSS
                </span>,{" "}
                <span className={`font-medium bg-gradient-to-r ${colorThemeData.gradientReact} text-transparent bg-clip-text`}>
                React.js
                </span>, {" "}
                <span className={`font-medium bg-gradient-to-r ${colorThemeData.gradientNext} text-transparent bg-clip-text`}>
                Next.js
                </span>, badminton, and Chicken noodles.
            </p>
            </div>
        </section>
    )
}

export default HeroSection;