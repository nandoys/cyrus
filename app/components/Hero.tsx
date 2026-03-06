"use client";

import { useState } from "react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2340] via-[#1e3a5f] to-[#1a4d8f]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-blue-400/30">
          #1 Real Estate Agency
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Find Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Dream Home
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover exceptional properties tailored to your lifestyle. From
          luxury estates to cozy starter homes, we make finding your perfect
          home effortless.
        </p>

        {/* Search bar */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-blue-200 text-xs font-semibold uppercase tracking-wide text-left">
                Location
              </label>
              <input
                type="text"
                placeholder="City, neighborhood, zip..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-blue-200/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-blue-200 text-xs font-semibold uppercase tracking-wide text-left">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#1e3a5f]">
                  All Types
                </option>
                <option value="house" className="bg-[#1e3a5f]">
                  House
                </option>
                <option value="condo" className="bg-[#1e3a5f]">
                  Condo
                </option>
                <option value="townhouse" className="bg-[#1e3a5f]">
                  Townhouse
                </option>
                <option value="land" className="bg-[#1e3a5f]">
                  Land
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-blue-200 text-xs font-semibold uppercase tracking-wide text-left">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#1e3a5f]">
                  Any Price
                </option>
                <option value="0-300k" className="bg-[#1e3a5f]">
                  Up to $300K
                </option>
                <option value="300k-600k" className="bg-[#1e3a5f]">
                  $300K – $600K
                </option>
                <option value="600k-1m" className="bg-[#1e3a5f]">
                  $600K – $1M
                </option>
                <option value="1m+" className="bg-[#1e3a5f]">
                  $1M+
                </option>
              </select>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/30 text-lg tracking-wide">
            Search Properties
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "2,500+", label: "Properties" },
            { value: "1,200+", label: "Happy Clients" },
            { value: "15+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-blue-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
