import PageLayout from './PageLayout';

interface BrewingGuidesPageProps {
  onBack: () => void;
}

export default function BrewingGuidesPage({ onBack }: BrewingGuidesPageProps) {
  const guides = [
    {
      method: 'Pour Over',
      emoji: '☕',
      time: '3-4 minutes',
      difficulty: 'Intermediate',
      description: 'A clean, bright cup that highlights the nuanced flavors of single origin coffees.',
      steps: [
        'Heat water to 200-205°F (93-96°C)',
        'Use 1:16 coffee to water ratio',
        'Bloom grounds with 2x weight in water for 30 seconds',
        'Pour in slow, concentric circles',
        'Total brew time: 3-4 minutes',
      ],
    },
    {
      method: 'French Press',
      emoji: '🫖',
      time: '4 minutes',
      difficulty: 'Beginner',
      description: 'Full-bodied and rich, perfect for darker roasts and blends with chocolatey notes.',
      steps: [
        'Coarse grind, 1:15 ratio',
        'Add hot water (200°F/93°C)',
        'Stir gently and place lid',
        'Steep for 4 minutes',
        'Press slowly and serve immediately',
      ],
    },
    {
      method: 'Espresso',
      emoji: '⚡',
      time: '25-30 seconds',
      difficulty: 'Advanced',
      description: 'Intense and concentrated, the foundation for lattes, cappuccinos, and more.',
      steps: [
        'Fine grind, 18-20g dose',
        'Distribute and tamp evenly (30 lbs pressure)',
        'Extract for 25-30 seconds',
        'Target 36-40g yield',
        'Adjust grind if too fast/slow',
      ],
    },
    {
      method: 'Cold Brew',
      emoji: '🧊',
      time: '12-24 hours',
      difficulty: 'Beginner',
      description: 'Smooth, low-acidity, and naturally sweet. Perfect for warm weather.',
      steps: [
        'Extra coarse grind, 1:8 ratio',
        'Combine with cold or room temp water',
        'Steep 12-24 hours in fridge',
        'Strain through fine mesh or filter',
        'Dilute 1:1 with water or milk',
      ],
    },
    {
      method: 'AeroPress',
      emoji: '🔬',
      time: '2 minutes',
      difficulty: 'Intermediate',
      description: 'Versatile and forgiving, producing a clean cup with full flavor.',
      steps: [
        'Medium-fine grind, 1:15 ratio',
        'Inverted method: add coffee, then water',
        'Stir for 10 seconds',
        'Steep 1 minute, then flip and press',
        'Total time: ~2 minutes',
      ],
    },
    {
      method: 'Moka Pot',
      emoji: '🏺',
      time: '5 minutes',
      difficulty: 'Intermediate',
      description: 'Strong and bold, a stovetop espresso alternative with Italian charm.',
      steps: [
        'Fine grind (not as fine as espresso)',
        'Fill basket without tamping',
        'Add hot water to safety valve',
        'Brew on medium heat',
        'Remove when gurgling starts',
      ],
    },
  ];

  return (
    <PageLayout
      title="Brewing Guides"
      subtitle="Master the art of coffee brewing with our step-by-step guides"
      emoji="📚"
      onBack={onBack}
    >
      <div className="space-y-8">
        {/* Quick Tips */}
        <div className="p-6 bg-amber-900/10 rounded-2xl border border-amber-900/20">
          <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">Golden Rules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '💧', title: 'Water Quality', desc: 'Use filtered water, 92-96°C' },
              { icon: '⚖️', title: 'Precision', desc: 'Weigh your coffee and water' },
              { icon: '⏱️', title: 'Timing', desc: 'Consistency is key' },
              { icon: '🫘', title: 'Freshness', desc: 'Use within 2-4 weeks of roast' },
            ].map((tip) => (
              <div key={tip.title} className="text-center p-3">
                <span className="text-2xl mb-2 block">{tip.icon}</span>
                <h4 className="text-sm font-semibold text-amber-100">{tip.title}</h4>
                <p className="text-xs text-amber-200/50 mt-1">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brewing Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <div key={guide.method} className="p-6 bg-stone-800/40 rounded-2xl border border-amber-900/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{guide.emoji}</span>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-amber-100">{guide.method}</h3>
                    <div className="flex gap-3 text-xs text-amber-200/50 mt-0.5">
                      <span>⏱ {guide.time}</span>
                      <span>📊 {guide.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-amber-200/60 mb-4">{guide.description}</p>
              <ol className="space-y-2">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-amber-200/70">
                    <span className="text-amber-500 font-semibold shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30">
          <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">Pro Tips</h3>
          <ul className="space-y-3 text-sm text-amber-200/60">
            <li className="flex items-start gap-2">
              <span className="text-amber-500">✦</span>
              <span>Always grind just before brewing for maximum freshness and flavor.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">✦</span>
              <span>Store beans in an airtight container away from light, heat, and moisture.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">✦</span>
              <span>Experiment with ratios — start with our suggestions and adjust to your taste.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">✦</span>
              <span>Clean your equipment regularly to prevent oil buildup that affects flavor.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
