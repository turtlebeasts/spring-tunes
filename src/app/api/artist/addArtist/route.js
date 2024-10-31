import dbConnect from "@/lib/mongodb";
import Artist from "@/models/Artist";

export const POST = async (req) => {
  await dbConnect();
  const formdata = await req.formData();
  const artistName = formdata.get("artistName");
  const socialMediaLinks = [];

  let i = 0;
  while (formdata.has(`socialLinks[${i}]`)) {
    socialMediaLinks.push(formdata.get(`socialLinks[${i}]`));
    i++;
  }
  const photo = formdata.get("photo");
  const contentType = photo.type;
  const photoBuffer = Buffer.from(await photo.arrayBuffer());

  const artist = new Artist({
    artistName,
    socialMediaLinks,
    photo: {
      data: photoBuffer,
      contentType,
    },
  });

  await artist.save();

  return new Response(JSON.stringify({ message: "OK", status: 200 }));
};
