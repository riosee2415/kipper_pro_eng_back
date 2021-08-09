import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Reference = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileOriginName: {
      type: String,
      required: true,
    },
    link: {
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

export default mongoose.model(`Reference`, Reference, `Reference`);
