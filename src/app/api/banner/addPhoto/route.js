import dbConnect from "@/lib/mongodb";
import Banner from "@/models/Banner";

export const POST = async (req) => {
  await dbConnect();
  const formdata = await req.formData();
  const isBanner = formdata.get("isBanner");
  const photo = formdata.get("photo");
  const contentType = photo.type;

  const photoBuffer = Buffer.from(await photo.arrayBuffer());

  const banner = new Banner({
    isBanner,
    photo: {
      data: photoBuffer,
      contentType,
    },
  });

  await banner.save();

  return new Response(JSON.stringify({ message: "OK", status: 200 }));
};
