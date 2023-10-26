import mongoose, { Schema } from "mongoose";

const responseSchema = new mongoose.Schema({
  array: [
    {
      question: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: false,
      },
    },
  ],
});
const ResponseData =
  mongoose.models.Response || mongoose.model("Response", responseSchema);

export default ResponseData;
