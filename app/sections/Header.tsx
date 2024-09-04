import Image from "next/image";

export default function Header() {
  return (
    <div className="font-montserrat flex items-center justify-between w-full px-14 bg-white text-pastel-turquoise bg-coral-blush">
      <div className="flex items-center hover:cursor-pointer">
        <Image src="/images/logo.jpg" alt="Logo Image" width={200} height={0} />
      </div>
      <div className="flex space-x-4 ml-auto text-3xl font-semibold">
        <p className='hover:cursor-pointer hover:underline'>BREATHWORK</p>
        <p className='hover:cursor-pointer hover:underline'>EVENTS</p>
        <p className='hover:cursor-pointer hover:underline'>WORK TOGETHER</p>
        <p className='hover:cursor-pointer hover:underline'>ABOUT</p>
        <p className='hover:cursor-pointer hover:underline'>CONTACT</p>
      </div>
    </div>
  );
}
