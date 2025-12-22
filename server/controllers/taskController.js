
const Task = require("../models/Task");

// Get User Tasks
const getTasks = async(req,res) => {
 try {
        const tasks = await Task.find({ user: req.user });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

// Create User Tasks
const createTasks = async(req,res) => {
  try {
    const task = await Task.create({
        title: req.body.title,
        status: req.body.status || "Pending",
        user: req.user,
    });
    res.status(201).json(task);
} catch (error) {
        res.status(500).json({ message: "Server error" });
  }
}

// Update User Tasks
const updateTasks = async(req,res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.status = req.body.status || task.status;
    await task.save();

    res.json(task);
} catch (error) {
        res.status(500).json({ message: "Server error" });
  }
}

// Delete User Tasks
const deleteTasks = async(req,res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user) {
        return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();
    res.json({ message: "Task removed" });

} catch (error) {
        res.status(500).json({ message: "Server error" });
  }
}

module.exports = {getTasks, createTasks, updateTasks, deleteTasks}