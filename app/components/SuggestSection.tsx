"use client";

import { useState } from "react";
import { Toast } from "./Toast";
import { roboto } from "../lib/fonts";

export const SuggestSection = () => {
  const [musicianName, setMusicianName] = useState("");

  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: "", isVisible: false });
  };

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <section
        id="suggest"
        className={`relative bg-black text-white py-32 ${roboto.className}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1584679109691-1d0c852bc5bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-left mb-16">
            <div className="inline-flex items-left space-x-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-light">
                Know great music?
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl  leading-relaxed">
              Help us discover the next breakthrough artist. Share your favorite
              hidden gems with our community.
            </p>
          </div>

          <div className=" border-1 border-gray-50/20  p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    value={musicianName}
                    onChange={(e) => setMusicianName(e.target.value)}
                    className="w-full bg-white/10 border border-white/30  px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="Artist or band name"
                  />

                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full bg-white/10 border border-white/30  px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="What makes them special? Tell us their story..."
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/30  px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="Your email (so we can thank you!)"
                  />
                </div>

                <button
                  onClick={() => {
                    showToast(
                      "Thank you for your suggestion! We&apos;ll review it soon."
                    );
                  }}
                  disabled={
                    !musicianName.trim() || !description.trim() || !email.trim()
                  }
                  className="cursor-pointer w-full bg-white text-black py-4 text-lg font-semibold  hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Submit Artist
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-4">
                    Why suggest artists?
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p>Help talented musicians reach new audiences</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p>Be credited as a discoverer in our features</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p>Shape the future of music discovery</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our team reviews every submission personally. If we feature
                    your suggestion, we&apos;ll send you early access to the
                    playlist and a special mention in our newsletter.
                  </p>
                </div>

                <div className="">
                  <div className="text-center">
                    <div className="text-2xl font-light mb-1">🎵</div>
                    <p className="text-sm text-gray-400">
                      <span className="text-white font-medium">127</span>{" "}
                      artists suggested this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
