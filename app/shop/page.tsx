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
  },
  {
    name: "Nuts & Dry Fruits",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5qxA8VP0bJRoDpwqfHLyFwwT04-LZhkEuA&s",
  },
  {
    name: "Pooja Gifts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbc5zJqjpuhdeju-n_5WRmpLb0U0gjhfEkg&s",
  },
  {
    name: "Gift Hampers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJ1k52K0JkNpbpeAlH0WD41CSQiIr6YbgfA&s",
  },
  {
    name: "Spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
  },
];

const products = [
  // 🌾 MILLETS
  {
    id: 1,
    name: "Premium Foxtail Millet",
    category: "Millets",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    image: "https://dryfruitshome.com/wp-content/uploads/2019/07/foxtail-millet-thinai.jpg",
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
    price: 249,
    originalPrice: 320,
    rating: 4.6,
    image: "https://www.pepperhub.in/wp-content/uploads/2024/10/BARNYARD-MILLET.webp",
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
    price: 899,
    originalPrice: 1100,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5XC7IzZhRYA9FOo2b_aStlaTMAMVXk1cNg&s",
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
    price: 799,
    originalPrice: 950,
    rating: 4.8,
    image: "https://cdn.shopaccino.com/edible-smart/products/cashew--kaju---whole-114906_l.jpg?v=704",
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
    price: 1299,
    originalPrice: 1800,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s",
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
    price: 2499,
    originalPrice: 3200,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGmxw4XFiHghlYfvC7Y8LLmUnbtscQEAr7g&s",
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
    price: 1499,
    originalPrice: 1999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop",
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
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLKhWmIcPt_tA10h3MmkjKEbRTzwEw4gQPg&s",
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
    organic: false,
    premium: false,
    festive: false,
    giftPack: false,
    occasion: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const filteredProducts = products.filter((product) => {
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
      [type]: prev[type] === value ? (typeof value === "boolean" ? false : "") : value,
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shop-banner.jpg"
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
            <div className="inline-flex items-center gap-3 mb-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-amber-200">
                Premium Collections
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Traditional Nutrition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 animate-gradient-x">
                Modern Lifestyle.
              </span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Explore our curated selection of ancient grains, premium nuts, and
              sacred essentials crafted to nourish both body and soul.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR (Below Banner) ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="relative max-w-2xl mx-auto transform transition-all duration-500 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"></div>
          <div className="relative flex items-center bg-white border border-stone-100 rounded-3xl p-2 shadow-sm">
            <div className="flex-1 flex items-center px-6">
              <Search className="w-5 h-5 text-stone-400 mr-4" />
              <input
                type="text"
                placeholder="Search for millets, nuts, spices..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent border-none outline-none text-stone-900 placeholder:text-stone-300 text-sm font-semibold py-4"
              />
            </div>
            <button className="bg-stone-900 text-white px-10 py-4 rounded-2xl text-[10px] font-black tracking-widest uppercase hover:bg-[var(--olive)] transition-all shadow-xl">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ── SHOP CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT SIDEBAR: Categories with Images */}
          <aside className="w-full lg:w-72 space-y-12 shrink-0">
            <div>
              <h3 className="text-xs font-bold text-gray-900 tracking-[0.2em] uppercase mb-10 pb-4 border-b border-gray-100">
                Shop By Category
              </h3>
              <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setCurrentPage(1);
                    }}
                    className={`group relative flex items-center gap-4 p-3 rounded-2xl transition-all duration-500 ${
                      selectedCategory === cat.name
                        ? "bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-100"
                        : "hover:bg-gray-50 border border-transparent"
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover"
                      />
                      {selectedCategory === cat.name && (
                        <div className="absolute inset-0 bg-[var(--olive)]/40 backdrop-blur-[1px] flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <p
                        className={`text-[13px] font-bold tracking-wide transition-colors ${
                          selectedCategory === cat.name
                            ? "text-[var(--olive)]"
                            : "text-gray-500 group-hover:text-gray-900"
                        }`}
                      >
                        {cat.name}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium">
                        Browse Items
                      </p>
                    </div>
                    {selectedCategory === cat.name && (
                      <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[var(--olive)] animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ── ADVANCED FILTERS ── */}
            <div className="pt-8 border-t border-gray-100 space-y-10">
              {/* Price Filter */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                  Price Range
                </h4>
                <div className="flex flex-col gap-2">
                  {["Under 500", "500-1500", "Above 1500"].map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={activeFilters.price === range}
                        onChange={() => toggleFilter("price", range)}
                        className="w-4 h-4 rounded-full border-gray-300 text-[var(--olive)] focus:ring-[var(--olive)]"
                      />
                      <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Weight Filter */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                  Weight
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["250g", "500g", "1kg", "2kg"].map((w) => (
                    <button
                      key={w}
                      onClick={() => toggleFilter("weight", w)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black border transition-all ${
                        activeFilters.weight === w
                          ? "bg-[var(--olive)] text-white border-[var(--olive)]"
                          : "bg-white text-gray-400 border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Boolean Filters */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                  Specialty
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Organic", key: "organic" },
                    { label: "Premium", key: "premium" },
                    { label: "Festive", key: "festive" },
                    { label: "Gift Pack", key: "giftPack" },
                  ].map((f) => (
                    <label
                      key={f.key}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900">
                        {f.label}
                      </span>
                      <input
                        type="checkbox"
                        checked={(activeFilters as any)[f.key]}
                        onChange={() =>
                          toggleFilter(f.key, !(activeFilters as any)[f.key])
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[var(--olive)] focus:ring-[var(--olive)]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                  Occasion
                </h4>
                <select
                  value={activeFilters.occasion}
                  onChange={(e) => toggleFilter("occasion", e.target.value)}
                  className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold text-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/10"
                >
                  <option value="">All Occasions</option>
                  <option value="Daily">Daily Use</option>
                  <option value="Diwali">Diwali</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Ganesh Chaturthi">Ganesh Chaturthi</option>
                  <option value="Health">Health Focus</option>
                </select>
              </div>

              <button
                onClick={() =>
                  setActiveFilters({
                    price: "",
                    weight: "",
                    organic: false,
                    premium: false,
                    festive: false,
                    giftPack: false,
                    occasion: "",
                  })
                }
                className="w-full py-3 rounded-xl bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:bg-gray-100 transition-all"
              >
                Clear All Filters
              </button>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
                      <Link
                        href={
                          product.category.includes("Gift")
                            ? "/gift-detail"
                            : "/product-detail"
                        }
                        className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[var(--olive)] hover:text-white transition-all shadow-sm"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
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
