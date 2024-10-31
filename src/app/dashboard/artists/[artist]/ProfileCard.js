export function ProfileCard({ artist }) {
  return (
    <div className="bg-white rounded-sm shadow-lg p-20 flex flex-col items-center content-center">
      <div
        className="rounded-full h-40 w-40 bg-cover bg-center"
        style={{
          backgroundImage: `url(data:${
            artist.photo.contentType
          };base64,${Buffer.from(artist.photo.data.data).toString("base64")})`,
        }}
      ></div>
      <h1 className="text-center font-semibold text-lg mt-5">
        {artist.artistName}
      </h1>
      {artist.socialMediaLinks.map((link, index) => (
        <div key={index} className="flex items-center gap-5 w-full mb-5">
          <img
            src={`https://${new URL(link).hostname}/favicon.ico`}
            className="rounded-full"
          />
          <p>{link}</p>
        </div>
      ))}
    </div>
  );
}
