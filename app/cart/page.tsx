"use client";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
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
    <main className="min-h-screen bg-[#faf9f6] pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">{t.cart.title} <span className="text-gray-400 text-xl font-medium ml-2">(2 {t.cart.items})</span></h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            {/* Item 1 */}
            <div className="bg-white rounded-[2rem] p-4 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-6 relative group transition-all hover:border-[var(--olive)]/30">
              <div className="relative w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-gray-50 shrink-0">
                <Image src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=200&auto=format&fit=crop" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="product" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900">Premium Dry Fruits Box</h3>
                    <button className="text-gray-300 hover:text-red-500 transition-colors p-1">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Assorted premium quality</p>
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
                  <span className="text-xl font-bold text-[var(--olive)]">₹1,499</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-[2rem] p-4 sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-6 relative group transition-all hover:border-[var(--olive)]/30">
              <div className="relative w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-gray-50 shrink-0">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="product" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900">Brass Diya Set</h3>
                    <button className="text-gray-300 hover:text-red-500 transition-colors p-1">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Handcrafted pooja essential</p>
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
                  <span className="text-xl font-bold text-[var(--olive)]">₹2,598</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 sticky top-28">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t.cart.summary}</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">{t.cart.subtotal} (2 {t.cart.items})</span>
                  <span className="font-bold text-gray-900">₹4,097</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">{t.cart.shipping}</span>
                  <span className="font-bold text-emerald-500">{t.cart.free}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">{t.cart.tax_gst}</span>
                  <span className="font-bold text-gray-900">₹150</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 mb-6 w-full" />

              <div className="flex justify-between items-end mb-8">
                <span className="text-base font-bold text-gray-900">{t.cart.total}</span>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-[var(--olive)] block leading-none">₹4,247</span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1 block">{t.cart.inclusive_tax}</span>
                </div>
              </div>

              <Link href="/checkout" className="w-full py-4 rounded-xl bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-lg shadow-[var(--olive)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                {t.cart.checkout}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                <ShieldCheck className="w-4 h-4" /> {t.cart.secure_payment}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}