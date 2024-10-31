import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  isBanner: {
    type: Boolean,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.models.Banner || mongoose.model("Banner", bannerSchema);
