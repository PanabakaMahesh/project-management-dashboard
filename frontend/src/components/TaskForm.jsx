import { useEffect, useState } from "react";

function TaskForm({
  onSubmit,
  initialData,
  onCancel,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setStatus(initialData.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Pending");
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      status,
    });

    if (!initialData) {
      setTitle("");
      setDescription("");
      setStatus("Pending");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl mb-8"
    >
      <h2 className="text-2xl font-bold mb-5">
        {initialData ? "✏️ Edit Task" : "➕ Create Task"}
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-green-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        rows="4"
        className="w-full p-3 rounded bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-green-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full p-3 rounded bg-slate-700 mb-5 outline-none focus:ring-2 focus:ring-green-500"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <div className="flex gap-3">

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded transition"
        >
          {initialData ? "Update Task" : "Create Task"}
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

export default TaskForm;