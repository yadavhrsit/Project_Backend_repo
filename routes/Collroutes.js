const express= require("express");

const CollectionRoutes = express.Router();
const ShowCollection = require("../controller/Showcoll");

CollectionRoutes.get("/collections",ShowCollection);

module.exports = CollectionRoutes;