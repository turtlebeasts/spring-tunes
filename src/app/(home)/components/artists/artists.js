import ArtistCard from "@/app/dashboard/artists/artistCard/artistCard";

export async function generateMetaData() {
  return {
    title: "Spring Tunes",
  };
}

export default async function ArtistsSection() {
  const res = await fetch(`${process.env.BASE_URL}/api/artist/getArtist`);
  const artist = await res.json();
  return (
    <div>
      <h1 className="text-8xl text-white">artists</h1>
      <div className="grid grid-cols-5 ">
        {artist.map((element, key) => (
          <ArtistCard key={key} artist={element} imageUrl={element.photo} />
        ))}
      </div>
    </div>
  );
}
