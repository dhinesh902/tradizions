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
} from "lucide-react";

const products = [
  {
    id: 7,
    name: "Premium Dry Fruits Gift Box",
    category: "Gift Hampers",
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 8,
    name: "Royal Festival Gift Hamper",
    category: "Gift Hampers",
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLKhWmIcPt_tA10h3MmkjKEbRTzwEw4gQPg&s",
    isNew: true,
  },
  {
    id: 9,
    name: "Luxury Nuts Collection",
    category: "Gift Hampers",
    price: 2499,
    originalPrice: 3299,
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5qxA8VP0bJRoDpwqfHLyFwwT04-LZhkEuA&s",
    isNew: false,
  },
  {
    id: 10,
    name: "Organic Wellness Hamper",
    category: "Gift Hampers",
    price: 1899,
    originalPrice: 2499,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJ1k52K0JkNpbpeAlH0WD41CSQiIr6YbgfA&s",
    isNew: true,
  },
];

export default function GiftsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoaded(true);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop"
            alt="Exclusive Gift Collections"
            fill
            className={`object-cover transition-transform duration-[3000ms] ${loaded ? "scale-100" : "scale-110"}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-extrabold text-white leading-[0.95] tracking-tight transition-all duration-1000 delay-200">
              Exclusive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-[var(--orange)]">
                Gift Collections
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── GIFTS GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 pb-12 border-b border-gray-100 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[var(--orange)] rounded-full" />
              <p className="text-[10px] font-black text-[var(--orange)] tracking-[0.4em] uppercase">
                Our Selection
              </p>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Gift <span className="gradient-text">Hampers.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Integrated Search & Stats Bar */}
            <div className="flex-1 lg:flex-none relative flex items-center bg-white border border-gray-100 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] px-5 py-3 transition-all hover:border-[var(--orange)]/20">
              <Search className="h-4 w-4 text-gray-300 mr-4" />
              <input
                type="text"
                placeholder="Search hampers..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-transparent text-xs font-bold text-gray-700 outline-none w-full lg:w-48 placeholder:text-gray-300"
              />
              <div className="hidden sm:block w-[1px] h-6 bg-gray-100 mx-4" />
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-gray-400 whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--olive)]" />
                {paginatedProducts.length} Exclusive Hampers
              </div>
            </div>

            {/* Premium Sort Button */}
            <div className="relative w-full sm:w-auto">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-gray-900 text-white rounded-2xl text-xs font-bold tracking-widest uppercase hover:bg-[var(--olive)] transition-all cursor-pointer shadow-xl shadow-gray-900/10 group"
              >
                <Filter className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                <span>{sortBy}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`} />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 py-3 overflow-hidden animate-scale-in">
                  {["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsFilterOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-6 py-3 text-[10px] font-black tracking-wider uppercase transition-all hover:bg-orange-50 ${
                        sortBy === option ? "text-[var(--orange)] bg-orange-50/50" : "text-gray-500"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 gap-y-12">
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

      {/* Bottom CTA Section */}
    <section className="py-20 bg-[#E6DCC8] relative overflow-hidden flex justify-center items-center">
  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

  {/* Ambient Lights */}
  <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-amber-400/20 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
  <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[var(--olive)]/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

  {/* Glass Container */}
  <div className="relative z-10 w-full max-w-4xl mx-4 rounded-[2.5rem] border border-[#d6cbb5] bg-white/40 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
    
    {/* Inner Border */}
    <div className="absolute inset-3 rounded-[2rem] border border-[#e5dac5] pointer-events-none" />

    <div className="relative text-center space-y-6">
      
      {/* Tag */}
      <div className="inline-flex items-center gap-3 text-[#6b5b4b]">
        <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#6b5b4b]/50"></span>
        <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#7a5c3e]">
          Exclusive Services
        </p>
        <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#6b5b4b]/50"></span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl text-[#3e3a36] tracking-tight leading-snug">
        Corporate & Bulk <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6a97a] via-[#d4b883] to-[#b89565]">
          Gifting Solutions
        </span>
      </h2>

      {/* Description */}
      <p className="text-[#5c5c5c] max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
        Elevate your corporate relationships with premium, customizable
        gift hampers crafted for every occasion.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        
        <button className="px-8 py-3 bg-gradient-to-r from-[#c6a97a] to-[#b89565] text-white font-semibold text-[11px] tracking-widest rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(184,149,101,0.35)] transition-all duration-500 uppercase flex items-center justify-center gap-2 group">
          Inquire Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="px-8 py-3 bg-white/50 border border-[#d6cbb5] text-[#3e3a36] font-semibold text-[11px] tracking-widest rounded-xl hover:bg-white/70 transition-all duration-500 uppercase flex items-center justify-center gap-2">
          View Catalog
        </button>

      </div>
    </div>
  </div>
</section>
      {/* <div className="h-2 w-full bg-[var(--orange)] flex items-center justify-center">
      </div> */}
    </main>
  );
}
