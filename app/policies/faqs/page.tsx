"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I shop in my preferred language?",
      a: (
        <div>
          <p className="mb-2">Yes, our website is available in:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>English</li>
            <li>Tamil</li>
            <li>Hindi</li>
          </ul>
        </div>
      ),
    },
    {
      q: "What products do you sell?",
      a: (
        <div>
          <p className="mb-2">We offer a wide range of:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nuts & dry fruits</li>
            <li>Millets</li>
            <li>Spices</li>
            <li>Pooja essentials</li>
            <li>Gift boxes & hampers</li>
          </ul>
          <p className="mt-2">All our products are carefully sourced and hygienically packed for quality and freshness.</p>
        </div>
      ),
    },
    {
      q: "Are your products organic?",
      a: "Some of our products are organically sourced, while others are conventionally sourced from trusted suppliers. Please refer to individual product descriptions for details.",
    },
    {
      q: "How do I place an order?",
      a: "Browse products, add them to your cart, and proceed to checkout. Follow the payment steps to complete your order.",
    },
    {
      q: "What payment methods do you accept?",
      a: (
        <div>
          <p className="mb-2">We accept:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>UPI</li>
            <li>Debit/Credit Cards</li>
            <li>Net Banking</li>
            <li>Wallets</li>
            <li>Cash on Delivery (if available)</li>
          </ul>
        </div>
      ),
    },
    {
      q: "Do you deliver across India or internationally?",
      a: "We currently deliver across India. International shipping may be available on request.",
    },
    {
      q: "How long will my order take to arrive?",
      a: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Orders are processed within 1–2 business days</li>
          <li>Delivery typically takes 3–7 business days, depending on your location</li>
        </ul>
      ),
    },
    {
      q: "Can I track my order?",
      a: "Yes. Once shipped, you will receive a tracking link via SMS/email.",
    },
    {
      q: "What is your return and refund policy?",
      a: (
        <div>
          <p className="mb-2">Due to the nature of food products, returns are not accepted. However, refunds/replacements are provided if:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Wrong product delivered</li>
            <li>Damaged product</li>
            <li>Expired product</li>
          </ul>
          <p className="mt-2">(Refer to our Refund Policy for full details)</p>
        </div>
      ),
    },
    {
      q: "How should I store products?",
      a: (
        <ul className="list-disc pl-6 space-y-1">
          <li><span className="font-bold">Millets:</span> Store in airtight containers in a cool, dry place</li>
          <li><span className="font-bold">Nuts:</span> Store in airtight containers; refrigeration recommended</li>
          <li><span className="font-bold">Spices:</span> Keep in dry, airtight containers away from moisture</li>
        </ul>
      ),
    },
    {
      q: "Do your products contain allergens?",
      a: "Some products may be processed in facilities handling nuts, sesame, or gluten. Please check product details carefully if you have allergies.",
    },
    {
      q: "Can I cancel my order?",
      a: "Orders can be cancelled before dispatch only. Once shipped, cancellation is not possible.",
    },
    {
      q: "Do you offer subscription plans?",
      a: (
        <div>
          <p className="mb-2">Yes, we offer subscription plans for selected products including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Monthly essentials</li>
            <li>Pooja kits</li>
            <li>Health combos</li>
          </ul>
          <p className="mt-2">You can manage or cancel subscriptions before the next billing cycle.</p>
        </div>
      ),
    },
    {
      q: "Do you offer bulk or corporate orders?",
      a: (
        <div>
          <p className="mb-2">Yes, we provide:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bulk orders</li>
            <li>Wedding return gifts</li>
            <li>Corporate gifting solutions</li>
          </ul>
          <p className="mt-2">Contact us for custom pricing and branding options.</p>
        </div>
      ),
    },
    {
      q: "Do you offer customized gift boxes?",
      a: "Yes, you can create personalized gift hampers with selected products and custom messages.",
    },
    {
      q: "What if I receive a damaged package?",
      a: "Please report within 48 hours with photo/video proof for replacement or refund.",
    },
    {
      q: "How can I contact customer support?",
      a: "If you have any questions, please contact us at qpay@tradizions.com or via WhatsApp at +91 99406 20019.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        {/* Professional Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-[var(--olive)] transition-all group"
              >
                <span
                  className={`text-md font-bold transition-colors ${
                    openIndex === i ? "text-[var(--olive)]" : "text-gray-900"
                  }`}
                >
                  {i + 1}. {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-[var(--olive)]"
                      : "text-gray-400"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-[15px] leading-relaxed text-gray-600 pl-6 pb-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <section className="mt-16 pt-10 border-t border-gray-100">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-900">
            Still have questions?
          </h2>
          <div className="space-y-3 text-[15px]">
            <p>
              If you couldn't find the answer you were looking for, please
              contact our support team:
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:qpay@tradizions.com"
                className="font-normal text-[var(--sky-blue)]"
              >
                qpay@tradizions.com
              </a>
            </p>
            <p>
              <span className="font-bold">Phone/WhatsApp:</span>{" "}
              <a
                href="tel:+919940620019"
                className="font-normal text-[var(--orange)]"
              >
                +91 99406 20019
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
