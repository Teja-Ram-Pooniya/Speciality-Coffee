import { useState } from 'react';
import PageLayout from './PageLayout';

interface NewsletterPageProps {
  onBack: () => void;
}

export default function NewsletterPage({ onBack }: NewsletterPageProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <PageLayout
      title="Newsletter"
      subtitle="Stay in the loop — new arrivals, brewing tips, and exclusive offers"
      emoji="✉️"
      onBack={onBack}
    >
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Signup Form */}
        {!subscribed ? (
          <div className="p-6 sm:p-8 bg-stone-800/40 rounded-2xl border border-amber-900/20 text-center">
            <span className="text-5xl mb-4 block">📬</span>
            <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">Join Our Newsletter</h3>
            <p className="text-sm text-amber-200/60 mb-6">
              Get weekly updates on new coffee arrivals, brewing guides, exclusive discounts, 
              and stories from the world of specialty coffee.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-lg transition-all shadow-md shadow-amber-900/30 text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-amber-200/30 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="p-8 bg-emerald-900/10 rounded-2xl border border-emerald-700/30 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">You're In!</h3>
            <p className="text-sm text-amber-200/60">
              Welcome to the Ember & Bloom community. Check your inbox for a confirmation email.
            </p>
          </div>
        )}

        {/* What You'll Get */}
        <div>
          <h3 className="text-lg font-serif font-bold text-amber-100 mb-4 text-center">What You'll Receive</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🫘', title: 'New Arrivals', desc: 'Be first to know about fresh lots and limited releases.' },
              { icon: '📚', title: 'Brewing Tips', desc: 'Weekly guides to help you brew better coffee at home.' },
              { icon: '💰', title: 'Exclusive Offers', desc: 'Subscriber-only discounts and early access to sales.' },
              { icon: '🌍', title: 'Origin Stories', desc: 'Deep dives into the farms, farmers, and regions we source from.' },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-stone-800/30 rounded-xl border border-stone-700/30">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="font-semibold text-amber-100 text-sm">{item.title}</h4>
                <p className="text-xs text-amber-200/50 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Issues Preview */}
        <div>
          <h3 className="text-lg font-serif font-bold text-amber-100 mb-4 text-center">Recent Issues</h3>
          <div className="space-y-3">
            {[
              { title: 'The Art of Light Roasts', date: 'Dec 15, 2026', emoji: '☀️' },
              { title: 'Ethiopia: Birthplace of Coffee', date: 'Dec 8, 2026', emoji: '🇪🇹' },
              { title: 'Holiday Gift Guide for Coffee Lovers', date: 'Dec 1, 2026', emoji: '🎁' },
              { title: 'Cold Brew vs. Iced Coffee: What\'s the Difference?', date: 'Nov 24, 2026', emoji: '🧊' },
            ].map((issue) => (
              <div key={issue.title} className="flex items-center gap-3 p-4 bg-stone-800/30 rounded-xl border border-stone-700/30 hover:border-amber-700/30 transition-all cursor-pointer">
                <span className="text-2xl">{issue.emoji}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-amber-100">{issue.title}</h4>
                  <p className="text-xs text-amber-200/40">{issue.date}</p>
                </div>
                <svg className="w-4 h-4 text-amber-200/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
