import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BoardType = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isDelete: {
    type: Boolean,
    required: true,
    default: false,
  },
  deletedAt: {
    type: String,
    required: true,
    default: "-",
  },
});

export default mongoose.model(`BoardType`, BoardType, `BoardType`);
