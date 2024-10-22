import Image from 'next/image';

export default function Card({ 
  title = 'Default Title', 
  subtitle = 'Default Subtitle', 
  imageSrc = '/images/default.jpg', 
  imageAlt = 'Default Alt', 
  className = ''  // Provide a default empty string for className prop
}) {
  return (
    <div className={`relative bg-gray-900 rounded-2xl w-[250px] h-[450px] text-white text-light shadow-lg overflow-hidden flex-shrink-0 transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl ${className}`}>
      {/* Text container positioned at the top of the card */}
      <div className="absolute top-0 left-0 right-0 p-4 z-10 bg-opacity-60 bg-gray-500 rounded-t-2xl">
        <h2 className="text-xs uppercase">{subtitle}</h2>
        <h1 className="text-lg">{title}</h1>
      </div>
      {/* Image as background with the content */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"  // Make the image fill the parent container
        objectFit="cover" // Ensures the image covers the container
        className="object-cover" // Keeps image aspect ratio
      />
    </div>
  );
}
