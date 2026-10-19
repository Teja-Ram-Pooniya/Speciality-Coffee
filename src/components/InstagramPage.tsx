import PageLayout from './PageLayout';

interface InstagramPageProps {
  onBack: () => void;
}

export default function InstagramPage({ onBack }: InstagramPageProps) {
  const posts = [
    { emoji: '☕', caption: 'Morning ritual. Ethiopian Yirgacheffe, pour over.', likes: 342 },
    { emoji: '🫘', caption: 'New arrival: Kenya AA Nyeri just landed at the roastery.', likes: 289 },
    { emoji: '🌿', caption: 'Farm visit to Huila, Colombia. Meeting our partners.', likes: 456 },
    { emoji: '🔥', caption: 'Small batch roasting in progress. The aroma is incredible.', likes: 198 },
    { emoji: '📦', caption: 'Packing orders for the week. Freshness guaranteed!', likes: 167 },
    { emoji: '🧊', caption: 'Summer cold brew season is here. Recipe in bio.', likes: 521 },
  ];

  return (
    <PageLayout
      title="Instagram"
      subtitle="Follow our journey — daily coffee moments and behind-the-scenes"
      emoji="📸"
      onBack={onBack}
    >
      <div className="space-y-8">
        {/* Profile Info */}
        <div className="text-center p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30 max-w-md mx-auto">
          <div className="w-20 h-20 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-700/30">
            <span className="text-3xl">☕</span>
          </div>
          <h3 className="font-serif font-bold text-amber-100 text-lg">@emberandbloom</h3>
          <p className="text-sm text-amber-200/60 mt-2">Specialty Coffee Roasters ✦ Ethically Sourced ✦ Small Batch ✦ Fresh Daily</p>
          <div className="flex justify-center gap-6 mt-4 text-center">
            <div>
              <p className="font-bold text-amber-100">847</p>
              <p className="text-xs text-amber-200/50">Posts</p>
            </div>
            <div>
              <p className="font-bold text-amber-100">12.4K</p>
              <p className="text-xs text-amber-200/50">Followers</p>
            </div>
            <div>
              <p className="font-bold text-amber-100">892</p>
              <p className="text-xs text-amber-200/50">Following</p>
            </div>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Follow on Instagram
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <div key={idx} className="aspect-square bg-stone-800/40 rounded-xl border border-stone-700/30 flex flex-col items-center justify-center p-4 group hover:border-amber-700/30 transition-all cursor-pointer">
              <span className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">{post.emoji}</span>
              <p className="text-xs text-amber-200/50 text-center line-clamp-2">{post.caption}</p>
              <p className="text-xs text-amber-400/60 mt-2">♥ {post.likes}</p>
            </div>
          ))}
        </div>

        {/* Hashtags */}
        <div className="text-center">
          <p className="text-sm text-amber-200/40">
            #EmberAndBloom #SpecialtyCoffee #CoffeeRoasters #SingleOrigin #CoffeeLovers #FreshRoasted
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
