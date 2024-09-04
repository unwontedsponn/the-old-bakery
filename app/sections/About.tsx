import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-indigo-400 z-0">
      <div className="w-[85vw] max-w-4xl p-4 text-center text-black">
        <h1 className="text-xl font-bold">HEY, I&apos;m HAYLEY</h1>
        <h2>I was a different person before I found breathwork. It completely changed my life.</h2>
        <p>Which is why I love sharing its power and bringing people together in community to connect more deeply, not only with themselves but with other people and the world around them.</p>
        <p>As a fully qualified Transformational Breath® Group Leader and accredited Life Coach, I&apos;ve worked with hundreds of clients and seen how simply improving their breath can truly transform their lives. </p>
        <p>Change the way you breathe, change the way you live!</p>
        <p>I facilitate deeply healing breathwork sessions and intimate group workshops (both online and in person) from Seven Sisters Sanctuary in London; a cosy oasis of calm in the busy city.</p>
        <button>READ MY STORY</button>
      </div>
      <div className="w-[85vw] max-w-4xl aspect-w-16 aspect-h-9 p-4">
        <Image src="/images/hayley-profile.jpeg" alt="About Image" width={800} height={450} />
      </div>
    </div>
  );
}