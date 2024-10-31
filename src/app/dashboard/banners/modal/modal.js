"use client";
import React, { useState } from "react";
import AddBannerForm from "./addBannerForm";
import { useBanner } from "@/app/api/context/BannerContext";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pageStatus } = useBanner();

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="px-10 py-4">
      <button
        disabled={pageStatus !== 200}
        onClick={toggleModal}
        className="rounded-full text-xs py-4 px-10 bg-indigo-950 hover:bg-purple-700 transition-all duration-300 text-white shadow-md hover:shadow-xl"
      >
        <i className="fa-solid fa-user-plus mr-2"></i>PHOTO
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <h2 className="text-lg font-bold mb-4">ADD NEW PHOTO</h2>
            <AddBannerForm toggleModal={toggleModal} />

            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
