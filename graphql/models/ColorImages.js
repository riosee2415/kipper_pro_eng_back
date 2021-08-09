import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ColorImages = new Schema(
  {
    imagePath: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    colorCode: {
      type: String,
      required: true,
    },
    sort: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`ColorImages`, ColorImages, `ColorImages`);
