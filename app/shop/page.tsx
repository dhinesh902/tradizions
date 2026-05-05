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
  Plus,
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
];

const NoResultsFound = ({ onClear, t }: { onClear: () => void; t: any }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-24 px-6 text-center bg-white rounded-[3rem] border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
    <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-6">
      <Search className="w-8 h-8 text-stone-300" />
    </div>
    <h3 className="text-xl font-bold text-stone-900 mb-2">
      {t.no_items.title}
    </h3>
    <p className="text-sm text-stone-400 max-w-xs mb-8">
      {t.no_items.description}
    </p>
    <button
      onClick={onClear}
      className="px-8 py-3 rounded-[1rem] bg-[var(--olive)] text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[var(--olive-dark)] transition-all shadow-lg active:scale-95 cursor-pointer"
    >
      {t.no_items.clear_filters}
    </button>
  </div>
);

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
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

  const FilterContent = () => (
    <div className="divide-y divide-stone-100">
      <div className="px-5 py-5">
        <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4">
          {t.shop_filters.categories}
        </h4>
        <div className="space-y-3">
          <button
            onClick={() => {
              setSelectedCategory("All Collections");
              if (isMobileFilterOpen) setIsMobileFilterOpen(false);
            }}
            className={`block text-[12px] font-bold transition-colors cursor-pointer ${selectedCategory === "All Collections" ? "text-[var(--olive)]" : "text-stone-500 hover:text-stone-900"}`}
          >
            {t.shop_filters.all_collections}
          </button>
          <div className="pl-4 space-y-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setActiveFilters((prev: any) => ({
                    ...prev,
                    subcategory: "",
                  }));
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
      </div>

      {selectedCategory !== "All Collections" && (
        <details className="group" open>
          <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
            <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">
              {t.shop_filters.subcategories || "Subcategories"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 space-y-2.5">
            {categories
              .find((c) => c.name === selectedCategory)
              ?.subcategories?.map((sub) => (
                <label
                  key={sub}
                  className="flex items-center gap-3 cursor-pointer group/label"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.subcategory === sub}
                    onChange={() => toggleFilter("subcategory", sub)}
                    className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--olive)] focus:ring-0 cursor-pointer"
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
            {t.shop_filters.price}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 space-y-2.5">
          {[
            { label: t.shop_filters.price_options?.under_500 || "Under 500", value: "Under 500" },
            { label: t.shop_filters.price_options?.between_500_1500 || "500-1500", value: "500-1500" },
            { label: t.shop_filters.price_options?.above_1500 || "Above 1500", value: "Above 1500" }
          ].map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-3 cursor-pointer group/label"
            >
              <input
                type="checkbox"
                checked={activeFilters.price === range.value}
                onChange={() => toggleFilter("price", range.value)}
                className="w-3.5 h-3.5 border-stone-300 rounded-sm text-[var(--olive)] focus:ring-0 cursor-pointer"
              />
              <span
                className={`text-[12px] font-medium transition-colors ${activeFilters.price === range.value ? "text-stone-900 font-bold" : "text-stone-600 group-hover/label:text-stone-900"}`}
              >
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </details>

      <details className="group" open>
        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-stone-50/50 transition-colors list-none select-none">
          <span className="text-[11px] font-black text-stone-900 uppercase tracking-wider">
            {t.shop_filters.weight}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-stone-400 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-5 grid grid-cols-2 gap-2 animate-in fade-in duration-300">
          {["250g", "500g", "1kg", "2kg"].map((w) => (
            <button
              key={w}
              onClick={() => toggleFilter("weight", w)}
              className={`py-2 rounded-sm text-[11px] font-bold border transition-all cursor-pointer ${
                activeFilters.weight === w
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 shadow-sm"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </details>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fafaf9] pt-16">
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
                {t.shop_headline}
              </h1>

              {/* Decorative dots */}
              <div className="flex items-center justify-center gap-1.5 my-2">
                <span className="w-1.5 h-1.5 bg-[#c9a44c] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#e6c36a] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#c9a44c] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-[11px] md:text-xs text-[#6b5a3a] font-medium max-w-md mx-auto leading-relaxed">
                {t.shop_desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SHOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-white border border-stone-200 shadow-sm overflow-hidden rounded-1xl">
              <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-white">
                <h3 className="text-base font-bold text-stone-900 tracking-tight">
                  {t.shop_filters.title}
                </h3>
                <button
                  onClick={() =>
                    setActiveFilters({
                      price: "",
                      weight: "",
                      subcategory: "",
                      organic: false,
                      premium: false,
                      festive: false,
                      giftPack: false,
                      occasion: "",
                    })
                  }
                  className="text-[11px] font-bold text-stone-400 hover:text-[var(--olive)] transition-colors uppercase tracking-tight cursor-pointer"
                >
                  {t.shop_filters.clear_all}
                </button>
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Mobile Filter Trigger */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-700 shadow-sm"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>

              {/* Search Bar - Moved here and reduced width */}
              <div className="relative w-full sm:max-w-xs flex items-center bg-white border border-stone-200 rounded-xl shadow-sm px-4 py-2.5 transition-all hover:border-[var(--olive)]">
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

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <Link
                    href={
                      product.category.includes("Gift")
                        ? "/gift-detail"
                        : "/product-detail"
                    }
                    key={product.id}
                    className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
                      />
                      
                      {/* Floating Labels & Actions */}
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
                          {(product as any).desc || "Tradizions premium selection for health."}
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
                    setSelectedCategory("All Collections");
                    setActiveFilters({
                      price: "",
                      weight: "",
                      subcategory: "",
                      organic: false,
                      premium: false,
                      festive: false,
                      giftPack: false,
                      occasion: "",
                    });
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

      {/* MOBILE FILTER OVERLAY - NO TRANSITION */}
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
