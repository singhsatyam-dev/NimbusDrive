const LoadingSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3, 4, 5].map((row) => (
        <div
          key={row}
          className="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div className="mb-4 h-5 w-1/3 rounded bg-slate-200" />

          <div className="space-y-3">
            <div className="h-4 rounded bg-slate-200" />

            <div className="h-4 w-5/6 rounded bg-slate-200" />

            <div className="h-4 w-2/3 rounded bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
