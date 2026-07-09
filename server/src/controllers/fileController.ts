import { Request, Response } from "express";

import File from "../models/File";
import { AuthRequest } from "../types/auth.types";
import {
  uploadFileToS3,
  deleteFileFromS3,
  generateDownloadUrl,
} from "../services/s3.service";
import { generateShareToken } from "../utils/generateShareToken";

export const uploadFile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const s3Key = await uploadFileToS3(req.file, req.user._id.toString());

    const file = await File.create({
      owner: req.user._id,

      originalName: req.file.originalname,

      fileName: s3Key.split("/").pop(),

      mimeType: req.file.mimetype,

      fileSize: req.file.size,

      s3Key,

      isShared: false,

      shareToken: null,
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const getMyFiles = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const files = await File.find({
      owner: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: files.length,
      files,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const deleteFile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const file = await File.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    await deleteFileFromS3(file.s3Key);

    await file.deleteOne();

    return res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const downloadFile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const file = await File.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    const downloadUrl = await generateDownloadUrl(file.s3Key);

    return res.status(200).json({
      success: true,
      downloadUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const shareFile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const file = await File.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    if (!file.shareToken) {
      file.shareToken = generateShareToken();
      file.isShared = true;

      await file.save();
    }

    return res.status(200).json({
      success: true,
      message: "Share link generated successfully",
      shareUrl: `${process.env.BASE_URL}/api/files/shared/${file.shareToken}`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const getSharedFile = async (req: Request, res: Response) => {
  try {
    const file = await File.findOne({
      shareToken: req.params.token,
      isShared: true,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "Shared file not found",
      });
    }

    const downloadUrl = await generateDownloadUrl(file.s3Key);

    return res.redirect(downloadUrl);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

export const unshareFile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const file = await File.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    file.isShared = false;
    file.shareToken = null;

    await file.save();

    return res.status(200).json({
      success: true,
      message: "File is no longer shared",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};
