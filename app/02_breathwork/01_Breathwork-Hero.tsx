// Breathwork-Hero.tsx
export default function BreatheHero() {
  return (
    <div className="flex flex-col lg:flex-row items-center space-x-6 p-6 lg:p-12 w-[85vw]">
      {/* Image Section */}
      <img
        src="/images/breathe/breathe-hero.jpg"
        alt="Breathe Hero"
        className="w-full lg:w-1/2 h-auto object-cover rounded-2xl mb-8 lg:mb-0"
      />

      {/* Text Section */}
      <div className="flex flex-col max-w-lg space-y-6 lg:space-y-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4">
          When was the last time you felt your best?
        </h1>
        <p className="text-lg lg:text-xl text-center lg:text-left mb-6">
          Living well all starts with your physical and mental health...
        </p>
        <button className="bg-pastel-turquoise text-white px-6 py-3 rounded-full hover:bg-black">
          Browse events
        </button>
      </div>
    </div>
  );
}

// Living well all starts with your physical and mental health. We know this and yet it can be difficult to prioritise healing our ailments and emotions from the inside out. But what if I told you that feeling better doesn't have to be complicated? That change is possible and the answer is quite literally right under your nose. It's called Transformational Breath®, a powerful therapy that addresses root causes of issues by helping you to breathe better.