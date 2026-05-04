"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  ChevronRight,
  Award,
  Globe,
  Truck,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  Gift,
  Building2,
  Users,
  Mail,
  Phone,
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

export default function CorporateOrdersPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const heroRef = useInView();
  const benefitsRef = useInView();
  const productsRef = useInView();
  const formRef = useInView();

  const corporateProducts = [
    {
      id: 1,
      name: "Executive Wellness Hamper",
      price: 3499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lo4Psnq5vDI61PzeMWKo2UlIv2_kyPnzBQ&s",
      desc: "A curated mix of organic millets, premium nuts, and healthy malts.",
    },
    {
      id: 2,
      name: "Signature Dry Fruit Selection",
      price: 2899,
      image:
        "https://img.freepik.com/free-photo/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_176474-2051.jpg?semt=ais_hybrid&w=740&q=80",
      desc: "Grade-A handpicked dry fruits in artisanal wooden packaging.",
    },
    {
      id: 3,
      name: "Traditional Festive Box",
      price: 4999,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7BJ2N2Wp2yYW6ApncUC_Eo_HNDzAcaKSQQ&s",
      desc: "The ultimate celebration package with sacred pooja items and treats.",
    },
    {
      id: 4,
      name: "Morning Vitality Bundle",
      price: 1899,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FT49efQnnIWeAkVhYB4M2aHITRbY1rv5ww&s",
      desc: "Nutrient-dense millet malts and seeds for a healthy corporate lifestyle.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef.ref}
        className="relative pt-40 pb-24 lg:pt-52 lg:pb-40 overflow-hidden flex items-center justify-center bg-[#0a0a0a] text-white"
      >
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2001&auto=format&fit=crop"
            fill
            alt="Corporate Gifting Background"
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/60" />
        </div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--olive)]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--orange)]/10 rounded-full blur-[120px] animate-float delay-700 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 text-[11px] font-bold tracking-[0.25em] uppercase mb-8 shadow-sm transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Briefcase className="w-4 h-4 text-[var(--orange)]" />
            Corporate Gifting Solutions
          </div>

          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Elevate Your Corporate <br />
            <span className="text-[var(--orange)]">Relationships.</span>
          </h1>

          <p
            className={`text-lg md:text-lg text-white/60 leading-relaxed font-light max-w-3xl mx-auto transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Thoughtfully curated wellness hampers rooted in tradition, designed
            to make a lasting impression on your clients and employees.
          </p>

          <div
            className={`mt-12 transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={() =>
                document
                  .getElementById("corporate-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-4 rounded-full bg-[var(--olive)] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-[var(--olive-dark)] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--olive)]/20 cursor-pointer"
            >
              Get a Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ── */}
      <section ref={benefitsRef.ref} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Certified organic millets and grade-A dry fruits sourced directly from the heartlands.",
              },
              {
                icon: Globe,
                title: "Pan-India Delivery",
                desc: "Seamless logistics to ensure your gifts reach your partners anywhere in India on time.",
              },
              {
                icon: Users,
                title: "Bulk Customization",
                desc: "Personalized branding, custom inserts, and tailored selections to suit your brand identity.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center space-y-6 transition-all duration-1000 ${benefitsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[var(--olive)] shadow-inner">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-xs">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LISTING SECTION ── */}
      <section ref={productsRef.ref} className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-sm font-bold text-[var(--olive)] tracking-[0.3em] uppercase">
              The Collection
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Popular Corporate <span className="gradient-text">Choices</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateProducts.map((item, i) => (
              <div
                key={i}
                className={`premium-card bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-700 ${productsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    alt={item.name}
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[var(--olive)] uppercase tracking-widest shadow-sm">
                    Best Seller
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-light line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-black text-gray-900">
                      ₹{item.price}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[var(--olive)] hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM SECTION ── */}
      <section id="corporate-form" className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Reduced Premium Contact Card - Above Form */}
            <div
              className={`mb-16 transition-all duration-1000 ${formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="premium-card bg-white rounded-[1rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden group max-w-3xl mx-auto">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--olive)]/5 rounded-bl-full -z-10 group-hover:bg-[var(--olive)]/10 transition-colors" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                  <div className="space-y-4 text-center md:text-left flex-1">
                    <h3 className="text-[10px] font-bold text-[var(--olive)] tracking-[0.3em] uppercase">
                      Get in Touch
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      Looking for a{" "}
                      <span className="gradient-text">custom quote?</span>
                    </h2>
                    <p className="text-sm text-gray-400 font-light max-w-md">
                      Or fill out our inquiry form below and our team will get
                      back to you within{" "}
                      <span className="font-bold text-gray-900">24 hours.</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 shrink-0 w-full md:w-auto">
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--olive)] flex items-center justify-center transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-[var(--olive)] group-hover/item:text-white">
                        <Mail className="w-5 h-5" />
                      </div>
                      <a
                        href="mailto:qpay@tradizions.com"
                        className="text-md font-bold text-gray-900 hover:text-[var(--olive)] transition-colors"
                      >
                        qpay@tradizions.com
                      </a>
                    </div>

                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-[var(--orange)] flex items-center justify-center transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-[var(--orange)] group-hover/item:text-white">
                        <Phone className="w-5 h-5" />
                      </div>
                      <a
                        href="tel:+919940620019"
                        className="text-md font-bold text-gray-900 hover:text-[var(--olive)] transition-colors"
                      >
                        +91 9940620019
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form below */}
            <div
              ref={formRef.ref}
              className={`transition-all duration-1000 delay-300 max-w-3xl mx-auto ${formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="bg-white rounded-[1rem] p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Tradizions Inc."
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Quantity (Approx)
                      </label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium appearance-none">
                        <option>10 - 50</option>
                        <option>50 - 200</option>
                        <option>200 - 500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Tell us about your requirement
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Special packaging, event date, etc."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-5 rounded-2xl bg-[var(--olive)] text-white font-bold text-[12px] tracking-[0.25em] shadow-xl shadow-[var(--olive)]/20 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] transition-all uppercase">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {/* Logos or placeholder text */}
            <span className="text-xl font-bold tracking-widest">
              TRUSTED BY
            </span>
            <span className="text-xl font-black tracking-tighter italic">
              CORP-X
            </span>
            <span className="text-xl font-black tracking-tighter italic">
              TECH-GLOBAL
            </span>
            <span className="text-xl font-black tracking-tighter italic">
              VITALITY
            </span>
            <span className="text-xl font-black tracking-tighter italic">
              HERITAGE-CO
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
