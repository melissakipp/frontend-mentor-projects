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
  description: "A collection of Frontend Mentor challenges implemented with Next.js by Melissa Kipp",
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
