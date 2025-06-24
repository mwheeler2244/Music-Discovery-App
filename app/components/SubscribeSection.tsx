"use client";

import { useState } from "react";
import { Toast } from "./Toast";
import { roboto } from "../lib/fonts";

export const SubscribeSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: "", isVisible: false });
  };

  const handleSubscribe = () => {
    if (fullName.trim() && email.trim()) {
      showToast("Thank you for subscribing! We'll be in touch soon.");
      setFullName("");
      setEmail("");
    }
  };

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <section
        id="subscribe"
        className={`relative bg-black text-white py-24 ${roboto.className}`}
      >
        <div
          className="absolute inset-0  bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1584679109691-1d0c852bc5bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                  Subscribe now!
                </h2>
                <div className="w-24 h-1 bg-white mb-8"></div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  Join thousands of music enthusiasts who discover new artists
                  every week. Get curated playlists, exclusive interviews, and
                  early access to emerging talent.
                </p>
                <p className="text-gray-400">
                  We respect your inbox. Only one carefully crafted update per
                  week, no spam, unsubscribe anytime.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">25K+</h3>
                  <p className="text-gray-400">Active subscribers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">Weekly</h3>
                  <p className="text-gray-400">Curated updates</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500">
                  ✓ Exclusive artist interviews
                  <br />
                  ✓ Early access to new releases
                  <br />✓ Behind-the-scenes content
                </p>
              </div>
            </div>

            <div className=" p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-light mb-2">
                    Start your musical journey
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Join our community today
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white/10 border border-white/30  px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/30  px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubscribe}
                  disabled={!fullName.trim() || !email.trim()}
                  className="cursor-pointer w-full bg-white text-black py-4 text-lg font-medium  hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Subscribe to Updates
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to receive weekly emails from
                  Musicians. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
