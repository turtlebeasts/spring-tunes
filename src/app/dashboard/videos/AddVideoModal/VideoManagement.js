"use client";
import React, { useState } from "react";
import AddVideoModal from "./AddVideoModal"; // Adjust the import based on your file structure
import { useVideo } from "@/app/api/context/VideoContext";

const VideoManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const { pageStatus } = useVideo();

  const handleAddVideo = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <div className="px-10 py-4">
      <button
        disabled={pageStatus !== 200}
        onClick={() => setIsModalOpen(true)}
        className="rounded-full text-xs py-4 px-10 bg-indigo-950 hover:bg-purple-700 transition-all duration-300 text-white shadow-md hover:shadow-xl"
      >
        Add Video
      </button>

      <AddVideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddVideo={handleAddVideo}
      />
    </div>
  );
};

export default VideoManagement;
