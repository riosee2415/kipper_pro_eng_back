import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Exhibition = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `PFiles`,
      },
    ],
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

export default mongoose.model(`Exhibition`, Exhibition, `Exhibition`);
