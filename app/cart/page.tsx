"use client";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, X, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import en from "@/languages/en.json";
import ta from "@/languages/ta.json";
import hi from "@/languages/hi.json";

const translations: Record<string, any> = {
  EN: en,
  TA: ta,
  HI: hi,
};

export default function CartPage() {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [selectedAddon, setSelectedAddon] = useState("none");
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang && translations[savedLang]) {
      setSelectedLang(savedLang);
    }

    const handleLangChange = () => {
      const lang = localStorage.getItem("selectedLang");
      if (lang && translations[lang]) {
        setSelectedLang(lang);
      }
    };

    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const t = translations[selectedLang] || translations["EN"];

  return (
    <>
      <main className="min-h-screen bg-[#faf9f6] pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-8">
          {t.cart.title}{" "}
          <span className="text-gray-400 text-xl font-medium ml-2">
            (2 {t.cart.items})
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            {/* Item 1 */}
            <div className="bg-white rounded-[1.5rem] p-3 sm:p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-4 relative group transition-all hover:border-[var(--olive)]/30">
              <div className="relative w-full sm:w-24 aspect-square rounded-xl overflow-hidden bg-gray-50 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=200&auto=format&fit=crop"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="product"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      Premium Dry Fruits Box
                    </h3>
                    <button className="text-gray-300 hover:text-red-500 transition-colors p-1">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Assorted premium quality
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 sm:mt-0">
                  <div className="flex items-center gap-4 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                    <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--olive)] transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">1</span>
                    <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--olive)] transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xl font-bold text-[var(--olive)]">
                    ₹1,499
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-[1.5rem] p-3 sm:p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-4 relative group transition-all hover:border-[var(--olive)]/30">
              <div className="relative w-full sm:w-24 aspect-square rounded-xl overflow-hidden bg-gray-50 shrink-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="product"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      Brass Diya Set
                    </h3>
                    <button className="text-gray-300 hover:text-red-500 transition-colors p-1">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Handcrafted pooja essential
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 sm:mt-0">
                  <div className="flex items-center gap-4 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                    <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--olive)] transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">2</span>
                    <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--olive)] transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xl font-bold text-[var(--olive)]">
                    ₹2,598
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 sticky top-28">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {t.cart.summary}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    {t.cart.subtotal} (2 {t.cart.items})
                  </span>
                  <span className="font-bold text-gray-900">₹4,097</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    {t.cart.shipping}
                  </span>
                  <span className="font-bold text-emerald-500">
                    {t.cart.free}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    {t.cart.tax_gst}
                  </span>
                  <span className="font-bold text-gray-900">₹150</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 mb-6 w-full" />

              <div className="flex justify-between items-end mb-8">
                <span className="text-base font-bold text-gray-900">
                  {t.cart.total}
                </span>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-[var(--olive)] block leading-none">
                    ₹4,247
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1 block">
                    {t.cart.inclusive_tax}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowGiftModal(true)}
                className="w-full py-4 rounded-xl bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-lg shadow-[var(--olive)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                {t.cart.checkout}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                <ShieldCheck className="w-4 h-4" /> {t.cart.secure_payment}
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>

      {/* Gift Message Modal */}
    {showGiftModal && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in`}
          onClick={() => setShowGiftModal(false)}
        />
        
        {/* Modal Content */}
        <div className="relative w-full max-w-md bg-white rounded-none shadow-2xl overflow-hidden animate-scale-up">
          <div className="p-6 md:p-8">
            {/* Close Button */}
            <button 
              onClick={() => setShowGiftModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f4f7f4] flex items-center justify-center mx-auto mb-3 border border-[#e8efe8]">
                <ShieldCheck className="w-5 h-5 text-[#4a5d23]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Luxury Gifting Services</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">Make your tradition even more memorable</p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
              {/* Standard Wrap */}
              <button 
                type="button"
                onClick={() => setSelectedAddon('standard')}
                className={`relative p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center ${selectedAddon === 'standard' ? 'border-[var(--olive)] bg-[#fdfdfc]' : 'border-gray-50 bg-gray-50/50 hover:border-gray-100'}`}
              >
                <div className={`absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAddon === 'standard' ? 'border-[var(--olive)]' : 'border-gray-200'}`}>
                  {selectedAddon === 'standard' && <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--olive)]" />}
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-sm text-lg sm:text-xl">
                  🎁
                </div>
                <h4 className="text-[10px] sm:text-[11px] font-bold text-gray-900 leading-tight">Standard Wrap</h4>
                <p className="text-[8px] sm:text-[9px] font-bold text-[var(--olive)] uppercase tracking-wider mt-1">Add for ₹49</p>
              </button>

              {/* Luxury Premium */}
              <button 
                type="button"
                onClick={() => setSelectedAddon('premium')}
                className={`relative p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center ${selectedAddon === 'premium' ? 'border-[var(--olive)] bg-[#fdfdfc]' : 'border-gray-50 bg-gray-50/50 hover:border-gray-100'}`}
              >
                <div className={`absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAddon === 'premium' ? 'border-[var(--olive)]' : 'border-gray-200'}`}>
                  {selectedAddon === 'premium' && <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--olive)]" />}
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-sm text-lg sm:text-xl">
                  ✨
                </div>
                <h4 className="text-[10px] sm:text-[11px] font-bold text-gray-900 leading-tight">Luxury Premium</h4>
                <p className="text-[8px] sm:text-[9px] font-bold text-[var(--olive)] uppercase tracking-wider mt-1">Add for ₹99</p>
              </button>

              {/* Eco Friendly */}
              <button 
                type="button"
                onClick={() => setSelectedAddon('eco')}
                className={`relative p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center ${selectedAddon === 'eco' ? 'border-[var(--olive)] bg-[#fdfdfc]' : 'border-gray-50 bg-gray-50/50 hover:border-gray-100'}`}
              >
                <div className={`absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAddon === 'eco' ? 'border-[var(--olive)]' : 'border-gray-200'}`}>
                  {selectedAddon === 'eco' && <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--olive)]" />}
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-sm text-lg sm:text-xl">
                  🌿
                </div>
                <h4 className="text-[10px] sm:text-[11px] font-bold text-gray-900 leading-tight">Eco Friendly</h4>
                <p className="text-[8px] sm:text-[9px] font-bold text-[var(--olive)] uppercase tracking-wider mt-1">Add for ₹79</p>
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                Handwritten Note
              </label>
              <div className="relative">
                <textarea 
                  rows={2} 
                  placeholder="Enter your heartfelt message here..." 
                  className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-gray-100 focus:border-[#556B2F] focus:ring-4 focus:ring-[#556B2F]/10 outline-none text-xs font-medium text-gray-800 placeholder:text-gray-400 resize-none transition-all shadow-inner"
                ></textarea>
                <span className="absolute bottom-3 right-4 text-[9px] font-extrabold text-gray-300 uppercase tracking-widest pointer-events-none">
                  Optional
                </span>
              </div>
            </div>

            <button 
              onClick={() => {
                setShowGiftModal(false);
                router.push('/checkout');
              }}
              className="w-full py-3.5 rounded-xl bg-[var(--olive)] text-white font-bold text-xs tracking-wide shadow-lg shadow-[#4a5d23]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center cursor-pointer"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
