import { Document, Types } from "mongoose";

export interface IFile {
  owner: Types.ObjectId;

  originalName: string;

  fileName: string;

  mimeType: string;

  fileSize: number;

  s3Key: string;

  isShared: boolean;

  shareToken: string | null;
}

export interface IFileDocument extends IFile, Document {}
