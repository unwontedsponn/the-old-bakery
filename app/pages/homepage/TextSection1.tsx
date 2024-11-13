import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/app/components/FadeIn';

export default function TextSection1() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-[85vw] bg-white py-16 lg:py-32 gap-8">

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

      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-4xl p-6 bg-white rounded-2xl flex flex-col justify-center space-y-6">
        <h1 className="text-3xl lg:text-4xl text-pastel-turquoise text-center lg:text-left">          
          When was the last time you felt your best?
        </h1>        
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Living well all starts with your physical and mental health. We know this and yet it can be difficult to prioritise healing our ailments and emotions from the inside out. But what if I told you that feeling better doesn&apos;'t have to be complicated? That change is possible and the answer is quite literally right under your nose. It&apos;'s called Transformational Breath®, a powerful therapy that addresses root causes of issues by helping you to breathe better.
        </p>
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
        Get to know our expert team of facilitators, all trained by the world-leading Transformational Breath® Foundation (TBF), a member of the Global Professional Breathwork Alliance.
        </p>        

        <Link href='pages/facilitators'>
          <button className="self-center lg:self-start w-auto rounded-full px-6 py-3 bg-pastel-turquoise text-white hover:bg-coral-blush hover:border-pastel-turquoise text-sm lg:text-base transition-colors duration-300">
            Meet the team
          </button>
        </Link>        
      </div>

    </div>
  );
}
