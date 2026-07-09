function LoadingSkeleton({ type = "cards" }) {
  if (type === "dashboard") {
    return (
      <div className="space-y-8 animate-pulse">
        <div>
          <div className="h-10 w-64 bg-slate-800 rounded mb-3"></div>
          <div className="h-5 w-80 bg-slate-800 rounded"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-slate-800 rounded-2xl h-40"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "projects") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-slate-800 rounded-2xl h-64"
          />
        ))}
      </div>
    );
  }

  if (type === "tasks") {
    return (
      <div className="space-y-5 animate-pulse">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-slate-800 rounded-2xl h-36"
          />
        ))}
      </div>
    );
  }

  return null;
}

export default LoadingSkeleton;