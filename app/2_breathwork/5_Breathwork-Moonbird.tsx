// Breathwork-Moonbird.tsx
export default function BreatheMoonbird() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:p-12 space-y-10 lg:space-y-16">
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Moonbird handheld breath coach
          </h1>
          <p className="text-lg lg:text-xl">
            What could be simpler than guided breathing exercises in the palm of your hand? Enter, Moonbird. Select an exercise, place your thumb on the sensor, and Moonbird will begin to physically expand—your cue to breathe in. Then, as Moonbird contracts, breathe out, and repeat for the duration of your exercise. This intuitive and tactile little device really helps you focus and get calm. Use coupon code <strong>HAYLEYJADE</strong> to get €10 off yours.
          </p>
          <button className="bg-pastel-turquoise text-white px-6 py-3 rounded-full hover:bg-pastel-turquoise-dark transition-colors hover:bg-black">
            Buy now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/breathe/moonbird.png" // Replace with the actual image path
            alt="Moonbird handheld breath coach"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </main>
  );
}

// What could be simpler than guided breathing exercises in the palm of your hand? Enter, Moonbird. Select an exercise, place your thumb on the sensor, and Moonbird will begin to physically expand - your cue to breathe in. Then, as Moonbird contracts, breathe out, and repeat for the duration of your exercise. This intuitive and tactile little device really helps you focus and get calm. Use coupon code HAYLEYJADE to get €10 off yours.