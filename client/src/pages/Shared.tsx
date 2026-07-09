import FileBrowser from "@/components/dashboard/FileBrowser";

const Shared = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Shared Files</h1>

        <p className="mt-2 text-slate-500">Files you've shared with others.</p>
      </div>

      <FileBrowser sharedOnly />
    </div>
  );
};

export default Shared;
