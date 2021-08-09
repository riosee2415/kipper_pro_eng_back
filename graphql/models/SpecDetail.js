import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SpecDetail = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
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

export default mongoose.model(`SpecDetail`, SpecDetail, `SpecDetail`);
