// Header.tsx
"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-montserrat w-full px-6 py-4 bg-white text-pastel-turquoise bg-coral-blush flex flex-col lg:flex-row items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center hover:cursor-pointer">
        <Link href="/">
          <Image src="/images/logo.jpg" alt="Logo Image" width={150} height={0} className="lg:w-[200px]" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Links (visible in desktop, collapsible in mobile) */}
      <div className={`${
        isMenuOpen ? 'block' : 'hidden'
      } lg:flex lg:space-x-4 lg:ml-auto text-lg lg:text-3xl font-semibold mt-4 lg:mt-0 flex-col lg:flex-row space-y-4 lg:space-y-0`}>

        <Link href="/02_breathwork" className="hover:underline">BREATHWORK</Link>

        <div className="hover:cursor-pointer hover:underline flex flex-row">
          <a 
            href="https://www.eventbrite.co.uk/o/herts-breathwork-51009483293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>WHAT&apos;S ON</p>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3h7v7" />
            <path d="M5 12v7a2 2 0 0 0 2 2h7" />
            <polyline points="14 3 21 3 21 10" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>                    

        <p className="hover:cursor-pointer hover:underline">BLOG</p>
        <p className="hover:cursor-pointer hover:underline">CONTACT</p>
      </div>
      
    </div>
  );
}
