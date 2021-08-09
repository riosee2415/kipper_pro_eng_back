import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductIcon = new Schema(
  {
    imagePath: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`ProductIcon`, ProductIcon, `ProductIcon`);
