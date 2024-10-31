"use client";
import React, { useState } from "react";
import VideoCard from "../videoCard/VideoCard";
import VideoModal from "../videoModal/VideoModal";
import { useVideo } from "@/app/api/context/VideoContext";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { videos, pageStatus } = useVideo();

  const handleOpenModal = (url) => {
    setSelectedVideo(url);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      {pageStatus === 500 && (
        <h1 className="text-red-700 px-10">
          MongoDB connection error, Possibly MongoDB was shut-down due to
          inactivity, in that case restart the database, or your ip is not
          listed in the database access configuration
        </h1>
      )}
      <div className="grid grid-cols-4 gap-4 px-10">
        {pageStatus == 200 &&
          videos.map((video, index) => (
            <VideoCard
              key={index}
              videoTitle={video.videoName}
              videoUrl={video.videoLink}
              onOpenModal={handleOpenModal}
            />
          ))}
      </div>

      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default VideoList;
