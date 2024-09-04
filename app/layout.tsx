import type { Metadata } from "next";
import "./globals.css"; // Ensure fonts are correctly imported through CSS

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
      <body>{children}</body>
    </html>
  );
}