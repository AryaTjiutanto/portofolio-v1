"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const languages = [
    {
        locale: "en",
        name: "English (US)",
        flag: "/assets/flags/unitedState.webp",
    },
    {
        locale: "id",
        name: "Indonesia",
        flag: "/assets/flags/indonesia.webp",
    },
] as const;

const LanguageSwitcher = () => {
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const switcherRef = useRef<HTMLDivElement>(null);

    const activeLanguage = languages.find(
        (language) => language.locale === locale
    ) ?? languages[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                switcherRef.current &&
                !switcherRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
        <div className="relative text-neutral-100 group" ref={switcherRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row-reverse sm:flex-row items-center gap-2 cursor-pointer"
                aria-label="Select language"
                aria-expanded={isOpen}
            >
                <div className="relative w-7 h-7 rounded-full overflow-hidden">
                    <Image
                        src={activeLanguage.flag}
                        alt={`${activeLanguage.name} flag`}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex items-center space-x-1">
                    <span className="text-sm">
                        {activeLanguage.locale.toUpperCase()}
                    </span>
                    <div className="hidden sm:flex">
                        <FontAwesomeIcon icon={faChevronDown} className={`text-[7px] text-neutral-400 ${isOpen ? "rotate-180" : ""} duration-100`} />
                    </div>
                </div>
            </button>

            {isOpen && (
                <div className="absolute left-auto right-0 sm:right-auto sm:left-0 top-full mt-2 w-54 rounded-lg bg-neutral-900 border border-neutral-700 shadow-lg overflow-hidden z-50">
                    {languages.map((language) => (
                        <Link
                            key={language.locale}
                            href="/"
                            locale={language.locale}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-800 ${locale === language.locale
                                ? "bg-neutral-800"
                                : ""
                                }`}
                        >
                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                <Image
                                    src={language.flag}
                                    alt={`${language.name} flag`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <span className="text-sm">{language.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;