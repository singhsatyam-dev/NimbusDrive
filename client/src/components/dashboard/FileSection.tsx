import EmptyState from "./EmptyState";
import FileTable from "./FileTable";

import type { FileData } from "@/services/file.service";

interface Props {
  files: FileData[];
}

const FileSection = ({ files }: Props) => {
  if (files.length === 0) {
    return <EmptyState />;
  }

  return <FileTable files={files} />;
};

export default FileSection;
