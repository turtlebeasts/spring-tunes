import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videoLink: {
    type: String,
    required: true,
  },
  videoName: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
});

export default mongoose.models.Video || mongoose.model("Video", videoSchema);
