"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Truck, ShoppingCart, Heart, Share2, Plus, Minus, ChevronRight, Check } from "lucide-react";
import { useEffect } from "react";
import en from "@/languages/en.json";
import ta from "@/languages/ta.json";
import hi from "@/languages/hi.json";

const translations: Record<string, any> = {
  EN: en,
  TA: ta,
  HI: hi,
};

const productImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBIYakTGLZHnzJqrGY_ax7uQfXVKUca48Rw&s",
  "https://dryfruitshome.com/wp-content/uploads/2019/07/foxtail-millet-thinai.jpg",
  "https://www.pepperhub.in/wp-content/uploads/2024/10/BARNYARD-MILLET.webp",
  "https://article-cdn.prod.gabit.com/media/production/19-04-2024/cd03830b-c598-44cd-93c5-85bce7c54878/6bc943a5-c1e4-42bf-9151-62f00edd3014.png"
];

export default function ProductDetailPage() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
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
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-8">
          <Link href="/" className="hover:text-[var(--olive)] transition-colors">{t.home}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-[var(--olive)] transition-colors">{t.shop}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--olive)]">Premium Barnyard Millet</span>
        </nav>

        <div className="bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row gap-12">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto pb-2 sm:pb-0 scrollbar-hide">
              {productImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative w-20 h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${mainImage === img ? 'border-[var(--olive)] shadow-md' : 'border-transparent hover:border-gray-200'}`}
                >
                  <Image src={img} fill className="object-cover" alt="thumbnail" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative flex-1 aspect-[4/5] sm:aspect-auto sm:h-[600px] rounded-[2rem] overflow-hidden bg-[#faf9f6]">
              <Image src={mainImage} fill className="object-cover transition-transform duration-700 hover:scale-105" alt="Product Main" />
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[var(--olive)] tracking-[0.2em] shadow-sm uppercase z-10">
                {t.product.organic}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-bold text-amber-700">4.8</span>
                <span className="text-[10px] font-bold text-amber-600/60 uppercase tracking-widest ml-1">({t.product.reviews})</span>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">Premium Barnyard Millet</h1>
            <p className="text-gray-500 font-medium mb-6">Authentic, unpolished, and nutrient-dense grains sourced directly from ethical organic farmers.</p>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-extrabold text-[var(--olive)] leading-none">₹299</span>
              <span className="text-lg text-gray-400 font-medium line-through mb-1">₹399</span>
              <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase bg-emerald-50 px-2 py-1 rounded-md mb-1 border border-emerald-100">{t.product.save} 25%</span>
            </div>

            <div className="h-px w-full bg-gray-100 mb-8" />

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-2xl border border-gray-100 w-full sm:w-36 shrink-0">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--olive)] transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-gray-900">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-gray-600 hover:text-[var(--olive)] transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="btn-standard flex-1 rounded-2xl font-bold text-[13px] tracking-widest shadow-lg shadow-[var(--olive)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t.product.add_to_cart}
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#faf9f6] border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-[var(--olive)]" />
                <span className="text-xs font-bold text-gray-700">{t.product.organic}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#faf9f6] border border-gray-100">
                <Truck className="w-6 h-6 text-[var(--olive)]" />
                <span className="text-xs font-bold text-gray-700">{t.product.free_delivery}</span>
              </div>
            </div>

            {/* Description Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">{t.product.details}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Barnyard millet is a wild seed that is grown mainly in the hilly areas of Uttaranchal, India. It is highly nutritious and is an excellent source of dietary fiber, protein, and essential minerals like iron and zinc. Perfect for creating healthy porridges, upmas, and traditional sweets.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]"><Check className="w-3 h-3" /></div>
                  Rich in dietary fiber and low in calories.
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]"><Check className="w-3 h-3" /></div>
                  Good source of highly digestible protein.
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]"><Check className="w-3 h-3" /></div>
                  Gluten-free and ideal for diabetic diets.
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-12 bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.product.customer_reviews}</h2>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xl font-extrabold text-gray-900">4.8</span>
                <span className="text-sm font-medium text-gray-500">Based on 124 reviews</span>
              </div>
            </div>
            <button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="btn-standard rounded-xl font-bold text-[11px] tracking-widest shadow-md shadow-[var(--olive)]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase"
            >
              {showReviewForm ? t.product.cancel_review : t.product.write_review}
            </button>
          </div>

          {showReviewForm && (
            <div className="mb-10 bg-[#faf9f6] rounded-[2rem] p-6 lg:p-8 border border-gray-100 animate-fade-in-up">
              <h3 className="text-lg font-bold text-gray-900 mb-6">{t.product.write_review}</h3>
              <form className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t.product.rating}</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star className={`w-8 h-8 transition-colors ${star <= (hoverRating || rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t.contact_us.full_name}</label>
                    <input type="text" placeholder="John Doe" className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t.contact_us.email}</label>
                    <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t.product.review_title}</label>
                  <input type="text" placeholder="Summarize your experience" className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t.product.review_content}</label>
                  <textarea rows={4} placeholder="What did you like or dislike? What should other shoppers know before buying?" className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm resize-none" />
                </div>

                <button type="button" className="btn-standard rounded-xl font-bold text-[13px] tracking-widest shadow-md shadow-[var(--olive)]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  {t.product.submit_review}
                </button>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#faf9f6] border border-gray-100 transition-all hover:border-[var(--olive)]/30 hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] flex items-center justify-center font-bold text-sm border border-[var(--olive)]/20 shadow-sm">
                      U{i+1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Verified Buyer</h4>
                      <div className="flex items-center mt-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-400">2 days ago</span>
                </div>
                <h5 className="text-sm font-bold text-gray-900 mb-2">"Amazing Quality!"</h5>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Absolutely love this product! The quality is amazing and it arrived perfectly packaged. Will definitely be ordering again. Highly recommend to everyone looking for authentic, organic items.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
