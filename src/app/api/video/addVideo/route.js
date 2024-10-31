import Video from "@/models/Video";

const { default: dbConnect } = require("@/lib/mongodb");

export const POST = async (request) => {
  await dbConnect();
  const data = await request.json();
  const { videoName, videoUrl, selectedArtist } = data;
  const video = new Video({
    videoName,
    videoLink: videoUrl,
    artist: selectedArtist,
  });

  await video.save();
  return new Response(JSON.stringify({ message: "OK", status: 200 }));
};
