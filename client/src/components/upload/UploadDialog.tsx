import { useRef, useState } from "react";

import { Upload, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useUpload } from "@/hooks/useUpload";

interface Props {
  children: React.ReactNode;
}

const UploadDialog = ({ children }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const [open, setOpen] = useState(false);

  const uploadMutation = useUpload();

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    await uploadMutation.mutateAsync(formData);

    setFile(null);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>

        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center transition hover:border-indigo-500"
        >
          <Upload className="mx-auto mb-4 h-10 w-10 text-indigo-600" />

          <p className="font-medium">Click to choose a file</p>

          <p className="mt-2 text-sm text-slate-500">
            or drag & drop (coming next)
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />

        {file && (
          <div className="flex items-center justify-between rounded-xl border p-3">
            <div>
              <p className="font-medium">{file.name}</p>

              <p className="text-sm text-slate-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>

            <Button variant="ghost" size="icon" onClick={() => setFile(null)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <Button
          disabled={!file || uploadMutation.isPending}
          onClick={handleUpload}
        >
          {uploadMutation.isPending ? "Uploading..." : "Upload"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
