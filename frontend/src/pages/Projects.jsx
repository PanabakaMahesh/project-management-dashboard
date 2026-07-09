import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import toast from "react-hot-toast";
import ErrorState from "../components/ErrorState";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import api from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/projects");

      setProjects(res.data);
    } catch (err) {
      console.log(err);
      setError("Unable to load projects.");
    } finally {
      setLoading(false);
    }
  }

  async function createProject(project) {
  try {
    await api.post("/projects", project);

    toast.success("Project created successfully");

    setShowForm(false);
    fetchProjects();
  } catch (err) {
    console.log(err);
    toast.error("Failed to create project");
  }
}

  async function updateProject(project) {
  try {
    await api.put(
      `/projects/${editingProject._id}`,
      project
    );

    toast.success("Project updated successfully");

    setEditingProject(null);
    setShowForm(false);

    fetchProjects();
  } catch (err) {
    console.log(err);
    toast.error("Failed to update project");
  }
}

  async function deleteProject(id) {
  try {
    await api.delete(`/projects/${id}`);

    toast.success("Project deleted successfully");

    fetchProjects();
  } catch (err) {
    console.log(err);
    toast.error("Failed to delete project");
  }
}

  function handleEdit(project) {
    setEditingProject(project);
    setShowForm(true);
  }

  function handleCancel() {
    setEditingProject(null);
    setShowForm(false);
  }

  const filteredProjects = useMemo(() => {
    let data = [...projects];

    data = data.filter((project) =>
      project.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (filter !== "All") {
      data = data.filter(
        (project) => project.status === filter
      );
    }

    switch (sort) {
      case "Newest":
        data.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );
        break;

      case "Oldest":
        data.sort(
          (a, b) =>
            new Date(a.createdAt) -
            new Date(b.createdAt)
        );
        break;

      case "Deadline":
        data.sort(
          (a, b) =>
            new Date(a.deadline) -
            new Date(b.deadline)
        );
        break;

      case "Alphabetical":
        data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      default:
        break;
    }

    return data;
  }, [projects, search, filter, sort]);

  if (loading) {
    return <LoadingSkeleton type="projects" />;
  }

  if (error) {
    return (
      <ErrorState
        title="Projects Error"
        message={error}
        onRetry={fetchProjects}
      />
    );
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Projects
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all your projects from one place.
          </p>

        </div>

        <button
          onClick={() => {
            setEditingProject(null);
            setShowForm(!showForm);
          }}
          className="w-14 h-14 rounded-full bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center shadow-lg transition"
        >
          <Plus size={28} />
        </button>

      </div>

      {showForm && (
        <ProjectForm
          onSubmit={
            editingProject
              ? updateProject
              : createProject
          }
          initialData={editingProject}
          onCancel={handleCancel}
        />
      )}

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <input
          placeholder="Search Project..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="bg-slate-800 border border-slate-700 rounded-xl p-3"
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="bg-slate-800 border border-slate-700 rounded-xl p-3"
        >
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
          <option>On Hold</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="bg-slate-800 border border-slate-700 rounded-xl p-3"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Deadline</option>
          <option>Alphabetical</option>
        </select>

      </div>

      <p className="text-slate-400 mb-6">
        Showing {filteredProjects.length} Project
        {filteredProjects.length !== 1 && "s"}
      </p>

      {filteredProjects.length === 0 ? (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">

          <h2 className="text-2xl font-bold">
            No Projects Found
          </h2>

          <p className="text-slate-400 mt-3">
            Try another search or create a new project.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (

            <ProjectCard
              key={project._id}
              project={project}
              onEdit={handleEdit}
              onDelete={deleteProject}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Projects;