export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-coral-blush px-14">
      {/* This outer div sets the full width and height */}
      <div className="w-full h-[75vh] md:h-[85vh] lg:h-[95vh] overflow-hidden relative">
        <iframe
          src="https://www.youtube.com/embed/OYa-EJAMDjg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <div className="w-full text-center py-10">
        <h1 className="text-9xl font-bold text-pastel-turquoise tracking-widest">HERTS BREATHWORK</h1>
      </div>
    </div>
  );
}