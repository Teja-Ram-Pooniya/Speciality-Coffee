interface FilterBarProps {
  categories: string[];
  roastLevels: string[];
  selectedCategory: string;
  selectedRoast: string;
  onCategoryChange: (category: string) => void;
  onRoastChange: (roast: string) => void;
}

export default function FilterBar({
  categories,
  roastLevels,
  selectedCategory,
  selectedRoast,
  onCategoryChange,
  onRoastChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-amber-700 text-amber-50 shadow-md shadow-amber-900/20'
                : 'bg-stone-800/60 text-amber-200/70 hover:bg-stone-700/60 hover:text-amber-100 border border-stone-700/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-6 bg-amber-900/30" />

      {/* Roast Level Filter */}
      <div className="flex flex-wrap gap-2">
        {roastLevels.map((roast) => (
          <button
            key={roast}
            onClick={() => onRoastChange(roast)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
              selectedRoast === roast
                ? 'bg-amber-700 text-amber-50 shadow-md shadow-amber-900/20'
                : 'bg-stone-800/60 text-amber-200/70 hover:bg-stone-700/60 hover:text-amber-100 border border-stone-700/50'
            }`}
          >
            {roast !== 'All' && (
              <span className={`w-2 h-2 rounded-full ${
                roast === 'Light' ? 'bg-amber-300' : roast === 'Medium' ? 'bg-amber-600' : 'bg-stone-600'
              }`} />
            )}
            {roast}
          </button>
        ))}
      </div>
    </div>
  );
}
