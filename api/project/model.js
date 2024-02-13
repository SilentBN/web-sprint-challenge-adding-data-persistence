// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  let projects = await db("projects");
  projects = projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false,
    };
  });
  return projects;
}

async function create(project) {
  let [id] = await db("projects").insert(project);
  return {
    project_id: id,
    ...project,
    project_completed: project.project_completed ? true : false,
  };
}

module.exports = {
  getAll,
  create,
};
