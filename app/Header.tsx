"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full bg-white text-pastel-turquoise flex flex-col items-center px-6 lg:px-12 py-4">
      {/* Top Header Line with Logo and Nav Links */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center hover:cursor-pointer">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Logo Image"
              width={150}
              height={0}
              className="lg:w-[200px]"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 lg:ml-auto text-lg lg:text-3xl font-semibold mt-4 lg:mt-0 flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-4`}
        >
          <Link
            href="/pages/book"
            className={`hover:underline font-light ${
              pathname === "/pages/book" ? "underline text-pastel-turquoise" : ""
            }`}
          >
            Book
          </Link>
          <Link
            href="/pages/facilitators"
            className={`hover:underline font-light ${
              pathname === "/pages/facilitators"
                ? "underline text-pastel-turquoise"
                : ""
            }`}
          >
            Facilitators
          </Link>
          <Link
            href="/pages/articles"
            className={`hover:underline font-light ${
              pathname === "/pages/articles"
                ? "underline text-pastel-turquoise"
                : ""
            }`}
          >
            Articles
          </Link>
          <Link
            href="/pages/contact"
            className={`hover:underline font-light ${
              pathname === "/pages/contact"
                ? "underline text-pastel-turquoise"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Accolade Logos */}
      <div className="flex items-center justify-center space-x-8 mt-6 lg:mt-0">
        <Image
          src="/images/logos/tbf.png"
          alt="Accolade Logo 1"
          width={80}
          height={0}
          className="w-[80px] h-auto lg:w-[100px]"
        />
        <Image
          src="/images/logos/icf.png"
          alt="Accolade Logo 2"
          width={80}
          height={0}
          className="w-[80px] h-auto lg:w-[100px]"
        />
        <Image
          src="/images/logos/gpba.png"
          alt="Accolade Logo 3"
          width={80}
          height={0}
          className="w-[80px] h-auto lg:w-[100px]"
        />
      </div>
    </header>
  );
}
