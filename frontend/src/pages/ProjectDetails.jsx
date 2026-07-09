import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";
import ErrorState from "../components/ErrorState";
import LoadingSkeleton from "../components/LoadingSkeleton";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import api from "../services/api";

function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showTaskForm, setShowTaskForm] = useState(false);

  useEffect(() => {
    fetchProject();
    fetchTasks();
  }, [id]);

  async function fetchProject() {
    try {
      setLoading(true);
      setError("");

      const res = await api.get(`/projects/${id}`);

      setProject(res.data);
    } catch (err) {
      console.log(err);
      setError("Unable to load project.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchTasks() {
    try {
      const res = await api.get(`/tasks/project/${id}`);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function createTask(task) {
  try {
    await api.post("/tasks", {
      ...task,
      projectId: id,
    });

    toast.success("Task created successfully");

    setShowTaskForm(false);

    fetchTasks();
  } catch (err) {
    console.log(err);

    toast.error("Failed to create task");
  }
}

  async function updateTask(taskId, updatedTask) {
  try {
    await api.put(`/tasks/${taskId}`, updatedTask);

    toast.success("Task updated successfully");

    fetchTasks();
  } catch (err) {
    console.log(err);

    toast.error("Failed to update task");
  }
}

  async function deleteTask(taskId) {
  try {
    await api.delete(`/tasks/${taskId}`);

    toast.success("Task deleted successfully");

    fetchTasks();
  } catch (err) {
    console.log(err);

    toast.error("Failed to delete task");
  }
}

  if (loading) {
    return <LoadingSkeleton type="tasks" />;
  }

  if (error) {
    return (
      <ErrorState
        title="Project Error"
        message={error}
        onRetry={fetchProject}
      />
    );
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          {project.title}
        </h1>

        <p className="mt-3 text-slate-400">
          {project.description}
        </p>

        <div className="flex gap-4 mt-6">

          <span className="bg-cyan-600 px-4 py-2 rounded-lg">
            {project.status}
          </span>

          <span className="text-slate-400 flex items-center">
            Deadline :
            <span className="ml-2 text-white">
              {new Date(project.deadline).toLocaleDateString()}
            </span>
          </span>

        </div>

      </div>

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Tasks
        </h2>

        <button
          onClick={() => setShowTaskForm(!showTaskForm)}
          className="w-14 h-14 rounded-full bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center shadow-lg transition"
        >
          <Plus size={28} />
        </button>

      </div>

      {showTaskForm && (
        <TaskForm
          onSubmit={createTask}
          onCancel={() => setShowTaskForm(false)}
        />
      )}

      {tasks.length === 0 ? (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">

          <h2 className="text-2xl font-bold">
            No Tasks Yet
          </h2>

          <p className="text-slate-400 mt-3">
            Create your first task for this project.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {tasks.map((task) => (

            <TaskCard
              key={task._id}
              task={task}
              onUpdate={updateTask}
              onDelete={deleteTask}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default ProjectDetails;