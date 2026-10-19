import PageLayout from './PageLayout';

interface SubscriptionsPageProps {
  onBack: () => void;
}

export default function SubscriptionsPage({ onBack }: SubscriptionsPageProps) {
  const plans = [
    {
      name: 'Explorer',
      price: 16,
      frequency: 'Monthly',
      emoji: '🌿',
      description: 'Perfect for curious coffee lovers wanting to discover new origins.',
      features: [
        '1 bag (250g) per month',
        'Rotating single origins',
        'Tasting notes card',
        'Free shipping',
        'Cancel anytime',
      ],
      popular: false,
    },
    {
      name: 'Connoisseur',
      price: 29,
      frequency: 'Monthly',
      emoji: '⭐',
      description: 'For the dedicated enthusiast who wants variety and depth.',
      features: [
        '2 bags (250g each) per month',
        'Curated pairings',
        'Brewing guide included',
        'Priority access to limited lots',
        'Free shipping',
        '10% off accessories',
      ],
      popular: true,
    },
    {
      name: 'Aficionado',
      price: 49,
      frequency: 'Monthly',
      emoji: '👑',
      description: 'The ultimate coffee experience for true connoisseurs.',
      features: [
        '3 bags (250g each) per month',
        'Rare micro-lots included',
        'Exclusive cupping notes',
        'Early access to new releases',
        'Free shipping',
        '15% off everything',
        'Quarterly virtual cupping',
      ],
      popular: false,
    },
  ];

  return (
    <PageLayout
      title="Subscriptions"
      subtitle="Never run out of exceptional coffee — delivered fresh to your door"
      emoji="📦"
      onBack={onBack}
    >
      <div className="space-y-10">
        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🔄', title: 'Fresh Every Time', desc: 'Roasted and shipped within 48 hours' },
            { icon: '💰', title: 'Save More', desc: 'Up to 15% off retail prices' },
            { icon: '🎁', title: 'Surprise & Delight', desc: 'Curated selections you\'ll love' },
          ].map((benefit) => (
            <div key={benefit.title} className="text-center p-5 bg-stone-800/30 rounded-xl border border-stone-700/30">
              <span className="text-3xl mb-2 block">{benefit.icon}</span>
              <h4 className="font-serif font-bold text-amber-100 text-sm">{benefit.title}</h4>
              <p className="text-xs text-amber-200/50 mt-1">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border transition-all ${
                plan.popular
                  ? 'bg-amber-900/15 border-amber-700/40 shadow-lg shadow-amber-900/20'
                  : 'bg-stone-800/40 border-amber-900/20 hover:border-amber-700/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-600 text-amber-50 text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-5">
                <span className="text-4xl mb-2 block">{plan.emoji}</span>
                <h3 className="text-xl font-serif font-bold text-amber-100">{plan.name}</h3>
                <p className="text-xs text-amber-200/50 mt-1">{plan.frequency}</p>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-amber-400">${plan.price}</span>
                  <span className="text-sm text-amber-200/50">/month</span>
                </div>
              </div>
              <p className="text-sm text-amber-200/60 text-center mb-5">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-amber-200/70">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onBack()}
                className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
                  plan.popular
                    ? 'bg-amber-700 hover:bg-amber-600 text-amber-50 shadow-md shadow-amber-900/30'
                    : 'bg-stone-700/50 hover:bg-stone-700 text-amber-100 border border-stone-600/30'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-serif font-bold text-amber-100 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'Can I change my plan anytime?', a: 'Yes! Upgrade, downgrade, or cancel anytime from your account dashboard. Changes take effect on your next billing cycle.' },
              { q: 'How do I choose my coffees?', a: 'Our roasters curate each month\'s selection based on what\'s freshest and most exciting. You\'ll receive an email preview before shipping.' },
              { q: 'Is shipping really free?', a: 'Absolutely. All subscription plans include free standard shipping within the continental US.' },
              { q: 'Can I gift a subscription?', a: 'Yes! We offer 3, 6, and 12-month gift subscriptions. The recipient can customize their preferences.' },
            ].map((faq) => (
              <div key={faq.q} className="p-4 bg-stone-800/30 rounded-xl border border-stone-700/30">
                <h4 className="font-semibold text-amber-100 text-sm mb-1">{faq.q}</h4>
                <p className="text-xs text-amber-200/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
