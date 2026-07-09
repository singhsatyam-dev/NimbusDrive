import { HardDrive, FolderOpen, Share2 } from "lucide-react";

import StatCard from "@/components/common/StatCard";
import type { FileData } from "@/services/file.service";

interface Props {
  files: FileData[];
}

const formatStorage = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const StatsCards = ({ files }: Props) => {
  const totalFiles = files.length;

  const sharedFiles = files.filter((file) => file.isShared).length;

  const totalStorage = files.reduce((sum, file) => sum + file.fileSize, 0);

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
        title="Storage Used"
        value={formatStorage(totalStorage)}
        subtitle="Across all files"
        icon={HardDrive}
      />

      <StatCard
        title="Total Files"
        value={String(totalFiles)}
        subtitle="Files uploaded"
        icon={FolderOpen}
      />

      <StatCard
        title="Shared Files"
        value={String(sharedFiles)}
        subtitle="Currently shared"
        icon={Share2}
      />
    </section>
  );
};

export default StatsCards;
