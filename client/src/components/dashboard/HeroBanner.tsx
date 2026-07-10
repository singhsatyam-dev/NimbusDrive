import { useAuthStore } from "@/store/authStore";

const HeroBanner = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[2rem]
      border
      border-blue-100/80
      px-10
      py-10
      shadow-xl
      shadow-blue-100/50
      "
      style={{
        background: `
    radial-gradient(circle at 15% 85%, rgba(255,181,167,.70), transparent 30%),
    radial-gradient(circle at 50% 55%, rgba(214,199,255,.55), transparent 40%),
    radial-gradient(circle at 92% 18%, rgba(96,165,250,.55), transparent 25%),
    radial-gradient(circle at 88% 88%, rgba(79,70,229,.55), transparent 28%),
    linear-gradient(
      135deg,
      #f5f1ff 0%,
      #ecebff 22%,
      #d9d8ff 46%,
      #b8cbff 74%,
      #6f8dff 100%
    )
  `,
      }}
    >
      {/* Large Blur */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-bg-blue-500/45 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl" />

      {/* Decorative Circles */}

      <div className="absolute right-10 top-10 h-5 w-5 rounded-full bg-white/80 shadow-lg" />

      <div className="absolute bottom-16 right-72 h-4 w-4 rounded-full bg-white/80 shadow-lg" />

      <div className="absolute right-5 top-24 h-2 w-2 rounded-full bg-white/70" />

      {/* Wave */}

      <svg
        className="absolute bottom-0 right-0 h-full w-[58%]"
        viewBox="0 0 700 350"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity=".12" />

            <stop offset="100%" stopColor="white" stopOpacity=".55" />
          </linearGradient>
        </defs>

        <path
          d="M700 250
             C610 205 520 190 450 220
             C380 250 320 330 230 255
             C170 205 80 165 0 185"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
        />
      </svg>

      {/* Dot Pattern */}

      <div className="absolute bottom-10 right-12 grid grid-cols-6 gap-2 opacity-50">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Soft White Glow */}

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

      {/* Content */}

      <div className="relative z-10 max-w-xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-primary">
            Welcome back, {user?.name}! 👋
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Your workspace is ready.
        </h1>

        <p className="mt-6 max-w-lg text-xl leading-9 text-slate-600">
          Store, organize, and securely share your files from one place.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
