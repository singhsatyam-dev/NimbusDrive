import { toast } from "sonner";

import { downloadFile } from "@/services/file.service";

export const useDownload = () => {
  const handleDownload = async (id: string) => {
    try {
      const response = await downloadFile(id);

      window.open(response.downloadUrl, "_blank");

      toast.success("Download started.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Download failed.");
    }
  };

  return handleDownload;
};
