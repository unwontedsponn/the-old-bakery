import Image from 'next/image';

export default function Welcome() {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-white z-0">
      <div className="w-[85vw] max-w-4xl aspect-w-16 aspect-h-9 p-4">
        <Image src="/images/welcome-image.jpg" alt="Welcome Image" width={700} height={0} />
      </div>
      <div className="w-[85vw] max-w-4xl p-4 flex flex-col justify-between min-h-[80vh] text-left">
        <div className='space-y-6 pt-10'>
          <h1 className="text-4xl font-bold">WELCOME TO ARISE</h1>
          <h2>Inspiring, down-to-earth &amp; playful breathwork sessions THAT BENEFIT YOUR ENTIRE WELLBEING (BODY, MIND &amp; SOUL)</h2>
          <p>Did you know we take over 20,000 breaths a day? Yet most of us have restricted breathing patterns. When we&apos;re not breathing to our full potential, we&apos;re also not living to our full potential... since breath is quite literally life.</p>
          <p>Let's get back to that perfect open breath you were born with, so you can ease any tension or stress, release emotional baggage, increase your clarity and focus, connect more deeply, tune into your intuition and ultimately feel lighter, brighter, and fully alive!</p>
          <p>Change the way you breathe, change the way you live!</p>
        </div>
        <button className='w-full border-2 rounded-full py-4 hover:bg-black hover:text-white hover:border-black'>TELL ME MORE</button>
      </div>
    </div>
  );
}