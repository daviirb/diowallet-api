import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    return console.log("MongoDB Atlas connected");
  } catch (err) {
    return console.log(err.message);
  }
}

export async function disconectDb() {
  await mongoose.disconnect();
}
