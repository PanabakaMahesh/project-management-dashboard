import {
    CalendarDays,
    FolderKanban,
    Pencil,
    Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({
  project,
  onEdit,
  onDelete,
}) {
  function statusStyle(status) {
    switch (status) {
      case "Active":
        return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";

      case "Completed":
        return "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20";

      case "On Hold":
        return "bg-amber-500/15 text-amber-400 border border-amber-500/20";

      default:
        return "bg-slate-700 text-white";
    }
  }

  function handleDelete(e) {
    e.preventDefault();

    const confirmDelete = window.confirm(
      `Delete "${project.title}"?`
    );

    if (!confirmDelete) return;

    onDelete(project._id);
  }

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/10">

      <Link
        to={`/projects/${project._id}`}
        className="block p-6"
      >

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">

              <FolderKanban
                size={20}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Project
              </p>

            </div>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
              project.status
            )}`}
          >
            {project.status}
          </span>

        </div>

        {/* Description */}

        <p className="text-slate-400 mt-6 leading-7 min-h-[72px]">
          {project.description}
        </p>

        {/* Deadline */}

        <div className="mt-6 flex items-center gap-2 text-slate-400">

          <CalendarDays size={16} />

          <span className="text-sm">
            Deadline •{" "}
            {new Date(
              project.deadline
            ).toLocaleDateString()}
          </span>

        </div>

      </Link>

      {/* Footer */}

      <div className="border-t border-slate-800 p-4 flex gap-3">

        <button
          onClick={() => onEdit(project)}
          className="flex-1 h-11 rounded-xl border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition flex items-center justify-center gap-2"
        >
          <Pencil size={17} />

          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 h-11 rounded-xl border border-red-900 text-red-400 hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2"
        >
          <Trash2 size={17} />

          Delete
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;