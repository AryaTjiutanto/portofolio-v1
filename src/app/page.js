import HomePage from "./page/HomePage";

export const metadata = {
  title: 'Arya Tjiutanto 😎',
  description: 'Portfolio and experiments of Arya Tjiutanto — full-stack web developer, React/Laravel enjoyer, and digital craftsman.',
  metadataBase: new URL('https://your-domain.com'),

  keywords: ['Arya Tjiutanto', 'Full-Stack Developer', 'React', 'Next.js', 'Laravel', 'Tailwind CSS', 'Portfolio'],
  authors: [{ name: 'Arya Tjiutanto', url: 'https://your-domain.com' }],

  themeColor: '#0f172a',

  icons: {
    icon: '/icon.ico',
  },

  openGraph: {
    title: 'Arya Tjiutanto 😎',
    description: 'Explore the work and experiments of Arya Tjiutanto, a full-stack web developer who loves React, Laravel, and clean code.',
    url: 'https://your-domain.com',
    siteName: 'Arya Tjiutanto Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arya Tjiutanto Portfolio Preview',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Arya Tjiutanto 😎',
    description: 'Full-stack web developer and code explorer. Welcome to my digital playground!',
    images: ['/og-image.jpg'],
    creator: '@yourTwitterHandle',
  },
};

export default function Home() {
  return (
    <HomePage/>
  )
}
