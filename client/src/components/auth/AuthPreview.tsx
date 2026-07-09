import { Cloud, FileText, Image, Star, HardDrive } from "lucide-react";

const files = [
  {
    icon: FileText,
    name: "Resume.pdf",
    color: "text-red-500",
  },
  {
    icon: Image,
    name: "Vacation.png",
    color: "text-blue-500",
  },
  {
    icon: Star,
    name: "Portfolio.zip",
    color: "text-yellow-500",
  },
];

const AuthPreview = () => {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 p-12">
      <div className="w-full max-w-lg">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
            <Cloud className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">CloudVault</h1>

            <p className="text-indigo-100">Store. Share. Access.</p>
          </div>
        </div>

        <p className="mb-8 max-w-md text-lg leading-relaxed text-indigo-100">
          Secure cloud storage that lets you upload, organize and share files
          from anywhere.
        </p>

        <div className="rounded-3xl bg-white p-6 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Recent Files</h2>

            <HardDrive className="h-5 w-5 text-indigo-600" />
          </div>

          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <file.icon className={`h-5 w-5 ${file.color}`} />

                  <span className="text-sm font-medium">{file.name}</span>
                </div>

                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  Synced
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm">
              <span>Storage</span>

              <span>7.2 / 10 GB</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[72%] rounded-full bg-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPreview;
