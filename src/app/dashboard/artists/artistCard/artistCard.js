import Link from "next/link";
import React from "react";

const ArtistCard = ({ artist, imageUrl }) => {
  return (
    <Link
      className="relative w-80 h-80 overflow-hidden shadow-lg group"
      href={`/dashboard/artists/${artist._id}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url(data:${
            imageUrl.contentType
          };base64,${Buffer.from(imageUrl.data.data).toString("base64")})`,
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
