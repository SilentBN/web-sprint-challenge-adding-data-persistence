// build your `/api/projects` router here
const { Router } = require("express");
const router = Router();
const Projects = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let projects = await Projects.getAll();
    res.status(200).json(projects);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newProject = await Projects.create(req.body);
    res.status(201).json(newProject);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
