import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true,
  },
  socialMediaLinks: [
    {
      type: String,
    },
  ],
  photo: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.models.Artist || mongoose.model("Artist", artistSchema);
