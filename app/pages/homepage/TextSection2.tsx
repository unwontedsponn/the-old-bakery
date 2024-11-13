import Image from 'next/image';
import FadeIn from '@/app/components/FadeIn';

export default function TextSection2() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-[85vw] bg-white py-16 lg:py-32 gap-8">           

      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-4xl p-6 bg-white rounded-2xl flex flex-col justify-center space-y-6">
        <h1 className="text-3xl lg:text-4xl text-pastel-turquoise text-center lg:text-left">          
          What is Transformational Breath®?
        </h1>        
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Transformational Breath® was developed over four decades by Dr J Kravitz. It&apos;s an open-mouthed, conscious breathing technique, with no pauses, which is gentle yet powerful. If you&apos;re familiar with Wim Hof, Rebirthing or Holotropic breathwork you&apos;ll be interested to know that Transformational Breath® has expanded beyond these modalities, integrating various insights from Kundalini Yoga, breath analysis, sound healing, and acupressure - alongside a spiritual framework that&apos;s accessible to all. Personal coaching is also a valuable aspect of the session.
        </p>
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          In addition to TBF being the go-to breath school for healthcare professionals worldwide, all graduates are accredited by the International Coaching Federation.
        </p>        

        <button className="self-center lg:self-start w-auto rounded-full px-6 py-3 bg-pastel-turquoise text-white hover:bg-coral-blush hover:border-pastel-turquoise text-sm lg:text-base transition-colors duration-300">
          Learn more
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
