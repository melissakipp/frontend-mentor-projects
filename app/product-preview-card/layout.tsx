import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Montserrat, Fraunces } from 'next/font/google';
import './globals.css';

// Primary font - Montserrat
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Normal, Medium, Bold weights used in the design
  style: ['normal'],
  display: 'swap',
  variable: '--font-montserrat', // CSS variable for the font
})

// Secondary font - Fraunces (for headings)
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700'], // Bold weight for product titles
  style: ['normal'],
  display: 'swap',
  variable: '--font-fraunces', // CSS variable for the font
})

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Product Preview Card | Frontend Mentor Challenge',
  description:
    'A clean, responsive product preview card component built with Next.js and TypeScript as part of the Frontend Mentor challenge.',
  keywords: ['Product Preview Card', 'Frontend Mentor', 'Next.js', 'Responsive Component', 'UI Challenge'],
  authors: [{ name: 'Melissa Kipp' }],
  creator: 'Melissa Kipp',
  openGraph: {
    title: 'Product Preview Card | Frontend Mentor Challenge',
    description:
      'A clean, responsive product preview card component built with Next.js and TypeScript as part of the Frontend Mentor challenge.',
    url: 'https://frontend-mentor-projects-rho.vercel.app/product-preview-card',
    siteName: 'Product Preview Card',
    images: [
      {
        url: 'https://frontend-mentor-projects-rho.vercel.app/product-preview-card/preview.png', // ensure this image exists
        width: 1200,
        height: 630,
        alt: 'Screenshot of Product Preview Card Frontend Mentor Challenge by Melissa Kipp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Preview Card | Frontend Mentor Challenge',
    description:
      'A clean, responsive product preview card component built with Next.js and TypeScript as part of the Frontend Mentor challenge.',
    images: ['https://frontend-mentor-projects-rho.vercel.app/product-preview-card/preview.png'], // ensure this image exists
    creator: '@_melissakipp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function OfficeliteLayout({ children }: LayoutProps) {
  return (
    <div className={montserrat.className}>

      {children}
    </div>
  );
}