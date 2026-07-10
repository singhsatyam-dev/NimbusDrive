import { Cloud, Database, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "AWS S3 Cloud Storage",
  },
  {
    icon: ShieldCheck,
    title: "Secure File Sharing",
  },
  {
    icon: Zap,
    title: "Fast File Uploads",
  },
];

const AuthPreview = () => {
  return (
    <div
      className="relative hidden flex-1 overflow-hidden lg:flex"
      style={{
        background: `
          radial-gradient(circle at 90% 15%, rgba(96,165,250,.22), transparent 22%),
          radial-gradient(circle at 80% 82%, rgba(59,130,246,.35), transparent 30%),
          radial-gradient(circle at 0% 100%, rgba(29,78,216,.35), transparent 28%),
          linear-gradient(
            135deg,
            #0B3EA8 0%,
            #1652C8 28%,
            #2563EB 58%,
            #3B82F6 100%
          )
        `,
      }}
    >
      {/* Soft Glow */}
      <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-sky-300/10 blur-[120px]" />

      {/* Decorative Dots */}
      <div className="absolute right-20 top-20 grid grid-cols-4 gap-3 opacity-25">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-white/30" />
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-col justify-center px-14 py-12">
        {/* Logo */}

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md shadow-lg">
            <Cloud className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              NimbusDrive
            </h1>

            <p className="text-sm text-blue-100">Store. Organize. Share.</p>
          </div>
        </div>

        {/* Hero */}

        <div className="mt-14">
          <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-white xl:text-6xl">
            Your files.
            <br />
            Organized.
            <br />
            Accessible
            <br />
            everywhere.
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-8 text-blue-100">
            NimbusDrive gives you a secure workspace to upload, organize and
            share your files from anywhere.
          </p>
        </div>

        {/* Features */}

        <div className="mt-10 space-y-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                <Icon className="h-5 w-5 text-blue-200" />

                <span className="font-medium text-white">{feature.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AuthPreview;
