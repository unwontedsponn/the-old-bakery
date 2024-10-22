import type { Metadata } from "next";
import "./globals.css"; // Ensure fonts are correctly imported through CSS
import { IBM_Plex_Sans } from 'next/font/google';

// Load the IBM Plex Sans font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Adjust weights as needed
  display: 'swap', // Ensures the text is visible while the font is loading
});

export const metadata: Metadata = {
  title: "Herts Breathwork",
  description: "Breathwork in Hitchin, Letchworth and surrounding areas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}