// Homepage-GetToKnow.tsx
"use client";
import Link from "next/link";
import FadeIn from "@/app/components/FadeIn";
import { facilitators } from "../facilitators/facilitatorsData";

export default function GetToKnow() {
  return (
    <div className="w-[85vw] mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-pastel-turquoise transform transition-opacity transition-transform duration-700 ease-in-out mb-8">
          <span className="text-xl md:text-2xl lg:text-4xl">Our Breathworkers...</span>
        </h1>
      </FadeIn>

      <FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitators.slice(0, 3).map((facilitator, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={facilitator.image}
                alt={`${facilitator.name}`}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold text-montserrat text-pastel-turquoise">
                {facilitator.name}
              </h2>
              <p className="text-gray-700 text-md mt-2">{facilitator.bio}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-8 text-center">
          <Link 
            href="/pages/facilitators"
            className="inline-block py-3 px-6 bg-pastel-turquoise text-white font-bold rounded-md hover:bg-coral-blush transition-colors duration-200">
              See All Facilitators            
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
