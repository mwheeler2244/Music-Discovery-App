"use client";

import { useState } from "react";

export const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale bg-opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560526331-c10776135ea3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>

            <div className="text-white text-xl font-light tracking-wide">
              Musicly
            </div>
          </div>

          <div className="hidden md:flex space-x-8 text-white/80 text-md">
            <button
              onClick={() => scrollToSection("latest-discoveries")}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Discover
            </button>
            <button
              onClick={() => scrollToSection("suggest")}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Suggest
            </button>
            <button
              onClick={() => scrollToSection("subscribe")}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Subscribe
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: 0 }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer absolute top-6 right-6 text-white p-2 hover:text-gray-300 transition-colors z-30"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection("latest-discoveries")}
              className="cursor-pointer text-white text-2xl font-light hover:text-gray-300 transition-colors"
            >
              Discover
            </button>
            <button
              onClick={() => scrollToSection("suggest")}
              className="cursor-pointer text-white text-2xl font-light hover:text-gray-300 transition-colors"
            >
              Suggest
            </button>
            <button
              onClick={() => scrollToSection("subscribe")}
              className="cursor-pointer text-white text-2xl font-light hover:text-gray-300 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
          Discover. Listen. Repeat.{" "}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Every week we share a new playlist of current or past musicians.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("latest-discoveries")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer bg-white text-black px-6 py-2 text-lg font-medium hover:translate-y-1 transition-all duration-300 hover:shadow-2xl tracking-wide"
        >
          Start discovering
        </button>

        <div className="mt-16 text-white/60 text-sm">
          Last update on 26 May, 2025
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};
