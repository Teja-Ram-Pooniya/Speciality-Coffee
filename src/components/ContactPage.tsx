import { useState } from 'react';
import PageLayout from './PageLayout';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you — questions, feedback, or just to say hello"
      emoji="💬"
      onBack={onBack}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="p-6 sm:p-8 bg-stone-800/40 rounded-2xl border border-amber-900/20">
          {!submitted ? (
            <>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-amber-200/60 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-amber-200/60 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-amber-200/60 mb-1">Subject</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-amber-200/60 mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-800/60 border border-stone-700/50 rounded-lg text-amber-50 placeholder-amber-200/30 focus:outline-none focus:ring-2 focus:ring-amber-600/50 text-sm resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-medium rounded-xl transition-all shadow-lg shadow-amber-900/30 text-sm"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">Message Sent!</h3>
              <p className="text-sm text-amber-200/60 mb-4">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30">
            <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-sm font-medium text-amber-100">Visit Our Roastery</p>
                  <p className="text-xs text-amber-200/50">123 Coffee Lane, Portland, OR 97201</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-sm font-medium text-amber-100">Email Us</p>
                  <p className="text-xs text-amber-200/50">hello@emberandbloom.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-sm font-medium text-amber-100">Call Us</p>
                  <p className="text-xs text-amber-200/50">(503) 555-BREW</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="text-sm font-medium text-amber-100">Hours</p>
                  <p className="text-xs text-amber-200/50">Mon-Fri: 7am-6pm</p>
                  <p className="text-xs text-amber-200/50">Sat-Sun: 8am-4pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30">
            <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">Quick Help</h3>
            <div className="space-y-2">
              {[
                'Where is my order?',
                'Return & exchange policy',
                'Wholesale inquiries',
                'Partnership opportunities',
                'Careers at Ember & Bloom',
              ].map((link) => (
                <div key={link} className="flex items-center gap-2 text-sm text-amber-200/60 hover:text-amber-200 cursor-pointer transition-colors">
                  <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="p-6 bg-stone-800/30 rounded-2xl border border-stone-700/30">
            <h3 className="text-lg font-serif font-bold text-amber-100 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {['📸 Instagram', '🐦 Twitter', '📘 Facebook'].map((social) => (
                <span key={social} className="px-3 py-2 bg-stone-700/30 rounded-lg text-xs text-amber-200/60 hover:bg-stone-700/50 hover:text-amber-200 cursor-pointer transition-all">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
