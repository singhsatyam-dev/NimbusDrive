import { Router } from "express";

import { protect } from "../middleware/authMiddleware";
import { upload } from "../middleware/uploadMiddleware";
import {
  uploadFile,
  getMyFiles,
  deleteFile,
  downloadFile,
  shareFile,
  getSharedFile,
  unshareFile,
} from "../controllers/fileController";

const router = Router();

router.get("/", protect, getMyFiles);
router.post("/upload", protect, upload.single("file"), uploadFile);
router.get("/shared/:token", getSharedFile);
router.delete("/:id", protect, deleteFile);
router.get("/:id/download", protect, downloadFile);
router.patch("/:id/share", protect, shareFile);
router.patch("/:id/unshare", protect, unshareFile);

export default router;
