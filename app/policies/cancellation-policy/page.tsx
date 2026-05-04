"use client";

import React from "react";

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        {/* Professional Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Cancellation and Refund Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8 font-light">
          Last Updated: May 02, 2026
        </p>

        {/* Policy Content - Clean Text Style */}
        <div className="space-y-10 text-[15px] leading-relaxed ">
          <p>
            At <span className="font-bold">Tradizions</span>, we strive to provide high-quality products including nuts, millets, spices, pooja essentials, and gift items. Due to the nature of our products, the following policy applies:
          </p>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              1. Order Cancellation
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Orders can be cancelled before dispatch only.</li>
              <li>Once the order is shipped, cancellation is not allowed.</li>
              <li>For cancellation requests, contact us via Email/WhatsApp with your order details.</li>
              <li>Eligible refunds will be processed within 5–7 working days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              2. Refunds & Replacements
            </h2>
            <p className="mb-4 font-bold text-gray-700 italic">We do not accept returns due to the perishable nature of food products.</p>
            <p className="mb-4">Refunds/replacements are allowed only if:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Wrong product delivered</li>
              <li>Damaged product</li>
              <li>Expired product</li>
            </ul>
            <p className="mt-4 italic">You must notify within 48 hours of delivery with photo/video proof.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              3. Non-Refundable Cases
            </h2>
            <p className="mb-4">Refunds will NOT be provided for:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Opened or used products</li>
              <li>Taste preference issues</li>
              <li>Incorrect address provided</li>
              <li>Failed delivery due to customer unavailability</li>
              <li>Delay caused by courier partners</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              4. Subscription Orders
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Subscription orders can be paused or cancelled before the next billing cycle</li>
              <li>Once processed, the order cannot be cancelled</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              5. Bulk / Gifting Orders
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Bulk and customized gift orders are non-cancellable and non-refundable once confirmed</li>
              <li>Any damage claims must be reported within 48 hours</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              6. Refund Processing
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Refunds will be issued to the original payment method</li>
              <li>Processing time: 5–7 business days</li>
            </ul>
          </section>

          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-900">
              7. Contact Us
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
