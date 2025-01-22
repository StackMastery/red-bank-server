import mongoose from "mongoose";

const { Schema, model } = mongoose;

const subscribeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Subscribe = model("Subscribe", subscribeSchema);

export default Subscribe;
