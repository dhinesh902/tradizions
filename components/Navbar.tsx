"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  ChevronDown,
  ChevronRight,
  Globe,
  Leaf,
  Gift,
  Star,
  Zap,
  Coffee,
  User,
  LogOut,
  MapPin,
  Package,
  Settings,
  Heart,
  Loader2,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Dry Fruits & Nuts",
    href: "/category/dry-fruits",
    desc: "Premium selection of handpicked nuts.",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: "Millets & Grains",
    href: "/category/millets",
    desc: "Wholesome traditional superfoods.",
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    name: "Health Malts",
    href: "/category/malts",
    desc: "Nutrient-rich traditional blends.",
    icon: <Coffee className="w-4 h-4" />,
  },
  {
    name: "Gift Hampers",
    href: "/category/gifts",
    desc: "Curated wellness gift collections.",
    icon: <Gift className="w-4 h-4" />,
  },
  {
    name: "Pooja Essentials",
    href: "/category/pooja",
    desc: "Sacred items for spiritual practice.",
    icon: <Star className="w-4 h-4" />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileCatsOpen, setIsMobileCatsOpen] = useState(false);
  const [isMobileGiftingOpen, setIsMobileGiftingOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login States
  const [loginStep, setLoginStep] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      const savedMobile = localStorage.getItem("userMobile");
      if (savedMobile) setMobile(savedMobile);
    }

    let interval: NodeJS.Timeout;
    if (loginStep === "otp" && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [loginStep, timer]);

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit number.");
      return;
    }
    setError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginStep("otp");
      setTimer(30);
    }, 1500);
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      setError("Please enter complete OTP.");
      return;
    }
    setError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (enteredOtp === "123456") {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userMobile", mobile);
        setLoginStep("mobile");
        setOtp(["", "", "", "", "", ""]);
        setIsDrawerOpen(false);
        router.push("/my-account");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
  ];

  const secondaryNavItems = [
    { name: "Pooja Gifts", href: "/pooja-gifts" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "TA", name: "Tamil" },
    { code: "HI", name: "Hindi" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-500 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:bg-white/80 ">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/app-logo.png"
                alt="Logo"
                width={90}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center px-6 py-2 space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-[13px] tracking-widest font-semibold transition-all duration-300 ${isActive ? "text-[var(--orange)]" : "text-gray-600 hover:text-[var(--olive)]"}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] transition-all duration-300 bg-[var(--orange)] rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}

            {/* Categories Megamenu Dropdown */}
            <div className="relative group/mega">
              <button className="flex items-center gap-1.5 text-[13px] tracking-widest font-semibold text-gray-500 hover:text-[var(--olive)] transition-all duration-300">
                Categories
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/mega:rotate-180" />
              </button>

              {/* Hidden Dropdown */}
              <div className="absolute top-full -left-20 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover/mega:opacity-100 group-hover/mega:translate-y-0 group-hover/mega:pointer-events-auto transition-all duration-500">
                <div className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                  <div className="flex flex-col gap-y-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="group/cat flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover/cat:bg-[var(--olive)] transition-all duration-500" />
                          <div className="text-sm font-semibold text-gray-700 group-hover/cat:text-[var(--olive)] group-hover/cat:translate-x-1 transition-all duration-500">
                            {cat.name}
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover/cat:opacity-100 -translate-x-2 group-hover/cat:translate-x-0 transition-all duration-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gifting Dropdown */}
            <div className="relative group/gifting">
              <button className="flex items-center gap-1.5 text-[13px] tracking-widest font-semibold text-gray-500 hover:text-[var(--olive)] transition-all duration-300">
                Gifting
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/gifting:rotate-180" />
              </button>

              <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover/gifting:opacity-100 group-hover/gifting:translate-y-0 group-hover/gifting:pointer-events-auto transition-all duration-500">
                <div className="w-48 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 space-y-2">
                  <Link
                    href="/gifts"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[var(--olive)] rounded-lg transition-all"
                  >
                    Occasional
                  </Link>
                  <Link
                    href="/corporate-orders"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[var(--olive)] rounded-lg transition-all"
                  >
                    Corporate
                  </Link>
                </div>
              </div>
            </div>

            {secondaryNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-[13px] tracking-widest font-semibold transition-all duration-300 ${isActive ? "text-[var(--orange)]" : "text-gray-500 hover:text-[var(--olive)]"}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] transition-all duration-300 bg-[var(--orange)] rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 lg:gap-6 ml-auto">
            {/* Language Selection - Desktop */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-all duration-300 group"
              >
                <Globe className="w-5 h-5 text-[var(--olive)] group-hover:rotate-12 transition-transform" />
                <span className="text-[11px] font-bold tracking-widest text-gray-600">
                  {selectedLang}
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-3 w-40 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 py-2 animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-[11px] font-bold tracking-widest transition-all hover:bg-gray-50 ${selectedLang === lang.code
                          ? "text-[var(--olive)] bg-[var(--olive)]/5"
                          : "text-gray-600"
                        }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex items-center">
              <div
                className={`flex items-center transition-all duration-500 ease-out overflow-hidden ${isSearchOpen ? "w-48 md:w-64 opacity-100 mr-2" : "w-0 opacity-0 mr-0"}`}
              >
                <input
                  type="text"
                  placeholder="Search premium products..."
                  className="w-full bg-gray-100/50 border border-gray-200/50 rounded-full py-2 px-4 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/20 transition-all"
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2.5 rounded-full transition-all duration-300 ${isSearchOpen ? "bg-[var(--olive)] text-white" : "hover:bg-gray-100 text-[var(--olive)]"}`}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <Link href="/cart" className="relative">
              <div className="relative group p-2.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer hidden md:block">
                <ShoppingCart className="w-5 h-5 text-[var(--olive)] group-hover:text-[var(--orange)] transition-colors duration-300" />
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--orange)] text-[10px] font-bold text-white ring-2 ring-white">
                  0
                </span>
              </div>
            </Link>

            <div className="relative hidden sm:block">
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    router.push("/my-account");
                  } else {
                    setIsDrawerOpen(true);
                  }
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-100 text-[var(--olive)] hover:bg-[var(--olive)] hover:text-white transition-all duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(85,107,47,0.2)]"
              >
                <User className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-full bg-gray-50 text-[var(--olive)] hover:bg-gray-100 transition-colors"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-screen border-t border-gray-100 shadow-2xl" : "max-h-0"}`}
        >
          <div className="bg-white/95 backdrop-blur-md px-6 py-10 overflow-y-auto max-h-[85vh] space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <Link
                href="/"
                className="text-md font-semibold text-gray-900 border-b border-gray-50 pb-4"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-md font-semibold text-gray-900 border-b border-gray-50 pb-4"
                onClick={() => setOpen(false)}
              >
                Shop
              </Link>

              {/* Mobile Categories Collapsible */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsMobileCatsOpen(!isMobileCatsOpen)}
                  className="w-full flex items-center justify-between text-md font-semibold text-gray-900 border-b border-gray-50 pb-4"
                >
                  Categories
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${isMobileCatsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${isMobileCatsOpen ? "max-h-[600px] mb-4" : "max-h-0"}`}
                >
                  <div className="grid grid-cols-1 gap-4 pl-4 pt-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="flex items-center gap-3 py-2 text-gray-600 font-medium"
                        onClick={() => setOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Gifting Collapsible */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsMobileGiftingOpen(!isMobileGiftingOpen)}
                  className="w-full flex items-center justify-between text-md font-semibold text-gray-900 border-b border-gray-50 pb-4"
                >
                  Gifting
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${isMobileGiftingOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${isMobileGiftingOpen ? "max-h-[200px] mb-4" : "max-h-0"}`}
                >
                  <div className="grid grid-cols-1 gap-2 pl-4 pt-2">
                    <Link
                      href="/gifts"
                      className="py-2 text-gray-600 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      Occasional
                    </Link>
                    <Link
                      href="/corporate-orders"
                      className="py-2 text-gray-600 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      Corporate
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/pooja-gifts"
                className="text-md font-semibold text-gray-900 border-b border-gray-50 pb-4"
                onClick={() => setOpen(false)}
              >
                Pooja Gifts
              </Link>
              <Link
                href="/contact-us"
                className="text-md font-semibold text-gray-900 border-b border-gray-50 pb-4"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile Language Selection */}
              <div className="pt-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Preferred Language
                </p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setOpen(false);
                      }}
                      className={`flex-1 py-3 rounded-xl border text-[11px] font-bold tracking-widest transition-all ${selectedLang === lang.code
                          ? "bg-[var(--olive)] text-white border-[var(--olive)] shadow-lg shadow-[var(--olive)]/20"
                          : "bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100"
                        }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="block w-full py-3.5 text-center rounded-2xl bg-[var(--cream)] text-[var(--olive)] border border-gray-100 font-bold tracking-widest text-[12px] shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => {
                setOpen(false);
                if (isLoggedIn) {
                  router.push("/my-account");
                } else {
                  setIsDrawerOpen(true);
                }
              }}
            >
              My Account
            </button>
          </div>
        </div>
      </nav>

      {/* --- Overlay --- */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* --- Right Side Drawer --- */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 bg-white/50 backdrop-blur-sm transition-colors z-20"
          >
            <X
              className={`w-5 h-5 ${isLoggedIn ? "text-white" : "text-gray-500"}`}
            />
          </button>

          {/* We only render the Drawer content for Login flow. */}
          {!isLoggedIn && (
            // --- LOGIN FLOW ---
            <div className="flex-1 flex flex-col px-10 py-20 animate-fade-in-right">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-500 text-sm">
                  Sign in to access your premium account
                </p>
              </div>

              {loginStep === "mobile" ? (
                <div className="space-y-6 flex-1">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                      Mobile Number
                    </label>
                    <div className="flex group focus-within:ring-2 focus-within:ring-[var(--olive)]/20 rounded-xl transition-all">
                      <div className="flex items-center justify-center px-4 border border-gray-200 border-r-0 rounded-l-xl bg-gray-50 text-gray-500 font-medium text-sm group-focus-within:border-[var(--olive)]">
                        +91
                      </div>
                      <input
                        type="text"
                        maxLength={10}
                        placeholder="Enter 10 digit number"
                        className="w-full border border-gray-200 rounded-r-xl py-3.5 px-4 text-sm font-bold text-gray-700 outline-none group-focus-within:border-[var(--olive)] transition-colors placeholder:text-gray-300 placeholder:font-medium"
                        value={mobile}
                        onChange={(e) =>
                          setMobile(e.target.value.replace(/\D/g, ""))
                        }
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-xs mt-2 font-bold animate-fade-in-up">
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSendOtp}
                    disabled={isLoading || mobile.length < 10}
                    className="w-full py-4 rounded-xl bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-lg shadow-[var(--olive)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 flex justify-center items-center gap-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "SEND OTP"
                    )}
                  </button>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em]">
                      <span className="bg-white px-4 text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold text-[13px] tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 group shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                      />
                    </svg>
                    <span>Login with Google</span>
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-4 leading-relaxed px-4">
                    By continuing, you agree to Tradizions' <br />{" "}
                    <Link
                      href="#"
                      className="underline hover:text-[var(--olive)]"
                    >
                      Terms of Service
                    </Link>{" "}
                    &{" "}
                    <Link
                      href="#"
                      className="underline hover:text-[var(--olive)]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <div className="space-y-6 flex-1 animate-fade-in-right">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                      Enter OTP
                    </label>
                    <p className="text-xs text-gray-500 mb-6">
                      We've sent a code to{" "}
                      <span className="font-bold text-gray-900">
                        +91 {mobile}
                      </span>
                    </p>

                    <div className="flex justify-between gap-2">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`otp-${idx}`}
                          type="text"
                          maxLength={1}
                          className="w-12 h-14 border border-gray-200 rounded-xl text-center text-xl font-bold text-gray-800 focus:outline-none focus:border-[var(--olive)] focus:ring-2 focus:ring-[var(--olive)]/20 transition-all bg-gray-50 focus:bg-white"
                          value={digit}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            const newOtp = [...otp];
                            newOtp[idx] = val;
                            setOtp(newOtp);
                            if (val && idx < 5) {
                              document
                                .getElementById(`otp-${idx + 1}`)
                                ?.focus();
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Backspace" && !otp[idx] && idx > 0) {
                              document
                                .getElementById(`otp-${idx - 1}`)
                                ?.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                    {error && (
                      <p className="text-red-500 text-xs mt-3 font-bold animate-fade-in-up">
                        {error}
                      </p>
                    )}
                    <p className="text-[10px] text-[var(--orange)] mt-2 font-bold bg-orange-50 w-fit px-2 py-1 rounded-md border border-orange-100">
                      Hint: Use 123456
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => {
                        setLoginStep("mobile");
                        setOtp(["", "", "", "", "", ""]);
                        setError("");
                      }}
                      className="text-[11px] font-bold tracking-wide text-gray-500 hover:text-[var(--olive)] transition-colors"
                    >
                      Change Number
                    </button>
                    <button
                      disabled={timer > 0 || isLoading}
                      onClick={handleSendOtp}
                      className="text-[11px] font-bold tracking-wide text-[var(--orange)] disabled:text-gray-400 transition-colors"
                    >
                      {timer > 0
                        ? `Resend in 00:${timer.toString().padStart(2, "0")}`
                        : "Resend OTP"}
                    </button>
                  </div>

                  <button
                    onClick={handleVerifyOtp}
                    disabled={isLoading || otp.join("").length < 6}
                    className="w-full py-4 rounded-xl bg-[var(--olive)] text-white font-bold text-[13px] tracking-widest shadow-lg shadow-[var(--olive)]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 flex justify-center items-center gap-2 mt-4"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "VERIFY & LOGIN"
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
