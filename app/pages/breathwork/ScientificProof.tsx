// Breathwork-Hero.tsx
export default function BreatheHero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-[85vw] bg-white py-12 lg:py-16 gap-12 lg:gap-16">
      {/* Image Section */}
      <img
        src="/images/breathe/breathe-hero.jpg"
        alt="Breathe Hero"
        className="w-full lg:w-1/2 h-auto object-cover rounded-2xl shadow-lg"
      />

      {/* Text Section */}
      <div className="flex flex-col max-w-lg lg:max-w-none space-y-6 lg:space-y-8 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl text-pastel-turquoise">
          Scientific Proof...
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Living well all starts with your physical and mental health. We know this and yet it can be difficult to prioritise healing our ailments and emotions from the inside out...
        </p>
        <button className="self-center lg:self-start w-auto bg-pastel-turquoise text-white px-6 py-3 rounded-full hover:bg-coral-blush hover:text-white transition-colors duration-300">
          Browse events
        </button>
      </div>
    </div>
  );
}


// Living well all starts with your physical and mental health. We know this and yet it can be difficult to prioritise healing our ailments and emotions from the inside out. But what if I told you that feeling better doesn't have to be complicated? That change is possible and the answer is quite literally right under your nose. It's called Transformational Breath®, a powerful therapy that addresses root causes of issues by helping you to breathe better.