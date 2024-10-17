// Breathwork-WhatIs.tsx
export default function BreatheWhatIs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:p-12 space-y-10 lg:space-y-16 w-[85vw]">
      <div className="w-full lg:flex lg:items-center lg:justify-between space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
            What is Transformational Breath®?
          </h1>
          <p className="text-lg lg:text-xl text-center lg:text-left">
            Transformational Breath® was developed over four decades by Dr. J Kravitz, creator of the preeminent Transformational Breath® Foundation...
          </p>
          <p className="text-lg lg:text-xl text-center lg:text-left">
            If you&apos;re familiar with Wim Hof, Rebirthing, or Holotropic breathwork...
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/breathe/ben.jpg" // Replace with your image path
            alt="Transformational Breath"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </main>
  );
}
  
// Transformational Breath® was developed over four decades by Dr J Kravitz, creator of the preeminent Transformational Breath® Foundation, awarded Best Complementary Medicine Organisation by the ICNM.  Transformational Breath® is an open-mouthed, conscious breathing technique, with no pauses, which is gentle yet powerful. If you're familiar with Wim Hof, Rebirthing or Holotropic breathwork you'll be interested to know that Transformational Breath® has expanded beyond these modalities, integrating various insights from Kundalini Yoga, breath analysis, sound healing, and acupressure - alongside a spiritual framework that's accessible to all. Personal coaching is also a valuable aspect of the session. In addition to the Transformational Breath® Foundation being the go-to breath school for healthcare professionals worldwide, all graduates are accredited by the International Coaching Federation.