import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Token = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    passWord: {
      type: String,
      required: true,
    },
    passWordRe: {
      type: String,
      required: true,
    },
    contry: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    charge: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    createdAt: {
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

export default mongoose.model(`Token`, Token, `Token`);
