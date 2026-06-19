import mongoose from "mongoose";
import dotenv from "dotenv/config";

export default async function dbConnect() {
  try {
    await mongoose.connect(
      process.env.MONGODB_LOCAL || process.env.MONGODB_SRV,
    );
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection failed", error.message);
    process.exit(1);
  }
}
