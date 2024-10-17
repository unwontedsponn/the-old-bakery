// Welcome.tsx
import Image from 'next/image';

export default function Welcome() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-[85vw] bg-white z-0 py-16 lg:py-32">

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden rounded-2xl mb-8 lg:mb-0">
        <Image 
          src="/images/welcome.jpg"
          alt="Welcome"
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
          width={400} // Reduce width for mobile
          height={200} // Reduce height for mobile
          className="w-[90vw] lg:w-[600px]" // Ensure it takes full width on mobile
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-4xl p-4 flex flex-col justify-between min-h-[60vh] lg:min-h-[80vh] text-left space-y-4">
        <div className="flex-grow flex flex-col justify-center space-y-4 lg:space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold font-montserrat text-pastel-turquoise text-center lg:text-left">WELCOME TO HERTS BREATHWORK</h1>
          <h2 className="text-lg lg:text-xl text-center lg:text-left">Inspiring, down-to-earth &amp; playful breathwork sessions THAT BENEFIT YOUR ENTIRE WELLBEING (BODY, MIND &amp; SOUL)</h2>
          <p className='font-montserrat text-sm lg:text-base text-center lg:text-left'>Did you know we take over 20,000 breaths a day? Yet most of us have restricted breathing patterns. When we&apos;re not breathing to our full potential, we&apos;re also not living to our full potential... since breath is quite literally life.</p>
          <p className='font-montserrat text-sm lg:text-base text-center lg:text-left'>Let&apos;s get back to that perfect open breath you were born with, so you can ease any tension or stress, release emotional baggage, increase your clarity and focus, connect more deeply, tune into your intuition and ultimately feel lighter, brighter, and fully alive!</p>
          <p className='font-montserrat text-sm lg:text-base text-center lg:text-left'>Change the way you breathe, change the way you live!</p>
        </div>
        <button className="w-full rounded-full py-3 lg:py-4 hover:bg-black bg-pastel-turquoise text-white hover:border-pastel-turquoise text-lg lg:text-2xl font-montserrat mt-8 lg:mt-0">TELL ME MORE</button>
      </div>

    </div>
  );
}
