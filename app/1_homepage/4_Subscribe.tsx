// Subscribe.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';

export default function Subscribe() {
  const subscribeRef = useRef<HTMLDivElement>(null);
  const [subscribeWidth, setSubscribeWidth] = useState(85); // Start at 85vw
  const [isRounded, setIsRounded] = useState(true); // State for rounded corners

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (subscribeRef.current) {
          const rect = subscribeRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calculate when to start expanding - after a third of the section is visible
          const startScrollThreshold = viewportHeight - rect.height / 3;
          const endScrollThreshold = viewportHeight - rect.height;

          if (rect.top < startScrollThreshold && rect.top > endScrollThreshold) {
            const expandFactor = Math.min(1, (startScrollThreshold - rect.top) / (startScrollThreshold / 3));
            const newWidth = 85 + expandFactor * 15; // Expanding from 85vw to 100vw
            setSubscribeWidth(Math.min(newWidth, 100));
            
            // Toggle rounded corners based on width
            setIsRounded(newWidth < 100);
          } else if (rect.top >= startScrollThreshold) {
            setSubscribeWidth(85); // Reset to 85vw when scrolled back up
            setIsRounded(true); // Ensure corners are rounded when reset
          }
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
    <div
      ref={subscribeRef}
      className={`relative h-screen overflow-hidden ${isRounded ? 'rounded-2xl' : ''}`} // Dynamic rounded corners
      style={{ width: `${subscribeWidth}vw`, transition: "width 0.3s ease-out" }} // Smooth transition
    >
      <Image 
        src="/images/breathe/subscribe.jpg" 
        alt="Subscribe Background" 
        layout="fill"
        objectFit="cover" 
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-8">
        <div className={`bg-[rgba(255,255,255,0.1)] p-10 ${isRounded ? 'rounded-2xl' : ''}`}>
          <h1 className="text-4xl font-bold mb-4">Subscribe for a free breathwork guide</h1>
          <p className="mb-4">Be the first to hear about upcoming events, and receive a free guide covering:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Conscious connected breath</li>
            <li>Calming vegal nerve breathing</li>
            <li>20 ways to boost your mood</li>          
          </ul>
          <p className="mb-4">You'll also get discounts and news on upcoming events.</p>
          <div className="flex flex-col">
            <input 
              type="text" 
              placeholder="Enter your email here*" 
              className="p-2 mb-4 rounded border border-white text-black"
            />
            <button className="bg-pastel-turquoise text-white px-4 py-2 rounded hover:bg-black">
              Sign up
            </button>
          </div>
        </div>        
      </div>
    </div>
  );
}
