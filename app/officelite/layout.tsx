import { ReactNode } from 'react';
import type { Metadata } from 'next';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Officelite - Coming Soon Project',
  description: 'A clean, responsive coming soon landing page built with Next.js and TypeScript. Includes countdown and signup form for Officelite launch.',
  keywords: ['Officelite', 'Frontend Mentor', 'Next.js', 'Coming Soon', 'Countdown Timer', 'Signup Form'],
  authors: [{ name: 'Melissa Kipp' }],
  creator: 'Melissa Kipp',
  openGraph: {
    title: 'Officelite - Coming Soon Project',
    description: 'A clean, responsive coming soon landing page built with Next.js and TypeScript.',
    url: 'https://frontend-mentor-projects-rho.vercel.app/officelite/officelite-preview.png', // replace with your actual URL
    siteName: 'Officelite',
    images: [
      {
        url: 'https://frontend-mentor-projects-rho.vercel.app/officelite/officelite-preview.png', // replace with your OG image URL
        width: 1200,
        height: 630,
        alt: 'Officelite Coming Soon Landing Page Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Officelite - Coming Soon Project',
    description: 'A clean, responsive coming soon landing page built with Next.js and TypeScript.',
    images: ['https://frontend-mentor-projects-rho.vercel.app/officelite/officelite-preview.png'], // replace with your OG image URL
    creator: '@_melissakipp', // replace with your handle if desired
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
    <>
      {children}
    </>
  );
}