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
  Filter,
  ChevronDown,
  Search,
  X,
} from "lucide-react";
import en from "@/languages/en.json";
import ta from "@/languages/ta.json";
import hi from "@/languages/hi.json";

const translations: Record<string, any> = {
  EN: en,
  TA: ta,
  HI: hi,
};

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

const NoResultsFound = ({ onClear, t }: { onClear: () => void; t: any }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-24 px-6 text-center bg-white rounded-[3rem] border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
    <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-6">
      <Search className="w-8 h-8 text-stone-300" />
    </div>
    <h3 className="text-xl font-bold text-stone-900 mb-2">
      {t.no_items?.title || t.no_results}
    </h3>
    <p className="text-sm text-stone-400 max-w-xs mb-8">
      {t.no_items?.description || t.no_results_desc}
    </p>
    <button
      onClick={onClear}
      className="px-8 py-3 rounded-[1rem] bg-[var(--olive)] text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[var(--olive-dark)] transition-all shadow-lg active:scale-95 cursor-pointer"
    >
      {t.no_items?.clear_filters || t.clear_filters}
    </button>
  </div>
);

export default function GiftsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Gift Hampers");
  const [activeFilters, setActiveFilters] = useState({
    price: "",
    subcategory: "",
  });

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

  const categories = [
    {
      name: "Gift Hampers",
      subcategories: ["Festive", "Healthy", "Wedding", "Corporate", "Luxury"],
    },
    {
      name: "Pooja Gifts",
      subcategories: ["Diyas", "Idols", "Thalis", "Incense"],
    },
    {
      name: "Nuts & Dry Fruits",
      subcategories: ["Almonds", "Cashews", "Assorted"],
    },
  ];

  const toggleFilter = (type: string, value: any) => {
    setActiveFilters((prev: any) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product: any) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSubcategory =
      !activeFilters.subcategory ||
      product.subcategory === activeFilters.subcategory;
    const matchesPrice =
      !activeFilters.price ||
      (activeFilters.price === "Under 1000" && product.price < 1000) ||
      (activeFilters.price === "1000-2500" &&
        product.price >= 1000 &&
        product.price <= 2500) ||
      (activeFilters.price === "Above 2500" && product.price > 2500);

    return (
      matchesSearch && matchesCategory && matchesSubcategory && matchesPrice
    );
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const FilterContent = () => (
    <div className="divide-y divide-stone-100">
      <div className="px-5 py-5">
        <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4">
          {t.gifts_filters.categories}
        </h4>
        <div className="space-y-3">
          <button
            onClick={() => {
              setSelectedCategory("All");
              if (isMobileFilterOpen) setIsMobileFilterOpen(false);
            }}
            className={`block text-[12px] font-bold transition-colors cursor-pointer ${selectedCategory === "All" ? "text-[var(--orange)]" : "text-stone-500 hover:text-stone-900"}`}
          >
            {t.gifts_filters.all_gifts}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
                setActiveFilters((p) => ({ ...p, subcategory: "" }));
                setCurrentPage(1);
                if (isMobileFilterOpen) setIsMobileFilterOpen(false);
              }}
              className={`block text-[12px] font-bold transition-colors cursor-pointer text-left w-full ${selectedCategory === cat.name ? "text-stone-900 font-extrabold" : "text-stone-500 hover:text-stone-900"}`}
            >
              {selectedCategory === cat.name && (
                <ChevronRight className="w-3 h-3 inline mr-1 text-stone-400" />
              )}
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory !== "All" && (
        <details className="group" open>
          <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
            <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">
              {t.gifts_filters.subcategories}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 space-y-2.5">
            {categories
              .find((c) => c.name === selectedCategory)
              ?.subcategories.map((sub) => (
                <label
                  key={sub}
                  className="flex items-center gap-3 cursor-pointer group/label"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.subcategory === sub}
                    onChange={() => toggleFilter("subcategory", sub)}
                    className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--orange)] focus:ring-0 cursor-pointer"
                  />
                  <span
                    className={`text-[12px] font-medium transition-colors ${activeFilters.subcategory === sub ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}
                  >
                    {sub}
                  </span>
                </label>
              ))}
          </div>
        </details>
      )}

      <details className="group" open>
        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
          <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">
            {t.gifts_filters.price_range}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 space-y-2.5">
          {["Under 1000", "1000-2500", "Above 2500"].map((range) => (
            <label
              key={range}
              className="flex items-center gap-3 cursor-pointer group/label"
            >
              <input
                type="checkbox"
                checked={activeFilters.price === range}
                onChange={() => toggleFilter("price", range)}
                className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--orange)] focus:ring-0 cursor-pointer"
              />
              <span
                className={`text-[12px] font-medium transition-colors ${activeFilters.price === range ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}
              >
                {range}
              </span>
            </label>
          ))}
        </div>
      </details>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#faf9f6] pt-16">
      {/* PREMIUM HERO SECTION */}
      <div className="relative bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#e0d4b7] bg-white/70 backdrop-blur-md hover:scale-[1.01] transition-all duration-300">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

            {/* Side gold accent */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#c9a44c] to-[#8b6f3d]" />

            <div className="relative px-4 py-4 md:py-5 text-center">
              {/* Heading */}
              <h1 className="text-sm md:text-xl font-bold text-[var(--amber-600)] leading-snug">
                {t.gifts_headline}
              </h1>

              {/* Decorative dots */}
              <div className="flex items-center justify-center gap-1.5 my-2">
                <span className="w-1.5 h-1.5 bg-[#c9a44c] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#e6c36a] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#c9a44c] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-[11px] md:text-xs text-[#6b5a3a] font-medium max-w-md mx-auto leading-relaxed">
                {t.gifts_desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10 pb-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-white border border-stone-200 shadow-sm overflow-hidden rounded-1xl">
              <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-white">
                <h3 className="text-base font-bold text-stone-900 tracking-tight">
                  {t.gifts_filters.title}
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory("Gift Hampers");
                    setActiveFilters({ price: "", subcategory: "" });
                  }}
                  className="text-[11px] font-bold text-stone-400 hover:text-[var(--orange)] transition-colors uppercase tracking-tight cursor-pointer"
                >
                  {t.gifts_filters.clear_all}
                </button>
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-700 shadow-sm"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>

              <div className="relative w-full sm:max-w-xs flex items-center bg-white border border-stone-200 rounded-xl shadow-sm px-4 py-2.5 transition-all hover:border-amber-200">
                <Search className="h-4 w-4 text-stone-300 mr-3" />
                <input
                  type="text"
                  placeholder={t.search_placeholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-transparent text-xs font-bold text-stone-700 outline-none w-full placeholder:text-stone-300"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <Link
                    href="/gift-detail"
                    key={product.id}
                    className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={product.image || "/placeholder.png"}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
                      />

                      {/* Floating Actions */}
                      <div className="absolute top-3 right-3 z-20">
                        <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 transition-all transform hover:scale-110 active:scale-95 cursor-pointer">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                        {product.originalPrice && (
                          <span className="px-2.5 py-1 rounded-full bg-[var(--orange)] text-white text-[9px] font-black tracking-wider shadow-lg">
                            {Math.round(
                              ((product.originalPrice - product.price) /
                                product.originalPrice) *
                                100,
                            )}
                            % OFF
                          </span>
                        )}
                        {product.isNew && (
                          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-black text-[var(--olive)] tracking-widest shadow-sm">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1 space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-gray-400 font-medium line-clamp-1">
                          Tradizions premium selection for health.
                        </p>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-gray-900">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through font-medium">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <div className="pt-2 mt-auto">
                        <button className="w-full bg-[#FCFBF9] border border-gray-100 text-gray-900 py-3 px-4 rounded-xl font-bold text-[10px] tracking-widest flex items-center justify-between hover:bg-[var(--olive)] hover:text-white hover:border-[var(--olive)] transition-all duration-300 group/btn cursor-pointer">
                          <span>ADD TO CART</span>
                          <ShoppingCart className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <NoResultsFound
                  onClear={() => {
                    setSelectedCategory("Gift Hampers");
                    setActiveFilters({ price: "", subcategory: "" });
                    setSearchQuery("");
                  }}
                  t={t}
                />
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-16">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="px-6 py-3 rounded-full border border-gray-100 bg-white text-[10px] font-bold tracking-widest text-gray-400 hover:bg-gray-50 disabled:opacity-30 transition-all flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" /> PREVIOUS
                </button>
                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full font-bold text-[10px] transition-all border ${currentPage === i + 1 ? "bg-[var(--olive)] text-white border-[var(--olive)] shadow-lg shadow-emerald-900/10" : "bg-white text-gray-400 border-gray-100 hover:border-gray-200"}`}
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
                  NEXT <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE FILTER OVERLAY */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-[300px] bg-white h-full shadow-2xl overflow-y-auto">
            <div className="p-6 border-b border-stone-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-stone-900">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-stone-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-stone-400" />
              </button>
            </div>
            <FilterContent />
            <div className="p-6">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-4 bg-[var(--olive)] text-white font-bold text-xs tracking-widest rounded-xl shadow-lg shadow-emerald-900/10"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
