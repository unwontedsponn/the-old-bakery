export default function BenefitsSection() {
    const benefits = [
      {
        title: 'Boost & detox',
        items: [
          'Immunity',
          'Oxygenation & energy',
          'Circulation & lymphatic drainage',
          'Fertility (where no medical cause)',
        ],
      },
      {
        title: 'Supercharge',
        items: [
          'Self-esteem & joy',
          'Clarity & intuition',
          'Productivity',
          'Creativity',
          'Conscious awareness',
          'Meditation',
        ],
      },
      {
        title: 'Overcome',
        items: [
          'Stress',
          'Depression',
          'Anxiety',
          'Trauma & PTSD',
          'Self-sabotaging patterns & addiction',
        ],
      },
      {
        title: 'Alleviate',
        items: [
          'Anaerobic diseases',
          'Digestive issues e.g. IBS',
          'Respiratory ailments e.g. asthma',
          'Chronic pain',
          'Pregnancy aches & pain',
        ],
      },
    ];
  
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between w-[85vw] bg-white py-16 lg:py-32 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="w-full lg:w-1/4 h-[320px] p-6 bg-[#f7f3f0] rounded-2xl shadow-md flex flex-col items-center justify-center space-y-4"
          >
            <h2 className="text-2xl font-semibold text-center text-gray-800">{benefit.title}</h2>
            <ul className="text-gray-700 space-y-2 text-center">
              {benefit.items.map((item, i) => (
                <li key={i} className="text-sm lg:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  