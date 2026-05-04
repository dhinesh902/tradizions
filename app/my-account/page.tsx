"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  User,
  Package,
  MapPin,
  Heart,
  ShoppingCart,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  // Left menu state
  const [activeTab, setActiveTab] = useState("profile"); // profile, addresses, wishlist, orders

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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
      <div className="space-y-4 max-w-sm">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Full Name</label>
          <input type="text" defaultValue="Tradizions User" className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Email Address</label>
          <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Mobile Number</label>
          <input type="text" disabled value={mobile} className="w-full border border-gray-100 bg-gray-50 text-gray-400 rounded-lg py-2.5 px-3 outline-none cursor-not-allowed font-medium text-sm" />
          <p className="text-[10px] text-gray-400 mt-1">Mobile number cannot be changed.</p>
        </div>
        <button className="w-full py-3 rounded-lg bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-md shadow-[var(--olive)]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all mt-4">
          SAVE CHANGES
        </button>
      </div>
    </div>
  );

  const renderAddresses = () => {
    if (addressView === "add" || addressView === "edit") {
      return (
        <div className="animate-fade-in-right">
          <button onClick={() => setAddressView("list")} className="text-xs font-bold tracking-widest text-gray-400 hover:text-[var(--olive)] mb-6 flex items-center gap-1 uppercase transition-colors">
            ← Back to Addresses
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{addressView === "add" ? "Add New Address" : "Edit Address"}</h2>
          <div className="space-y-4 max-w-sm">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Address Title</label>
              <input type="text" placeholder="e.g. Home, Office" defaultValue={addressView === "edit" ? "HOME" : ""} className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Complete Address</label>
              <textarea rows={3} placeholder="Enter your full address" defaultValue={addressView === "edit" ? "123 Heritage Villa, Tradizions Lane,\nChennai, Tamil Nadu - 600001" : ""} className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all resize-none font-medium text-gray-800 text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Pincode</label>
              <input type="text" placeholder="6-digit pincode" defaultValue={addressView === "edit" ? "600001" : ""} className="w-full border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[var(--olive)]/20 focus:border-[var(--olive)] outline-none transition-all font-medium text-gray-800 text-sm" />
            </div>
            <button onClick={() => setAddressView("list")} className="w-full py-3 rounded-lg bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-md shadow-[var(--olive)]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all mt-4">
              {addressView === "add" ? "SAVE ADDRESS" : "UPDATE ADDRESS"}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
          <button
            onClick={() => setAddressView("add")}
            className="px-5 py-2.5 bg-[var(--olive)]/10 text-[var(--olive)] font-bold text-[11px] tracking-widest rounded-xl hover:bg-[var(--olive)] hover:text-white transition-colors shadow-sm"
          >
            + ADD NEW
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
      <h2 className="text-2xl font-bold text-gray-900 mb-8">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Shop Page Style Product Card */}
        <div className="group relative bg-white rounded-3xl p-4 border border-gray-100 hover:border-[var(--olive)]/30 hover:shadow-[0_20px_40px_rgba(85,107,47,0.08)] transition-all duration-500 flex flex-col">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#faf9f6] mb-4">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="item" />
            <div className="absolute top-3 right-3 z-10">
              <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-500 hover:bg-red-50 hover:scale-110 transition-all shadow-sm">
                <Heart className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-[var(--olive)] transition-colors line-clamp-1 mb-1">Brass Diya Set</h3>
            <p className="text-xs text-gray-500 line-clamp-1 mb-3">Premium handmade pooja essential</p>
            <div className="mt-auto flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-[var(--olive)]">₹1,299</span>
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
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Order History</h2>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 p-5 sm:p-6 rounded-[2rem] bg-[#faf9f6] border border-gray-100 hover:border-[var(--olive)]/30 transition-all shadow-sm group">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">
                Delivered
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#faf9f6] pt-28 pb-20">
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
                <User className="w-5 h-5" /> Edit Profile
              </div>
              {activeTab === "profile" && (
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
                <MapPin className="w-5 h-5" /> Saved Addresses
              </div>
              {activeTab === "addresses" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "wishlist" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5" /> My Wishlist
              </div>
              {activeTab === "wishlist" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide ${activeTab === "orders" ? "bg-[var(--olive)] text-white shadow-md" : "text-gray-500 hover:bg-gray-50 hover:text-[var(--olive)]"}`}
            >
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5" /> Order History
              </div>
              {activeTab === "orders" && (
                <ChevronRight className="w-4 h-4 opacity-70" />
              )}
            </button>
            <div className="h-px w-full bg-gray-100 my-2" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-4 rounded-2xl transition-all font-bold text-[13px] tracking-wide text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 min-h-[600px]">
          {activeTab === "profile" && renderProfileForm()}
          {activeTab === "addresses" && renderAddresses()}
          {activeTab === "wishlist" && renderWishlist()}
          {activeTab === "orders" && renderOrders()}
        </div>
      </div>
    </main>
  );
}
