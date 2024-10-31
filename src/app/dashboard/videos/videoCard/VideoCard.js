import React from "react";

const VideoCard = ({ videoTitle, videoUrl, onOpenModal }) => {
  const videoId = new URL(videoUrl).searchParams.get("v");
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div
      className="relative w-70 h-60 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
      onClick={() => onOpenModal(videoUrl)} // Trigger modal open on click
    >
      {/* Background Thumbnail */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      ></div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black bg-opacity-50 rounded-full p-3">
          <i className="fa-solid fa-play text-white text-2xl"></i>
        </div>
      </div>

      {/* Song Title at the Bottom */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center text-white text-sm font-semibold py-2">
        {videoTitle}
      </div>
    </div>
  );
};

export default VideoCard;
