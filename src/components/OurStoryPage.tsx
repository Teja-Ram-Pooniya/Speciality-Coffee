import PageLayout from './PageLayout';

interface OurStoryPageProps {
  onBack: () => void;
}

export default function OurStoryPage({ onBack }: OurStoryPageProps) {
  return (
    <PageLayout
      title="Our Story"
      subtitle="From a small garage roaster to a beloved coffee community"
      emoji="📖"
      onBack={onBack}
    >
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Timeline */}
        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-amber-700/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-amber-600 rounded-full" />
            <div className="p-6 bg-stone-800/40 rounded-xl border border-amber-900/20">
              <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">2014</p>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-2">The Beginning</h3>
              <p className="text-amber-200/60 text-sm leading-relaxed">
                It started with a second-hand drum roaster in a garage and an obsession with finding 
                the perfect cup. Founder Sarah Chen began roasting beans for friends and local cafés, 
                driven by a passion for flavor and craft.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-amber-700/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-amber-600 rounded-full" />
            <div className="p-6 bg-stone-800/40 rounded-xl border border-amber-900/20">
              <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">2017</p>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-2">First Origin Trip</h3>
              <p className="text-amber-200/60 text-sm leading-relaxed">
                Our first trip to Ethiopia changed everything. Meeting the farmers, walking the fields, 
                and tasting coffee at its source gave us a deeper understanding of what specialty coffee 
                truly means. We committed to direct trade relationships.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-amber-700/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-amber-600 rounded-full" />
            <div className="p-6 bg-stone-800/40 rounded-xl border border-amber-900/20">
              <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">2019</p>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-2">The Roastery Opens</h3>
              <p className="text-amber-200/60 text-sm leading-relaxed">
                We moved into our dedicated roastery space — a converted warehouse with room to grow. 
                This is where we roast daily, cup new lots, and share our passion with the community 
                through open house events and workshops.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-amber-700/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-amber-600 rounded-full" />
            <div className="p-6 bg-stone-800/40 rounded-xl border border-amber-900/20">
              <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">2022</p>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-2">Going Online</h3>
              <p className="text-amber-200/60 text-sm leading-relaxed">
                We launched our online store to bring Ember & Bloom to coffee lovers everywhere. 
                With subscription options and curated selections, we're making exceptional coffee 
                accessible without compromising on quality.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-amber-700/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-amber-500 rounded-full ring-4 ring-amber-500/20" />
            <div className="p-6 bg-amber-900/10 rounded-xl border border-amber-700/30">
              <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">Today</p>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-2">Growing Together</h3>
              <p className="text-amber-200/60 text-sm leading-relaxed">
                Today we serve thousands of customers, work with farms across 28 countries, and 
                continue to push the boundaries of what coffee can be. Our story is still being 
                written — one cup at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center py-8 px-6 bg-stone-800/30 rounded-2xl border border-stone-700/30">
          <blockquote className="text-lg sm:text-xl font-serif italic text-amber-100 mb-3">
            "Coffee is a ritual of presence. We roast to honor that moment."
          </blockquote>
          <p className="text-sm text-amber-200/50">— Sarah Chen, Founder</p>
        </div>
      </div>
    </PageLayout>
  );
}
