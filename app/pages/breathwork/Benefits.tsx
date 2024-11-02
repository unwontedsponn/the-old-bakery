// Breathwork-Breakdown.tsx
export default function BreatheBreakdown() {
  return (
    <main className="flex flex-col items-center justify-between w-[85vw] py-12 lg:py-16 space-y-10 lg:space-y-16 bg-gradient-to-b from-white to-gray-50">
      
      <h1 className="text-3xl lg:text-4xl text-pastel-turquoise text-center lg:text-left">          
        Benefits
      </h1>

      {/* Grid for better alignment of sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Section 1 - Boost & Detox */}
        <section className="space-y-6 text-center lg:text-left bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">Boost & Detox</h1>
          <ul className="list-none text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="flex items-center">
              <span className="mr-2">💪</span> Immunity
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span> Oxygenation & energy
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span> Clarity & intuition
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span> Circulation & lymphatic drainage
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌸</span> Fertility (where no medical cause)
            </li>
          </ul>
        </section>

        {/* Section 2 - Supercharge */}
        <section className="space-y-6 text-center lg:text-left bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">Supercharge</h1>
          <ul className="list-none text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="flex items-center">
              <span className="mr-2">🎉</span> Self-esteem & joy
            </li>            
            <li className="flex items-center">
              <span className="mr-2">💡</span> Productivity
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span> Creativity
            </li>
            <li className="flex items-center">
              <span className="mr-2">🧘</span> Conscious awareness
            </li>
            <li className="flex items-center">
              <span className="mr-2">🧘‍♂️</span> Meditation
            </li>
          </ul>
        </section>

        {/* Section 3 - Overcome */}
        <section className="space-y-6 text-center lg:text-left bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">Overcome</h1>
          <ul className="list-none text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="flex items-center">
              <span className="mr-2">🧠</span> Stress
            </li>
            <li className="flex items-center">
              <span className="mr-2">😔</span> Depression
            </li>
            <li className="flex items-center">
              <span className="mr-2">😨</span> Anxiety
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌀</span> Trauma & PTSD
            </li>
            <li className="flex items-center">
              <span className="mr-2">💔</span> Self-sabotaging patterns and addiction
            </li>
          </ul>
        </section>

        {/* Section 4 - Alleviate */}
        <section className="space-y-6 text-center lg:text-left bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">Alleviate</h1>
          <ul className="list-none text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="flex items-center">
              <span className="mr-2">🫁</span> Anaerobic diseases
            </li>
            <li className="flex items-center">
              <span className="mr-2">🥗</span> Digestive issues e.g. IBS
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌬️</span> Respiratory ailments e.g. asthma
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔥</span> Chronic pain
            </li>
            <li className="flex items-center">
              <span className="mr-2">🤰</span> Pregnancy aches & pain
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
