import type { Metadata } from "next";
import HomePage from "../page/HomePage";

const BASE_URL = "https://aryatjiutanto.my.id";

const SEO_CONTENT = {
  id: {
    title: "Arya Tjiutanto | Full Stack Web Developer & Software Engineering Student",
    description:
      "Mahasiswa Rekayasa Perangkat Lunak dan web developer Indonesia. Pelajari proyek, pengalaman, dan eksplorasi teknologi menggunakan React, Next.js, MERN stack, Laravel, dan TypeScript.",
    keywords: [
      "Arya Tjiutanto",
      "Web Developer Indonesia",
      "Software Engineering",
      "React Developer Indonesia",
      "Next.js Developer",
      "Laravel Developer",
      "Portfolio Web Developer",
      "Full Stack Developer Indonesia",
    ],
    ogLocale: "id_ID",
  },
  en: {
    title: "Arya Tjiutanto | Full Stack Web Developer & Software Engineering Student",
    description:
      "Explore Arya Tjiutanto's portfolio, an Indonesian web developer and Software Engineering student building modern web applications with React, Next.js, TypeScript, the MERN stack, and Laravel. Discover projects, technical skills, and development experience.",
    keywords: [
      "Arya Tjiutanto",
      "Software Developer Portfolio",
      "Web Developer Portfolio",
      "React Developer",
      "Next.js Developer",
      "Laravel Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "TALL Stack Developer",
    ],
    ogLocale: "en_US",
  },
} as const;

type Locale = keyof typeof SEO_CONTENT;

function isLocale(locale: string): locale is Locale {
  return locale in SEO_CONTENT;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = SEO_CONTENT[locale];
  const canonical = `${BASE_URL}/${locale}`;

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,

    authors: [
      {
        name: "Arya Tjiutanto",
        url: BASE_URL,
      },
    ],

    alternates: {
      canonical,
      languages: {
        id: `${BASE_URL}/id`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/en`,
      },
    },

    openGraph: {
      type: "website",
      title: content.title,
      description: content.description,
      url: canonical,
      siteName: "Arya Tjiutanto Portfolio",
      locale: content.ogLocale,
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
      images: [
        {
          url: "/portofolio.webp",
          width: 600,
          height: 600,
          alt: "Arya Tjiutanto - Web Developer Portfolio",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["/portofolio.webp"],
    },

    icons: {
      icon: "/icon.ico",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Home() {
  return <HomePage />;
}