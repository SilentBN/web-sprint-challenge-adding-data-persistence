// build your `Resource` model here
const db = require("../../data/dbConfig");

function getAll() {
  return db("resources");
}

async function create(resource) {
  let [id] = await db("resources").insert(resource);
  return {
    id,
    ...resource,
  };
}

module.exports = {
  getAll,
  create,
};
