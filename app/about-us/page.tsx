"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Droplets,
  Nut,
  CheckCircle2,
  HeartHandshake,
  Sprout,
  Target,
  Award,
  Users,
  ShieldCheck,
  ChevronRight,
  Globe,
  Sparkles,
  Package,
  Soup,
} from "lucide-react";
import en from "@/languages/en.json";
import ta from "@/languages/ta.json";
import hi from "@/languages/hi.json";

const translations: Record<string, any> = {
  EN: en,
  TA: ta,
  HI: hi,
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

export default function AboutUsPage() {
  const [loaded, setLoaded] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  useEffect(() => {
    setLoaded(true);
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

  const heroRef = useInView();
  const storyRef = useInView();
  const valuesRef = useInView();
  const missionRef = useInView();
  const offerRef = useInView();

  const promises = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      desc: "Sourced from trusted farmers and suppliers.",
      color: "emerald",
    },
    {
      icon: Droplets,
      title: "Freshness Guaranteed",
      desc: "Packed to retain natural taste and nutrition.",
      color: "amber",
    },
    {
      icon: Award,
      title: "Tradition & Purity",
      desc: "Authentic products you can trust.",
      color: "olive",
    },
    {
      icon: Users,
      title: "Customer First",
      desc: "Your satisfaction is our priority.",
      color: "emerald",
    },
  ];

  const offerings = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/8512/8512339.png",
      title: "Nutritious Millets",
      desc: "Wholesome millets for a healthier lifestyle.",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      tag: "Healthy",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1728/1728755.png",
      title: "Premium Nuts",
      desc: "Premium nuts & dry fruits for daily consumption and gifting.",
      bg: "bg-amber-50",
      text: "text-amber-600",
      tag: "Premium",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/6522/6522008.png",
      title: "Malts",
      desc: "Rich, wholesome blends crafted to nourish and energize every day.",
      bg: "bg-orange-50",
      text: "text-orange-600",
      tag: "Pure",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/17017/17017130.png",
      title: "Traditional Pooja Items",
      desc: "Traditional pooja items for everyday rituals and festivals.",
      bg: "bg-blue-50",
      text: "text-blue-600",
      tag: "Authentic",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/9592/9592247.png",
      title: "Gift Boxes",
      desc: "Thoughtfully curated gift boxes for every occasion.",
      bg: "bg-purple-50",
      text: "text-purple-600",
      tag: "Curated",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef.ref}
        className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden flex items-center justify-center bg-white"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--olive)]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--orange)]/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

        {/* Floating shapes */}
        <div className="absolute top-1/4 right-10 w-24 h-24 bg-amber-100 rounded-full blur-xl animate-float opacity-50" />
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-emerald-100 rounded-full blur-xl animate-float delay-700 opacity-50" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] border border-[var(--olive)]/20 text-[11px] font-bold tracking-[0.25em] uppercase mb-8 shadow-sm transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Leaf className="w-4 h-4" />
            {t.about_us.heritage}
          </div>

          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t.about_us.welcome}
            <span className="gradient-text"> {t.about_us.brand}</span>
          </h1>

          <p
            className={`text-md md:text-md text-gray-500 leading-relaxed font-light max-w-3xl mx-auto transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t.about_us.welcome}{" "}
            <span className="font-semibold text-gray-900">
              {t.about_us.brand.replace(".", "")}
            </span>
            –{t.about_us.tagline1}
          </p>

          <p
            className={`text-md md:text-md text-gray-500 leading-relaxed font-light max-w-3xl mx-auto mt-4 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {t.about_us.tagline2}
          </p>

          <div
            className={`mt-12 flex justify-center gap-4 transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-1 h-20 bg-gradient-to-b from-[var(--olive)] to-transparent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section ref={storyRef.ref} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div
              className={`w-full lg:w-1/2 relative transition-all duration-1000 ${storyRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://ayoubs.ca/cdn/shop/articles/Keeping_Nuts_Fresh_1_0392edc0-a2f5-4141-ad20-eba7fde1a2c7_460x@2x.png?v=1750113836"
                  fill
                  alt="Our agricultural roots"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-[2px] bg-[var(--orange)]" />
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                      {t.about_us.heritage}
                    </p>
                  </div>
                  <p className="text-5xl font-black italic">1995</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--olive)]/10 rounded-full -z-10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 organic-shape bg-amber-500/10 -z-10 blur-3xl animate-float" />

              {/* Floating Badge */}
              <div className="absolute -right-8 top-1/4 glass p-6 rounded-3xl border border-white/20 shadow-2xl z-20 max-w-[200px] animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-100">
                    {t.about_us.org_cert.split(" ")[0]}
                  </p>
                </div>
                <p className="text-xs font-medium text-white leading-relaxed">
                  Trusted by over 10,000+ health-conscious families.
                </p>
              </div>
            </div>

            <div
              className={`w-full lg:w-1/2 space-y-10 transition-all duration-1000 delay-300 ${storyRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="space-y-6">
                <h2 className="text-sm font-bold text-[var(--olive)] tracking-[0.3em] uppercase">
                  {t.about_us.story_title}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {t.about_us.story_heading.split(",")[0]}, <br />
                  <span className="gradient-text">
                    {t.about_us.story_heading.split(",")[1]}
                  </span>
                </h3>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--olive)] to-[var(--orange)] rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>{t.about_us.story_desc1}</p>
                <p>{t.about_us.story_desc2}</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">30+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {t.about_us.exp_years}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {t.about_us.org_cert}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MISSION CARD ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--olive)]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[var(--orange)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="group relative bg-white rounded-[3rem] p-12 md:p-16 border border-[#e0d4b7] shadow-[0_50px_100px_-30px_rgba(85,107,47,0.08)] overflow-hidden transition-all duration-700 hover:shadow-[0_60px_120px_-30px_rgba(85,107,47,0.12)]">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[var(--olive)]/5 opacity-30 pointer-events-none" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                <HeartHandshake className="w-8 h-8" />
              </div>

              <div className="space-y-8">
                <div className="flex justify-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--olive)] animate-pulse" />
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[var(--olive)] to-transparent" />
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed italic tracking-wide">
                  “{t.about_us.mission_quote}”
                </h2>

                <div className="flex flex-col items-center gap-4 pt-4">
                  <div className="w-16 h-[1px] bg-gray-200" />
                  <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--olive)] opacity-60">
                    {t.about_us.mission_title}
                  </p>
                </div>
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--olive)]/5 rounded-full blur-2xl group-hover:bg-[var(--olive)]/10 transition-colors duration-700" />
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ── */}
      <section ref={valuesRef.ref} className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-sm font-bold text-[var(--olive)] tracking-[0.3em] uppercase">
              {t.about_us.promise_title}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.about_us.promise_heading.split(" ")[0]}{" "}
              {t.about_us.promise_heading.split(" ")[1]}{" "}
              <span className="gradient-text">
                {t.about_us.promise_heading.split(" ").slice(2).join(" ")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((v, i) => (
              <div
                key={i}
                className={`premium-card bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center transition-all duration-700 ${valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${v.color === "emerald" ? "bg-emerald-50 text-emerald-600" : v.color === "amber" ? "bg-amber-50 text-amber-600" : "bg-olive-50 text-[var(--olive)]"}`}
                >
                  <v.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t.about_us.promises?.[i]?.title || v.title}
                </h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {t.about_us.promises?.[i]?.desc || v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section
        ref={offerRef.ref}
        className="py-32 bg-white relative overflow-hidden"
      >
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.about_us.offerings_heading.split(" ")[0]}{" "}
              <span className="gradient-text">
                {t.about_us.offerings_heading.split(" ")[1]}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            {offerings.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-[1rem] p-7 flex flex-col items-start text-left border border-[#E0E0E0] transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(85,107,47,0.1)] hover:border-[var(--olive)] hover:-translate-y-1.5 ${offerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Premium Icon Header */}
                <div className="w-full flex items-start justify-between mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}
                  >
                    <img
                      src={item?.icon}
                      alt={item?.title || "icon"}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${item.text} opacity-40 group-hover:opacity-100 transition-opacity`}>
                      0{i + 1}
                    </span>
                    <div className={`w-8 h-1 mt-1 rounded-full bg-gray-100 group-hover:${item.bg.replace("bg-", "bg-")} transition-all`} />
                  </div>
                </div>

                <div className="space-y-4 flex-1 relative z-10">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 group-hover:border-[var(--olive)]/30 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.text.replace("text", "bg")}`} />
                      <p className={`text-[9px] font-black uppercase tracking-[0.15em] ${item.text}`}>
                        {item.tag}
                      </p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[var(--olive)] transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-[13px] leading-relaxed font-light line-clamp-3 group-hover:text-gray-600 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Refined Footer */}
                <div className="mt-8 pt-6 border-t border-gray-50 w-full flex items-center justify-between group-hover:border-[var(--olive)]/10 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.text.replace("text", "bg")} w-0 group-hover:w-full transition-all duration-1000 delay-300`} />
                    </div>
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                      Quality Verified
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${item.bg} ${item.text} opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 shadow-lg shadow-[var(--olive)]/10`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Background Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50/30 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/shop"
              className="group relative inline-flex items-center px-10 py-4 rounded-full bg-[var(--olive)] text-white font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(85,107,47,0.3)] hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.about_us.explore_shop}{" "}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--olive-dark)] to-[var(--olive)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
