import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

export default mongoose.models.News || mongoose.model("News", newsSchema);
