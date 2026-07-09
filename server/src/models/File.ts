import { Schema, model } from "mongoose";
import { IFileDocument } from "../types/file.types";

const fileSchema = new Schema<IFileDocument>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    s3Key: {
      type: String,
      required: true,
    },

    isShared: {
      type: Boolean,
      default: false,
    },

    shareToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const File = model<IFileDocument>("File", fileSchema);

export default File;
