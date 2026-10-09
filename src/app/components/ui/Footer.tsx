import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={`w-full px-6 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32 z-[2]`}>
            <div className="w-full flex flex-col space-y-7">
                <h1 className={`w-full text-neutral-100 text-5xl xl:text-7xl 2xl:text-8xl font-semibold`}>
                    I'm always open to conversations — even if it’s just a random story<br />
                </h1>
                <Link href="https://wa.me/6285183105812" className={`text-neutral-100 text-red-500 hover:text-indigo-500 underline text-4xl xl:text-6xl font-bold duration-100`}>
                    Let’s chat on WhatsApp
                </Link>
            </div>
            <div className="flex flex-wrap md:items-center md:space-x-10 mt-14 md:mt-20 gap-3">
                <Link href="https://github.com/AryaTjiutanto" target="_blank" className={`text-lg text-neutral-200 hover:text-slate-400 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>
                    Github
                    </span>
                </Link>
                <Link href="https://www.linkedin.com/in/arya-tjiutanto-4969a5295/" target="_blank" className={`text-lg text-neutral-200 hover:text-sky-400 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>
                    LinkedIn
                    </span>
                </Link>
                <Link href="https://wa.me/6285183105812" target="_blank" className={`text-lg text-neutral-200 hover:text-emerald-500 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>
                    Whatsapp
                    </span>
                </Link>
                <Link href="mailto:aryatjiutanto.dev@gmail.com" className={`text-lg text-neutral-200 hover:text-red-500 flex items-center space-x-1 duration-150`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>
                    Email
                    </span>
                </Link>
                <Link target="_blank" href="https://www.fiverr.com/antelocode" className={`text-lg text-neutral-200 hover:text-emerald-500 flex items-center space-x-1 duration-150`}>
                    <span>
                        Fiverr
                    </span>
                </Link>
            </div>
            <div className={`text-neutral-200 mt-8 md:mt-20`}>
               I also have a <Link target="_blank" href={'https://www.fiverr.com/antelocode'} className="underline hover:text-green-500 duration-100">Fiverr</Link> account — if you'd like a safer and more secure way to work together, feel free to reach out to me there!
            </div>
            <div className={`text-neutral-200 mt-5`}>
                &copy; {new Date().getFullYear()} Arya Tjiutanto. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;