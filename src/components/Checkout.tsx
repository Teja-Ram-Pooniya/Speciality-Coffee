import { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onComplete: () => void;
}

export default function Checkout({ isOpen, onClose, cartItems, onComplete }: CheckoutProps) {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvv: '',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleClose = () => {
    if (step === 'success') {
      onComplete();
    }
    setStep('form');
    setFormData({ name: '', email: '', address: '', city: '', zip: '', card: '', expiry: '', cvv: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-stone-900 border border-amber-900/30 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-stone-800/80 hover:bg-stone-700 rounded-full text-amber-200/70 hover:text-amber-100 transition-colors"
        >
          ✕
        </button>

        {step === 'form' && (
          <div className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-50 mb-1">Checkout</h2>
            <p className="text-sm text-amber-200/50 mb-6">Complete your order</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Contact Info */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                  />
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Shipping Address</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Street Address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Payment (Simulated)</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    required
                    value={formData.card}
                    onChange={(e) => setFormData({ ...formData, card: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      required
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      required
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="p-4 bg-stone-800/40 rounded-xl border border-stone-700/30">
                <h3 className="text-xs uppercase tracking-wider text-amber-500/60 mb-3">Order Summary</h3>
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-amber-200/70">{item.product.name} × {item.quantity}</span>
                      <span className="text-amber-100">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-stone-700/30 pt-2 mt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/60">Shipping</span>
                      <span className="text-amber-100">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between font-semibold mt-1">
                      <span className="text-amber-100">Total</span>
                      <span className="text-amber-400">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-xl transition-all shadow-lg shadow-amber-900/30"
              >
                Place Order — ${total.toFixed(2)}
              </button>

              <p className="text-center text-[10px] text-amber-200/30">
                This is a simulated checkout. No real payment will be processed.
              </p>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-4 border-amber-700/30 border-t-amber-500 rounded-full animate-spin mb-6" />
            <h3 className="text-lg font-serif font-bold text-amber-50 mb-2">Processing Order</h3>
            <p className="text-sm text-amber-200/50">Please wait while we confirm your order...</p>
          </div>
        )}

        {step === 'success' && (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-50 mb-2">Order Confirmed!</h3>
            <p className="text-sm text-amber-200/60 mb-2">Thank you for your purchase.</p>
            <p className="text-xs text-amber-200/40 mb-6">A confirmation email has been sent to {formData.email || 'your inbox'}.</p>
            <div className="p-4 bg-stone-800/40 rounded-xl border border-stone-700/30 mb-6 w-full">
              <p className="text-xs text-amber-500/60 mb-1">Order Number</p>
              <p className="text-lg font-mono text-amber-400">#EB-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
            </div>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-xl transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
