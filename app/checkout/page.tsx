"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPin, CreditCard, Banknote, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <main className="min-h-screen bg-[#faf9f6] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex items-center gap-3 mb-8">
          <Link href="/cart" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 hover:text-[var(--olive)] hover:scale-105 transition-all border border-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Checkout</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="flex-1 space-y-8">
            
            {/* Delivery Address */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--olive)]" /> Delivery Address
                </h2>
                <button className="text-[11px] font-bold text-[var(--orange)] tracking-widest hover:underline uppercase">Change</button>
              </div>
              
              <div className="p-5 rounded-2xl border-2 border-[var(--olive)]/20 bg-[#faf9f6] relative cursor-pointer hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-white shadow-sm text-[var(--olive)] border border-gray-100 text-[10px] font-bold tracking-widest rounded-md">HOME</span>
                  <span className="text-sm font-bold text-gray-900">Tradizions User</span>
                  <span className="text-sm text-gray-500 font-medium ml-auto">+91 9876543210</span>
                </div>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  123 Heritage Villa, Tradizions Lane,<br/>
                  Chennai, Tamil Nadu - 600001
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-[var(--olive)]" /> Payment Method
              </h2>
              
              <div className="space-y-4">
                <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-[var(--olive)] bg-[var(--olive)]/5 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}>
                  <input type="radio" name="payment" className="w-5 h-5 accent-[var(--olive)] mr-4" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                  <div className="flex-1">
                    <span className="block text-sm font-bold text-gray-900">UPI Payments</span>
                    <span className="block text-xs text-gray-500 font-medium mt-0.5">Google Pay, PhonePe, Paytm</span>
                  </div>
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" width={40} height={20} alt="UPI" className="opacity-70" />
                </label>

                <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[var(--olive)] bg-[var(--olive)]/5 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}>
                  <input type="radio" name="payment" className="w-5 h-5 accent-[var(--olive)] mr-4" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <div className="flex-1">
                    <span className="block text-sm font-bold text-gray-900">Credit / Debit Card</span>
                    <span className="block text-xs text-gray-500 font-medium mt-0.5">Visa, Mastercard, RuPay</span>
                  </div>
                  <CreditCard className="w-6 h-6 text-gray-400" />
                </label>

                <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[var(--olive)] bg-[var(--olive)]/5 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}>
                  <input type="radio" name="payment" className="w-5 h-5 accent-[var(--olive)] mr-4" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  <div className="flex-1">
                    <span className="block text-sm font-bold text-gray-900">Cash on Delivery</span>
                    <span className="block text-xs text-gray-500 font-medium mt-0.5">Pay when you receive the order</span>
                  </div>
                  <Banknote className="w-6 h-6 text-gray-400" />
                </label>
              </div>
            </div>

          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 sticky top-28">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
              
              {/* Mini Item List */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                    <Image src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=200&auto=format&fit=crop" fill className="object-cover" alt="product" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--olive)] text-white text-[10px] font-bold flex items-center justify-center border border-white shadow-sm z-10">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900 line-clamp-1">Premium Dry Fruits Box</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">₹1,499</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8uNbbxycaDgAxlh3JuEJ85P8rBYAyYMR3w&s" fill className="object-cover" alt="product" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--olive)] text-white text-[10px] font-bold flex items-center justify-center border border-white shadow-sm z-10">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900 line-clamp-1">Brass Diya Set</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">₹2,598</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-100 mb-6 w-full" />
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="font-bold text-gray-900">₹4,097</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Shipping Fee</span>
                  <span className="font-bold text-emerald-500">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Tax & GST</span>
                  <span className="font-bold text-gray-900">₹150</span>
                </div>
              </div>
              
              <div className="h-px bg-gray-100 mb-6 w-full" />
              
              <div className="flex justify-between items-end mb-8">
                <span className="text-base font-bold text-gray-900">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-[var(--olive)] block leading-none">₹4,247</span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1 block">Inclusive of all taxes</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-lg shadow-[var(--olive)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                PLACE ORDER
              </button>

              <p className="text-[10px] text-center text-gray-400 mt-5 leading-relaxed">
                By placing your order, you agree to our <Link href="#" className="underline hover:text-[var(--olive)]">Terms & Conditions</Link> and <Link href="#" className="underline hover:text-[var(--olive)]">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
