"use client";
import { useArtists } from "@/app/api/context/ArtistContext";
import { useVideo } from "@/app/api/context/VideoContext";
import React, { useState } from "react";

const AddVideoModal = ({ isOpen, onClose }) => {
  const [videoName, setVideoName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");

  const { artists } = useArtists();
  const { addVideo } = useVideo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoData = {
      videoName,
      videoUrl,
      selectedArtist,
    };
    try {
      const response = await addVideo(videoData);

      if (response.ok) {
        setVideoName("");
        setVideoUrl("");
        setSelectedArtist("");
        onClose();
      } else {
        console.error("Failed to add video");
      }
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-md p-6">
        <h2 className="text-lg font-bold mb-4">Add Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="videoName"
              className="block text-sm font-medium text-gray-700"
            >
              Video Name
            </label>
            <input
              type="text"
              id="videoName"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="artist"
              className="block text-sm font-medium text-gray-700"
            >
              Artist
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              onChange={(e) => setSelectedArtist(e.target.value)}
              value={selectedArtist}
            >
              <option value="">-SELECT-</option>
              {artists.map((element, key) => (
                <option key={key} value={element._id}>
                  {element.artistName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="videoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Video URL
            </label>
            <input
              type="url"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-300 text-black rounded-md px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md px-4 py-2"
            >
              Add Video
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVideoModal;
