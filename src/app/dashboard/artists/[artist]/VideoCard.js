"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "../../videos/videoCard/VideoCard";
import VideoModal from "../../videos/videoModal/VideoModal";

const VideoCards = ({ artist }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [videos, setVideos] = useState([]);

  const handleOpenModal = (url) => {
    setSelectedVideo(url);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    async function getVideos() {
      const response = await fetch("/api/video/getArtistVideos", {
        method: "POST",
        body: JSON.stringify(artist._id),
      });
      const result = await response.json();
      console.log(result);
      setVideos(result);
      setLoading(false);
    }
    getVideos();
  }, []);

  return (
    <div className="h-full w-full p-10 bg-white rounded shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        {loading ? <h1 className="text-lg">Loading videos ... </h1> : ""}
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoTitle={video.videoName}
            videoUrl={video.videoLink}
            onOpenModal={handleOpenModal}
          />
        ))}
        {!loading && !videos.length ? (
          <h1 className="text-lg">No videos uploaded for this artist</h1>
        ) : (
          ""
        )}
      </div>

      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default VideoCards;
