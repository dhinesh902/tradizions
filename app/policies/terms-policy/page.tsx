"use client";

import React from "react";

export default function TermsPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 text-gray-800">
        {/* Professional Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8 font-light">
          Last Updated: May 02, 2026
        </p>

        {/* Terms Content - Professional Text Style */}
        <div className="space-y-10 text-[15px] leading-relaxed ">
          <p>
            Welcome to <span className="font-bold">Tradizions</span>. By accessing or using our website and purchasing our products, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
          </p>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              1. General
            </h2>
            <p>
              This website is operated by <span className="font-bold">Tradizions</span>. By using our website, you agree to these Terms, Privacy Policy, and other policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              2. Eligibility
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Users must be 18+</li>
              <li>Minors must use under guardian supervision</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              3. Products
            </h2>
            <p className="mb-4">We offer:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nuts & dry fruits</li>
              <li>Millets</li>
              <li>Spices</li>
              <li>Pooja items</li>
              <li>Gift boxes & hampers</li>
            </ul>
            <p className="mt-4 italic text-gray-500">All products are subject to availability.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              4. Orders & Payments
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Orders are confirmed only after successful payment</li>
              <li>COD (if applicable) is subject to availability</li>
              <li>Prices may change without notice</li>
              <li>Offers may have separate terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              5. Shipping & Delivery
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Delivery timelines are estimates and may vary</li>
              <li>Delays due to courier or external factors are not our responsibility</li>
              <li>Customer must provide accurate address details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              6. Subscription Services
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Subscription plans are auto-renewed unless cancelled</li>
              <li>Customers can modify or cancel before the next cycle</li>
              <li>No cancellation after order processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              7. Bulk & Corporate Orders
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Bulk orders may require advance payment</li>
              <li>Customised orders cannot be cancelled once confirmed</li>
              <li>Delivery timelines may differ from regular orders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              8. Health Disclaimer
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Customers must check ingredients for allergens</li>
              <li>We are not liable for allergic reactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              9. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>No misuse or fraud</li>
              <li>Maintain account security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              10. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Liability limited to order value</li>
              <li>No indirect damages covered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              11. Intellectual Property
            </h2>
            <p>
              All website content belongs to <span className="font-bold">Tradizions</span>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              12. Third-Party Services
            </h2>
            <p>
              We are not responsible for payment gateways or courier services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              13. Force Majeure
            </h2>
            <p>
              We are not liable for delays due to unforeseen events.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              14. Governing Law
            </h2>
            <p>
              Applicable laws: <span className="font-bold">India / Tamil Nadu</span><br />
              Jurisdiction: <span className="font-bold">Chennai</span>
            </p>
          </section>

          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-900">
              15. Contact
            </h2>
            <div className="space-y-3">
              <p>If you have any questions, please contact us:</p>
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
                <span className="font-bold">Phone:</span>{" "}
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
      </div>
    </main>
  );
}
