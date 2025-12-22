const express = require("express");
const {getTasks, createTasks, updateTasks, deleteTasks} = require("../controllers/taskController")

const  router = express.Router();

router.get("/", authenticate, getTasks);
router.post("/", authenticate, createTasks);
router.put("/:id", authenticate, updateTasks);
router.delete("/:id", authenticate, deleteTasks);


module.exports = router;