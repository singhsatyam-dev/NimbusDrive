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

import type { FileData } from "@/services/file.service";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import { useDelete } from "@/hooks/useDelete";
import { useDownload } from "@/hooks/useDownload";
import { useShare } from "@/hooks/useShare";

interface Props {
  files: FileData[];
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

  return "text-indigo-600";
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

const FileTable = ({ files }: Props) => {
  const deleteMutation = useDelete();
  const handleDownload = useDownload();
  const { share, unshare } = useShare();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="border-b bg-slate-50">
          <tr className="text-left text-sm font-medium text-slate-500">
            <th className="px-6 py-4">Name</th>
            <th className="px-4">Type</th>
            <th className="px-4">Size</th>
            <th className="px-4">Uploaded</th>
            <th className="px-4">Shared</th>
            <th className="px-6 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file) => {
            const Icon = getIcon(file.mimeType);

            return (
              <tr
                key={file._id}
                className="border-b last:border-none hover:bg-slate-50"
              >
                {/* File Name */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`h-5 w-5 ${getIconColor(file.mimeType)}`}
                    />

                    <span
                      title={file.originalName}
                      className="max-w-[260px] truncate font-medium"
                    >
                      {file.originalName}
                    </span>
                  </div>
                </td>

                {/* Type */}
                <td className="px-4 text-slate-600">
                  {file.mimeType.split("/")[1].toUpperCase()}
                </td>

                {/* Size */}
                <td className="px-4">{formatSize(file.fileSize)}</td>

                {/* Uploaded */}
                <td className="px-4 text-slate-600 whitespace-nowrap">
                  {formatDate(file.createdAt)}
                </td>

                {/* Shared */}
                <td className="px-4">
                  {file.isShared ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Shared
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Private
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg p-2 transition hover:bg-slate-100">
                      <Star className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        file.isShared ? unshare(file._id) : share(file._id)
                      }
                      className={`rounded-lg p-2 transition ${
                        file.isShared
                          ? "text-green-600 hover:bg-green-50"
                          : "hover:bg-slate-100"
                      }`}
                    >
                      <Share2 className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleDownload(file._id)}
                      className="rounded-lg p-2 transition hover:bg-slate-100"
                    >
                      <Download className="h-4 w-4" />
                    </button>

                    <ConfirmDialog
                      title="Delete File"
                      description="Are you sure you want to delete this file? This action cannot be undone."
                      confirmText="Delete"
                      cancelText="Cancel"
                      onConfirm={() => deleteMutation.mutate(file._id)}
                    >
                      <button className="rounded-lg p-2 text-red-500 transition hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </ConfirmDialog>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
