import { FolderOpen, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import UploadDialog from "@/components/upload/UploadDialog";

const EmptyState = () => {
  return (
    <section className="rounded-3xl border-2 border-dashed border-border bg-card py-24">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="rounded-full border border-primary/10 bg-primary/10 p-6">
          <FolderOpen className="h-10 w-10 text-primary" />
        </div>

        <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground">
          Your workspace is empty
        </h2>

        <p className="mt-4 text-muted-foreground leading-7">
          Upload your first file to start your Nimbus Journey.
        </p>

        <UploadDialog>
          <Button className="mt-8 h-11 rounded-xl px-6 shadow-sm transition-all hover:shadow-md">
            <Upload className="mr-2 h-4 w-4" />
            Upload First File
          </Button>
        </UploadDialog>
      </div>
    </section>
  );
};

export default EmptyState;
