import Image from 'next/image';
import FadeIn from '@/app/components/FadeIn';

export default function TextSection4() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-[85vw] bg-white py-16 lg:py-32 gap-8">           

      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-4xl p-6 bg-white rounded-2xl flex flex-col justify-center space-y-6">
        <h1 className="text-3xl lg:text-4xl text-pastel-turquoise text-center lg:text-left">          
            Moonbird handheld breath coach
        </h1>        
        <p className="text-sm lg:text-base text-center lg:text-left text-gray-600">
            What could be simpler than guided breathing exercises in the palm of your hand? Enter, Moonbird. Select an exercise, place your thumb on the sensor, and Moonbird will begin to physically expand - your cue to breathe in. Then, as Moonbird contracts, breathe out, and repeat for the duration of your exercise. This intuitive and tactile little device really helps you focus and get calm. Use coupon code HAYLEYJADE to get €10 off yours.
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
