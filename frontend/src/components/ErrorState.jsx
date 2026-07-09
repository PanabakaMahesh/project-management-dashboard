import { AlertTriangle } from "lucide-react";

function ErrorState({
  title = "Something went wrong",
  message = "Please try again.",
  onRetry,
}) {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-10 max-w-lg text-center shadow-xl">

        <AlertTriangle
          size={60}
          className="mx-auto text-red-500 mb-5"
        />

        <h2 className="text-3xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-slate-400 mb-8">
          {message}
        </p>

        <button
          onClick={onRetry}
          className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-lg font-medium"
        >
          Retry
        </button>

      </div>
    </div>
  );
}

export default ErrorState;