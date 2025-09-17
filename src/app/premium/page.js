"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    starter: {
      name: "Starter",
      price: { monthly: 9, yearly: 90 },
      description: "Perfect for crypto enthusiasts",
      features: [
        "Real-time market data",
        "10 exchanges access",
        "Basic portfolio tracking",
        "Price alerts (5/day)",
        "Mobile app access",
        "Email support",
      ],
      color: "from-blue-400 to-cyan-500",
      icon: "🚀",
    },
    pro: {
      name: "Professional",
      price: { monthly: 29, yearly: 290 },
      description: "For serious traders and investors",
      features: [
        "Everything in Starter",
        "50+ exchanges access",
        "Advanced analytics",
        "Unlimited price alerts",
        "Portfolio analytics",
        "Trading signals",
        "API access",
        "Priority support",
      ],
      color: "from-emerald-400 to-teal-500",
      icon: "⚡",
      popular: true,
    },
    enterprise: {
      name: "Enterprise",
      price: { monthly: 99, yearly: 990 },
      description: "For teams and institutions",
      features: [
        "Everything in Professional",
        "Unlimited exchanges",
        "Custom integrations",
        "Team collaboration",
        "Advanced security",
        "Dedicated support",
        "Custom reports",
        "White-label options",
      ],
      color: "from-purple-400 to-pink-500",
      icon: "👑",
    },
  };

  const handleUpgrade = (planType) => {
    // This would typically integrate with a payment processor
    alert(`Redirecting to checkout for ${plans[planType].name} plan...`);
  };

  return (
    <>
      <Navbar />
      <WavyBackground
        className="min-h-screen py-20"
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={50}
        backgroundFill="#0f172a"
        blur={10}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent animate-pulse mb-4">
                ⚡
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Upgrade to Premium
              </h1>
              <p
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Unlock the full potential of CryptoVerse with real-time data,
                advanced analytics, and premium features designed for serious
                crypto professionals.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedPlan === key ? "scale-105" : ""
                }`}
                onClick={() => setSelectedPlan(key)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      🔥 Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative p-8 bg-white/5 backdrop-blur-lg border-2 rounded-3xl shadow-2xl transition-all duration-300 ${
                    selectedPlan === key
                      ? "border-emerald-500/50 shadow-emerald-500/25"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-black text-white">
                          ${plan.price[billingCycle]}
                        </span>
                        <span className="text-gray-400">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                      {billingCycle === "yearly" && (
                        <div className="text-sm text-emerald-400 mt-2">
                          ${(plan.price.yearly / 12).toFixed(0)}/month when paid
                          annually
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleUpgrade(key)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                      selectedPlan === key
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                        : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {selectedPlan === key ? "Get Started" : "Select Plan"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-16">
            <h3
              className="text-3xl font-bold text-white text-center mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Why Choose Premium?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📊</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Real-time Data
                </h4>
                <p className="text-gray-400">
                  Access live market data from 50+ exchanges with sub-second
                  latency for better trading decisions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Advanced Tools
                </h4>
                <p className="text-gray-400">
                  Professional-grade analytics, portfolio tracking, and trading
                  signals powered by AI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Priority Support
                </h4>
                <p className="text-gray-400">
                  Get dedicated support from our crypto experts and priority
                  access to new features.
                </p>
              </div>
            </div>
          </div>

          {/* Security & Trust */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg border border-slate-600/50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">
                🔒 Secure & Trusted
              </h4>
              <p className="text-gray-300">
                Your data and payments are protected with enterprise-grade
                security
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🔐</div>
                <div className="text-white font-semibold text-sm">
                  256-bit SSL
                </div>
                <div className="text-gray-400 text-xs">Encrypted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💳</div>
                <div className="text-white font-semibold text-sm">
                  Stripe Payments
                </div>
                <div className="text-gray-400 text-xs">Secure billing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-white font-semibold text-sm">
                  GDPR Compliant
                </div>
                <div className="text-gray-400 text-xs">Privacy first</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-white font-semibold text-sm">
                  24/7 Monitoring
                </div>
                <div className="text-gray-400 text-xs">Always protected</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-16">
            <h3
              className="text-3xl font-bold text-white text-center mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold text-lg mb-3">
                  Can I cancel anytime?
                </h4>
                <p className="text-gray-400 text-sm">
                  Yes, you can cancel your subscription at any time. No
                  long-term commitments or cancellation fees.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-3">
                  Is there a free trial?
                </h4>
                <p className="text-gray-400 text-sm">
                  We offer a 7-day free trial for all premium plans. No credit
                  card required to start.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-3">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-400 text-sm">
                  We accept all major credit cards, PayPal, and cryptocurrency
                  payments for your convenience.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-3">
                  Do you offer refunds?
                </h4>
                <p className="text-gray-400 text-sm">
                  Yes, we offer a 30-day money-back guarantee if you&apos;re not
                  satisfied with our premium features.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-lg border border-emerald-500/30 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6">
                Join thousands of crypto professionals who trust CryptoVerse for
                their trading and investment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => handleUpgrade(selectedPlan)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                >
                  <span className="text-2xl">🚀</span>
                  Start {plans[selectedPlan].name} Plan
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300 underline"
                >
                  Or continue with free version
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>
      <Footer />
    </>
  );
}
