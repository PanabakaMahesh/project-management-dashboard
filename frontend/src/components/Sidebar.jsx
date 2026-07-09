import {
    FolderKanban,
    LayoutDashboard,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
    ${
      isActive
        ? "bg-cyan-600 text-white shadow-lg"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-[#0B1120] border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="px-7 py-8 border-b border-slate-800">

        <h1 className="text-2xl font-bold tracking-tight text-white">
          Project<span className="text-cyan-400">Hub</span>
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Project Management System
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6 space-y-2">

        <NavLink
          to="/"
          className={navClass}
        >
          <LayoutDashboard size={20} />

          Dashboard
        </NavLink>

        <NavLink
          to="/projects"
          className={navClass}
        >
          <FolderKanban size={20} />

          Projects
        </NavLink>

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Version
          </p>

          <h3 className="mt-1 text-white font-semibold">
            ProjectHub v1.0
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Internal Project Management
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;