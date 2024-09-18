import Image from 'next/image';

export default function Subscribe() {
  return (
    <div className="relative w-full h-screen">
      <Image 
        src="/images/breathe/subscribe.jpg" 
        alt="Subscribe Background" 
        layout="fill"
        objectFit="cover" 
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-8">
        <h1 className="text-4xl font-bold mb-4">Subscribe for a free breathwork guide</h1>
        <p className="mb-4">PBe the first to hear about upcoming events, and receive a free guide covering:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Conscious connected breath</li>
          <li>Calming vegal nerve breathing</li>
          <li>20 ways to boost your mood</li>          
        </ul>
        <p className="mb-4">You'll also get discounts and news on upcoming events.</p>
        <input 
          type="text" 
          placeholder="Enter your email here*" 
          className="p-2 mb-4 rounded border border-white text-black"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign up
        </button>
      </div>
    </div>
  );
}
