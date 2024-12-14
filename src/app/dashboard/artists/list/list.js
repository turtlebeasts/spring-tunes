"use client";
import ArtistCard from "@/app/dashboard/artists/artistCard/artistCard";
import { useArtists } from "@/app/api/context/ArtistContext";

export default function List() {
  const { artists, pageStatus } = useArtists();

  return (
    <div>
      {pageStatus === 500 && (
        <h1 className="text-red-700 px-10">
          MongoDB connection error, Possibly MongoDB was shut-down due to
          inactivity, in that case restart the database, or your ip is not
          listed in the database access configuration
        </h1>
      )}
      <div className="grid grid-cols-4 px-5">
        {pageStatus === 200 &&
          artists.map((element, key) => (
            <ArtistCard key={key} artist={element} imageUrl={element.photo} />
          ))}
      </div>
    </div>
  );
}
