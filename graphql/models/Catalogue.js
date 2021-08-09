import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Catalogue = new Schema(
  {
    title: {
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

export default mongoose.model(`Catalogue`, Catalogue, `Catalogue`);
