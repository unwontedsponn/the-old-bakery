// Breathwork-Breakdown.tsx
export default function BreatheBreakdown() {
  return (
    <main className="flex flex-col items-center justify-between w-[85vw] p-6 lg:p-12 space-y-10 lg:space-y-16">
      {/* Grid for better alignment of sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Section 1 - Boost & Detox */}
        <section className="space-y-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Boost & Detox</h1>
          <ul className="list-disc list-inside text-lg lg:text-xl">
            <li>Immunity</li>
            <li>Oxygenation & energy</li>
            <li>Circulation & lymphatic drainage</li>
            <li>Fertility (where no medical cause)</li>
          </ul>
        </section>

        {/* Section 2 - Supercharge */}
        <section className="space-y-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Supercharge</h1>
          <ul className="list-disc list-inside text-lg lg:text-xl">
            <li>Self-esteem & joy</li>
            <li>Clarity & intuition</li>
            <li>Productivity</li>
            <li>Creativity</li>
            <li>Conscious awareness</li>
            <li>Meditation</li>
          </ul>
        </section>

        {/* Section 3 - Overcome */}
        <section className="space-y-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Overcome</h1>
          <ul className="list-disc list-inside text-lg lg:text-xl">
            <li>Stress</li>
            <li>Depression</li>
            <li>Anxiety</li>
            <li>Trauma & PTSD</li>
            <li>Self-sabotaging patterns and addiction</li>            
          </ul>
        </section>

        {/* Section 3 - Alleviate */}
        <section className="space-y-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Alleviate</h1>
          <ul className="list-disc list-inside text-lg lg:text-xl">
            <li>Anaerobic diseases</li>
            <li>Digestive issues e.g. IBS</li>
            <li>Respiratory ailments e.g. asthma</li>
            <li>Chronic pain</li>
            <li>Pregnancy aches & pain</li>            
          </ul>
        </section>        
      </div>
    </main>
  );
}
