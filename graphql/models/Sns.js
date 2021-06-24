import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Sns = new Schema(
  {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Sns`, Sns, `Sns`);
