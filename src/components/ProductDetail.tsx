import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  const roastBg = product.roast === 'Light'
    ? 'from-amber-100/20 to-amber-200/10'
    : product.roast === 'Medium'
    ? 'from-amber-800/20 to-amber-900/10'
    : 'from-stone-700/30 to-stone-800/20';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-amber-900/30 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-stone-800/80 hover:bg-stone-700 rounded-full text-amber-200/70 hover:text-amber-100 transition-colors"
        >
          ✕
        </button>

        {/* Image Area */}
        <div className={`h-56 sm:h-72 bg-gradient-to-br ${roastBg} flex items-center justify-center relative`}>
          <span className="text-8xl sm:text-9xl">{product.emoji}</span>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              product.roast === 'Light'
                ? 'bg-amber-200/20 text-amber-100 border border-amber-300/30'
                : product.roast === 'Medium'
                ? 'bg-amber-600/20 text-amber-200 border border-amber-500/30'
                : 'bg-stone-500/20 text-stone-200 border border-stone-400/30'
            }`}>
              {product.roast} Roast
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-900/50 text-amber-200/70 border border-stone-700/30">
              {product.weight}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-900/50 text-amber-200/70 border border-stone-700/30">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">{product.origin}</p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
                {product.name}
              </h2>
            </div>
            <p className="text-3xl font-bold text-amber-400 whitespace-nowrap">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-amber-200/70 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Tasting Notes */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Tasting Notes</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.map((note) => (
                <span key={note} className="px-3 py-1.5 bg-amber-900/20 text-amber-200/80 text-sm rounded-full border border-amber-800/30">
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Brewing Suggestions */}
          <div className="mb-8 p-4 bg-stone-800/40 rounded-xl border border-stone-700/30">
            <h4 className="text-xs uppercase tracking-wider text-amber-500/60 mb-2">Brewing Suggestions</h4>
            <div className="flex flex-wrap gap-3 text-sm text-amber-200/60">
              <span className="flex items-center gap-1">☕ Pour Over</span>
              <span className="flex items-center gap-1">🫖 French Press</span>
              <span className="flex items-center gap-1">⚡ Espresso</span>
              <span className="flex items-center gap-1">🧊 Cold Brew</span>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => {
              onAddToCart(product, 1);
              onClose();
            }}
            className="w-full py-3.5 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-xl transition-all shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart — ${product.price.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
