import { useMemo, useState } from "react";

import FileToolbar from "./FileToolbar";
import FileSection from "./FileSection";

import { useFiles } from "@/hooks/useFiles";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";

interface Props {
  sharedOnly?: boolean;
}

const FileBrowser = ({ sharedOnly = false }: Props) => {
  const { data, isLoading, isError } = useFiles();

  const files = data?.files ?? [];

  const [searchTerm, setSearchTerm] = useState("");
  const [fileType, setFileType] = useState("all");
  const [sharing, setSharing] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredFiles = useMemo(() => {
    let filtered = [...files];

    if (sharedOnly) {
      filtered = filtered.filter((file) => file.isShared);
    }

    filtered = filtered.filter((file) =>
      file.originalName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (fileType !== "all") {
      filtered = filtered.filter((file) => {
        if (fileType === "pdf") return file.mimeType.includes("pdf");
        if (fileType === "image") return file.mimeType.includes("image");

        if (fileType === "document") {
          return (
            file.mimeType.includes("word") || file.mimeType.includes("document")
          );
        }

        return true;
      });
    }

    if (sharing === "shared") {
      filtered = filtered.filter((file) => file.isShared);
    }

    if (sharing === "private") {
      filtered = filtered.filter((file) => !file.isShared);
    }

    switch (sortBy) {
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
        break;

      case "largest":
        filtered.sort((a, b) => b.fileSize - a.fileSize);
        break;

      case "smallest":
        filtered.sort((a, b) => a.fileSize - b.fileSize);
        break;

      case "name":
        filtered.sort((a, b) => a.originalName.localeCompare(b.originalName));
        break;

      default:
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
    }

    return filtered;
  }, [files, searchTerm, fileType, sharing, sortBy, sharedOnly]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-3xl bg-red-50 p-10 text-center text-red-600">
        Failed to load files.
      </div>
    );
  }

  return (
    <>
      <FileToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        fileType={fileType}
        setFileType={setFileType}
        sharing={sharing}
        setSharing={setSharing}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="mt-8">
        <FileSection files={filteredFiles} />
      </div>
    </>
  );
};

export default FileBrowser;
