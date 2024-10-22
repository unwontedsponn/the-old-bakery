// GetToKnow.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import Card from "../components/Card";

export default function GetToKnow() {
  
  const textRef = useRef<HTMLHeadingElement>(null);
  const [textOpacity, setTextOpacity] = useState(0); // State for text opacity

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {        

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
    <div className="w-[85vw]">
      <h1 
        ref={textRef}
        className="text-4xl md:text-5xl lg:text-6xl font-normal text-pastel-turquoise transform transition-opacity transition-transform duration-700 ease-in-out mb-8"
        style={{ opacity: textOpacity, transform: `scale(${0.95 + textOpacity * 0.05})` }} // Added scaling effect
      >
        <span className='text-xl md:text-2xl lg:text-4xl'>Client stories </span>        
      </h1>
      
      <div className="group relative">
        <div className='flex overflow-x-auto overflow-y-hidden whitespace-nowrap space-x-4 scrollbar-hide'>
          <Card 
            imageSrc='/images/card1.jpg'
            subtitle='Personalized 1-on-1 Coaching'
            title='Private Classes'
            className="rounded-2xl card-hover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"  // Hover effect
          />
          <Card 
            imageSrc='/images/card2.jpg'
            subtitle='Dynamic Group Sessions'
            title='Group Classes'
            className="rounded-2xl card-hover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"  // Hover effect
          />
        <Card 
          imageSrc='/images/card4.jpg'
          subtitle='Shared Energy, Shared Growth'
          title='Group Classes'
          className="rounded-2xl card-hover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"  // Hover effect
        />  
        <Card 
          imageSrc='/images/card5.jpg'
          subtitle='Empowering Group Experience'
          title='Group Classes'
          className="rounded-2xl card-hover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"  // Hover effect
        />  
        <Card 
          imageSrc='/images/card6.jpg'
          subtitle='Community Sessions'
          title='Group Classes'
          className="rounded-2xl card-hover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"  // Hover effect
        />  
        <Card 
          imageSrc='/images/card7.jpg'
          subtitle='Supportive Group Environment'
          title='Group Classes'
          className="rounded-2xl card-hover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"  // Hover effect
        />  
        </div>
      </div>
    </div>
  );
}
