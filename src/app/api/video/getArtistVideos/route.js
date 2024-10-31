import dbConnect from "@/lib/mongodb";
import Video from "@/models/Video";

export async function POST(req) {
  const id = await req.json();
  try {
    await dbConnect();
    const videos = await Video.find({ artist: id });
    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return new Response("Error fetching videos", { status: 500 });
  }
}
