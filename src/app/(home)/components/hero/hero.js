"use client";
// components/FullWidthCarousel.js
import { useState, useContext } from "react";
import { useBanner } from "@/app/api/context/BannerContext";

export default function Hero() {
  const { banners } = useBanner();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  if (!banners || banners.length === 0) return null;

  const prevSlide = () => {
    setSlideDirection("left");
    setCurrentIndex((currentIndex === 0 ? banners.length : currentIndex) - 1);
  };

  const nextSlide = () => {
    setSlideDirection("right");
    setCurrentIndex((currentIndex + 1) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden z-0 h-screen">
      <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
        {banners.map((photo, idx) => (
          <img
            key={idx}
            src={`data:${photo.photo.contentType};base64,${Buffer.from(
              photo.photo.data.data
            ).toString("base64")}`}
            alt="carousel"
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-10"
      >
        &#10095;
      </button>

      <div className="flex justify-end mt-4 space-x-2 absolute bottom-4 w-full z-10 pr-20">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
