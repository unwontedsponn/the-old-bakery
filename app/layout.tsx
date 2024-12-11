import type { Metadata } from "next";
import "./globals.css"; // Ensure fonts are correctly imported through CSS
import { Josefin_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

// Load the Josefin Sans font from Google Fonts
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Adjust weights as needed
  display: 'swap', // Ensures the text is visible while the font is loading
});

export const metadata: Metadata = {
  title: "The Old Bakery",
  description: "The Old Bakery Meeting House Shefford",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
