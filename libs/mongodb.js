import mongoose from "mongoose";

const connectMDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectMDB;
