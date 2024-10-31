import dbConnect from "@/lib/mongodb";
import Banner from "@/models/Banner";

export async function GET(req) {
  try {
    await dbConnect();
    const banners = await Banner.find();
    return new Response(JSON.stringify(banners), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching banners:", error);
    return new Response(JSON.stringify("Error fetching banners"), {
      status: 500,
    });
  }
}
