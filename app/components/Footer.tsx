"use client";

import { useState } from "react";
import { Toast } from "./Toast";

export const Footer = () => {
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: "", isVisible: false });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (linkName: string) => {
    showToast(
      `${linkName} page coming soon! We're working on bringing you this feature.`
    );
  };

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <footer className="relative bg-black text-white py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 justify-items-end">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-3xl font-light tracking-wide mb-4">
                  Musicly
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Discovering and celebrating exceptional musical talent from
                  all around the globe.
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-medium mb-4">Discover</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("latest-discoveries")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Latest Artists
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-medium mb-4">Community</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("suggest")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Submit Artist
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-medium mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleLinkClick("Contact Us")}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Musicly. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ♫ for music lovers</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
