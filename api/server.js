// build your server here and require it from index.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const resourceRouter = require("./resource/router");
const projectRouter = require("./project/router");
const taskRouter = require("./task/router");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/resources", resourceRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: err.customMessage,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
