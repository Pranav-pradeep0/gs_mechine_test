const express = require("express")
const { alltasks, newTasks, updateTask, deleteTask } = require("../controllers/logic")

const router = new express.Router()

router.get("/api/tasks",alltasks)

router.post("/api/tasks",newTasks)

router.put("/api/tasks/:id",updateTask)

router.delete("/api/task/:id",deleteTask)

module.exports = router