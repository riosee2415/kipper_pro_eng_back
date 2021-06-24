import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FooterInfo = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`FooterInfo`, FooterInfo, `FooterInfo`);
