"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--white)] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 text-gray-800">
        {/* Simple Professional Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8 font-light">
          Last Updated: May 02, 2026
        </p>

        {/* Policy Content - Clean Text Style */}
        <div className="space-y-10 text-[15px] leading-relaxed">
          <p>
            At <span className="font-bold">Tradizions</span>, we value your
            trust and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you use our website.
          </p>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold mb-2 text-gray-900">Personal Information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, phone number, email address</li>
                  <li>Billing & shipping address</li>
                  <li>Payment details (processed securely via payment gateways)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2 text-gray-900">Non-Personal Information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device type, browser, IP address</li>
                  <li>Website usage and browsing behaviour</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2 text-gray-900">Cookies & Tracking:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Used to improve experience, remember preferences, and personalize content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-600">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Process and deliver orders (including subscription orders)</li>
              <li>Communicate order updates, offers, and support</li>
              <li>Improve our products and website experience</li>
              <li>Send festival reminders, promotional messages (if opted in)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              3. Sharing of Information
            </h2>
            <p className="mb-4 text-gray-600 font-bold italic">We do NOT sell your data.</p>
            <p className="mb-4">We may share with:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Payment gateways (for secure transactions)</li>
              <li>Delivery/courier partners</li>
              <li>WhatsApp/SMS/email service providers</li>
              <li>Legal authorities if required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your data. However, no online system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              5. Your Rights
            </h2>
            <p className="mb-4">You can:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Access or update your data</li>
              <li>Opt out of marketing messages</li>
              <li>Request deletion of your data</li>
            </ul>
            <p className="mt-6 text-gray-600">
              Contact:{" "}
              <a
                href="mailto:qpay@tradizions.com"
                className="font-normal text-[var(--sky-blue)]"
              >
                qpay@tradizions.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              6. Cookies Policy
            </h2>
            <p className="mb-4">Cookies help:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Faster browsing</li>
              <li>Personalized experience</li>
            </ul>
            <p className="mt-4">
              You can disable cookies, but some features may not work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              7. Third-Party Links
            </h2>
            <p className="mb-4">We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Payment gateways</li>
              <li>Courier tracking sites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              8. Children’s Privacy
            </h2>
            <p>
              Not intended for users under 18.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">
              9. Policy Updates
            </h2>
            <p>
              We may update this policy. Changes will be posted here.
            </p>
          </section>

          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wider text-gray-900">
              10. Contact Us
            </h2>
            <div className="space-y-3">
              <p>
                If you have any questions, please contact us:
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
      </div>
    </main>
  );
}
