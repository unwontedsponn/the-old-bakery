// Breathwork-Breakdown.tsx
export default function BreatheBreakdown() {
  return (
    <main className="flex flex-col items-center justify-between w-[85vw] py-12 lg:py-16 space-y-10 lg:space-y-16">
      {/* Grid for better alignment of sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Section 1 - Boost & Detox */}
        <section className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">
            Boost & Detox
          </h1>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Immunity</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Oxygenation & energy</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Circulation & lymphatic drainage</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Fertility (where no medical cause)</li>
          </ul>
        </section>

        {/* Section 2 - Supercharge */}
        <section className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">
            Supercharge
          </h1>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Self-esteem & joy</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Clarity & intuition</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Productivity</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Creativity</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Conscious awareness</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Meditation</li>
          </ul>
        </section>

        {/* Section 3 - Overcome */}
        <section className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">
            Overcome
          </h1>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Stress</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Depression</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Anxiety</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Trauma & PTSD</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Self-sabotaging patterns and addiction</li>
          </ul>
        </section>

        {/* Section 4 - Alleviate */}
        <section className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl text-pastel-turquoise">
            Alleviate
          </h1>
          <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 space-y-2 lg:space-y-4">
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Anaerobic diseases</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Digestive issues e.g. IBS</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Respiratory ailments e.g. asthma</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Chronic pain</li>
            <li className="hover:text-pastel-turquoise transition-colors duration-300">Pregnancy aches & pain</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
