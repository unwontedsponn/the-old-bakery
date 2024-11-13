import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/app/components/FadeIn';

export default function TextSection3() {
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
          Is Transformational Breath® suitable for me?
        </h1>        
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Herts Breathwork facilitators meet with people of all ages, who come for a variety of reasons. We work with students and professionals to alleviate stress, mums-to-be and parents in need of some R&R, as well as men and women in their senior years. Some people come with a specific trauma or emotional issue that they want to start releasing and moving through, while others have a medical condition they want to manage more effectively.
        </p>
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
          Common reasons that people get in touch are listed above, but if you need support with something not shown please get in touch before booking so we can discuss if Transformational Breath® is the right approach for you. In the vast majority of cases it is safe and beneficial to go ahead. Of course, you are very welcome to book a session purely out of curiosity. With so many potential benefits, who wouldn’t want to discover this life-affirming practice.
        </p>        

        <Link href='/pages/book'>
          <button className="self-center lg:self-start w-auto rounded-full px-6 py-3 bg-pastel-turquoise text-white hover:bg-coral-blush hover:border-pastel-turquoise text-sm lg:text-base transition-colors duration-300">
            Book now
          </button>
        </Link>        

      </div>

    </div>
  );
}
