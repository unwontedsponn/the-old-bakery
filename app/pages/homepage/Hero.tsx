"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(100); // State to control video width percentage
  const [fadeIn, setFadeIn] = useState(false); // State to trigger fade-in animation

  useEffect(() => {
    let animationFrameId: number;

    // Handle scroll to adjust video width
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();

          // Calculate how much the video should shrink based on scroll position
          if (rect.top < 0) {
            const multiplier = 1.2;
            const shrinkFactor = Math.min(1, (Math.abs(rect.top) / rect.height) * multiplier);
            const newWidth = 100 - shrinkFactor * 15;
            setImageWidth(Math.max(newWidth));
          } else setImageWidth(100); // Reset to full width when scrolled back up
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger fade-in animation after component mounts
    setTimeout(() => {
      setFadeIn(true);
    }, 200); // Adjust delay as needed

    // Cleanup listener and animation frame on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* This outer div sets the full width and height */}
      <div
        className="w-full h-[75vh] md:h-[85vh] lg:h-[100vh] overflow-hidden relative"
        ref={imageRef}
        style={{ width: `${imageWidth}%`, transition: "width 0.3s ease-out" }} // Apply smooth transition
      >
        <Image
          src="/images2/lounge1.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center text-white text-6xl lg:text-8xl font-buongiorno transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          The Old Bakery
        </div>
      </div>
      <div className="w-full text-center py-10"></div>
    </div>
  );
}
