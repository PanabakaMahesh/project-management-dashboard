import {
    ClipboardList,
    Pencil,
    Save,
    Trash2,
    X,
} from "lucide-react";
import { useState } from "react";

function TaskCard({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  function statusStyle(status) {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";

      case "In Progress":
        return "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20";

      case "Pending":
        return "bg-amber-500/15 text-amber-400 border border-amber-500/20";

      default:
        return "bg-slate-700 text-white";
    }
  }

  async function handleUpdate() {
    await onUpdate(task._id, {
      title,
      description,
      status,
    });

    setEditing(false);
  }

  async function handleDelete() {
    const confirmDelete = window.confirm(
      `Delete "${task.title}"?`
    );

    if (!confirmDelete) return;

    await onDelete(task._id);
  }

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl hover:border-cyan-500 transition-all duration-300">

      <div className="p-6">

        {editing ? (
          <>
            <input
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 mb-4 outline-none focus:border-cyan-500"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <textarea
              rows="4"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 mb-4 outline-none focus:border-cyan-500"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

            <select
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 mb-5 outline-none focus:border-cyan-500"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <div className="flex gap-3">

              <button
                onClick={handleUpdate}
                className="flex-1 h-11 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition flex items-center justify-center gap-2"
              >
                <Save size={17} />

                Save
              </button>

              <button
                onClick={() =>
                  setEditing(false)
                }
                className="flex-1 h-11 rounded-xl border border-slate-700 hover:border-slate-500 transition flex items-center justify-center gap-2"
              >
                <X size={17} />

                Cancel
              </button>

            </div>
          </>
        ) : (
          <>
            {/* Header */}

            <div className="flex justify-between items-start">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">

                  <ClipboardList
                    size={20}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h2 className="text-xl font-semibold">
                    {task.title}
                  </h2>

                  <p className="text-sm text-slate-500">
                    Task
                  </p>

                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                  task.status
                )}`}
              >
                {task.status}
              </span>

            </div>

            {/* Description */}

            <p className="mt-6 text-slate-400 leading-7 min-h-[72px]">
              {task.description}
            </p>

            {/* Footer */}

            <div className="mt-6 pt-5 border-t border-slate-800 flex gap-3">

              <button
                onClick={() =>
                  setEditing(true)
                }
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
          </>
        )}

      </div>

    </div>
  );
}

export default TaskCard;