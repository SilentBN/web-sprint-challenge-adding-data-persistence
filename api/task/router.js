// build your `/api/tasks` router here
const { Router } = require("express");
const router = Router();
const Tasks = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let tasks = await Tasks.getAll();
    res.status(200).json(tasks);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newTask = await Tasks.create(req.body);
    res.status(201).json(newTask);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
