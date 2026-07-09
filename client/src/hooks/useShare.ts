import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { shareFile, unshareFile } from "@/services/file.service";

export const useShare = () => {
  const queryClient = useQueryClient();

  const shareMutation = useMutation({
    mutationFn: shareFile,

    onSuccess: async (data) => {
      await navigator.clipboard.writeText(data.shareUrl);

      toast.success("Share link copied to clipboard.");

      await queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to share file.");
    },
  });

  const unshareMutation = useMutation({
    mutationFn: unshareFile,

    onSuccess: async () => {
      toast.success("Sharing disabled.");

      await queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to unshare file.");
    },
  });

  return {
    share: shareMutation.mutate,
    unshare: unshareMutation.mutate,
  };
};
