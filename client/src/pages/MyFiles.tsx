import FileBrowser from "@/components/dashboard/FileBrowser";

const MyFiles = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">My Files</h1>

        <p className="mt-2 text-slate-500">
          Browse and manage all your uploaded files.
        </p>
      </div>

      <FileBrowser />
    </div>
  );
};

export default MyFiles;
