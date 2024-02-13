// build your `/api/resources` router here
const { Router } = require("express");
const router = Router();
const Resources = require("./model");

router.get("/", async (req, res, next) => {
  try {
    let resources = await Resources.getAll();
    res.status(200).json(resources);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newResource = await Resources.create(req.body);
    res.status(201).json(newResource);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
