import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './styles/globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'GitHub User Search App | Melissa Kipp',
    template: '%s | GitHub User Search App',
  },
  description:
    'Search for GitHub users by username, view their profile data, and switch between light and dark themes in this Frontend Mentor challenge.',
  openGraph: {
    title: 'GitHub User Search App | Frontend Mentor Challenge',
    description:
      'Search for GitHub users by username, view their profile data, and switch between light and dark themes in this Frontend Mentor challenge.',
    url: 'https://frontend-mentor-projects-rho.vercel.app/github-search-preview',
    siteName: 'Melissa Kipp | Web Developer',
    images: [
      {
        url: 'https://frontend-mentor-projects-rho.vercel.app/github-search-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Screenshot of GitHub User Search App by Melissa Kipp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub User Search App | Frontend Mentor Challenge',
    description:
      'Search for GitHub users by username, view their profile data, and switch between light and dark themes in this Frontend Mentor challenge.',
    images: [
      'https://frontend-mentor-projects-rho.vercel.app/github-search-preview.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={spaceMono.className}>{children}</div>
  );
}
