"use client";
import { useBanner } from "@/app/api/context/BannerContext";
import PhotoCard from "../photoCard/photoCard";

export default function List() {
  const { banners, pageStatus } = useBanner();

  return (
    <div className="bg-white rounded shadow-lg p-10 mx-5">
      {pageStatus === 500 && (
        <h1 className="text-red-700 px-10">
          MongoDB connection error, Possibly MongoDB was shut-down due to
          inactivity, in that case restart the database, or your ip is not
          listed in the database access configuration
        </h1>
      )}
      <div className="grid grid-cols-7 gap-5 px-5">
        {pageStatus === 200 &&
          banners.map((element, key) => (
            <PhotoCard
              key={key}
              isBanner={element.isBanner}
              imageUrl={element.photo}
            />
          ))}
        {pageStatus === 200 && !banners.length && (
          <h1 className="text-lg">No photos added yet.</h1>
        )}
      </div>
    </div>
  );
}
