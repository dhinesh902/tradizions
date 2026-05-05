"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Filter,
  ChevronDown,
  Search,
  Plus,
} from "lucide-react";

const products = [
  {
    id: 5,
    name: "Premium Brass Diya Set",
    category: "Pooja Gifts",
    price: 1299,
    originalPrice: 1800,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s",
    isNew: true,
  },
  {
    id: 6,
    name: "Handcrafted Ganesha Idol",
    category: "Pooja Gifts",
    price: 2499,
    originalPrice: 3200,
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGmxw4XFiHghlYfvC7Y8LLmUnbtscQEAr7g&s",
    isNew: false,
  },
  {
    id: 11,
    name: "Silver Plated Pooja Thali",
    category: "Pooja Gifts",
    price: 1899,
    originalPrice: 2500,
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbc5zJqjpuhdeju-n_5WRmpLb0U0gjhfEkg&s",
    isNew: true,
  },
  {
    id: 12,
    name: "Incense & Fragrance Box",
    category: "Pooja Gifts",
    price: 899,
    originalPrice: 1200,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJ1k52K0JkNpbpeAlH0WD41CSQiIr6YbgfA&s",
    isNew: false,
  },
];

export default function PoojaGiftsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Pooja Gifts");
  const [activeFilters, setActiveFilters] = useState({
    price: "",
    subcategory: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const categories = [
    {
      name: "Pooja Gifts",
      subcategories: ["Diyas", "Idols", "Thalis", "Incense", "Traditional"],
    },
    {
      name: "Gift Hampers",
      subcategories: ["Festive", "Healthy", "Wedding"],
    },
    {
      name: "Spices",
      subcategories: ["Turmeric", "Chili", "Pepper"],
    }
  ];

  const toggleFilter = (type: string, value: any) => {
    setActiveFilters((prev: any) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product: any) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSubcategory = !activeFilters.subcategory || product.subcategory === activeFilters.subcategory;
    const matchesPrice = !activeFilters.price || (
      (activeFilters.price === "Under 1000" && product.price < 1000) ||
      (activeFilters.price === "1000-2500" && product.price >= 1000 && product.price <= 2500) ||
      (activeFilters.price === "Above 2500" && product.price > 2500)
    );
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Top Rated") return b.rating - a.rating;
    return 0; // Featured
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* ── PROFESSIONAL STYLISH HERO SECTION ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzGS-RCay_7ENbCMdq4L8MeXPDhGmM9hOnA&s"
            alt="Divine Pooja Essentials"
            fill
            className={`object-cover transition-transform duration-[4000ms] ease-out ${loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fafaf9]" />

          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-200/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="relative z-10 text-center space-y-6 px-6 max-w-4xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 mb-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-amber-200">
                Divine Collections
              </p>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
              Everything for Your Daily{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-300 tracking-wider">
                Pooja & Festivals
              </span>
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Complete range of pure and traditional pooja essentials.
            </p>
          </div>
        </div>
      </section>

      {/* ── POOJA GIFTS CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR: Flipkart-Style Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-28 bg-white border border-stone-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-white">
                <h3 className="text-base font-bold text-stone-900 tracking-tight">Filters</h3>
                <button 
                  onClick={() => {
                    setSelectedCategory("Pooja Gifts");
                    setActiveFilters({ price: "", subcategory: "" });
                  }}
                  className="text-[11px] font-bold text-stone-400 hover:text-amber-600 transition-colors uppercase tracking-tight cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* ACTIVE FILTERS (Dynamic Tags) */}
              {Object.values(activeFilters).some(v => v !== "") && (
                <div className="px-4 py-3 flex flex-wrap gap-2 border-b border-stone-50 bg-stone-50/30">
                  {activeFilters.price && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 rounded-sm text-[10px] font-bold text-stone-600 shadow-sm animate-in zoom-in duration-300">
                      {activeFilters.price}
                      <button onClick={() => toggleFilter('price', activeFilters.price)} className="hover:text-stone-900 cursor-pointer"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  )}
                  {activeFilters.subcategory && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 rounded-sm text-[10px] font-bold text-stone-600 shadow-sm animate-in zoom-in duration-300">
                      {activeFilters.subcategory}
                      <button onClick={() => toggleFilter('subcategory', activeFilters.subcategory)} className="hover:text-stone-900 cursor-pointer"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  )}
                </div>
              )}

              {/* Sections */}
              <div className="divide-y divide-stone-100">
                {/* 1. Categories */}
                <div className="px-5 py-5">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4">Categories</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setSelectedCategory("All")}
                      className={`block text-[12px] font-bold transition-colors cursor-pointer ${selectedCategory === "All" ? "text-amber-600" : "text-stone-500 hover:text-stone-900"}`}
                    >
                      All Collections
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setActiveFilters(p => ({ ...p, subcategory: "" }));
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

                {/* Subcategories */}
                {selectedCategory !== "All" && (
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                      <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Subcategories</span>
                      <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 space-y-2.5 animate-in fade-in duration-300">
                      {categories.find(c => c.name === selectedCategory)?.subcategories.map((sub) => (
                        <label key={sub} className="flex items-center gap-3 cursor-pointer group/label">
                          <input 
                            type="checkbox"
                            checked={activeFilters.subcategory === sub}
                            onChange={() => toggleFilter("subcategory", sub)}
                            className="w-3.5 h-3.5 border-stone-300 rounded-sm text-amber-600 focus:ring-0 cursor-pointer"
                          />
                          <span className={`text-[12px] font-medium transition-colors ${activeFilters.subcategory === sub ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}>
                            {sub}
                          </span>
                        </label>
                      ))}
                    </div>
                  </details>
                )}

                {/* Price */}
                <details className="group" open>
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
                    <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">Price Range</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 space-y-2.5 animate-in fade-in duration-300">
                    {["Under 1000", "1000-2500", "Above 2500"].map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer group/label">
                        <input 
                          type="checkbox"
                          checked={activeFilters.price === range}
                          onChange={() => toggleFilter("price", range)}
                          className="w-3.5 h-3.5 border-stone-300 rounded-sm text-amber-600 focus:ring-0 cursor-pointer"
                        />
                        <span className={`text-[12px] font-medium transition-colors ${activeFilters.price === range ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}>
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT: Products Grid */}
          <div className="flex-1 space-y-12">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              {/* Integrated Search & Stats Bar */}
              <div className="flex-1 relative flex items-center bg-white border border-stone-200 rounded-2xl shadow-sm px-5 py-3 transition-all hover:border-amber-200">
                <Search className="h-4 w-4 text-stone-300 mr-4" />
                <input
                  type="text"
                  placeholder="Search divine items..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-transparent text-xs font-bold text-stone-700 outline-none w-full placeholder:text-stone-300"
                />
                <div className="hidden sm:block w-[1px] h-6 bg-stone-100 mx-4" />
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-stone-400 whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {paginatedProducts.length} Sacred Items
                </div>
              </div>

              {/* Premium Sort Button */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="px-6 py-3.5 border border-stone-200 bg-white w-full flex items-center justify-center gap-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all cursor-pointer shadow-sm group"
                >
                  <Filter className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                  <span>{sortBy}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`} />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-stone-100 rounded-2xl shadow-lg z-30 py-3 overflow-hidden animate-scale-in">
                    {["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsFilterOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-6 py-3 text-[10px] font-black tracking-wider uppercase transition-all hover:bg-amber-50 ${sortBy === option ? "text-amber-600 bg-amber-50/50" : "text-stone-500"
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
              {paginatedProducts.map((product) => (
            <Link
              href="/gift-detail"
              key={product.id}
              className="group relative bg-white border border-gray-100/50 rounded-[2rem] p-3 block transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-gray-200"
            >
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

                <div className="absolute inset-x-3 bottom-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-[var(--cream)] text-black py-3 rounded-xl font-bold text-[9px] tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-[var(--olive)] hover:text-white active:scale-95 transition-all cursor-pointer">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    ADD TO CART
                  </button>
                </div>
              </div>

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
                    <span className="text-[10px] text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
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

            {/* PAGINATION */}
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
                      className={`w-10 h-10 rounded-full font-bold text-[10px] transition-all border ${
                        currentPage === i + 1
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
      <section className="py-20 bg-[#bab86c] relative overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/20 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#e6e4a8]/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        {/* Glass Container */}
        <div className="relative z-10 w-full max-w-4xl mx-4 rounded-[2.5rem] border border-white/20 bg-white/30 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Inner Border */}
          <div className="absolute inset-3 rounded-[2rem] border border-white/30 pointer-events-none" />

          <div className="relative text-center space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 text-[#5a5830]">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#5a5830]/50"></span>
              <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#6f6c3a]">
                Sacred Essentials
              </p>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#5a5830]/50"></span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-[#3f3d1f] tracking-tight leading-snug">
              Embrace The <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fffad1] via-[#f3efb0] to-[#d6d27a]">
                Spiritual Journey
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#4d4b2a] max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
              Discover thoughtfully crafted pooja essentials that enrich your
              daily rituals and festive celebrations with devotion and elegance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[#fffad1] to-[#e6e4a8] text-[#3f3d1f] font-semibold text-[11px] tracking-widest rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(255,250,200,0.4)] transition-all duration-500 uppercase flex items-center justify-center gap-2 group">
                Explore Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-3 bg-white/30 border border-white/40 text-[#3f3d1f] font-semibold text-[11px] tracking-widest rounded-xl hover:bg-white/50 transition-all duration-500 uppercase flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
