import PageLayout from './PageLayout';

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <PageLayout
      title="About Us"
      subtitle="Passionate about exceptional coffee and the people behind every cup"
      emoji="🌱"
      onBack={onBack}
    >
      <div className="space-y-12">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 bg-stone-800/40 rounded-2xl border border-amber-900/20">
            <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Our Mission</h3>
            <p className="text-amber-200/60 leading-relaxed">
              At Ember & Bloom, we believe that great coffee is more than a beverage — it's an experience. 
              Our mission is to connect coffee lovers with the world's finest beans, roasted with precision 
              and delivered at peak freshness.
            </p>
          </div>
          <div className="p-6 sm:p-8 bg-stone-800/40 rounded-2xl border border-amber-900/20">
            <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Our Values</h3>
            <ul className="space-y-3 text-amber-200/60">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">●</span>
                <span><strong className="text-amber-100">Quality First:</strong> We never compromise on bean quality or roast precision.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">●</span>
                <span><strong className="text-amber-100">Sustainability:</strong> Ethical sourcing and eco-conscious practices guide everything we do.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">●</span>
                <span><strong className="text-amber-100">Community:</strong> Supporting farming communities and coffee culture worldwide.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-amber-100 mb-6 text-center">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Chen', role: 'Head Roaster', emoji: '👩‍🍳' },
              { name: 'Marcus Rivera', role: 'Green Buyer', emoji: '🧑‍💼' },
              { name: 'Aisha Patel', role: 'Quality Lead', emoji: '👩‍🔬' },
            ].map((member) => (
              <div key={member.name} className="text-center p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30">
                <span className="text-4xl mb-3 block">{member.emoji}</span>
                <h4 className="font-serif font-bold text-amber-100">{member.name}</h4>
                <p className="text-sm text-amber-200/50 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '12+', label: 'Years Roasting' },
            { value: '28', label: 'Origin Countries' },
            { value: '50K+', label: 'Happy Customers' },
            { value: '100%', label: 'Ethically Sourced' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-amber-900/10 rounded-xl border border-amber-900/20">
              <p className="text-2xl sm:text-3xl font-bold text-amber-400">{stat.value}</p>
              <p className="text-xs text-amber-200/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
