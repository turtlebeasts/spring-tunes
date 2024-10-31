"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ArtistContext = createContext();

export const useArtists = () => useContext(ArtistContext);

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [pageStatus, setStatus] = useState(null);

  const fetchArtists = async () => {
    const response = await fetch("/api/artist/getArtist");
    const data = await response.json();
    setArtists(data);
    setStatus(response.status);
  };

  useEffect(() => {
    fetchArtists(); // Fetch artists when the component mounts
  }, []);

  const addArtist = async (artistData) => {
    const response = await fetch("/api/artist/addArtist", {
      method: "POST",
      body: artistData,
    });
    fetchArtists(); // Refresh artist list after adding a new artist
    return response;
  };

  return (
    <ArtistContext.Provider
      value={{ artists, addArtist, fetchArtists, pageStatus }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
