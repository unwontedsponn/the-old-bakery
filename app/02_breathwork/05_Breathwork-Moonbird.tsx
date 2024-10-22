// Breathwork-Moonbird.tsx
export default function BreatheMoonbird() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 lg:py-16 w-[85vw] space-y-12 lg:space-y-16">
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl text-pastel-turquoise">
            Moonbird handheld breath coach
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            What could be simpler than guided breathing exercises in the palm of your hand? Enter, Moonbird. Select an exercise, place your thumb on the sensor, and Moonbird will begin to physically expand—your cue to breathe in. Then, as Moonbird contracts, breathe out, and repeat for the duration of your exercise. This intuitive and tactile little device really helps you focus and get calm. Use coupon code <strong>HAYLEYJADE</strong> to get €10 off yours.
          </p>
          <button className="bg-pastel-turquoise text-white px-6 py-3 rounded-full hover:bg-black hover:text-pastel-turquoise transition-colors duration-300">
            Buy now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/breathe/moonbird.png"
            alt="Moonbird handheld breath coach"
            className="w-full lg:w-[90%] h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}


// What could be simpler than guided breathing exercises in the palm of your hand? Enter, Moonbird. Select an exercise, place your thumb on the sensor, and Moonbird will begin to physically expand - your cue to breathe in. Then, as Moonbird contracts, breathe out, and repeat for the duration of your exercise. This intuitive and tactile little device really helps you focus and get calm. Use coupon code HAYLEYJADE to get €10 off yours.