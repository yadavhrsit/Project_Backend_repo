const express= require("express");
const ShowById = require("../controller/ShowById");
const ShowByName = require("../controller/ShowByName");

const CollectionRoutes = express.Router();
const ShowCollection = require("../controller/Showcoll");

CollectionRoutes.get("/collections",ShowCollection);
CollectionRoutes.get("/collections/name/:name",ShowByName);
CollectionRoutes.get("/collections/id/:id",ShowById);


module.exports = CollectionRoutes;