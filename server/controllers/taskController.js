const express = require("express");
const Task = require("../models/Task");

// Get User Tasks
const getTasks = async(req,res) => {
    const tasks = await Task.find({
        user: req.user,
    });
    res.json(tasks);

}

// Create User Tasks
const createTasks = async(req,res) => {
    const task = await Task.create({
        title: req.user.title,
        user: req.user,
    });
    res.status(201).json(task);
}

// Update User Tasks
const updateTasks = async(req,res) => {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.status = req.body.status || task.status;
    await task.save();

    res.json(task);
}

// Delete User Tasks
const deleteTasks = async(req,res) => {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user) {
        return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();
    res.json({ message: "Task removed" });

}

module.exports = {getTasks, createTasks, updateTasks, deleteTasks}