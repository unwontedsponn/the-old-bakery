"use client"
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoWidth, setVideoWidth] = useState(100); // State to control video width percentage
  
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      // Use requestAnimationFrame to handle updates
      animationFrameId = requestAnimationFrame(() => {
        if (videoRef.current) {
          // Get the distance from the top of the video to the top of the viewport
          const rect = videoRef.current.getBoundingClientRect();
          
          // Calculate how much the video should shrink based on scroll position
          if (rect.top < 0) {
            const shrinkFactor = Math.min(1, Math.abs(rect.top) / rect.height);
            const newWidth = 100 - shrinkFactor * 20; // Shrinks to 80% width
            setVideoWidth(newWidth);
          } else setVideoWidth(100); // Reset to full width when scrolled back up
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener and animation frame on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-coral-blush">
      {/* This outer div sets the full width and height */}
      <div
        className="w-full h-[75vh] md:h-[85vh] lg:h-[95vh] overflow-hidden relative"
        ref={videoRef}
        style={{ width: `${videoWidth}%`, transition: 'width 0.1s ease-out' }} // Apply smooth transition
      >
        <video
          src="/videos/yoga.mp4"           
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // Optional: Improves performance on mobile devices
        ></video>
      </div>
      <div className="w-full text-center py-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-pastel-turquoise tracking-widest">
          HERTS BREATHWORK
        </h1>
      </div>
    </div>
  );
}