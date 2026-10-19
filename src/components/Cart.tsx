import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-stone-950/60 backdrop-blur-sm" onClick={onClose} />
      )}

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-stone-900 border-l border-amber-900/30 shadow-2xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800/60">
            <h2 className="text-lg font-serif font-bold text-amber-50 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Your Cart
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-stone-800 hover:bg-stone-700 rounded-full text-amber-200/70 hover:text-amber-100 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-5xl mb-4 opacity-40">🛒</span>
                <p className="text-amber-200/50 text-sm">Your cart is empty</p>
                <p className="text-amber-200/30 text-xs mt-1">Add some delicious coffee!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3 p-3 bg-stone-800/40 rounded-xl border border-stone-700/30">
                    {/* Product Emoji */}
                    <div className="w-14 h-14 flex items-center justify-center bg-stone-700/30 rounded-lg shrink-0">
                      <span className="text-2xl">{item.product.emoji}</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-amber-50 truncate">{item.product.name}</h4>
                      <p className="text-xs text-amber-200/50">{item.product.origin} · {item.product.weight}</p>
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-stone-700/50 hover:bg-stone-600/50 rounded text-amber-200/70 text-sm transition-colors"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm text-amber-100 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-stone-700/50 hover:bg-stone-600/50 rounded text-amber-200/70 text-sm transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-semibold text-amber-400">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="self-start text-amber-200/30 hover:text-red-400 transition-colors p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer / Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-800/60 px-6 py-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-amber-200/60">Subtotal</span>
                <span className="text-amber-100">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-amber-200/60">Shipping</span>
                <span className="text-amber-100">
                  {shipping === 0 ? (
                    <span className="text-emerald-400">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-[10px] text-amber-500/50">Free shipping on orders over $50</p>
              )}
              <div className="flex justify-between text-base font-semibold pt-2 border-t border-stone-700/30">
                <span className="text-amber-100">Total</span>
                <span className="text-amber-400">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-xl transition-all shadow-lg shadow-amber-900/30 mt-2"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
