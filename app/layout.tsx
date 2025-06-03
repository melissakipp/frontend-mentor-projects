import type { Metadata } from "next";
import { Overpass } from 'next/font/google';
import "./globals.css";

// Load and configure the Overpass font
const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Melissa Kipp | Frontend Mentor Challenges",
    template: "Melissa Kipp | %s",
  },
  description: "Explore my web development projects, UX/UI case studies, and digital design work.",
  openGraph: {
    title: "Biweekly Frontend Mentor Challenges",
    description: "Explore my web development projects, UX/UI case studies, and digital design work.",
    url: "https://frontend-mentor-projects-rho.vercel.app/",
    siteName: "Melissa Kipp | Web Developer",
    images: [
      {
        url: "https://frontend-mentor-projects-rho.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Melissa's Frontend Mentor challenge website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
