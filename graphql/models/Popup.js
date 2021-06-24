import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Popup = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    deletedAt: {
      type: String,
      required: true,
      default: "-",
    },
    updatedAt: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Popup`, Popup, `Popup`);
