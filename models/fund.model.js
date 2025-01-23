import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FundSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    ammount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const FundModel = model("Funds", FundSchema);

export default FundModel;
