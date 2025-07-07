import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'], // thin, normal, bold used in your project
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Base Apparel Coming Soon | Melissa Kipp',
    template: '%s | Base Apparel Challenge',
  },
  description:
    'A responsive coming soon page for Base Apparel, built as part of the Frontend Mentor challenge with clean design, email validation, and mobile-first layout.',
  openGraph: {
    title: 'Base Apparel Coming Soon | Frontend Mentor Challenge',
    description:
      'A responsive coming soon page for Base Apparel, built as part of the Frontend Mentor challenge with clean design, email validation, and mobile-first layout.',
    url: 'https://frontend-mentor-projects-rho.vercel.app/base-apparel-preview',
    siteName: 'Melissa Kipp | Web Developer',
    images: [
      {
        url: 'https://frontend-mentor-projects-rho.vercel.app/base-apparel-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Screenshot of Base Apparel Coming Soon page by Melissa Kipp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base Apparel Coming Soon | Frontend Mentor Challenge',
    description:
      'A responsive coming soon page for Base Apparel, built as part of the Frontend Mentor challenge with clean design, email validation, and mobile-first layout.',
    images: [
      'https://frontend-mentor-projects-rho.vercel.app/base-apparel-preview.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={josefin.className}>{children}</div>
  );
}
