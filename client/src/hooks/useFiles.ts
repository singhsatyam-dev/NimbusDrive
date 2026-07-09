import { useQuery } from "@tanstack/react-query";

import { getMyFiles } from "@/services/file.service";

export const useFiles = () => {
  return useQuery({
    queryKey: ["files"],
    queryFn: getMyFiles,
  });
};
