"use client";

import React from "react";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        {/* Professional Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Shipping and Delivery Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8 font-light">
          Last Updated: May 02, 2026
        </p>

        {/* Policy Content - Clean Text Style */}
        <div className="space-y-10 text-[15px] leading-relaxed ">
          <p>
            At <span className="font-bold">Tradizions</span>, we ensure safe and timely delivery of your orders including food items, pooja essentials, and gift packs.
          </p>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              1. Order Processing
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Orders are processed within 1–2 business days</li>
              <li>Weekend/holiday orders processed next working day</li>
              <li>Confirmation sent via SMS/Email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              2. Shipping Coverage
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>We deliver across India</li>
              <li>International shipping may be available on request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              3. Delivery Timeline
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Standard delivery: 3–7 business days</li>
              <li>Metro cities: Faster delivery possible</li>
              <li>Remote areas may take longer</li>
            </ul>
            <p className="mt-4 font-bold text-gray-700">Delays may occur due to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Weather</li>
              <li>Courier issues</li>
              <li>Government restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              4. Shipping Charges
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Calculated at checkout</li>
              <li>Free shipping above ₹999 (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              5. Order Tracking
            </h2>
            <p>
              Tracking link shared via SMS/Email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              6. Delivery Attempts
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Courier will attempt delivery 2–3 times</li>
              <li>If unavailable, rescheduling may be required</li>
              <li>Failed deliveries may incur re-shipping charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              7. Incorrect Address
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Customer is responsible for correct details</li>
              <li>We are not liable for delivery failures due to incorrect address</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              8. Perishable & Sensitive Products
            </h2>
            <p className="mb-4">Since we deal in:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Food items (nuts, millets, spices)</li>
              <li>Pooja items</li>
              <li>Gift packs</li>
            </ul>
            <p className="font-bold text-gray-700">Please ensure:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Someone is available to receive the order</li>
              <li>Products are checked immediately upon delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              9. Damaged / Tampered Packages
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Do not accept visibly damaged packages</li>
              <li>If accepted, report within 48 hours with proof</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              10. Bulk & Gifting Orders
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Delivery timelines may vary</li>
              <li>Customised orders may require additional time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              11. Force Majeure
            </h2>
            <p className="mb-4">We are not responsible for delays due to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Natural disasters</li>
              <li>Strikes</li>
              <li>Lockdowns</li>
            </ul>
          </section>

          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-900">
              12. Contact Us
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
      </div>
    </main>
  );
}
