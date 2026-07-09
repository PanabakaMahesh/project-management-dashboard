import { useEffect, useState } from "react";

function ProjectForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setStatus(initialData.status);
      setDeadline(initialData.deadline?.substring(0, 10));
    } else {
      setTitle("");
      setDescription("");
      setStatus("Active");
      setDeadline("");
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      status,
      deadline,
    });

    if (!initialData) {
      setTitle("");
      setDescription("");
      setStatus("Active");
      setDeadline("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl mb-8 animate-fade-in"
    >
      <h2 className="text-2xl font-bold mb-5">
        {initialData ? "✏️ Edit Project" : "➕ Create Project"}
      </h2>

      <input
        type="text"
        placeholder="Project Title"
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-green-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        rows="4"
        placeholder="Description"
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-green-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-green-500"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Active</option>
        <option>Completed</option>
        <option>On Hold</option>
      </select>

      <input
        type="date"
        className="w-full p-3 rounded bg-slate-700 mb-5 outline-none focus:ring-2 focus:ring-green-500"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      <div className="flex gap-3">

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded transition"
        >
          {initialData ? "Update Project" : "Create Project"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-slate-600 hover:bg-slate-500 px-6 py-3 rounded transition"
        >
          Cancel
        </button>

      </div>
    </form>
  );
}

export default ProjectForm;