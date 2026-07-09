require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");

const Project = require("../models/Project");
const Task = require("../models/Task");

const data = require("../data/mockData.json");

const importData = async () => {
    try {
        await connectDB();

        console.log("Connected to MongoDB");

        await Project.deleteMany();
        await Task.deleteMany();

        console.log("Old data deleted");

        const projectMap = {};

        for (const project of data.projects) {

            const newProject = await Project.create({
                title: project.title,
                description: project.description,
                status: project.status,
                deadline: project.deadline
            });

            projectMap[project.id] = newProject._id;
        }

        console.log("Projects Imported");

        for (const task of data.tasks) {

            await Task.create({
                projectId: projectMap[task.projectId],
                title: task.title,
                description: task.description,
                status: task.status
            });

        }

        console.log("Tasks Imported");

        console.log("Database Seeded Successfully");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit(1);

    }
};

importData();