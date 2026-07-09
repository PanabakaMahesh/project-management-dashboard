const express = require("express");

const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

// GET all projects
// POST new project
router.route("/")
  .get(getProjects)
  .post(createProject);

// GET single project
// PUT update project
// DELETE project
router.route("/:id")
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;