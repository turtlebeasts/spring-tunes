"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [pageStatus, setStatus] = useState(null);

  const fetchVideos = async () => {
    const response = await fetch("/api/video/getVideo");
    const data = await response.json();
    setVideos(data);
    setStatus(response.status);
  };

  useEffect(() => {
    fetchVideos(); // Fetch artists when the component mounts
  }, []);

  const addVideo = async (videoData) => {
    const response = await fetch("/api/video/addVideo", {
      method: "POST",
      body: JSON.stringify(videoData),
      headers: { "Content-Type": "application/json" },
    });
    fetchVideos(); // Refresh artist list after adding a new artist
    return response;
  };

  return (
    <VideoContext.Provider
      value={{ videos, addVideo, fetchVideos, pageStatus }}
    >
      {children}
    </VideoContext.Provider>
  );
};
