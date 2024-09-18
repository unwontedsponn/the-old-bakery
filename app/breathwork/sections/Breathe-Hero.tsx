export default function BreatheHero() {
    return (      
      <div className="flex flex-row items-center space-x-6">
        <img 
          src="/images/breathe/breathe-hero.jpg" 
          alt="Breathe Hero" 
          className="w-1/2 h-auto object-cover"
        />
        <div className="flex flex-col max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            When was the last time you felt your best?
          </h1>
          <p className="text-lg mb-6">
            Living well all starts with your physical and mental health. We know this and yet it can be difficult to prioritise healing our ailments and emotions from the inside out. But what if I told you that feeling better doesn't have to be complicated? That change is possible and the answer is quite literally right under your nose. It's called Transformational Breath®, a powerful therapy that addresses root causes of issues by helping you to breathe better.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Browse events
          </button>
        </div>
      </div>      
    );
}
