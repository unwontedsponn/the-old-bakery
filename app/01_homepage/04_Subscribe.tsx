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
      className={`relative h-screen overflow-hidden transition-all duration-500 ${isRounded ? 'rounded-2xl' : ''}`} // Smoother rounded corner transition
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-8">  {/* Reduced opacity for softer effect */}
        <div className={`bg-[rgba(255,255,255,0.1)] p-10 ${isRounded ? 'rounded-2xl' : ''}`}>
          <h1 className="text-4xl lg:text-5xl mb-4 text-pastel-turquoise">Subscribe for a free breathwork guide</h1>
          <p className="mb-4 text-lg lg:text-xl text-gray-200">Be the first to hear about upcoming events, and receive a free guide covering:</p>
          <ul className="list-disc list-inside mb-4 text-gray-100 text-left">
            <li>Conscious connected breath</li>
            <li>Calming vagus nerve breathing</li>
            <li>20 ways to boost your mood</li>          
          </ul>
          <p className="mb-4 text-lg lg:text-xl text-gray-200">You&apos;ll also get discounts and news on upcoming events.</p>
          <div className="flex flex-col">
            <input 
              type="email" 
              placeholder="Enter your email here*" 
              className="p-3 mb-4 rounded border border-white text-black"
            />
            <button className="mx-auto w-auto bg-pastel-turquoise text-white py-3 px-6 rounded-full hover:bg-coral-blush hover:border-white transition-all duration-300">
              Sign up
            </button>
          </div>
        </div>        
      </div>
    </div>
  );
}
