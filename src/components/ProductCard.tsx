import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const roastBg = product.roast === 'Light'
    ? 'from-amber-100/20 to-amber-200/10'
    : product.roast === 'Medium'
    ? 'from-amber-800/20 to-amber-900/10'
    : 'from-stone-700/30 to-stone-800/20';

  return (
    <div className="group bg-stone-800/40 backdrop-blur-sm border border-amber-900/20 rounded-2xl overflow-hidden hover:border-amber-700/40 hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-300">
      {/* Product Image Area */}
      <div
        className={`relative h-48 sm:h-56 bg-gradient-to-br ${roastBg} flex items-center justify-center cursor-pointer`}
        onClick={() => onViewDetails(product)}
      >
        <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300">
          {product.emoji}
        </span>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${
            product.roast === 'Light'
              ? 'bg-amber-200/20 text-amber-100 border border-amber-300/30'
              : product.roast === 'Medium'
              ? 'bg-amber-600/20 text-amber-200 border border-amber-500/30'
              : 'bg-stone-500/20 text-stone-200 border border-stone-400/30'
          }`}>
            {product.roast} Roast
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-stone-900/50 text-amber-200/70 border border-stone-700/30">
            {product.weight}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p className="text-[10px] sm:text-xs text-amber-500/60 uppercase tracking-wider mb-0.5">{product.origin}</p>
            <h3 className="text-sm sm:text-base font-serif font-semibold text-amber-50 group-hover:text-amber-100 transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-lg sm:text-xl font-bold text-amber-400 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Tasting Notes */}
        <div className="flex flex-wrap gap-1 mt-3 mb-4">
          {product.notes.slice(0, 3).map((note) => (
            <span key={note} className="px-2 py-0.5 bg-stone-700/40 text-amber-200/60 text-[10px] sm:text-xs rounded-full">
              {note}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 px-3 py-2 text-xs sm:text-sm text-amber-200/70 bg-stone-700/30 hover:bg-stone-700/50 border border-stone-600/30 rounded-lg transition-all"
          >
            Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 px-3 py-2 text-xs sm:text-sm font-medium text-amber-50 bg-amber-700/80 hover:bg-amber-600/80 rounded-lg transition-all shadow-md shadow-amber-900/20"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
