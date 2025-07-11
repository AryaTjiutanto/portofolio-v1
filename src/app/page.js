import HomePage from "./page/HomePage";

export const metadata = {
  title: 'Arya Tjiutanto 😎',
  description:
    'Portfolio and experiments of Arya Tjiutanto — full-stack web developer, React/Laravel enjoyer, and digital craftsman.',
  metadataBase: new URL('https://aryatjiutanto.my.id'),

  keywords: [
    'Arya Tjiutanto',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Laravel',
    'Tailwind CSS',
    'Portfolio',
    'Web Developer Indonesia',
  ],

  authors: [{ name: 'Arya Tjiutanto', url: 'https://aryatjiutanto.my.id' }],

  themeColor: '#0f172a',

  icons: {
    icon: '/icon.ico',
  },

  openGraph: {
    title: 'Arya Tjiutanto 😎',
    description:
      'Explore the work and experiments of Arya Tjiutanto, a full-stack web developer who loves React, Laravel, and clean code.',
    url: 'https://aryatjiutanto.my.id',
    siteName: 'Arya Tjiutanto Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'Arya Tjiutanto Portfolio Preview',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Arya Tjiutanto 😎',
    description: 'Full-stack web developer and code explorer. Welcome to my digital playground!',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'Arya Tjiutanto Logo',
      },
    ],
  },
};

export default function Home() {
  return (
    <HomePage/>
  )
}
