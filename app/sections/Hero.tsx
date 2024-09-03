export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[85vw] max-w-4xl aspect-w-16 aspect-h-9 p-4">
        <iframe
          src="https://www.youtube.com/embed/OYa-EJAMDjg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="w-[85vw] max-w-4xl p-4 text-center">
        <h1 className="text-xl font-bold">HERTS BREATHWORK</h1>
      </div>
    </div>
  );
}
