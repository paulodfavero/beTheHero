const express = require("express");
const { listOng, createOng } = require("./controller/OngController");

const {
  listIncidents,
  createIncidents
} = require("./controller/IncidentsController");

const routes = express.Router();

routes.get("/ongs", listOng);
routes.post("/ongs", createOng);

routes.get("/incidents", listIncidents);
routes.post("/incidents", createIncidents);

module.exports = routes;
