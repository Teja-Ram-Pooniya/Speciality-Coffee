import { useState, useMemo } from 'react';
import { Product, CartItem } from './types';
import { products, categories, roastLevels } from './data/products';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoast, setSelectedRoast] = useState('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.notes.some((note) => note.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const matchesRoast =
        selectedRoast === 'All' || product.roast === selectedRoast;

      return matchesSearch && matchesCategory && matchesRoast;
    });
  }, [searchQuery, selectedCategory, selectedRoast]);

  // Cart functions
  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setAddedToast(product.name);
    setTimeout(() => setAddedToast(null), 2000);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutComplete = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      {/* Header */}
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-stone-950 to-stone-950" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(217, 119, 6, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(180, 83, 9, 0.2) 0%, transparent 50%)`
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-500/60 mb-3 sm:mb-4">
            Artisan Roasted · Ethically Sourced
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-amber-50 mb-4 sm:mb-6 leading-tight">
            Coffee, <span className="text-amber-400">Crafted</span> with<br className="hidden sm:block" /> Intention
          </h2>
          <p className="text-sm sm:text-lg text-amber-200/50 max-w-2xl mx-auto leading-relaxed">
            From the world's finest growing regions to your cup — each bean is carefully selected,
            roasted in small batches, and delivered at peak freshness.
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10 text-amber-200/40 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Freshly Roasted
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Free Shipping $50+
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Direct Trade
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-amber-100">
              Our Coffees
            </h3>
            <span className="text-xs text-amber-200/40">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'coffee' : 'coffees'}
            </span>
          </div>
          <FilterBar
            categories={categories}
            roastLevels={roastLevels}
            selectedCategory={selectedCategory}
            selectedRoast={selectedRoast}
            onCategoryChange={setSelectedCategory}
            onRoastChange={setSelectedRoast}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block opacity-40">🔍</span>
            <p className="text-amber-200/50 text-lg mb-2">No coffees found</p>
            <p className="text-amber-200/30 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800/60 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">☕</span>
                <span className="font-serif font-bold text-amber-50">Ember & Bloom</span>
              </div>
              <p className="text-xs text-amber-200/40 leading-relaxed">
                Specialty coffee roasters dedicated to bringing you the world's finest beans,
                roasted with care and delivered with love.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-200/50">
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Our Story</li>
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Brewing Guides</li>
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Subscriptions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-amber-200/50">
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Twitter</li>
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Newsletter</li>
                <li className="hover:text-amber-200/80 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800/40 mt-8 pt-6 text-center">
            <p className="text-xs text-amber-200/30">
              © 2026 Ember & Bloom Coffee Roasters. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onComplete={handleCheckoutComplete}
      />

      {/* Added to Cart Toast */}
      {addedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-emerald-800/90 backdrop-blur-sm border border-emerald-600/30 rounded-full shadow-xl flex items-center gap-2 animate-bounce">
          <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm text-emerald-50 font-medium">{addedToast} added to cart</span>
        </div>
      )}
    </div>
  );
}
