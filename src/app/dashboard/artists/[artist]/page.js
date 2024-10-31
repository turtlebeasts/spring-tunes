"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { NotFoundCard } from "./NotFoundCard";
import VideoCards from "./VideoCard";

export function Loading() {
  return (
    <div className="text-center text-2xl m-5 shadow-lg">
      <div className="bg-white rounded-sm p-10">Loading ...</div>
    </div>
  );
}

export default function Profile() {
  const { artist } = useParams();
  const [profile, setProfile] = useState(null);
  const [profileLoading, setLoading] = useState(true);
  useEffect(() => {
    async function getProfile() {
      const response = await fetch(`/api/artist/getProfile`, {
        method: "POST",
        body: JSON.stringify(artist),
      });
      const result = await response.json();
      setProfile(result);
      setLoading(false);
    }
    getProfile();
  }, []);
  return (
    <div>
      {profileLoading ? (
        <Loading />
      ) : profile !== null ? (
        <div className="flex pt-10 mx-10 gap-4">
          <ProfileCard artist={profile} />
          <VideoCards artist={profile} />
        </div>
      ) : (
        <NotFoundCard />
      )}
    </div>
  );
}
