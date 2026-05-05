"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  ChevronDown,
  Star,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Plus,
  Search,
} from "lucide-react";

const categories = [
  {
    name: "Millets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3W9hXiri-fHf-EzAJur1_lfUfGB_aJjucQ&s",
    subcategories: ["Foxtail", "Barnyard", "Finger", "Little", "Pearl"],
  },
  {
    name: "Nuts & Dry Fruits",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5XC7IzZhRYA9FOo2b_aStlaTMAMVXk1cNg&s",
    subcategories: ["Almonds", "Cashews", "Pistachios", "Walnuts", "Dates"],
  },
  {
    name: "Pooja Gifts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbc5zJqjpuhdeju-n_5WRmpLb0U0gjhfEkg&s",
    subcategories: ["Diyas", "Idols", "Thalis", "Incense", "Traditional"],
  },
  {
    name: "Gift Hampers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJ1k52K0JkNpbpeAlH0WD41CSQiIr6YbgfA&s",
    subcategories: ["Festive", "Healthy", "Wedding", "Corporate"],
  },
  {
    name: "Spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    subcategories: ["Turmeric", "Chili", "Pepper", "Cardamom"],
  },
];

const products = [
  // 🌾 MILLETS
  {
    id: 1,
    name: "Premium Foxtail Millet",
    category: "Millets",
    subcategory: "Foxtail",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    image:
      "https://dryfruitshome.com/wp-content/uploads/2019/07/foxtail-millet-thinai.jpg",
    isNew: true,
    weight: "500g",
    isOrganic: true,
    isPremium: true,
    isFestive: false,
    isGiftPack: false,
    occasion: "Daily",
  },
  {
    id: 2,
    name: "Organic Barnyard Millet",
    category: "Millets",
    subcategory: "Barnyard",
    price: 249,
    originalPrice: 320,
    rating: 4.6,
    image:
      "https://www.pepperhub.in/wp-content/uploads/2024/10/BARNYARD-MILLET.webp",
    isNew: false,
    weight: "1kg",
    isOrganic: true,
    isPremium: false,
    isFestive: false,
    isGiftPack: false,
    occasion: "Daily",
  },

  // 🥜 NUTS
  {
    id: 3,
    name: "Premium Almonds",
    category: "Nuts & Dry Fruits",
    subcategory: "Almonds",
    price: 899,
    originalPrice: 1100,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5XC7IzZhRYA9FOo2b_aStlaTMAMVXk1cNg&s",
    isNew: true,
    weight: "500g",
    isOrganic: false,
    isPremium: true,
    isFestive: false,
    isGiftPack: false,
    occasion: "Health",
  },
  {
    id: 4,
    name: "Cashew Whole W320",
    category: "Nuts & Dry Fruits",
    subcategory: "Cashews",
    price: 799,
    originalPrice: 950,
    rating: 4.8,
    image:
      "https://cdn.shopaccino.com/edible-smart/products/cashew--kaju---whole-114906_l.jpg?v=704",
    isNew: false,
    weight: "250g",
    isOrganic: false,
    isPremium: false,
    isFestive: false,
    isGiftPack: false,
    occasion: "Snack",
  },

  // 🪔 POOJA
  {
    id: 5,
    name: "Brass Diya Set",
    category: "Pooja Gifts",
    subcategory: "Diyas",
    price: 1299,
    originalPrice: 1800,
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s",
    isNew: true,
    weight: "200g",
    isOrganic: false,
    isPremium: true,
    isFestive: true,
    isGiftPack: false,
    occasion: "Diwali",
  },
  {
    id: 6,
    name: "Ganesha Idol",
    category: "Pooja Gifts",
    subcategory: "Idols",
    price: 2499,
    originalPrice: 3200,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGmxw4XFiHghlYfvC7Y8LLmUnbtscQEAr7g&s",
    isNew: false,
    weight: "500g",
    isOrganic: false,
    isPremium: true,
    isFestive: false,
    isGiftPack: true,
    occasion: "Ganesh Chaturthi",
  },

  // 🎁 GIFTS
  {
    id: 7,
    name: "Dry Fruits Gift Box",
    category: "Gift Hampers",
    subcategory: "Festive",
    price: 1499,
    originalPrice: 1999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    weight: "1kg",
    isOrganic: false,
    isPremium: true,
    isFestive: true,
    isGiftPack: true,
    occasion: "Wedding",
  },
  {
    id: 8,
    name: "Festival Gift Hamper",
    category: "Gift Hampers",
    subcategory: "Festive",
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLKhWmIcPt_tA10h3MmkjKEbRTzwEw4gQPg&s",
    isNew: true,
    weight: "2kg",
    isOrganic: true,
    isPremium: true,
    isFestive: true,
    isGiftPack: true,
    occasion: "Diwali",
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    price: "",
    weight: "",
    subcategory: "",
    organic: false,
    premium: false,
    festive: false,
    giftPack: false,
    occasion: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const filteredProducts = products.filter((product: any) => {
    const matchesCategory =
      selectedCategory === "All Collections" ||
      product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice =
      !activeFilters.price ||
      (activeFilters.price === "Under 500" && product.price < 500) ||
      (activeFilters.price === "500-1500" &&
        product.price >= 500 &&
        product.price <= 1500) ||
      (activeFilters.price === "Above 1500" && product.price > 1500);

    const matchesWeight =
      !activeFilters.weight || product.weight === activeFilters.weight;
    const matchesSubcategory =
      !activeFilters.subcategory ||
      product.subcategory === activeFilters.subcategory;
    const matchesOrganic = !activeFilters.organic || product.isOrganic;
    const matchesPremium = !activeFilters.premium || product.isPremium;
    const matchesFestive = !activeFilters.festive || product.isFestive;
    const matchesGiftPack = !activeFilters.giftPack || product.isGiftPack;
    const matchesOccasion =
      !activeFilters.occasion || product.occasion === activeFilters.occasion;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesPrice &&
      matchesWeight &&
      matchesSubcategory &&
      matchesOrganic &&
      matchesPremium &&
      matchesFestive &&
      matchesGiftPack &&
      matchesOccasion
    );
  });

  const toggleFilter = (type: string, value: any) => {
    setActiveFilters((prev: any) => ({
      ...prev,
      [type]:
        prev[type] === value
          ? typeof value === "boolean"
            ? false
            : ""
          : value,
    }));
    setCurrentPage(1);
  };

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {/* ── PROFESSIONAL STYLISH HERO SECTION ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzGS-RCay_7ENbCMdq4L8MeXPDhGmM9hOnA&s"
            alt="Shop Premium Traditions"
            fill
            className={`object-cover transition-transform duration-[4000ms] ease-out ${loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/50 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#fafaf9]" />

          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--olive)]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
          <div className="space-y-4">
            <h1
              className={`text-2xl md:text-3xl font-extrabold text-white leading-[0.95] tracking-wide transition-all duration-1000 delay-200 ${loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
              Premium Nuts
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-300">
                & Dry Fruits
              </span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Carefully sourced and hygienically packed nuts for daily nutrition
              and festive needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPACT SEARCH BAR ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-7 relative z-20">
        <div className="relative max-w-lg mx-auto transform transition-all duration-500 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)]"></div>
          <div className="relative flex items-center bg-white border border-stone-100 rounded-2xl p-1.5 shadow-sm">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-4 h-4 text-stone-400 mr-3" />
              <input
                type="text"
                placeholder="Search treasures..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent border-none outline-none text-stone-900 placeholder:text-stone-300 text-[11px] font-bold py-2.5"
              />
            </div>
            <button className="btn-standard rounded-xl text-[9px] font-black tracking-widest uppercase shadow-lg active:scale-95 cursor-pointer">
              Find
            </button>
          </div>
        </div>
      </div>

      {/* ── SHOP CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDEBAR: Flipkart-Style Professional Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-28 bg-white border border-stone-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-white">
                <h3 className="text-base font-bold text-stone-900 tracking-tight">Filters</h3>
                <button 
                  onClick={() => setActiveFilters({
                    price: "",
                    weight: "",
                    subcategory: "",
                    organic: false,
                    premium: false,
                    festive: false,
                    giftPack: false,
                    occasion: "",
                  })}
                  className="text-[11px] font-bold text-stone-400 hover:text-[var(--olive)] transition-colors uppercase tracking-tight cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* ACTIVE FILTERS (Dynamic Tags) */}
              {Object.values(activeFilters).some(v => v === true || (typeof v === 'string' && v !== "")) && (
                <div className="px-4 py-3 flex flex-wrap gap-2 border-b border-stone-50 bg-stone-50/30">
                  {activeFilters.price && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 rounded-sm text-[10px] font-bold text-stone-600 shadow-sm animate-in zoom-in duration-300">
                      {activeFilters.price}
                      <button onClick={() => toggleFilter('price', activeFilters.price)} className="hover:text-stone-900 cursor-pointer"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  )}
                  {activeFilters.weight && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 rounded-sm text-[10px] font-bold text-stone-600 shadow-sm animate-in zoom-in duration-300">
                      {activeFilters.weight}
                      <button onClick={() => toggleFilter('weight', activeFilters.weight)} className="hover:text-stone-900 cursor-pointer"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  )}
                  {activeFilters.subcategory && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 rounded-sm text-[10px] font-bold text-stone-600 shadow-sm animate-in zoom-in duration-300">
                      {activeFilters.subcategory}
                      <button onClick={() => toggleFilter('subcategory', activeFilters.subcategory)} className="hover:text-stone-900 cursor-pointer"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  )}
                  {Object.entries(activeFilters).map(([key, val]) => (
                    typeof val === 'boolean' && val && (
                      <span key={key} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 rounded-sm text-[10px] font-bold text-stone-600 shadow-sm animate-in zoom-in duration-300">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                        <button onClick={() => toggleFilter(key, true)} className="hover:text-stone-900 cursor-pointer"><Plus className="w-3 h-3 rotate-45" /></button>
                      </span>
                    )
                  ))}
                </div>
              )}

              {/* Sections Container */}
              <div className="divide-y divide-stone-100">
                {/* 1. Categories */}
                <div className="px-5 py-5">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4">Categories</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setSelectedCategory("All Collections")}
                      className={`block text-[12px] font-bold transition-colors cursor-pointer ${selectedCategory === "All Collections" ? "text-[var(--olive)]" : "text-stone-500 hover:text-stone-900"}`}
                    >
                      All Collections
                    </button>
                    <div className="pl-4 space-y-3">
                      {categories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => {
                            setSelectedCategory(cat.name);
                            setActiveFilters((prev: any) => ({ ...prev, subcategory: "" }));
                            setCurrentPage(1);
                          }}
                          className={`block text-[12px] font-bold transition-colors cursor-pointer text-left w-full ${selectedCategory === cat.name ? "text-stone-900 font-extrabold" : "text-stone-500 hover:text-stone-900"}`}
                        >
                          {selectedCategory === cat.name && <ChevronRight className="w-3 h-3 inline mr-1 text-stone-400" />}
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subcategories (Dynamic) */}
                {selectedCategory !== "All Collections" && (
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                      <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Subcategories</span>
                      <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 space-y-2.5 animate-in fade-in duration-300">
                      {categories.find(c => c.name === selectedCategory)?.subcategories?.map((sub) => (
                        <label key={sub} className="flex items-center gap-3 cursor-pointer group/label">
                          <input 
                            type="checkbox"
                            checked={activeFilters.subcategory === sub}
                            onChange={() => toggleFilter("subcategory", sub)}
                            className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--olive)] focus:ring-0 cursor-pointer"
                          />
                          <span className={`text-[12px] font-medium transition-colors ${activeFilters.subcategory === sub ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}>
                            {sub}
                          </span>
                        </label>
                      ))}
                    </div>
                  </details>
                )}

                {/* 2. Price Range */}
                <details className="group" open>
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                    <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Price</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 space-y-2.5 animate-in fade-in duration-300">
                    {["Under 500", "500-1500", "Above 1500"].map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer group/label">
                        <input 
                          type="checkbox"
                          checked={activeFilters.price === range}
                          onChange={() => toggleFilter("price", range)}
                          className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--olive)] focus:ring-0 cursor-pointer"
                        />
                        <span className={`text-[12px] font-medium transition-colors ${activeFilters.price === range ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}>
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </details>

                {/* 3. Weight / Packaging */}
                <details className="group" open>
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                    <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Weight</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 grid grid-cols-2 gap-2 animate-in fade-in duration-300">
                    {["250g", "500g", "1kg", "2kg"].map((w) => (
                      <button
                        key={w}
                        onClick={() => toggleFilter("weight", w)}
                        className={`py-2 rounded-sm text-[11px] font-bold border transition-all cursor-pointer ${activeFilters.weight === w
                          ? "bg-stone-900 text-white border-stone-900"
                          : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 shadow-sm"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </details>

                {/* 4. Specialty Toggles */}
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                    <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Specialty</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 space-y-3 animate-in fade-in duration-300">
                    {[
                      { label: "Organic", key: "organic" },
                      { label: "Premium", key: "premium" },
                      { label: "Festive", key: "festive" },
                      { label: "Gift Pack", key: "giftPack" },
                    ].map((f) => (
                      <label key={f.key} className="flex items-center gap-3 cursor-pointer group/label">
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox"
                            checked={(activeFilters as any)[f.key]}
                            onChange={() => toggleFilter(f.key, !(activeFilters as any)[f.key])}
                            className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--olive)] focus:ring-0 cursor-pointer"
                          />
                        </div>
                        <span className={`text-[12px] font-medium transition-colors ${(activeFilters as any)[f.key] ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}>
                          {f.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </details>

                {/* 5. Occasion */}
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                    <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Occasion</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 animate-in fade-in duration-300">
                    <select
                      value={activeFilters.occasion}
                      onChange={(e) => toggleFilter("occasion", e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-sm px-3 py-2 text-[11px] font-bold text-stone-600 uppercase focus:outline-none cursor-pointer appearance-none"
                    >
                      <option value="">Select Occasion</option>
                      <option value="Daily">Daily Rituals</option>
                      <option value="Diwali">Diwali Lights</option>
                      <option value="Wedding">Wedding Celebrations</option>
                      <option value="Health">Healthy Choice</option>
                    </select>
                  </div>
                </details>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT: Refined Product Grid */}
          <div className="flex-1 space-y-12">
            {/* Status Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-gray-100">
              <div className="space-y-1">
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  CURRENT SELECTION
                </p>
                <h2 className="text-xl font-semibold text-gray-900 capitalize">
                  {selectedCategory}
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-[11px] font-bold text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
                  Showing {paginatedProducts.length} Treasures
                </div>
              </div>
            </div>

            {/* High Density Grid (4-columns for Professional look) */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
              {paginatedProducts.map((product) => (
                <Link
                  href={
                    product.category.includes("Gift")
                      ? "/gift-detail"
                      : "/product-detail"
                  }
                  key={product.id}
                  className="group relative bg-white border border-gray-100/50 rounded-[2rem] p-3 block transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-gray-200"
                >
                  {/* Reduced Card Header (Image) */}
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#FCFBF9]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
                    />

                    <div className="absolute top-3 inset-x-3 flex justify-between items-start">
                      {product.isNew ? (
                        <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-bold text-[var(--olive)] tracking-widest shadow-sm">
                          NEW
                        </span>
                      ) : (
                        <div />
                      )}
                      <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-300 hover:text-red-500 transition-all transform hover:scale-110 active:scale-95 cursor-pointer">
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Quick Interaction Overlay */}
                    <div className="absolute inset-x-3 bottom-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-full bg-[var(--cream)] text-black py-3 rounded-xl font-bold text-[9px] tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-[var(--olive)] hover:text-white active:scale-95 transition-all cursor-pointer">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        ADD TO CART
                      </button>
                    </div>
                  </div>

                  {/* Refined Metadata Area */}
                  <div className="p-3 pt-5 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <span className="text-[10px] font-bold text-gray-400">
                          {product.rating}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors line-clamp-1 leading-tight">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[var(--olive)] hover:text-white transition-all shadow-sm">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION (Professional style) */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-16">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="px-6 py-3 rounded-full border border-gray-100 bg-white text-[10px] font-bold tracking-widest text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-all flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  PREVIOUS
                </button>
                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full font-bold text-[10px] transition-all border ${currentPage === i + 1
                          ? "bg-[var(--olive)] text-white border-[var(--olive)] shadow-lg shadow-emerald-900/10"
                          : "bg-white text-gray-400 border-gray-100 hover:border-gray-200"
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-6 py-3 rounded-full border border-gray-100 bg-white text-[10px] font-bold tracking-widest text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-all flex items-center gap-2"
                >
                  NEXT
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-[#F8EDEE] relative overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/30 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#f1cfd3]/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        {/* Glass Container */}
        <div className="relative z-10 w-full max-w-4xl mx-4 rounded-[2.5rem] border border-white/40 bg-white/40 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Inner Border */}
          <div className="absolute inset-3 rounded-[2rem] border border-white/50 pointer-events-none" />

          <div className="relative text-center space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 text-[#6d4c4f]">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#6d4c4f]/50"></span>
              <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#b07a80]">
                Sacred Essentials
              </p>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#6d4c4f]/50"></span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-[#3f2f30] tracking-tight leading-snug">
              Embrace The <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6b8bd] via-[#f0cdd1] to-[#d8a1a8]">
                Spiritual Journey
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#6b5b5c] max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
              Discover thoughtfully crafted pooja essentials that enrich your
              daily rituals and festive celebrations with devotion and elegance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
