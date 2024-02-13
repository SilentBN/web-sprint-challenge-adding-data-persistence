// build your `Task` model here
const db = require("../../data/dbConfig");

async function getAll() {
  let tasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  tasks = tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false,
    };
  });
  return tasks;
}

async function create(task) {
  let [id] = await db("tasks").insert(task);
  let newTask = await db("tasks").where("task_id", id).first();
  return {
    ...newTask,
    task_completed: newTask.task_completed ? true : false,
  };
}

module.exports = {
  getAll,
  create,
};
