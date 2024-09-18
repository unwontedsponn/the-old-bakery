import Image from "next/image";

export default function Header() {
  return (
    <div className="font-montserrat flex items-center justify-between w-full px-14 py-10 bg-white text-pastel-turquoise bg-coral-blush">
      <div className="flex items-center hover:cursor-pointer">
        <Image src="/images/logo.jpg" alt="Logo Image" width={200} height={0} />
      </div>
      <div className="flex space-x-4 ml-auto text-3xl font-semibold">        
        <div className="hover:cursor-pointer hover:underline flex flex-row">
          <a 
            href="https://www.eventbrite.co.uk/o/hayley-jade-51009483293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>WHAT'S ON</p>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3h7v7" />
            <path d="M5 12v7a2 2 0 0 0 2 2h7" />
            <polyline points="14 3 21 3 21 10" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>            
        <p className='hover:cursor-pointer hover:underline'>BLOG</p>
        <p className='hover:cursor-pointer hover:underline'>CONTACT</p>
      </div>
    </div>
  );
}
