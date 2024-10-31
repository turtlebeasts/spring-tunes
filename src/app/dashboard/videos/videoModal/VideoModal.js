import React from "react";
import YouTube from "react-youtube"; // or import ReactPlayer from 'react-player' if you're using react-player

const VideoPlayer = ({ videoUrl, onClose }) => {
  const videoId = new URL(videoUrl).searchParams.get("v"); // For YouTube

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1, // Set to 1 for autoplay
    },
  };

  const handleOverlayClick = (e) => {
    // Close modal if the overlay is clicked (but not the video player)
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 overlay"
      onClick={handleOverlayClick} // Add click handler to overlay
    >
      <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-3xl h-3/4">
        <div className="relative w-full h-full">
          <YouTube videoId={videoId} opts={opts} className="absolute inset-0" />
          <h1 className="text-center pt-20">Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
