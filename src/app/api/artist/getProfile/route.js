import dbConnect from "@/lib/mongodb";
import Artist from "@/models/Artist";

export const POST = async (request) => {
  const id = await request.json();
  try {
    await dbConnect();
    const artist = await Artist.findById(id);
    return new Response(JSON.stringify(artist), {
      status: 200,
      message: artist,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Error"), {
      status: 405,
      message: "Problem",
    });
  }
};
