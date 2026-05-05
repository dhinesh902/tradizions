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
  Plus,
  ArrowRight,
  CreditCard,
  Tag,
  Clock,
  Trash2,
} from "lucide-react";

export default function ProfilePage() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();

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
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userMobile");
    window.location.href = "/";
  };

  const renderProfileForm = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
          <p className="text-sm text-gray-500 font-medium">Manage your profile details and account settings</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Tradizions User"
            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/10 focus:border-[var(--olive)]/30 focus:bg-white outline-none transition-all font-medium text-gray-800 text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/10 focus:border-[var(--olive)]/30 focus:bg-white outline-none transition-all font-medium text-gray-800 text-sm"
          />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
            Mobile Number
          </label>
          <div className="relative">
            <input
              type="text"
              disabled
              value={`+91 ${mobile}`}
              className="w-full border border-gray-100 bg-gray-100/50 text-gray-400 rounded-xl py-3 px-4 outline-none cursor-not-allowed font-medium text-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Lock className="w-4 h-4 text-gray-300" />
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mt-1.5 ml-1 flex items-center gap-1.5 font-medium">
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            Mobile number is verified and cannot be changed.
          </p>
        </div>
        <div className="md:col-span-2 pt-4">
          <button className="btn-standard w-full md:w-auto rounded-xl font-bold text-[13px] tracking-widest shadow-xl shadow-[var(--olive)]/10 hover:shadow-2xl hover:shadow-[var(--olive)]/20 hover:-translate-y-0.5 transition-all">
            UPDATE PROFILE
          </button>
        </div>
      </div>
    </div>
  );

  const renderAddresses = () => {
    if (addressView === "add" || addressView === "edit") {
      return (
        <div className="animate-fade-in-right">
          <button
            onClick={() => setAddressView("list")}
            className="group flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 hover:text-[var(--olive)] mb-8 uppercase transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--olive)] group-hover:text-white transition-all">
              <ChevronRight className="w-4 h-4 rotate-180" />
            </div>
            Back to Saved Addresses
          </button>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {addressView === "add" ? "New Shipping Address" : "Edit Address"}
              </h2>
              <p className="text-sm text-gray-500 font-medium">Provide your delivery location details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Address Title
              </label>
              <input
                type="text"
                placeholder="e.g. Home, Office, Studio"
                defaultValue={addressView === "edit" ? "HOME" : ""}
                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/10 focus:border-[var(--olive)]/30 focus:bg-white outline-none transition-all font-medium text-gray-800 text-sm"
              />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Full Address
              </label>
              <textarea
                rows={4}
                placeholder="Flat No, Building, Street, Area..."
                defaultValue={
                  addressView === "edit"
                    ? "123 Heritage Villa, Tradizions Lane, Chennai, Tamil Nadu"
                    : ""
                }
                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/10 focus:border-[var(--olive)]/30 focus:bg-white outline-none transition-all resize-none font-medium text-gray-800 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Pincode
              </label>
              <input
                type="text"
                placeholder="6-digit pincode"
                defaultValue={addressView === "edit" ? "600001" : ""}
                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/10 focus:border-[var(--olive)]/30 focus:bg-white outline-none transition-all font-medium text-gray-800 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                City / State
              </label>
              <input
                type="text"
                defaultValue={addressView === "edit" ? "Chennai, Tamil Nadu" : ""}
                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[var(--olive)]/10 focus:border-[var(--olive)]/30 focus:bg-white outline-none transition-all font-medium text-gray-800 text-sm"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                onClick={() => setAddressView("list")}
                className="btn-standard w-full md:w-auto rounded-xl font-bold text-[13px] tracking-widest shadow-xl shadow-[var(--olive)]/10 hover:shadow-2xl hover:shadow-[var(--olive)]/20 hover:-translate-y-0.5 transition-all"
              >
                {addressView === "add" ? "SAVE ADDRESS" : "UPDATE ADDRESS"}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
              <p className="text-sm text-gray-500 font-medium">Manage your delivery destinations</p>
            </div>
          </div>
          <button
            onClick={() => setAddressView("add")}
            className="group flex items-center gap-2 px-6 py-3 bg-[var(--olive)] text-white font-bold text-[11px] tracking-widest rounded-xl hover:bg-[var(--olive-dark)] transition-all shadow-lg shadow-[var(--olive)]/20 hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" /> ADD NEW
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="group p-8 rounded-[2rem] border border-gray-100 bg-[#faf9f6] relative transition-all hover:border-[var(--olive)]/30 hover:bg-white hover:shadow-xl hover:shadow-[var(--olive)]/5 cursor-pointer">
            <div className="absolute top-8 right-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
              <button
                onClick={() => setAddressView("edit")}
                className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[var(--olive)] hover:border-[var(--olive)]/30 transition-all shadow-sm"
              >
                <User className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 text-[var(--olive)] text-[9px] font-black tracking-widest rounded-full mb-6 shadow-sm">
              <Check className="w-3 h-3" /> PRIMARY • HOME
            </div>
            
            <h4 className="text-base font-bold text-gray-900 mb-2">Tradizions User</h4>
            <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-[240px]">
              123 Heritage Villa, Tradizions Lane,
              Chennai, Tamil Nadu - 600001
            </p>
            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-400">
              <div className="w-5 h-5 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                <Users className="w-3 h-3" />
              </div>
              9876543210
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWishlist = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
          <p className="text-sm text-gray-500 font-medium">Items you&apos;ve saved for later</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group relative bg-white rounded-[2.5rem] p-5 border border-gray-100 hover:border-[var(--olive)]/20 hover:shadow-2xl hover:shadow-[var(--olive)]/10 transition-all duration-700 flex flex-col">
          <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-[#faf9f6] mb-5">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="item"
            />
            <div className="absolute top-4 right-4 z-10">
              <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-500 hover:bg-white hover:scale-110 transition-all shadow-xl shadow-black/5">
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex-1 flex flex-col px-1">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors line-clamp-1">
                Brass Diya Set
              </h3>
            </div>
            <p className="text-xs text-gray-400 font-medium mb-5">
              Premium handmade pooja essential
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-bold line-through">₹1,999</span>
                <span className="text-xl font-black text-[var(--olive)]">₹1,299</span>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[var(--olive)] group-hover:bg-[var(--olive)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--olive)]/30 transition-all duration-500">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-[var(--olive)]/10 flex items-center justify-center text-[var(--olive)]">
          <Package className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
          <p className="text-sm text-gray-500 font-medium">Track and review your past purchases</p>
        </div>
      </div>

      <div className="space-y-6">
        <Link href="/order-detail" className="flex flex-col sm:flex-row gap-8 p-6 sm:p-8 rounded-[2.5rem] bg-[#faf9f6] border border-gray-100 hover:border-[var(--olive)]/20 hover:bg-white hover:shadow-2xl hover:shadow-[var(--olive)]/5 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--olive)]/5 rounded-full blur-3xl translate-x-10 -translate-y-10 group-hover:bg-[var(--olive)]/10 transition-colors" />
          
          <div className="w-full sm:w-40 h-40 rounded-[1.5rem] bg-white p-2 shrink-0 relative shadow-sm border border-gray-50 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=200&auto=format&fit=crop"
              fill
              className="object-cover rounded-[1rem] group-hover:scale-110 transition-transform duration-1000"
              alt="order"
            />
          </div>
          
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">ID: TRAD-89231</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">12 Oct 2026</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors">
                  Premium Dry Fruits Box
                </h4>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-[var(--olive)] tracking-tight">₹1,499</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Paid via UPI</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-600 tracking-widest uppercase">
                    Delivered
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Standard Delivery</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-black text-[var(--olive)] uppercase tracking-[0.2em] group/btn">
                VIEW DETAILS 
                <div className="w-7 h-7 rounded-full bg-[var(--olive)]/10 flex items-center justify-center group-hover/btn:bg-[var(--olive)] group-hover/btn:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  const renderGiftOrders = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gift History</h2>
          <p className="text-sm text-gray-500 font-medium">Review the gifts you&apos;ve sent to loved ones</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-8 p-6 sm:p-8 rounded-[2.5rem] bg-orange-50/20 border border-orange-100/50 hover:bg-white hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 group relative">
          <div className="w-full sm:w-40 h-40 rounded-[1.5rem] bg-white p-2 shrink-0 relative shadow-sm border border-orange-50 overflow-hidden">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s"
              fill
              className="object-cover rounded-[1rem] group-hover:scale-110 transition-transform duration-1000"
              alt="gift order"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-600 text-[8px] font-black uppercase tracking-wider mb-2">
                  Gift Order
                </div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  Artisanal Brass Diya Set
                </h4>
                <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" /> For: <span className="text-gray-900 font-bold">Rahul Sharma (Mumbai)</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-orange-600 tracking-tight">₹1,299</p>
              </div>
            </div>
            
            <div className="bg-white/50 border border-orange-100/50 rounded-2xl p-4 mb-6">
              <p className="text-xs text-orange-800 font-medium italic leading-relaxed">
                &quot;Happy Diwali to you and your family! Wishing you a year full of light and prosperity.&quot;
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-orange-100/30">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100/50">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">
                  In Transit
                </span>
              </div>
              <button className="text-[10px] font-black text-orange-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                TRACK PACKAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubscriptionManagement = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
          <Zap className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Active Subscriptions</h2>
          <p className="text-sm text-gray-500 font-medium">Manage your recurring plans and billing</p>
        </div>
      </div>

      <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white to-[#faf9f6] border border-gray-100 shadow-xl shadow-black/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--olive)]/5 rounded-full blur-3xl translate-x-20 -translate-y-20 group-hover:bg-[var(--olive)]/10 transition-colors duration-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--olive)] text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-[var(--olive)]/20">
              <Zap className="w-3 h-3 fill-current" /> ACTIVE PLAN
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-gray-900">Premium Health Plan</h3>
              <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                Next billing on <span className="text-gray-900 font-bold">Nov 12, 2026</span>
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-[var(--olive)] tracking-tight">₹4,999</span>
              <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">/ monthly</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="flex-1 px-8 py-3.5 rounded-2xl bg-[var(--olive)] text-white font-bold text-[11px] uppercase tracking-widest shadow-xl shadow-[var(--olive)]/20 hover:bg-[var(--olive-dark)] hover:-translate-y-0.5 transition-all">
              MANAGE BILLING
            </button>
            <button className="flex-1 px-8 py-3.5 rounded-2xl bg-white border border-gray-100 text-gray-400 font-bold text-[11px] uppercase tracking-widest hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all">
              CANCEL PLAN
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-10 border-t border-gray-100/50">
          {[
            { label: 'Priority Delivery', icon: Package },
            { label: 'Member Perks', icon: Gift },
            { label: 'Health Advisory', icon: User },
            { label: 'Exclusive Deals', icon: Tag },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[var(--olive)] shadow-sm">
                <feature.icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReferrals = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Refer & Earn</h2>
          <p className="text-sm text-gray-500 font-medium">Invite friends and get rewarded</p>
        </div>
      </div>

      <div className="relative p-8 md:p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-indigo-800 text-white overflow-hidden shadow-2xl shadow-indigo-500/20 group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-20 -translate-y-20 group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-20 translate-y-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight leading-tight">
              Share the Tradition, <br />
              Earn Store Credits.
            </h3>
            <p className="text-indigo-100/80 font-medium leading-relaxed max-w-md">
              Invite your friends to Tradizions. When they make their first purchase, you both get ₹500 in your wallet.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.2em] uppercase">TRAD-REF-2026</span>
                <button className="text-[10px] font-black text-white hover:text-indigo-200 uppercase tracking-widest transition-colors flex items-center gap-2">
                  COPY <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-indigo-50 transition-all active:scale-95">
                SHARE NOW
              </button>
            </div>
          </div>
          
          <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 p-6 flex flex-col items-center justify-center text-center shadow-2xl">
            <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-2">Total Earned</p>
            <p className="text-5xl font-black tracking-tighter mb-1">₹6k</p>
            <p className="text-[10px] font-bold text-indigo-100/60 uppercase">12 Referrals</p>
            <div className="mt-6 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-[70%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
          <Wallet className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Wallet & Rewards</h2>
          <p className="text-sm text-gray-500 font-medium">Manage your credits and discount coupons</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="p-10 rounded-[3rem] bg-[var(--olive)] text-white shadow-2xl shadow-[var(--olive)]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-20 -translate-y-20 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 opacity-60">
                <CreditCard className="w-5 h-5" />
                <p className="text-[10px] font-black tracking-[0.4em] uppercase">Tradizions Credits</p>
              </div>
              <h3 className="text-5xl font-black tracking-tighter mb-10">
                ₹2,500<span className="text-2xl opacity-40">.00</span>
              </h3>
              <div className="flex items-center justify-between pt-10 border-t border-white/10">
                <p className="text-xs text-white/60 font-medium tracking-wide">Last transaction: Oct 20, 2026</p>
                <button className="px-8 py-3.5 rounded-2xl bg-white text-gray-900 font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-stone-100 transition-all active:scale-95">
                  ADD FUNDS
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2">
              <Tag className="w-4 h-4 text-[var(--olive)]" /> Available Coupons
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { code: "TRAD-WELCOME", status: "active", desc: "Flat ₹500 OFF on first order" },
                { code: "FESTIVE-500", status: "expired", desc: "Diwali special discount" },
              ].map((coupon, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-[2rem] bg-white border border-gray-100 flex flex-col justify-between shadow-sm transition-all relative overflow-hidden group ${coupon.status === "active" ? "hover:border-[var(--olive)]/30 hover:shadow-xl hover:shadow-[var(--olive)]/5" : "opacity-40"}`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-base font-black text-gray-900 tracking-tight">{coupon.code}</p>
                      {coupon.status === 'active' && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      )}
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">{coupon.desc}</p>
                  </div>
                  <button
                    disabled={coupon.status !== "active"}
                    className={`relative z-10 w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${coupon.status === "active" ? "bg-[var(--olive)]/5 text-[var(--olive)] hover:bg-[var(--olive)] hover:text-white" : "bg-gray-50 text-gray-300 cursor-not-allowed"}`}
                  >
                    {coupon.status === "active" ? "COPY CODE" : "EXPIRED"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#faf9f6] rounded-[2.5rem] border border-gray-100 p-8 h-full">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8">Recent Activities</h4>
            <div className="space-y-8">
              {[
                { type: 'debit', label: 'Order TRAD-89231', date: 'Oct 12, 2026', amount: '- ₹1,499' },
                { type: 'credit', label: 'Refund Processed', date: 'Oct 08, 2026', amount: '+ ₹800' },
                { type: 'credit', label: 'Wallet Topup', date: 'Oct 05, 2026', amount: '+ ₹2,000' },
                { type: 'credit', label: 'Referral Bonus', date: 'Sep 30, 2026', amount: '+ ₹500' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.type === 'credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                      {activity.type === 'credit' ? <Plus className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 rotate-90" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{activity.label}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{activity.date}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-black ${activity.type === 'credit' ? 'text-emerald-600' : 'text-gray-900'}`}>{activity.amount}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 text-[10px] font-black text-gray-400 hover:text-[var(--olive)] uppercase tracking-[0.2em] transition-colors border-t border-gray-200/50 pt-8">
              VIEW ALL TRANSACTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#faf9f6] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Sidebar Menu */}
          <div className="w-full md:w-80 shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Profile Card */}
              <div className="p-8 bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--olive)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--olive)]/10 transition-colors" />
                
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[var(--olive)] to-[var(--olive-dark)] p-1.5 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[var(--olive)]/5 flex items-center justify-center text-[var(--olive)]">
                        <User className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-lg">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">Tradizions User</h2>
                  <p className="text-sm text-gray-400 font-bold tracking-widest uppercase">+91 {mobile}</p>
                </div>
                
                <div className="w-full h-px bg-gray-100 my-8" />
                
                <div className="grid grid-cols-2 w-full gap-4">
                  <div className="text-center p-3 rounded-2xl bg-[#faf9f6] border border-gray-50">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Orders</p>
                    <p className="text-lg font-black text-gray-900">12</p>
                  </div>
                  <div className="text-center p-3 rounded-2xl bg-[#faf9f6] border border-gray-50">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Wallet</p>
                    <p className="text-lg font-black text-[var(--olive)]">₹2.5k</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-3 bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 space-y-1">
                {[
                  { id: "profile", label: "Edit Profile", icon: User },
                  { id: "orders", label: "Order History", icon: Package },
                  { id: "gift-orders", label: "Gift History", icon: Gift },
                  { id: "subscriptions", label: "Subscriptions", icon: Zap },
                  { id: "wishlist", label: "My Wishlist", icon: Heart },
                  { id: "referrals", label: "Refer & Earn", icon: Users },
                  { id: "wallet", label: "Wallet & Coupons", icon: Wallet },
                  { id: "addresses", label: "Saved Addresses", icon: MapPin },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (item.id === "addresses") setAddressView("list");
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${activeTab === item.id ? "bg-[var(--olive)] text-white shadow-xl shadow-[var(--olive)]/20" : "text-gray-500 hover:bg-[#faf9f6] hover:text-[var(--olive)]"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${activeTab === item.id ? "bg-white/20" : "bg-gray-50 group-hover:bg-white group-hover:shadow-sm"}`}>
                        <item.icon className={`w-4.5 h-4.5 ${activeTab === item.id ? "text-white" : "text-gray-400 group-hover:text-[var(--olive)]"}`} />
                      </div>
                      <span className="font-black text-[11px] uppercase tracking-widest">{item.label}</span>
                    </div>
                    {activeTab === item.id ? (
                      <ArrowRight className="w-4 h-4 text-white/70" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--olive)]/50" />
                    )}
                  </button>
                ))}
                
                <div className="px-4 py-3">
                  <div className="h-px bg-gray-100" />
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl transition-all group text-red-500 hover:bg-red-50"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center transition-colors group-hover:bg-white group-hover:shadow-sm">
                    <LogOut className="w-4.5 h-4.5 text-red-400 group-hover:text-red-600" />
                  </div>
                  <span className="font-black text-[11px] uppercase tracking-widest">Logout Account</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-black/5 border border-gray-100 p-8 md:p-14 min-h-[800px] relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#faf9f6] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0 pointer-events-none opacity-50" />
              
              <div className="relative z-10">
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
            
            {/* Need Help Section */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-8 bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#faf9f6] flex items-center justify-center text-[var(--olive)] shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Need any assistance?</h4>
                  <p className="text-xs text-gray-500 font-medium">Our customer support team is here for you 24/7</p>
                </div>
              </div>
              <button className="px-8 py-3.5 bg-gray-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-xl shadow-black/10">
                CONTACT SUPPORT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
