"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const BannerContext = createContext();

export const useBanner = () => useContext(BannerContext);

export const BannerProvider = ({ children }) => {
  const [banners, setBanner] = useState([]);
  const [pageStatus, setStatus] = useState(null);

  const fetchBanners = async () => {
    const response = await fetch("/api/banner/getPhotos");
    const data = await response.json();
    setBanner(data);
    setStatus(response.status);
  };

  useEffect(() => {
    fetchBanners(); // Fetch artists when the component mounts
  }, []);

  const addBanner = async (bannerData) => {
    const response = await fetch("/api/banner/addPhoto", {
      method: "POST",
      body: bannerData,
    });
    fetchBanners(); // Refresh artist list after adding a new artist
    return response;
  };

  return (
    <BannerContext.Provider
      value={{ banners, addBanner, fetchBanners, pageStatus }}
    >
      {children}
    </BannerContext.Provider>
  );
};
