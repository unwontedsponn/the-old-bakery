// components/FadeIn.tsx
"use client";
import { useState, useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  duration?: number; // Duration in milliseconds
  delay?: number;    // Delay in milliseconds
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 700, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className="fade-in"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-in-out ${delay}ms, transform ${duration}ms ease-in-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
export default FadeIn;