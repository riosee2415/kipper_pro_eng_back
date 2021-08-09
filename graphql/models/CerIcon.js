import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CerIcon = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`CerIcon`, CerIcon, `CerIcon`);
