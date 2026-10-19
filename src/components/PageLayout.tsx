interface PageLayoutProps {
  title: string;
  subtitle: string;
  emoji: string;
  onBack: () => void;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, emoji, onBack, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-amber-200/70 hover:text-amber-100 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back to Shop</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xl">☕</span>
              <span className="font-serif font-bold text-amber-50 text-sm sm:text-base">Ember & Bloom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-stone-950 to-stone-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <span className="text-5xl sm:text-6xl mb-4 block">{emoji}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-50 mb-3">
            {title}
          </h1>
          <p className="text-sm sm:text-lg text-amber-200/50 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800/60 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-xl transition-all shadow-lg shadow-amber-900/30"
          >
            ← Back to Shop
          </button>
          <p className="text-xs text-amber-200/30 mt-6">
            © 2026 Ember & Bloom Coffee Roasters. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
