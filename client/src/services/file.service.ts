import api from "./api";

export interface FileData {
  _id: string;
  owner: string;
  originalName: string;
  fileName: string;
  mimeType: string;
  fileSize: number;
  s3Key: string;
  isShared: boolean;
  shareToken: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FilesResponse {
  success: boolean;
  count: number;
  files: FileData[];
}

export const getMyFiles = async (): Promise<FilesResponse> => {
  const response = await api.get("/files");
  return response.data;
};

export const uploadFile = async (formData: FormData) => {
  const response = await api.post("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteFile = async (id: string) => {
  const response = await api.delete(`/files/${id}`);
  return response.data;
};

export const shareFile = async (id: string) => {
  const response = await api.patch(`/files/${id}/share`);
  return response.data;
};

export const unshareFile = async (id: string) => {
  const response = await api.patch(`/files/${id}/unshare`);
  return response.data;
};

export const downloadFile = async (id: string) => {
  const response = await api.get(`/files/${id}/download`);

  return response.data;
};
