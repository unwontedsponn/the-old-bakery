"use client";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [videoWidth, setVideoWidth] = useState(100); // State to control video width percentage
  const [textOpacity, setTextOpacity] = useState(0); // State for text opacity

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (videoRef.current) {
          const rect = videoRef.current.getBoundingClientRect();

          // Calculate how much the video should shrink based on scroll position
          if (rect.top < 0) {
            const shrinkFactor = Math.min(1, Math.abs(rect.top) / rect.height);
            const newWidth = 100 - shrinkFactor * 20; // Shrinks to 80% width
            setVideoWidth(newWidth);
          } else {
            setVideoWidth(100); // Reset to full width when scrolled back up
          }
        }

        if (textRef.current) {
          const rect = textRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Start opacity change when the text enters the viewport and fully opaque when it reaches the middle
          const fadeStart = windowHeight; // Start increasing opacity when the element is at the bottom of the viewport
          const fadeEnd = windowHeight / 2; // Fully opaque when the element reaches the middle of the viewport

          // Calculate the opacity based on the element's position relative to the viewport
          const opacityFactor = Math.min(1, Math.max(0, 1 - (rect.top - fadeEnd) / (fadeStart - fadeEnd)));

          setTextOpacity(opacityFactor); // Update text opacity
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener and animation frame on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-coral-blush">
      {/* This outer div sets the full width and height */}
      <div
        className="w-full h-[75vh] md:h-[85vh] lg:h-[95vh] overflow-hidden relative"
        ref={videoRef}
        style={{ width: `${videoWidth}%`, transition: "width 0.1s ease-out" }} // Apply smooth transition
      >
        <video
          src="/videos/yoga.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="w-full text-center py-10">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-pastel-turquoise tracking-widest"
          style={{ opacity: textOpacity, transition: "opacity 0.3s ease-in-out" }}
        >
          HERTS BREATHWORK
        </h1>
      </div>
    </div>
  );
}