const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboardSummary = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();

    const activeProjects = await Project.countDocuments({
      status: "Active",
    });

    const completedTasks = await Task.countDocuments({
      status: "Completed",
    });

    const pendingTasks = await Task.countDocuments({
      status: { $ne: "Completed" },
    });

    res.json({
      totalProjects,
      activeProjects,
      completedTasks,
      pendingTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardSummary,
};