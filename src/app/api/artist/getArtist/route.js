import dbConnect from "@/lib/mongodb";
import Artist from "@/models/Artist";

export async function GET(req) {
  try {
    await dbConnect();
    const artists = await Artist.find();
    return new Response(JSON.stringify(artists), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching artists:", error);
    return new Response(JSON.stringify("Error fetching artists"), {
      status: 500,
    });
  }
}
