"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Package,
  MapPin,
  Heart,
  ShoppingCart,
  LogOut,
  ChevronRight,
  Gift,
  Zap,
  Users,
  Wallet,
  Check,
  Lock,
} from "lucide-react";
import en from "@/languages/en.json";
import ta from "@/languages/ta.json";
import hi from "@/languages/hi.json";

const translations: Record<string, any> = {
  EN: en,
  TA: ta,
  HI: hi,
};

export default function ProfilePage() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("EN");

  // Left menu state
  const [activeTab, setActiveTab] = useState("profile"); // profile, addresses, wishlist, orders, gift-orders, subscriptions, referrals, wallet

  // Address sub-view state
  const [addressView, setAddressView] = useState("list"); // list, add, edit

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      router.push("/");
    } else {
      setMobile(localStorage.getItem("userMobile") || "9876543210");
    }

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
  }, [router]);

  const t = translations[selectedLang] || translations["EN"];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userMobile");
    window.location.href = "/";
  };

  const renderProfileForm = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.my_account.edit_profile}</h2>
      <div className="space-y-4 max-w-sm">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            {t.my_account.full_name || t.contact_us.full_name}
          </label>
          <input
            type="text"
            defaultValue="Tradizions User"
            className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            {t.my_account.email || t.contact_us.email}
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            {t.my_account.mobile || t.contact_us.mobile}
          </label>
          <input
            type="text"
            disabled
            value={mobile}
            className="w-full border border-gray-100 bg-gray-50 text-gray-400 rounded-lg py-2.5 px-3 outline-none cursor-not-allowed font-medium text-sm"
          />
          <p className="text-[10px] text-gray-400 mt-1">
            Mobile number cannot be changed.
          </p>
        </div>
        <button className="btn-standard w-full rounded-lg font-bold text-[13px] tracking-widest shadow-md shadow-[var(--olive)]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all mt-4">
          {t.my_account.save_changes}
        </button>
      </div>
    </div>
  );

  const renderAddresses = () => {
    if (addressView === "add" || addressView === "edit") {
      return (
        <div className="animate-fade-in-right">
          <button
            onClick={() => setAddressView("list")}
            className="text-xs font-bold tracking-widest text-gray-400 hover:text-[var(--olive)] mb-6 flex items-center gap-1 uppercase transition-colors"
          >
            ← {t.my_account.back_to_addr}
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {addressView === "add" ? t.my_account.add_new_addr : t.my_account.edit_addr}
          </h2>
          <div className="space-y-4 max-w-sm">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                {t.my_account.addr_title}
              </label>
              <input
                type="text"
                placeholder="e.g. Home, Office"
                defaultValue={addressView === "edit" ? "HOME" : ""}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                {t.my_account.comp_addr}
              </label>
              <textarea
                rows={3}
                placeholder="Enter your full address"
                defaultValue={
                  addressView === "edit"
                    ? "123 Heritage Villa, Tradizions Lane,\nChennai, Tamil Nadu - 600001"
                    : ""
                }
                className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all resize-none font-medium text-gray-800 text-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                {t.my_account.pincode}
              </label>
              <input
                type="text"
                placeholder="6-digit pincode"
                defaultValue={addressView === "edit" ? "600001" : ""}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm"
              />
            </div>
            <button
              onClick={() => setAddressView("list")}
              className="btn-standard w-full rounded-lg font-bold text-[13px] tracking-widest shadow-md shadow-[var(--olive)]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all mt-4"
            >
              {addressView === "add" ? t.my_account.save_addr : t.my_account.update_addr}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{t.my_account.saved_addresses}</h2>
          <button
            onClick={() => setAddressView("add")}
            className="px-5 py-2.5 bg-[var(--olive)]/10 text-[var(--olive)] font-bold text-[11px] tracking-widest rounded-xl hover:bg-[var(--olive)] hover:text-white transition-colors shadow-sm"
          >
            + {t.my_account.add_new}
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border-2 border-[var(--olive)]/20 bg-[#faf9f6] relative group transition-all hover:shadow-md cursor-pointer">
            <button
              onClick={() => setAddressView("edit")}
              className="absolute top-6 right-6 text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-[var(--olive)] transition-colors"
            >
              EDIT
            </button>
            <span className="inline-block px-3 py-1 bg-white shadow-sm text-[var(--olive)] border border-gray-100 text-[10px] font-bold tracking-widest rounded-md mb-4">
              HOME
            </span>
            <p className="text-sm font-medium text-gray-700 leading-relaxed">
              123 Heritage Villa, Tradizions Lane,
              <br />
              Chennai, Tamil Nadu - 600001
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderWishlist = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.my_account.wishlist}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Shop Page Style Product Card */}
        <div className="group relative bg-white rounded-3xl p-4 border border-gray-100 hover:border-[var(--olive)]/30 hover:shadow-[0_20px_40px_rgba(85,107,47,0.08)] transition-all duration-500 flex flex-col">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#faf9f6] mb-4">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              alt="item"
            />
            <div className="absolute top-3 right-3 z-10">
              <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-500 hover:bg-red-50 hover:scale-110 transition-all shadow-sm">
                <Heart className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors line-clamp-1 mb-1">
              Brass Diya Set
            </h3>
            <p className="text-xs text-gray-500 line-clamp-1 mb-3">
              Premium handmade pooja essential
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-[var(--olive)]">
                  ₹1,299
                </span>
              </div>
              <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[var(--olive)] group-hover:bg-[var(--olive)] group-hover:text-white transition-all">
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.my_account.order_history}</h2>
      <div className="space-y-6">
        <Link href="/order-detail" className="flex flex-col sm:flex-row gap-6 p-5 sm:p-6 rounded-[2rem] bg-[#faf9f6] border border-gray-100 hover:border-[var(--olive)]/30 transition-all shadow-sm group block">
          <div className="w-full sm:w-32 h-48 sm:h-32 rounded-2xl bg-gray-200 shrink-0 overflow-hidden relative shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=200&auto=format&fit=crop"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              alt="order"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center py-2">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-gray-900">
                Premium Dry Fruits Box
              </h4>
              <p className="text-lg text-[var(--olive)] font-bold">₹1,499</p>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-4">
              Ordered on 12 Oct 2026
            </p>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">
                  Delivered
                </span>
              </div>
              <span className="text-[10px] font-black text-gray-400 group-hover:text-[var(--olive)] transition-colors uppercase tracking-[0.2em] flex items-center gap-1">
                View Details <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  const renderGiftOrders = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {t.my_account.gift_history}
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 p-5 sm:p-6 rounded-[2rem] bg-orange-50/30 border border-orange-100 hover:border-orange-200 transition-all shadow-sm group">
          <div className="w-full sm:w-32 h-48 sm:h-32 rounded-2xl bg-gray-200 shrink-0 overflow-hidden relative shadow-sm">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              alt="gift order"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center py-2">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-gray-900">
                Artisanal Brass Diya Gift Set
              </h4>
              <p className="text-lg text-orange-600 font-bold">₹1,299</p>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-2">
              Sent to: Rahul Sharma (Mumbai)
            </p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
              "Happy Diwali to you and your family!"
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">
                In Transit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubscriptionManagement = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t.my_account.subscriptions}
      </h2>
      <div className="p-5 rounded-[1.5rem] bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--olive)]/10 text-[var(--olive)] text-[8px] font-black uppercase tracking-wider">
              <Zap className="w-2.5 h-2.5 fill-current" /> Active Plan
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Premium Health Plan
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-[var(--olive)]">
                ₹4,999
              </span>
              <span className="text-[9px] text-gray-400 font-bold uppercase">
                / mo
              </span>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:px-4 py-2 rounded-xl bg-[var(--olive)] text-white font-bold text-[9px] uppercase tracking-widest shadow-sm hover:shadow-md transition-all">
              BILLING
            </button>
            <button className="flex-1 sm:px-4 py-2 rounded-xl bg-stone-50 text-gray-400 font-bold text-[9px] uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReferrals = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t.my_account.referral_rewards}
      </h2>
      <div className="p-5 rounded-[1.5rem] bg-indigo-50/50 border border-indigo-100 flex items-center gap-5">
        <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
          <Users className="w-8 h-8" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-base font-bold text-gray-900">
            {t.my_account.invite_earn}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-indigo-600 bg-white px-2 py-1 rounded-lg border border-indigo-100 tracking-wider">
              TRAD-REF-2026
            </span>
            <button className="text-[9px] font-black text-gray-400 hover:text-indigo-600 uppercase tracking-widest transition-colors">
              Copy Link
            </button>
          </div>
        </div>
        <div className="hidden sm:block text-right">
          <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">
            Earned
          </p>
          <p className="text-lg font-black text-indigo-600">₹6,000</p>
        </div>
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t.my_account.wallet_coupons}
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="p-6 rounded-[1rem] bg-[var(--olive)] text-white shadow-lg flex justify-between items-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--olive)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-3">
            <p className="text-[8px] font-black tracking-[0.3em] uppercase text-stone-500">
              {t.my_account.wallet_balance}
            </p>
            <h3 className="text-3xl font-black tracking-tight">
              ₹2,500.00
            </h3>
          </div>
          <button className="relative z-10 px-5 py-2 rounded-xl bg-white text-gray-900 font-black text-[9px] uppercase tracking-widest shadow-xl hover:bg-amber-400 transition-all active:scale-[0.95]">
            {t.my_account.add_funds}
          </button>
        </div>

        <div className="space-y-3">
          {[
            { code: "TRAD-WELCOME", status: "active" },
            { code: "FESTIVE-500", status: "expired" },
          ].map((coupon, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl bg-white border border-stone-100 flex items-center justify-between shadow-sm transition-all ${coupon.status === "active" ? "hover:border-[var(--olive)]/30" : "opacity-40"}`}
            >
              <p className="text-[11px] font-black text-gray-900 tracking-wider">
                {coupon.code}
              </p>
              <button
                className={`px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest ${coupon.status === "active" ? "bg-stone-50 text-[var(--olive)] hover:bg-[var(--olive)] hover:text-white" : "bg-gray-50 text-gray-300 cursor-not-allowed"}`}
              >
                {coupon.status === "active" ? "COPY" : "USED"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#faf9f6] pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar Menu */}
        <div className="w-full md:w-72 shrink-0">
          <div className="p-8 bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 mb-6 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--olive)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="w-24 h-24 rounded-full bg-[var(--olive)] text-white flex items-center justify-center shadow-xl mb-4 relative z-10 border-4 border-[var(--olive)]/10">
              <User className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Tradizions User
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1 tracking-wide">
              +91 {mobile}
            </p>
          </div>

          <nav className="flex flex-col gap-2 bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 p-3">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "profile" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5" /> {t.my_account.edit_profile}
              </div>
              {activeTab === "profile" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "orders" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5" /> {t.my_account.order_history}
              </div>
              {activeTab === "orders" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("gift-orders")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "gift-orders" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5" /> {t.my_account.gift_history}
              </div>
              {activeTab === "gift-orders" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("subscriptions")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "subscriptions" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" /> {t.my_account.subscriptions}
              </div>
              {activeTab === "subscriptions" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "wishlist" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5" /> {t.my_account.wishlist}
              </div>
              {activeTab === "wishlist" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("referrals")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "referrals" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" /> {t.my_account.refer_earn}
              </div>
              {activeTab === "referrals" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("wallet")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "wallet" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5" /> {t.my_account.wallet_coupons}
              </div>
              {activeTab === "wallet" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("addresses");
                setAddressView("list");
              }}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "addresses" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" /> {t.my_account.saved_addresses}
              </div>
              {activeTab === "addresses" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <div className="h-px w-full bg-gray-100 my-2" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="w-5 h-5" /> {t.my_account.logout}
            </button>
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 min-h-[600px]">
          {activeTab === "profile" && renderProfileForm()}
          {activeTab === "addresses" && renderAddresses()}
          {activeTab === "wishlist" && renderWishlist()}
          {activeTab === "orders" && renderOrders()}
          {activeTab === "gift-orders" && renderGiftOrders()}
          {activeTab === "subscriptions" && renderSubscriptionManagement()}
          {activeTab === "referrals" && renderReferrals()}
          {activeTab === "wallet" && renderWallet()}
        </div>
      </div>
    </main>
  );
}
