import React from "react";

const PhotoCard = ({ isBanner, imageUrl }) => {
  return (
    <div className="relative w-40 h-40 overflow-hidden shadow-lg group rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url(data:${
            imageUrl.contentType
          };base64,${Buffer.from(imageUrl.data.data).toString("base64")})`,
        }}
      ></div>
      {isBanner && (
        <div
          className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-30 transition-all duration-300 ease-out group-hover:bg-opacity-60 w-full"
          onClick={() => console.log("set banner")}
        >
          <h3 className="text-green-600 text-xl font-semibold px-4 py-2 bg-black bg-opacity-50 rounded-lg transition-opacity duration-300">
            <i className="fa-solid fa-circle-check"></i>
          </h3>
        </div>
      )}
      <h1
        className="text-white absolute flex justify-end p-2 inset-0 h-10"
        onClick={() => console.log("Close")}
      >
        <i className="fa-solid fa-xmark"></i>
      </h1>
    </div>
  );
};

export default PhotoCard;
