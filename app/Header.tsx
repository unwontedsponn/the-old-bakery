"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use this hook for pathname in app router

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // Get current pathname

  // Delay rendering until client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering before mounting
  }

  return (
    <div className="w-full px-6 lg:px-12 py-4 bg-white text-pastel-turquoise flex flex-col lg:flex-row items-center justify-between">
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

      {/* Links (visible in desktop, collapsible in mobile) */}
      <div
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
      </div>
    </div>
  );
}
