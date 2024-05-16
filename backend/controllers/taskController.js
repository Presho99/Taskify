const Task = require("../models/taskModel");
const mongoose = require("mongoose");

// get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

// get a single task
const getTask = async (req, res) => {
  const { id } = req;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

// create a new task
const createTask = async (req, res) => {
  const {
    creator,
    title,
    description,
    priority,
    status,
    collaborators,
    dueDate,
  } = req.body;

  console.log(req.body)

  try {
    const task = await Task.create({
      creator,
      title,
      description,
      priority,
      status,
      collaborators,
      dueDate,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTasks, getTask, createTask };
