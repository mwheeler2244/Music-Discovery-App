"use client";

import { useState } from "react";
import Image from "next/image";
import { Toast } from "./Toast";
import { roboto } from "../lib/fonts";

export const LatestDiscoveries = () => {
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: "", isVisible: false });
  };

  const discoveries = [
    {
      id: 1,
      name: "Ruby Mae Washington",
      years: "1928 - 1987",
      image:
        "https://images.unsplash.com/photo-1711645707207-9d1d1dd0f1f5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Detroit-born jazz vocalist who dominated the club scene in the 1950s. Her powerful voice and emotional delivery made her a favorite at the Blue Note and Village Vanguard, influencing a generation of singers.",
    },
    {
      id: 2,
      name: 'Willie "Big Time" Johnson',
      years: "1925 - 1978",
      image:
        "https://i.pinimg.com/736x/70/ba/3f/70ba3f0d1dcea97866b44b24bf84c836.jpg",
      description:
        "Mississippi Delta blues guitarist who electrified Chicago in the late 50s. His innovative use of distortion and slide guitar techniques helped define the Chicago blues sound.",
    },
    {
      id: 3,
      name: 'Sarah "Sweet Fingers" Davis',
      years: "1932 - 1989",
      image:
        "https://i.pinimg.com/736x/8e/09/24/8e09248680b08b52222dce23cf60550a.jpg",
      description:
        "Harlem-born jazz pianist and composer who broke barriers in the male-dominated bebop scene. Her rapid-fire solos and complex harmonies earned respect from Charlie Parker and Dizzy Gillespie.",
    },
    {
      id: 4,
      name: 'Tommy "T-Bone" Richardson',
      years: "1930 - 1981",
      image:
        "https://i.pinimg.com/736x/5b/5f/bb/5b5fbbdf0f9b3ec6113a6e51e06e957b.jpg",
      description:
        "New Orleans-born blues harmonica player who brought Creole influences to the electric blues movement. His soulful playing and distinctive tone made him a sought-after session musician in the 1960s.",
    },
  ];

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <section
        id="latest-discoveries"
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
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Latest discoveries
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Meet the emerging artists who are reshaping the musical landscape
              with their innovative sounds and unique perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {discoveries.map((artist) => (
              <div key={artist.id} className="group flex flex-col h-full">
                <div className="mb-6">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={400}
                    height={500}
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm"
                  />
                </div>

                <div className="flex flex-col flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      {artist.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-light">
                      — {artist.years}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed font-light flex-grow">
                    {artist.description}
                  </p>

                  <button
                    onClick={() =>
                      showToast(
                        `${artist.name}'s playlist coming soon! We're curating the perfect collection.`
                      )
                    }
                    className="cursor-pointer w-full group/btn border border-gray-600 text-gray-400 px-4 py-2 text-sm hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 mt-auto"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>YouTube playlist</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
