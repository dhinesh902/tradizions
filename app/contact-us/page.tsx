"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Briefcase,
  MessageSquare,
  Heart,
  Globe,
  CheckCircle2,
  ChevronRight,
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

export default function ContactUsPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const headerRef = useInView();
  const infoRef = useInView();
  const formRef = useInView();

  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section
        ref={headerRef.ref}
        className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex items-center justify-center bg-white"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--olive)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--orange)]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-emerald-100 rounded-full blur-xl animate-float opacity-50" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-100 rounded-full blur-xl animate-float delay-700 opacity-50" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] border border-[var(--olive)]/20 text-[11px] font-bold tracking-[0.25em] uppercase mb-8 shadow-sm transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <MessageSquare className="w-4 h-4" />
            Connect With Us
          </div>

          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We'd Love to <span className="gradient-text">Hear From You.</span>
          </h1>

          <p
            className={`text-md md:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Whether you have a question about our heritage millets, need help
            with a premium hamper, or want to discuss corporate partnerships,
            our team is here to assist.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* ── LEFT SIDE: Contact Info ── */}
          <div
            ref={infoRef.ref}
            className={`w-full lg:w-5/12 space-y-10 transition-all duration-1000 ${infoRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[var(--olive)]" />
                <h2 className="text-[11px] font-bold text-[var(--olive)] tracking-[0.4em] uppercase">
                  Connectivity Hub
                </h2>
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Executive <br />
                <span className="gradient-text">Communication.</span>
              </h3>
            </div>

            {/* Headquarters Card - Redesigned */}
            <div className="group relative bg-white rounded-[2rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(85,107,47,0.1)]">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-[var(--olive)] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--olive)]/20 transition-transform duration-500 group-hover:rotate-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Office Hours
                  </p>
                  <p className="text-xs font-bold text-gray-900">
                    09:30 AM — 06:30 PM
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Corporate Headquarters
                  </h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-[var(--olive)] to-[var(--orange)] rounded-full mb-4" />
                </div>

                <p className="text-gray-500 leading-relaxed font-light text-md">
                  <span className="text-gray-900 font-bold block mb-1">
                    Tradizions Naturals Pvt. Ltd.
                  </span>
                  16 Indhira Ghandhi Street, <br />
                  Palayapalayam,Erode, Tamil Nadu - 638011, India.
                </p>

                <div className="pt-4 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Active Hub
                    </span>
                  </div>
                  <button className="text-[10px] font-bold text-[var(--olive)] uppercase tracking-widest hover:text-[var(--orange)] transition-colors">
                    View on Map →
                  </button>
                </div>
              </div>
            </div>

            {/* Support & Relations - Redesigned to be more compact and premium */}
            <div className="grid grid-cols-1 gap-5">
              <div className="flex items-center justify-between p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:bg-gray-50/50 group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center group-hover:bg-[var(--olive)]/10 group-hover:text-[var(--olive)] transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
                      Primary Relations
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      qpay@tradizions.com
                    </p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                </div>
              </div>

              <div className="flex items-center justify-between p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:bg-gray-50/50 group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center group-hover:bg-[var(--orange)]/10 group-hover:text-[var(--orange)] transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
                      Concierge Line
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      99406 20019
                    </p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[var(--olive)]/30 overflow-hidden">
              {/* Decorative Geometric Shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--olive)]/5 rounded-bl-full transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 bg-[var(--olive)]/10 text-[var(--olive)] rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--olive)] opacity-60">
                      Commercial Division
                    </span>
                    <h4 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                      Enterprise Relations.
                    </h4>
                  </div>
                </div>

                <p className="text-gray-500 leading-relaxed font-light mb-10 text-md max-w-sm">
                  Tailored solutions for global bulk procurement, corporate gifting strategies, and institutional partnerships.
                </p>

                <div className="grid grid-cols-1 gap-6 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover/item:bg-[var(--orange)] group-hover/item:text-white transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Inquiries</p>
                      <p className="text-sm font-bold text-gray-900">partners@tradizions.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover/item:bg-[var(--orange)] group-hover/item:text-white transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Institutional Line</p>
                      <p className="text-sm font-bold text-gray-900">99406 20018</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--orange)]/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* ── RIGHT SIDE: Contact Form ── */}
          <div
            ref={formRef.ref}
            className={`w-full lg:w-7/12 transition-all duration-1000 delay-300 ${formRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_70px_rgba(85,107,47,0.08)] border border-gray-100 relative">
              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send a <span className="text-[var(--olive)]">Message.</span>
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Have a specific inquiry? Fill out the form below and our
                  dedicated wellness experts will respond within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium text-gray-900 placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="mobile"
                      className="block text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium text-gray-900 placeholder:text-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="aditi@example.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium text-gray-900 placeholder:text-gray-300"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your inquiry in detail..."
                    className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] focus:bg-white transition-all text-sm font-medium text-gray-900 placeholder:text-gray-300 resize-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full py-5 rounded-2xl bg-[var(--olive)] text-white font-bold text-[12px] tracking-[0.25em] shadow-xl shadow-[var(--olive)]/20 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 uppercase"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--olive-dark)] to-[var(--olive)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </form>

              {/* Trust badges below form */}
              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    24-Hour <br /> Response
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <Heart className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    Expert <br /> Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 mb-20">
        <div className="relative h-[300px] w-full rounded-[1rem] overflow-hidden shadow-2xl group border border-white">
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop"
            fill
            alt="Map location"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          <div className="absolute bottom-10 left-10 p-8 glass rounded-[2rem] border border-white/20 shadow-2xl max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--orange)] flex items-center justify-center text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white">Visit Our Hub</h4>
            </div>
            <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
              Come experience the heritage of Tradizions at our central flagship
              experience center.
            </p>
            <button
              className="flex items-center gap-2 text-xs font-bold text-[var(--orange)] uppercase tracking-widest group-hover:gap-4 transition-all cursor-pointer"
              onClick={() =>
                window.open("https://www.google.com/maps", "_blank")
              }
            >
              Get Directions <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
