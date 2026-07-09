import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FolderKanban,
} from "lucide-react";
import { useEffect, useState } from "react";

import ErrorState from "../components/ErrorState";
import LoadingSkeleton from "../components/LoadingSkeleton";
import StatsCard from "../components/StatsCard";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/dashboard");

      setStats(res.data);
    } catch (err) {
      console.log(err);
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingSkeleton type="dashboard" />;
  }

  if (error) {
    return (
      <ErrorState
        title="Dashboard Error"
        message={error}
        onRetry={fetchDashboard}
      />
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Overview of projects and tasks.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Projects"
          value={stats.totalProjects}
          icon={<FolderKanban size={28} />}
        />

        <StatsCard
          title="Active Projects"
          value={stats.activeProjects}
          icon={<BriefcaseBusiness size={28} />}
        />

        <StatsCard
          title="Completed Tasks"
          value={stats.completedTasks}
          icon={<CheckCircle2 size={28} />}
        />

        <StatsCard
          title="Pending Tasks"
          value={stats.pendingTasks}
          icon={<Clock3 size={28} />}
        />
      </div>
    </div>
  );
}

export default Dashboard;