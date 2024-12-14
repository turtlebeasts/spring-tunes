"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ArtistCard = ({ artist, imageUrl }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const cardRef = useRef(null);

  const loadBackgroundImage = () => {
    if (cardRef.current) {
      const { top, bottom } = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the card is in the viewport
      if (top < windowHeight && bottom >= 0) {
        const imgSrc = `data:${imageUrl.contentType};base64,${Buffer.from(
          imageUrl.data.data
        ).toString("base64")}`;
        setBackgroundImage(imgSrc);
      }
    }
  };

  useEffect(() => {
    loadBackgroundImage();
    window.addEventListener("scroll", loadBackgroundImage);

    return () => {
      window.removeEventListener("scroll", loadBackgroundImage);
    };
  }, []);

  return (
    <Link
      className="relative w-full h-80 overflow-hidden shadow-lg group"
      href={`artists/${artist._id}`}
      ref={cardRef}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-110`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all duration-300 ease-out group-hover:bg-opacity-60">
        <h3 className="text-white text-xl font-semibold px-4 py-2 bg-black bg-opacity-50 rounded-lg transition-opacity duration-300">
          {artist.artistName}
        </h3>
      </div>
    </Link>
  );
};

export default ArtistCard;
