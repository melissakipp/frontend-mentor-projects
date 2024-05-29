import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Melissa Kipp | Frontend Challenges",
    template: "Melissa Kipp | %s",
  },
  description: "Frontend Mentor Challenge by Melissa Kipp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
