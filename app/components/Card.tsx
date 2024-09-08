import Image from 'next/image';

export default function Card({ title='string', subtitle='string', imageSrc='string', imageAlt='string' }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 w-80 text-center text-white shadow-lg">
      <h2 className="text-sm font-bold uppercase mb-2">{subtitle}</h2>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={350}
        height={350}
        className="rounded-lg mx-auto"
      />
    </div>
  );
}