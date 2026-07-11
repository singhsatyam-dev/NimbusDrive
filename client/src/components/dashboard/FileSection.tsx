import EmptyState from "./EmptyState";
import FileTable from "./FileTable";
import FileCard from "./MobileCard";

import type { FileData } from "@/services/file.service";

interface Props {
  files: FileData[];
}

const FileSection = ({ files }: Props) => {
  if (files.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <FileTable files={files} />
      </div>

      {/* Mobile */}
      <div className="space-y-5 md:hidden">
        {files.map((file) => (
          <FileCard key={file._id} file={file} />
        ))}
      </div>
    </>
  );
};

export default FileSection;
