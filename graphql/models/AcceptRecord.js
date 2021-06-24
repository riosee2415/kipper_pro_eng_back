import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AcceptRecord = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    browser: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
    },
    ipAdress: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isVisit: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`AcceptRecord`, AcceptRecord, `AcceptRecord`);
