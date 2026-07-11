import {
  Download,
  Share2,
  Star,
  Trash2,
  FileText,
  Image,
  FileArchive,
  File,
} from "lucide-react";
import { useState } from "react";

import type { FileData } from "@/services/file.service";

import ConfirmDialog from "@/components/common/ConfirmDialog";
import { useDelete } from "@/hooks/useDelete";
import { useDownload } from "@/hooks/useDownload";
import { useShare } from "@/hooks/useShare";

interface Props {
  file: FileData;
}

const getIcon = (mime: string) => {
  if (mime.includes("pdf")) return FileText;
  if (mime.includes("image")) return Image;
  if (mime.includes("zip")) return FileArchive;

  return File;
};

const getIconColor = (mime: string) => {
  if (mime.includes("pdf")) return "text-red-500";
  if (mime.includes("image")) return "text-blue-500";
  if (mime.includes("zip")) return "text-yellow-500";

  return "text-primary";
};

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const FileCard = ({ file }: Props) => {
  const Icon = getIcon(file.mimeType);

  const deleteMutation = useDelete();
  const download = useDownload();
  const { share, unshare } = useShare();

  const [starred, setStarred] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* File Header */}

      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-primary/10 p-3">
          <Icon className={`h-6 w-6 ${getIconColor(file.mimeType)}`} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900">
            {file.originalName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {file.mimeType.split("/")[1].toUpperCase()} •{" "}
            {formatSize(file.fileSize)}
          </p>
        </div>
      </div>

      {/* Details */}

      <div className="mt-5 flex items-center justify-between text-sm">
        <div>
          <p className="text-slate-400">Uploaded</p>

          <p className="font-medium">{formatDate(file.createdAt)}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            file.isShared
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {file.isShared ? "Shared" : "Private"}
        </span>
      </div>

      {/* Actions */}

      <div className="mt-6 flex items-center justify-between border-t pt-5">
        <button
          onClick={() => setStarred(!starred)}
          className={`rounded-xl p-3 transition ${
            starred ? "bg-yellow-100 text-yellow-500" : "hover:bg-slate-100"
          }`}
        >
          <Star
            className={`h-5 w-5 ${
              starred ? "fill-yellow-400 text-yellow-500" : ""
            }`}
          />
        </button>

        <button
          onClick={() => (file.isShared ? unshare(file._id) : share(file._id))}
          className={`rounded-xl p-3 transition ${
            file.isShared ? "bg-green-50 text-green-600" : "hover:bg-slate-100"
          }`}
        >
          <Share2 className="h-5 w-5" />
        </button>

        <button
          onClick={() => download(file._id)}
          className="rounded-xl p-3 transition hover:bg-slate-100"
        >
          <Download className="h-5 w-5" />
        </button>

        <ConfirmDialog
          title="Delete File"
          description="Are you sure you want to delete this file?"
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={() => deleteMutation.mutate(file._id)}
        >
          <button className="rounded-xl p-3 text-red-500 transition hover:bg-red-50">
            <Trash2 className="h-5 w-5" />
          </button>
        </ConfirmDialog>
      </div>
    </div>
  );
};

export default FileCard;
