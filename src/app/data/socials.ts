import { faGithub, faLinkedin, faWhatsapp, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

type Social = {
    icon : IconDefinition,
    iconProvider : "fontawesome" | "custom",
    link : string,
    title : string,
    shortDescription : string
    textHoverClass : string,
}

export const socials : Social[] = [
    {
        icon : faGithub,
        iconProvider : "fontawesome",
        link : "https://github.com/AryaTjiutanto",
        title : "Github",
        shortDescription : "AryaTjiutanto",
        textHoverClass : "hover:text-slate-400",
    },
    {
        icon : faLinkedin,
        iconProvider : "fontawesome",
        link : "https://www.linkedin.com/in/arya-tjiutanto-4969a5295/",
        title : "LinkedIn",
        shortDescription : "Arya Tjiutanto",
        textHoverClass : "hover:text-sky-400"
    },
    {
        icon : faWhatsapp,
        iconProvider : "fontawesome",
        link : "https://wa.me/6285183105812",
        title : "Whatsapp",
        shortDescription : "lets talk with me💪",
        textHoverClass : "hover:text-emerald-500"
    },
    {
        icon : faEnvelope,
        iconProvider : "fontawesome",
        link : "aryatjiutanto.dev@gmail.com",
        title : "Email",
        shortDescription : "aryatjiutanto.dev@gmail.com",
        textHoverClass : "hover:text-red-500"
    }
]