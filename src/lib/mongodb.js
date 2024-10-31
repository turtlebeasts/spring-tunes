// src/lib/dbConnect.js

import mongoose from "mongoose";

const dbConnect = async () => {
  // Check if already connected
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }

  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection error");
  }
};

export default dbConnect;
