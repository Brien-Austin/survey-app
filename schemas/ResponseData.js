import mongoose, { Schema } from "mongoose";

const responseSchema = new mongoose.Schema({
  surveyResponses: [
    {
      question: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
    },
  ],
});
const ResponseData =
  mongoose.models.Response || mongoose.model("Response", responseSchema);

export default ResponseData;
