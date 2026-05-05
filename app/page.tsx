"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Star,
  ChevronRight,
  Leaf,
  Gift,
  Zap,
  Heart,
  Droplets,
  Sparkles,
  Shield,
  Truck,
  Award,
  Quote,
  Check,
  BadgeCheck,
  Lock,
  Activity,
  Scale,
  Baby,
  ScrollText,
} from "lucide-react";

/* ── Data ── */
const categories = [
  {
    name: "Millets",
    icon: Leaf,
    image:
      "https://article-cdn.prod.gabit.com/media/production/19-04-2024/cd03830b-c598-44cd-93c5-85bce7c54878/6bc943a5-c1e4-42bf-9151-62f00edd3014.png",
    gradient: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50",
    desc: "Ancient supergrains",
    products: 10,
  },
  {
    name: "Dry Fruits",
    icon: Zap,
    image:
      "https://img.freepik.com/free-photo/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_176474-2051.jpg?semt=ais_hybrid&w=740&q=80",
    gradient: "from-amber-400 to-amber-600",
    bg: "bg-amber-50",
    desc: "Premium selection",
    products: 6,
  },
  {
    name: "Health Malts",
    icon: Droplets,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ec7NMgKZveuk0Y1VDbHq-liJr_W6VrhO0w&s",
    gradient: "from-sky-400 to-sky-600",
    bg: "bg-sky-50",
    desc: "Nutrient-rich blends",
    products: 2,
  },
  {
    name: "Gift Hampers",
    icon: Gift,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7Lk2lQ0sRG8SvyJOLC1ieoe2gesZUvrUaQ&s",
    gradient: "from-purple-400 to-purple-600",
    bg: "bg-purple-50",
    desc: "Curated bundles",
    products: 5,
  },
  {
    name: "Pooja Essentials",
    icon: Heart,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hX5TCkMRUYLmhqocuqx7RNIMW2ygcdr25Q&s",
    gradient: "from-rose-400 to-rose-600",
    bg: "bg-rose-50",
    desc: "Sacred traditions",
    products: 22,
  },
  {
    name: "Spices",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    gradient: "from-orange-400 to-red-600",
    bg: "bg-orange-50",
    desc: "Aromatic & Pure",
    products: 15,
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Premium Barnyard Millet Premium Barnyard Millet Premium Barnyard Millet Premium Barnyard Millet",
    price: 299,
    originalPrice: 399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBIYakTGLZHnzJqrGY_ax7uQfXVKUca48Rw&s",
    rating: 4.8,
    reviews: 124,
    badge: "Millets",
  },
  {
    id: 2,
    name: "Himalayan Walnut Kernels",
    price: 899,
    originalPrice: 1199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRazhuxmy7XhgzVTcMWu3yjOkiMBYmfBxKew&s",
    rating: 4.9,
    reviews: 89,
    badge: "Nuts",
  },
  {
    id: 3,
    name: "Finger Millet (Ragi) Malt",
    price: 450,
    originalPrice: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FT49efQnnIWeAkVhYB4M2aHITRbY1rv5ww&s",
    rating: 4.7,
    reviews: 203,
    badge: "Millets",
  },
  {
    id: 4,
    name: "Organic Foxtail Millet",
    price: 250,
    originalPrice: 349,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3L2_MG4RRGC3w-XLNh2dOphIOfzSc6AHWKA&s",
    rating: 4.6,
    reviews: 156,
    badge: "Millets",
  },
];

const giftHampers = [
  {
    id: 101,
    name: "Festive Celebration Box",
    price: 2499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lo4Psnq5vDI61PzeMWKo2UlIv2_kyPnzBQ&s",
    desc: "A premium collection of organic millets, dry fruits & artisan sweets.",
  },
  {
    id: 102,
    name: "Wellness Nut Selection",
    price: 1899,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7BJ2N2Wp2yYW6ApncUC_Eo_HNDzAcaKSQQ&s",
    desc: "Hand-picked premium nuts & nutritious millet treats for the health-conscious.",
  },
];

const poojaGifts = [
  {
    id: 201,
    name: "Silver Plated Pooja Thali",
    price: 3499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFVWk1vEkuFYgEA8EJ-DpX8ajMJOy7Yuf6w&s",
    tag: "Elegant",
  },
  {
    id: 202,
    name: "Handcrafted Brass Diya Set",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vy3KL_9DSiDnk4MSGeVRHz-G32qmtpWo7A&s",
    tag: "Traditional",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Health Enthusiast",
    text: "Tradizions has completely transformed our kitchen. The millets are incredibly fresh and the flavours remind me of my grandmother's cooking.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Corporate Gifting",
    text: "We ordered 50 gift hampers for Diwali. The presentation was stunning and every recipient was thrilled. Will definitely order again!",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Ananya Patel",
    role: "Yoga Practitioner",
    text: "The ragi malt is my go-to morning drink now. Pure, organic, and full of energy. Best quality I have found online.",
    rating: 5,
    avatar: "AP",
  },
];

