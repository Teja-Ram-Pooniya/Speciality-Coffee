import PageLayout from './PageLayout';

interface TwitterPageProps {
  onBack: () => void;
}

export default function TwitterPage({ onBack }: TwitterPageProps) {
  const tweets = [
    {
      content: 'Just dropped our new Ethiopian Yirgacheffe — blueberry, jasmine, and bergamot notes that will blow your mind. ☕🫐',
      time: '2h ago',
      likes: 89,
      retweets: 23,
    },
    {
      content: 'Pro tip: Always weigh your coffee and water. Precision is the secret to consistency. ⚖️',
      time: '5h ago',
      likes: 156,
      retweets: 45,
    },
    {
      content: 'Our roaster Sarah just returned from Colombia. New lots arriving next week! 🇨🇴',
      time: '1d ago',
      likes: 234,
      retweets: 67,
    },
    {
      content: 'The perfect cup of coffee is a ritual of presence. Slow down. Savor it. ✨',
      time: '2d ago',
      likes: 412,
      retweets: 98,
    },
    {
      content: 'Fun fact: Ethiopia is the birthplace of coffee. Legend says a goat herder noticed his goats dancing after eating coffee cherries. 🐐',
      time: '3d ago',
      likes: 567,
      retweets: 134,
    },
  ];

  return (
    <PageLayout
      title="Twitter"
      subtitle="Join the conversation — coffee tips, updates, and community"
      emoji="🐦"
      onBack={onBack}
    >
      <div className="space-y-8">
        {/* Profile */}
        <div className="text-center p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30 max-w-md mx-auto">
          <div className="w-20 h-20 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-700/30">
            <span className="text-3xl">🐦</span>
          </div>
          <h3 className="font-serif font-bold text-amber-100 text-lg">@EmberBloomCoffee</h3>
          <p className="text-sm text-amber-200/60 mt-2">Specialty coffee roasters. Ethically sourced, small batch, fresh daily. Brewing better mornings since 2014.</p>
          <div className="flex justify-center gap-6 mt-4 text-center">
            <div>
              <p className="font-bold text-amber-100">1,247</p>
              <p className="text-xs text-amber-200/50">Posts</p>
            </div>
            <div>
              <p className="font-bold text-amber-100">8.9K</p>
              <p className="text-xs text-amber-200/50">Followers</p>
            </div>
            <div>
              <p className="font-bold text-amber-100">523</p>
              <p className="text-xs text-amber-200/50">Following</p>
            </div>
          </div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-sky-500 text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors"
          >
            Follow on Twitter
          </a>
        </div>

        {/* Tweets */}
        <div className="max-w-2xl mx-auto space-y-4">
          {tweets.map((tweet, idx) => (
            <div key={idx} className="p-5 bg-stone-800/40 rounded-xl border border-stone-700/30 hover:border-amber-700/30 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-900/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-lg">☕</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-amber-100 text-sm">Ember & Bloom</span>
                    <span className="text-xs text-amber-200/40">@EmberBloomCoffee · {tweet.time}</span>
                  </div>
                  <p className="text-sm text-amber-200/70 leading-relaxed">{tweet.content}</p>
                  <div className="flex gap-6 mt-3 text-xs text-amber-200/40">
                    <span className="flex items-center gap-1 hover:text-amber-400 cursor-pointer transition-colors">
                      ♥ {tweet.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-amber-400 cursor-pointer transition-colors">
                      🔁 {tweet.retweets}
                    </span>
                    <span className="flex items-center gap-1 hover:text-amber-400 cursor-pointer transition-colors">
                      💬 Reply
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
