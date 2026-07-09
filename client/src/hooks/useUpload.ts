import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { uploadFile } from "@/services/file.service";

export const useUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadFile,

    onSuccess: () => {
      toast.success("File uploaded successfully!");

      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Upload failed");
    },
  });
};
