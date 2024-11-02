import Image from 'next/image';
import FadeIn from '@/app/components/FadeIn';

export default function WhyBreathwork() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-[85vw] bg-white py-16 lg:py-32 gap-8">           

      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-4xl p-6 bg-white rounded-2xl flex flex-col justify-center space-y-6">
        <h1 className="text-3xl lg:text-4xl text-pastel-turquoise text-center lg:text-left">          
          Why Breathwork
        </h1>
        <h2 className="text-lg lg:text-xl text-center lg:text-left text-gray-700">
          Inspiring, down-to-earth &amp; playful breathwork sessions that benefit your entire wellbeing (body, mind &amp; soul)
        </h2>
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Did you know we take over 20,000 breaths a day? Yet most of us have restricted breathing patterns. When we&apos;re not breathing to our full potential, we&apos;re also not living to our full potential... since breath is quite literally life.
        </p>
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Let&apos;s get back to that perfect open breath you were born with, so you can ease any tension or stress, release emotional baggage, increase your clarity and focus, connect more deeply, tune into your intuition and ultimately feel lighter, brighter, and fully alive!
        </p>
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Change the way you breathe, change the way you live!
        </p>

        <button className="self-center lg:self-start w-auto rounded-full px-6 py-3 bg-pastel-turquoise text-white hover:bg-coral-blush hover:border-pastel-turquoise text-sm lg:text-base transition-colors duration-300">
          Tell Me More
        </button>
      </div>

      {/* Image Section */}      
      <div className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden rounded-2xl shadow-lg">
        <Image 
          src="/images/welcome.jpg"
          alt="Welcome"
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
          width={600}  // Wider for better balance in the layout
          height={400} 
          className="w-[90vw] lg:w-[600px] rounded-2xl shadow-lg" // Add shadow for consistency with other elements
        />
      </div> 

    </div>
  );
}
