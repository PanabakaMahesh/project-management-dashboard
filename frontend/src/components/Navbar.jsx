import { Bell, Search } from "lucide-react";

function Navbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-[#0B1120] border-b border-slate-800 flex items-center justify-between px-8">

      {/* Left */}

      <div>

        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Project Dashboard
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Manage projects, teams and tasks
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <div className="hidden lg:flex items-center bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 w-72">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 text-sm w-full placeholder:text-slate-500"
          />

        </div>

        <button
          className="relative w-11 h-11 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 transition flex items-center justify-center"
        >
          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400"></span>
        </button>

        <div className="text-right hidden md:block">

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Today
          </p>

          <p className="text-sm font-medium text-white">
            {today}
          </p>

        </div>

      </div>

    </header>
  );
}

export default Navbar;