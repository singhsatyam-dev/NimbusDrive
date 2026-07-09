import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteFile } from "@/services/file.service";

export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFile,

    onSuccess: () => {
      toast.success("File deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to delete file.");
    },
  });
};
