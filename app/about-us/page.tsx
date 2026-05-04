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
  useEffect(() => {
    setLoaded(true);
  }, []);

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
      title: "Traditional Pooja",
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
        className="relative pt-40 pb-24 lg:pt-52 lg:pb-40 overflow-hidden flex items-center justify-center bg-white"
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
            Our Heritage
          </div>

          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Welcome to
            <span className="gradient-text"> Tradizions.</span>
          </h1>

          <p
            className={`text-md md:text-lg text-gray-500 leading-relaxed font-light max-w-3xl mx-auto transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Welcome to{" "}
            <span className="font-semibold text-gray-900">Tradizions</span>–
            your trusted destination for traditional, healthy, and premium
            everyday essentials.
          </p>

          <p
            className={`text-md md:text-lg text-gray-500 leading-relaxed font-light max-w-3xl mx-auto mt-4 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            In today’s fast-paced world, we aim to reconnect modern homes with
            the richness of tradition. From wholesome millets and premium nuts
            to pure spices and pooja essentials, we bring together products that
            support both your health and your lifestyle.
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
                      Our Journey Began
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
                    Authentic
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
                  Our Story
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Rooted in Soil, <br />
                  <span className="gradient-text">Grown with Love.</span>
                </h3>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--olive)] to-[var(--orange)] rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Founded in{" "}
                  <strong className="text-gray-900 font-semibold">1995</strong>,{" "}
                  <strong className="text-gray-900 font-semibold">
                    Tradizions
                  </strong>{" "}
                  began with a simple vision: to make traditional, high-quality
                  products easily accessible to every household.
                </p>
                <p>
                  What started as a focus on millets and nuts has grown into a
                  complete platform offering a wide range of essentials—from
                  daily cooking ingredients to festive and gifting needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">30+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Years Experience
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Organic Certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="bg-[var(--olive)] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grain" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--orange)]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none animate-float delay-1000" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <HeartHandshake className="w-20 h-20 text-white/20 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-12 italic">
            “To bring together tradition, health, and convenience by delivering
            high-quality essentials that enrich everyday living.”
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-1 bg-white/30 rounded-full" />
            <p className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs">
              The Tradizions Mission
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ── */}
      <section ref={valuesRef.ref} className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-sm font-bold text-[var(--olive)] tracking-[0.3em] uppercase">
              Our Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We <span className="gradient-text">Stand For</span>
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
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {v.title}
                </h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  {v.desc}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="gradient-text">Offerings</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            {offerings.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-[2.5rem] p-10 flex flex-col items-start text-left border border-gray-100 transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(85,107,47,0.08)] hover:border-[var(--olive)]/20 ${offerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Executive Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <img
                    src={item?.icon}
                    alt={item?.title || "icon"}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-[1px] ${item.text.replace('text', 'bg')} opacity-40`} />
                      <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${item.text} opacity-80`}>
                        {item.tag}
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[var(--olive)] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Interaction */}
                <div className="mt-10 flex items-center justify-between w-full">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-100 group-hover:bg-[var(--olive)] transition-colors duration-300" />
                    <div className="w-8 h-2 rounded-full bg-gray-100 group-hover:bg-[var(--olive)] transition-all duration-500 group-hover:w-12" />
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${item.text} opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0`} />
                </div>

                {/* Corner Decorative Accent */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 ${item.bg} opacity-[0.02] rounded-bl-[100%] -z-0 transition-all duration-700 group-hover:opacity-[0.06]`}
                />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/shop"
              className="group relative inline-flex items-center px-10 py-4 rounded-full bg-[var(--olive)] text-white font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(85,107,47,0.3)] hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Shop{" "}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--olive-dark)] to-[var(--olive)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-gray-900 to-[#A79b6a] rounded-[1rem] p-12 md:p-20 relative overflow-hidden text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--olive)]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--orange)]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Join the <span className="text-[var(--orange)]">Tradizions</span>{" "}
              Family
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Experience the richness of tradition and the purity of nature's
              best offerings. Start your wellness journey with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link
                href="/shop"
                className="px-10 py-4 rounded-full bg-[var(--orange)] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-[var(--orange-dark)] transition-all hover:scale-105 active:scale-95"
              >
                Shop Now
              </Link>
              <Link
                href="/contact-us"
                className="px-10 py-4 rounded-full glass text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
