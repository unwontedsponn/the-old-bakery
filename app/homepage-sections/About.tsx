import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-indigo-400 z-0 p-10">
      <div className="w-[85vw] max-w-4xl px-24 py-10 flex flex-col justify-between min-h-[80vh] text-left">
        <div className="flex-grow flex flex-col justify-center space-y-6 px-6">
          <h1 className="text-4xl font-bold font-montserrat">HEY, I&apos;M HAYLEY</h1>
          <h2>I was a different person before I found breathwork. It completely changed my life.</h2>
          <p className="font-montserrat">
            Which is why I love sharing its power and bringing people together in community to connect more deeply, not
            only with themselves but with other people and the world around them.
          </p>
          <p className="font-montserrat">
            As a fully qualified Transformational Breath® Group Leader and accredited Life Coach, I&apos;ve worked with
            hundreds of clients and seen how simply improving their breath can truly transform their lives.
          </p>          
        </div>
        <button className="w-full border-2 rounded-full py-4 hover:bg-black hover:text-white hover:border-black text2xl font-montserrat">
          READ MY STORY
        </button>
      </div>
      <div className="w-[85vw] p-4 flex justify-center items-center overflow-hidden">        
        <Image 
          src="/images/about.jpg"
          alt="Welcome"
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
          width={600}
          height={300}
        />
      </div>
    </div>
  );
}
