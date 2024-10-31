"use client";
import { useArtists } from "@/app/api/context/ArtistContext";
import React, { useState } from "react";

const AddArtistForm = ({ toggleModal }) => {
  const [artistName, setArtistName] = useState("");
  const [socialLinks, setSocialLinks] = useState([""]);
  const [photo, setPhoto] = useState(null);

  const [error, setError] = useState(false);

  const { addArtist } = useArtists();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("artistName", artistName);
    socialLinks.forEach((link, index) =>
      formData.append(`socialLinks[${index}]`, link)
    );
    if (photo) formData.append("photo", photo);

    try {
      const response = await addArtist(formData);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === 200) {
        setArtistName("");
        setSocialLinks([""]);
        setPhoto(null);
        toggleModal();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error adding artist:", error);
    }
  };

  const updateSocialLink = (index, value) => {
    const updatedLinks = socialLinks.map((link, i) =>
      i === index ? value : link
    );
    setSocialLinks(updatedLinks);
  };

  return (
    <form onSubmit={handleSubmit} className="font-light text-sm">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="artistName">
          Artist Name
        </label>
        <input
          type="text"
          id="artistName"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Social Media Links</label>
        {socialLinks.map((link, index) => (
          <input
            key={index}
            type="url"
            value={link}
            onChange={(e) => updateSocialLink(index, e.target.value)}
            placeholder="Enter social media link"
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
        ))}
        <button
          type="button"
          onClick={() => setSocialLinks([...socialLinks, ""])}
          className="text-indigo-600 hover:underline mt-2"
        >
          + Add another link
        </button>
      </div>

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

export default AddArtistForm;