const trustBadges = [
  { icon: Award, label: "FSSAI Certified", desc: "Safety Guaranteed" },
  { icon: Shield, label: "Quality Checked", desc: "Hygienically Packed" },
  { icon: Lock, label: "Secure Payments", desc: "100% Protected" },
  { icon: Truck, label: "Fast Delivery", desc: "Across India" },
];

const whyChooseUs = [
  {
    icon: Star,
    title: "Quality products",
    desc: "Premium grade organic selection",
  },
  {
    icon: Sparkles,
    title: "Fresh packing",
    desc: "Packed with care for longevity",
  },
  {
    icon: Heart,
    title: "Trusted by families",
    desc: "10,000+ happy households",
  },
  { icon: Zap, title: "Fast delivery", desc: "Quick turnaround time" },
];

const healthGoals = [
  {
    name: "Diabetes",
    image: "/health-goals/diabetes.png",
    desc: "Low GI foods for sugar management",
    bg: "bg-blue-50",
    icon: Activity,
  },
  {
    name: "Weight Management",
    image: "/health-goals/weight-management.png",
    desc: "Fiber-rich millets for healthy weight",
    bg: "bg-emerald-50",
    icon: Scale,
  },
  {
    name: "Kids Nutrition",
    image: "/health-goals/kids-nutrition.png",
    desc: "Wholesome malts for growing kids",
    bg: "bg-orange-50",
    icon: Baby,
  },
];

const dailyKural = {
  number: 942,
  tamil: "மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது அற்றது போற்றி உணின்.",
};

