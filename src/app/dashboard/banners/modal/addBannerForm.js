"use client";
import { useBanner } from "@/app/api/context/BannerContext";
import React, { useState } from "react";

const AddBannerForm = ({ toggleModal }) => {
  const [photo, setPhoto] = useState(null);
  const [isBanner, setIsBanner] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const [error, setError] = useState(false);

  const { addBanner } = useBanner();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      setPhotoError(true);
      return;
    }

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("isBanner", isBanner);

    try {
      const response = await addBanner(formData);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === 200) {
        setIsBanner(false);
        setPhoto(null);
        toggleModal();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error adding artist:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="font-light text-sm">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="photo">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="w-full"
          required
        />
      </div>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={isBanner}
          onChange={() => setIsBanner(!isBanner)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        <span className="ms-3 text-sm font-medium dark:text-black">
          Is Banner
        </span>
      </label>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 w-full"
      >
        Add Artist
      </button>
      {error ? (
        <p className="text-red-600 font-semibold">Error inserting data</p>
      ) : (
        ""
      )}
    </form>
  );
};

export default AddBannerForm;
