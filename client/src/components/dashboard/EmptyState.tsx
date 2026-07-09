import { FolderOpen, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

const EmptyState = () => {
  return (
    <section className="rounded-3xl border-2 border-dashed border-slate-300 bg-white py-20">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="rounded-full bg-indigo-100 p-5">
          <FolderOpen className="h-10 w-10 text-indigo-600" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">No files yet</h2>

        <p className="mt-3 text-slate-500">
          Upload your first document to start managing your cloud storage.
        </p>

        <Button className="mt-8">
          <Upload className="mr-2 h-4 w-4" />
          Upload First File
        </Button>
      </div>
    </section>
  );
};

export default EmptyState;