/* ── Intersection Observer Hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* ── Main Page ── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      <HeroSection />

      {/* Brand Promise Section */}
      <section className="py-16 bg-white relative overflow-hidden border-b border-stone-50">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[var(--olive)]/30" />
            <span className="text-[10px] font-black text-[var(--olive)] uppercase tracking-[0.4em]">
              Heritage to Home
            </span>
            <div className="h-px w-8 bg-[var(--olive)]/30" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug max-w-4xl mx-auto italic">
            "From daily cooking essentials to festive pooja items and premium
            gifting, we bring everything to your doorstep"
          </h2>
        </div>
        {/* Subtle decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      </section>

      <KuralTrustRow />
      <CategoriesSection />
      <HealthGoalsSection />
      <HealthBenefitsSection />
      <FeaturedSection />
      <NewArrivalsSection />
      <WhyChooseUsSection />
      <GiftingSection />
      <NutritionPlanner />
      <SubscriptionPlans />
      <TestimonialsSection />
    </div>
  );
}

//  HEALTH BENEFITS SECTION (NEW)
//  ══════════════════════════════════════════════════════════════ */

const nutsBenefits = [
  {
    name: "Almond",
    desc: "Rich in healthy fats and vitamin E, supports brain function and heart health.",
  },
  {
    name: "Cashew",
    desc: "Provides essential minerals like magnesium and zinc, supports bone health.",
  },
  {
    name: "Pistachio",
    desc: "Helps in weight management and improves gut health.",
  },
  {
    name: "Walnut",
    desc: "High in omega-3 fatty acids, supports heart and brain health.",
  },
  {
    name: "Raisins",
    desc: "Aids digestion and provides natural energy.",
  },
  {
    name: "Dates",
    desc: "Rich in iron, boosts energy and supports digestion.",
  },
  {
    name: "Fig",
    desc: "High in fiber, helps regulate digestion and blood sugar levels.",
  },
  {
    name: "Apricot",
    desc: "Rich in antioxidants, supports eye and skin health.",
  },
];

const milletsBenefits = [
  {
    name: "Foxtail Millet",
    desc: "Low glycemic index, helps control blood sugar levels.",
  },
  {
    name: "Pearl Millet (Bajra)",
    desc: "Rich in fiber, supports digestion and heart health.",
  },
  {
    name: "Finger Millet (Ragi)",
    desc: "High in calcium, strengthens bones and teeth.",
  },
  {
    name: "Kodo Millet",
    desc: "Aids weight loss and improves digestion.",
  },
  {
    name: "Little Millet",
    desc: "Rich in iron, helps improve hemoglobin levels.",
  },
  {
    name: "Barnyard Millet",
    desc: "Low in calories, ideal for weight management and detox.",
  },
  {
    name: "Proso Millet",
    desc: "Supports metabolism and provides sustained energy.",
  },
  {
    name: "Sorghum (Jowar)",
    desc: "Rich in antioxidants, helps reduce inflammation and supports heart health.",
  },
  {
    name: "Millet Flour",
    desc: "Gluten-free, easy to digest and supports overall nutrition.",
  },
];

function HealthBenefitsSection() {
  const { ref, isVisible } = useInView();
  const [activeCategory, setActiveCategory] = useState("nuts");

  return (
    <section ref={ref} className="py-24 bg-[#fafaf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div
          className={`text-center space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
            The <span className="gradient-text">Health Advantage</span>
          </h2>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setActiveCategory("nuts")}
              className={`px-8 py-2.5 rounded-[1rem] text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${activeCategory === "nuts" ? "bg-[var(--olive)] text-white shadow-lg shadow-[var(--olive)]/20 scale-105" : "bg-white text-gray-400 hover:text-gray-600 border border-stone-100"}`}
            >
              Nuts & Dry Fruits
            </button>
            <button
              onClick={() => setActiveCategory("millets")}
              className={`px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${activeCategory === "millets" ? "bg-[var(--olive)] text-white shadow-lg shadow-[var(--olive)]/20 scale-105" : "bg-white text-gray-400 hover:text-gray-600 border border-stone-100"}`}
            >
              Millets
            </button>
          </div>
        </div>
      </div>

      {/* HORIZONTAL AUTO-SCROLLING CARDS */}
      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[
            ...(activeCategory === "nuts" ? nutsBenefits : milletsBenefits),
            ...(activeCategory === "nuts" ? nutsBenefits : milletsBenefits),
          ].map((benefit, idx) => (
            <div
              key={benefit.name + idx}
              className="flex-shrink-0 w-[280px] md:w-[320px] mx-4 p-6 rounded-[2rem] bg-white border border-stone-300 hover:border-[var(--olive)]/20 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[var(--olive)] transition-colors">
                {benefit.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-normal">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafaf9] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafaf9] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

// -----------------------------------  HERO SECTION

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-banner.png"
          alt="Premium Tradizions - Organic Millets & Traditional Wellness"
          fill
          className={`object-cover transition-all duration-[2000ms] ${loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          priority
        />
        {/* Premium Multi-layered Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/20" />
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[var(--orange)]/10 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] animate-float delay-300 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="max-w-3xl space-y-8">
          {/* Headline */}
          <h1
            className={`text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-extrabold text-white leading-[0.95] tracking-wide transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Healthy Traditions. <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-300 tracking-wider">
                Delivered to Your Doorstep.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-md md:text-md text-white/60 max-w-1xl leading-relaxed font-light transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            From Tradition to Wellness – Premium Essentials for Every Home
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-3 pt-4 transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Link
              href="/shop"
              className="btn-standard group relative flex items-center gap-2 rounded-full font-semibold text-xs tracking-[0.12em] transition-all duration-500 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Shop Now </span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/gifts"
              className="btn-standard group flex items-center gap-2 rounded-full font-semibold text-xs tracking-[0.12em] transition-all duration-500 hover:-translate-y-1 active:scale-95"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <Gift className="w-4 h-4" />
              Explore Gift Packs
            </Link>
          </div>

          {/* Social Proof */}
          <div
            className={`flex items-center gap-6 pt-6 transition-all duration-1000 delay-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex -space-x-3">
              {["PS", "RK", "AP", "MG"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--olive)] to-emerald-700 border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                  />
                ))}
                <span className="text-white/80 font-semibold ml-1">4.9</span>
              </div>
              <p className="text-white/40 text-xs">
                Trusted by 10,000+ families
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// ----------------------------------- CATEGORIES

function CategoriesSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-28 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 space-y-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Explore Our <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-sm font-normal text-gray-400 font-light max-w-lg mx-auto">
            From nutrient-rich millets to sacred pooja essentials, find
            everything to nourish your body and soul.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <Link
              href={`/shop?category=${cat.name.toLowerCase()}`}
              key={idx}
              className={`group relative h-[250px] rounded-[1rem] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
              }}
            >
              {/* Background Image */}
              <Image
                src={cat.image || "/placeholder.png"}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-6 bottom-8 text-center space-y-3">
                <div
                  className={`mx-auto w-12 h-12 rounded-2xl glass flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                >
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white transition-all duration-500 group-hover:translate-y-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/60 font-light mt-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    ({cat.products} products)
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------  FEATURED PRODUCTS

function FeaturedSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className="py-28 bg-[var(--background)] relative overflow-hidden"
    >
      {/* Organic Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--olive)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-[var(--orange)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-sm font-medium text-gray-400 max-w-md">
              Hand-picked organic products, rigorously tested for purity and
              quality.
            </p>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-3 px-4 py-3 rounded-full border border-gray-200 hover:border-[var(--olive)] hover:bg-[var(--olive)] text-xs font-bold text-gray-600 hover:text-white transition-all duration-500 tracking-widest"
          >
            Explore shop
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              isVisible={isVisible}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Product Card (Re-refined) ── */
function ProductCard({
  product,
  isVisible,
  delay,
}: {
  product: any;
  isVisible: boolean;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/product-detail"
      className={`group relative items-start block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} cursor-pointer`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-[1500ms] ${isHovered ? "scale-110" : "scale-100"}`}
        />

        {/* Subtle Glass Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-[var(--olive)]/10 backdrop-blur-[2px] transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--orange)] to-amber-600 text-white text-[11px] font-semibold tracking-[0.15em] shadow-lg z-20">
            {product.badge}
          </div>
        )}

        {/* Action Buttons Overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-xl hover:bg-[var(--orange)] hover:text-white transition-all hover:scale-110">
            <Heart className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-bold text-[10px] tracking-widest shadow-xl hover:bg-[var(--olive)] hover:text-white transition-all hover:scale-105 uppercase">
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-8 text-center space-y-3">
        <div className="flex items-start justify-start gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-400 tracking-wider">
            ({product.reviews})
          </span>
        </div>

        <h4 className="text-sm font-semibold text-start text-gray-900 group-hover:text-[var(--olive)] transition-colors leading-snug line-clamp-2">
          {product.name}
        </h4>
        <div className="flex items-center justify-start gap-3">
          <p className="text-lg font-extrabold text-gray-900">
            ₹{product.price}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through font-light">
              ₹{product.originalPrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

// -----------------------------------  GIFT & POOJA SECTION

function GiftingSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-20">
          {/* ── Artisanal Gift Hampers ── */}
          <div
            className={`space-y-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-100 pb-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  Artisanal <span className="gradient-text">Gift Hampers</span>
                </h2>
              </div>
              <Link
                href="/gifts"
                className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--olive)] hover:text-[var(--orange)] transition-colors"
              >
                View Full Collection
                <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-[var(--orange)] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {giftHampers.map((item) => (
                <Link
                  href="/gift-detail"
                  key={item.id}
                  className="group relative bg-[#faf9f6] rounded-[2rem] p-4 border border-transparent hover:border-stone-100 hover:bg-white transition-all duration-500 hover:shadow-xl"
                >
                  <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-400 group-hover:text-[var(--orange)] transition-colors shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="space-y-3 px-2 pb-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[var(--olive)] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-lg font-black text-gray-900">
                        ₹{item.price.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-bold text-stone-300 line-through">
                        ₹{(item.price * 1.2).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Pooja Gift Essentials ── */}
          <div
            className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-100 pb-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  Pooja Gift <span className="gradient-text">Essentials</span>
                </h2>
              </div>
              <Link
                href="/pooja-gifts"
                className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--olive)] hover:text-amber-500 transition-colors"
              >
                Explore Sacred Collection
                <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {poojaGifts.map((item) => (
                <Link
                  href="/gift-detail"
                  key={item.id}
                  className="group relative block"
                >
                  <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-4 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <button className="w-full bg-white py-2 rounded-xl text-[8px] font-black tracking-widest uppercase text-gray-900 shadow-xl">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5 px-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-[7px] font-black text-amber-600 uppercase tracking-widest border border-amber-100/50">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm font-black text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Side: Dynamic Image & Stats (5 columns) */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white">
              <Image
                src="/why-choose-us.jpg"
                alt="Quality organic products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Certification Badge */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white p-2">
                <Shield className="w-6 h-6 mb-1 text-amber-400" />
                <span className="text-[7px] font-black uppercase tracking-widest text-center">
                  Certified Quality
                </span>
              </div>

              {/* Bottom Stat Card */}
              <div className="absolute bottom-8 inset-x-8 p-6 glass rounded-3xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xl">
                    <BadgeCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">
                        100%
                      </span>
                      <span className="text-xs font-bold text-white/70">
                        Pure
                      </span>
                    </div>
                    <p className="text-[9px] text-white/50 font-black uppercase tracking-widest">
                      Organic Certified Sourcing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--olive)]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-[80px] -z-10" />
          </div>

          {/* Right Side: Content & Features (7 columns) */}
          <div
            className={`lg:col-span-7 space-y-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-[1.1]">
                Why
                <span className="gradient-text"> Choose Us</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
                We ensure every product delivers maximum nutrition by merging
                traditional processing methods with modern quality standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:bg-white hover:border-[var(--olive)]/20 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--olive)] flex-shrink-0 group-hover:bg-[var(--olive)] group-hover:text-white transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-md font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-bold leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------  TESTIMONIALS

function TestimonialsSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Loved By <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-gray-400 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Join our community of wellness enthusiasts who have embraced the
            Tradizions way of life.
          </p>
        </div>

        {/* AUTO-SCROLLING MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-slow whitespace-nowrap gap-6 py-10 px-6 hover:pause-animation">
            {[
              ...testimonials,
              ...testimonials,
              ...testimonials,
              ...testimonials,
            ].map((t, idx) => (
              <div
                key={idx}
                className="w-72 aspect-square flex-shrink-0 bg-white border border-stone-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group/card hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-stone-100 fill-current group-hover/card:text-[var(--olive)]/10 transition-colors" />
                  </div>
                  <p className="text-stone-600 text-xs font-medium leading-relaxed whitespace-normal italic line-clamp-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-stone-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--olive)] to-emerald-700 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-transform group-hover/card:scale-110">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-gray-900 group-hover/card:text-[var(--olive)] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Rating Tag */}
        <div
          className={`mt-10 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[var(--orange)] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
              +2k
            </div>
          </div>
          <p className="text-xs font-medium text-gray-800">
            Trusted by over{" "}
            <span className="font-bold">10,000+ happy customers</span>{" "}
            worldwide.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// -----------------------------------  KURAL & TRUST ROW (Premium Look)

function KuralTrustRow() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className="bg-[#fafaf9] border-y border-stone-200/60 py-12 relative z-30 overflow-hidden"
    >
      {/* Subtle Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col xl:flex-row items-stretch justify-between gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left Side: Premium Kural Card */}
          <div className="flex-1 relative group">
            <div className="h-full bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-amber-600 shadow-sm border border-amber-100/50 group-hover:rotate-6 transition-transform duration-500">
                    <ScrollText className="w-6 h-6" />
                  </div>
                  {/* Floating Number Badge */}
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-md bg-amber-600 text-[10px] font-bold text-white shadow-sm tracking-wider">
                    #{dailyKural.number}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-amber-200" />
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.4em] leading-none">
                      Thinam Oru Kural
                    </span>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-4 w-8 h-8 text-stone-100 -z-10 rotate-180" />
                    <p className="text-xl md:text-2xl font-bold text-stone-800 leading-tight tracking-tight">
                      {dailyKural.tamil}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Badge Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col items-center text-center gap-4 transition-all duration-500 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-[var(--olive)]/20"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-[var(--olive)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--olive)]/20 transition-all duration-500">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-stone-900 uppercase tracking-[0.2em] leading-none group-hover:text-[var(--olive)] transition-colors">
                    {badge.label}
                  </p>
                  <p className="text-[9px] text-stone-400 font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {badge.desc}
                  </p>
                </div>
                {/* Subtle Hover Indicator */}
                <div className="absolute bottom-3 w-1 h-1 rounded-full bg-[var(--olive)] scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------  HEALTH GOALS SECTION

function HealthGoalsSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Shop by <span className="gradient-text">Health Goals</span>
          </h2>
          <p className="text-sm font-normal text-gray-400 max-w-lg mx-auto">
            Tailored nutrition to help you achieve your wellness objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {healthGoals.map((goal, idx) => (
            <Link
              href={`/shop?goal=${goal.name.toLowerCase()}`}
              key={idx}
              className={`group relative h-[400px] rounded-[2.5rem] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <Image
                src={goal.image}
                alt={goal.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-8 bottom-8 space-y-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${goal.bg} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                >
                  <goal.icon className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {goal.name}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------  NUTRITION PLANNER (Nuts & Millets Calculator)

const initialMilletsData = [
  {
    name: "Barnyard Millet (Kuthiraivali)",
    tam: "குதிரைவாலி",
    hin: "सांवा",
    price: 160,
  },
  { name: "Finger Millet (Ragi)", tam: "கேழ்வரகு", hin: "रागी", price: 60 },
  { name: "Foxtail Millet (Thinai)", tam: "தினை", hin: "कंगनी", price: 150 },
  { name: "Kodo Millet (Varagu)", tam: "வரகு", hin: "कोदो", price: 170 },
  { name: "Little Millet (Saamai)", tam: "சாமை", hin: "குட்கி", price: 180 },
  { name: "Pearl Millet (Bajra/Kambu)", tam: "கம்பு", hin: "बाजरा", price: 70 },
  { name: "Sorghum (Jowar/Cholam)", tam: "சோளம்", hin: "ज्वார்", price: 80 },
];

const initialNutsData = [
  { name: "Almond (Badam)", tam: "பாதாம்", hin: "बादाम", price: 900 },
  { name: "Cashew (Munthiri)", tam: "முந்திரி", hin: "काजू", price: 850 },
  { name: "Walnut (Akroot)", tam: "அக்ரூட்", hin: "अخरोट", price: 1200 },
  { name: "Pistachio (Pista)", tam: "பிஸ்தா", hin: "पिस्ता", price: 1750 },
  {
    name: "Raisins (Ular Draksha)",
    tam: "உலர் திராட்சை",
    hin: "किशமिश",
    price: 500,
  },
  {
    name: "Dates (Pericham Pazham)",
    tam: "பேரிச்சம் பழம்",
    hin: "खजूर",
    price: 900,
  },
  { name: "Hazelnut", tam: "ஹேசல்நட்", hin: "हेज़लनट", price: 1500 },
];

const initialSpicesData = [
  {
    name: "Turmeric Powder",
    tam: "மஞ்சள் தூள்",
    hin: "हल्दी पाउडर",
    price: 400,
  },
  { name: "Black Pepper", tam: "மிளகு", hin: "काली मिर्च", price: 800 },
  { name: "Cumin Seeds", tam: "சீரகம்", hin: "जीरा", price: 600 },
  { name: "Cardamom", tam: "ஏலக்காய்", hin: "இலாयची", price: 3500 },
  { name: "Cloves", tam: "கிராம்பு", hin: "लौंग", price: 1200 },
  { name: "Cinnamon", tam: "பட்டை", hin: "दालचीनी", price: 500 },
];

function NutritionPlanner() {
  const { ref, isVisible } = useInView();
  const [activeTab, setActiveTab] = useState("millets");
  const [milletsPlanner, setMilletsPlanner] = useState(
    initialMilletsData.map((m) => ({ ...m, grams: 100, days: 30, members: 4 })),
  );
  const [nutsPlanner, setNutsPlanner] = useState(
    initialNutsData.map((n) => ({ ...n, grams: 20, days: 30, members: 4 })),
  );
  const [spicesPlanner, setSpicesPlanner] = useState(
    initialSpicesData.map((s) => ({ ...s, grams: 10, days: 30, members: 4 })),
  );

  const calculateRow = (row: any) => {
    const qtyPerPerson = (row.grams * row.days) / 1000;
    const totalPrice = qtyPerPerson * row.members * row.price;
    return { qty: qtyPerPerson.toFixed(2), price: Math.round(totalPrice) };
  };

  const currentPlanner =
    activeTab === "millets"
      ? milletsPlanner
      : activeTab === "nuts"
        ? nutsPlanner
        : spicesPlanner;

  const setPlanner =
    activeTab === "millets"
      ? setMilletsPlanner
      : activeTab === "nuts"
        ? setNutsPlanner
        : setSpicesPlanner;

  const grandTotal = currentPlanner.reduce(
    (acc, row) => acc + calculateRow(row).price,
    0,
  );

  return (
    <section ref={ref} className="py-20 bg-gray-50/30 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[var(--olive)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-12 space-y-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Monthly Nutrition <span className="gradient-text">Planner</span>
          </h2>
          <p className="text-xs font-normal text-gray-400 max-w-md mx-auto">
            Plan your family's monthly{" "}
            {activeTab === "millets"
              ? "millet"
              : activeTab === "nuts"
                ? "nut"
                : "spice"}{" "}
            requirements and health budget with our precision calculation tool.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("millets")}
            className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${activeTab === "millets"
                ? "bg-[var(--olive)] text-white shadow-lg scale-105"
                : "bg-white text-gray-400 hover:text-[var(--olive)] border border-gray-100"
              }`}
          >
            MILLETS
          </button>
          <button
            onClick={() => setActiveTab("nuts")}
            className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${activeTab === "nuts"
                ? "bg-[var(--olive)] text-white shadow-lg scale-105"
                : "bg-white text-gray-400 hover:text-[var(--olive)] border border-gray-100"
              }`}
          >
            NUTS
          </button>
          <button
            onClick={() => setActiveTab("spices")}
            className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${activeTab === "spices"
                ? "bg-[var(--olive)] text-white shadow-lg scale-105"
                : "bg-white text-gray-400 hover:text-[var(--olive)] border border-gray-100"
              }`}
          >
            SPICES
          </button>
        </div>

        <div
          className={`bg-white rounded-[1rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"}`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-200">
                  <th className="px-6 py-5">
                    {activeTab === "millets"
                      ? "Millet"
                      : activeTab === "nuts"
                        ? "Nut"
                        : "Spice"}{" "}
                    Item
                  </th>
                  <th className="px-4 py-5 text-center">Grams / Day</th>
                  <th className="px-4 py-5 text-center">Days / Month</th>
                  <th className="px-4 py-5 text-center">Family Members</th>
                  <th className="px-4 py-5">Qty / Person</th>
                  <th className="px-4 py-5">Price / Kg</th>
                  <th className="px-6 py-5 text-right">Total Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentPlanner.map((row, idx) => {
                  const { qty, price } = calculateRow(row);
                  return (
                    <tr
                      key={idx}
                      className="group hover:bg-gray-50/30 transition-all"
                    >
                      <td className="px-6 py-4">
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-[var(--olive)] transition-colors">
                            {row.name}
                          </p>
                          <p className="text-[9px] text-gray-400 font-medium tracking-wide">
                            {row.tam} | {row.hin}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input
                          type="number"
                          className="w-16 px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 text-xs font-bold text-gray-700 text-center focus:ring-2 focus:ring-[var(--olive)]/20 focus:bg-white outline-none transition-all"
                          value={row.grams}
                          onChange={(e) => {
                            const newPlanner = [...currentPlanner];
                            newPlanner[idx].grams = Number(e.target.value);
                            setPlanner(newPlanner);
                          }}
                        />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input
                          type="number"
                          className="w-16 px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 text-xs font-bold text-gray-700 text-center focus:ring-2 focus:ring-[var(--olive)]/20 focus:bg-white outline-none transition-all"
                          value={row.days}
                          onChange={(e) => {
                            const newPlanner = [...currentPlanner];
                            newPlanner[idx].days = Number(e.target.value);
                            setPlanner(newPlanner);
                          }}
                        />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input
                          type="number"
                          className="w-16 px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 text-xs font-bold text-gray-700 text-center focus:ring-2 focus:ring-[var(--olive)]/20 focus:bg-white outline-none transition-all"
                          value={row.members}
                          onChange={(e) => {
                            const newPlanner = [...currentPlanner];
                            newPlanner[idx].members = Number(e.target.value);
                            setPlanner(newPlanner);
                          }}
                        />
                      </td>
                      <td className="px-4 py-4 font-medium text-gray-400 text-xs">
                        {qty} <span className="text-[9px] font-bold">Kg</span>
                      </td>
                      <td className="px-4 py-4 font-medium text-gray-400 text-xs">
                        ₹{row.price}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-[var(--olive)] text-sm">
                        ₹{price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-gray-50/50 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100">
            <button className="btn-standard w-full md:w-auto rounded-xl font-bold text-[10px] tracking-[0.2em] active:scale-95 transition-all duration-300 cursor-pointer">
              ADD TO CART
            </button>
            <div className="text-center md:text-right space-y-0.5">
              <p className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                Monthly Grand Total
              </p>
              <p className="text-lg font-black text-gray-900 tracking-tight">
                ₹{grandTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionPlans() {
  const { ref, isVisible } = useInView();
  const plans = [
    {
      name: "Heritage Basic",
      price: "1,499",
      desc: "Perfect for small families starting their wellness journey.",
      features: [
        "Monthly Millet Box (2kg)",
        "Essential Nut Pack (500g)",
        "Standard Eco-Packaging",
        "Community Access",
      ],
      excluded: [
        "Nutritionist Advice",
        "Priority Shipping",
        "Sacred Pooja Kit",
      ],
      color: "bg-stone-800",
      accent: "text-stone-800",
      border: "border-stone-100",
    },
    {
      name: "Wellness Standard",
      price: "2,999",
      desc: "Our most loved plan for balanced daily nutrition.",
      features: [
        "Monthly Millet Box (5kg)",
        "Premium Nut Pack (1kg)",
        "Handcrafted Jute Packaging",
        "Nutritionist Advice",
        "Priority Shipping",
      ],
      excluded: ["Sacred Pooja Kit", "Recipe eBooks"],
      color: "bg-[var(--olive)]",
      accent: "text-[var(--olive)]",
      featured: true,
      border: "border-[var(--olive)]/20",
    },
    {
      name: "Royal Premium",
      price: "4,999",
      desc: "The ultimate tradition-to-wellness experience.",
      features: [
        "Bulk Millet Supply (10kg)",
        "Luxury Nut & Berry Box",
        "Sacred Pooja Kit (Monthly)",
        "Premium Recipe eBooks",
        "Dedicated Wellness Concierge",
        "VIP Event Access",
      ],
      excluded: [],
      color: "bg-[var(--orange)]",
      accent: "text-[var(--orange)]",
      border: "border-[var(--orange)]/20",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#fafaf9] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--olive)]/5 border border-[var(--olive)]/10 mb-4">
            <Sparkles className="w-3 h-3 text-[var(--olive)]" />
            <span className="text-[10px] font-black text-[var(--olive)] uppercase tracking-[0.2em]">
              Subscription Plans
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
            Traditional Wellness{" "}
            <span className="gradient-text">Subscription</span>
          </h2>
          <p className="text-gray-400 text-[11px] max-w-md mx-auto font-medium">
            Curated nutrition plans delivered to your doorstep every month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-[2rem] p-1.5 border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${plan.border} ${plan.featured ? "shadow-[0_30px_60px_-10px_rgba(85,107,47,0.12)] scale-[1.02] z-10" : "hover:shadow-xl hover:-translate-y-1"}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--olive)] to-emerald-700 text-white text-[9px] font-black tracking-[0.2em] uppercase shadow-lg z-20 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="relative h-full rounded-[1.75rem] overflow-hidden flex flex-col">
                {/* Header Section */}
                <div className="p-7 pb-4 space-y-3">
                  <h3
                    className={`text-[10px] font-black tracking-[0.2em] uppercase ${plan.accent}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[10px] font-bold text-gray-400">
                      ₹
                    </span>
                    <span className="text-3xl font-black text-gray-900 tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                      / mo
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed line-clamp-2">
                    {plan.desc}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-1 p-7 pt-2 space-y-6">
                  <div className="w-full h-px bg-gray-50" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-3 text-[11px] font-bold text-gray-600"
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-md ${plan.accent} bg-stone-50 flex items-center justify-center border border-current/5`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                    {plan.excluded?.map((feature, fIdx) => (
                      <li
                        key={"ex" + fIdx}
                        className="flex items-center gap-3 text-[11px] font-bold text-gray-300 line-through opacity-50"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-md bg-stone-50 flex items-center justify-center text-red-200 border border-gray-50">
                          <span className="text-[8px] font-black">✕</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Section */}
                <div className="p-7 pt-0">
                  <button className="btn-standard w-full rounded-xl text-[13px] font-black front-normal tracking-[0.2em] transition-all duration-500 shadow-lg cursor-pointer active:scale-95">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// -----------------------------------  NEW ARRIVALS SECTION (Shop Style)

function NewArrivalsSection() {
  const { ref, isVisible } = useInView();
  const newProducts = [
    {
      id: 101,
      name: "Premium Foxtail Millet",
      category: "Millets",
      price: 299,
      originalPrice: 399,
      rating: 4.7,
      image:
        "https://dryfruitshome.com/wp-content/uploads/2019/07/foxtail-millet-thinai.jpg",
      isNew: true,
    },
    {
      id: 102,
      name: "Premium Almonds",
      category: "Nuts & Dry Fruits",
      price: 899,
      originalPrice: 1100,
      rating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5XC7IzZhRYA9FOo2b_aStlaTMAMVXk1cNg&s",
      isNew: true,
    },
    {
      id: 103,
      name: "Brass Diya Set",
      category: "Pooja Gifts",
      price: 1299,
      originalPrice: 1800,
      rating: 4.8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s",
      isNew: true,
    },
    {
      id: 104,
      name: "Festival Gift Hamper",
      category: "Gift Hampers",
      price: 2999,
      originalPrice: 3999,
      rating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLKhWmIcPt_tA10h3MmkjKEbRTzwEw4gQPg&s",
      isNew: true,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col md:flex-row items-end justify-between mb-16 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="space-y-4 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              New <span className="gradient-text">Arrivals</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md font-light">
              Freshly added to our collection. Discover our latest traditional
              wellness offerings and sacred essentials.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs font-black tracking-widest uppercase text-[var(--olive)] border-b-2 border-[var(--olive)]/20 pb-1 hover:border-[var(--olive)] transition-all"
          >
            Explore All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newProducts.map((product, idx) => (
            <Link
              href={
                product.category.includes("Gift")
                  ? "/gift-detail"
                  : "/product-detail"
              }
              key={product.id}
              className={`group relative bg-white border border-gray-100/50 rounded-[2rem] p-3 block transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#FCFBF9]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute top-3 inset-x-3 flex justify-between items-start">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-bold text-[var(--olive)] tracking-widest shadow-sm">
                    NEW
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-300 hover:text-red-500 transition-all transform hover:scale-110 active:scale-95">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="absolute inset-x-3 bottom-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-[var(--cream)] text-black py-3 rounded-xl font-bold text-[9px] tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-[var(--olive)] hover:text-white transition-all">
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
                  <span className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[var(--olive)] hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
