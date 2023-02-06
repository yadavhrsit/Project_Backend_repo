const express = require("express");
const productmodel = require("../models/product");

const productRouter = express.Router();
const add_product = require("../controllers/add_product");
productRouter.post("/new", add_product);

productRouter.get("/products", (req, res) => {
    productmodel.find({}, { _id: 0, __v: 0 }, {},
        function (error, result) {
            if (error) {
                res.send(error)
            } else {
                res.send(result);
            }
        })
})
productRouter.get("/:id", (req, res) => {
    const idq = req.params.id;
    productmodel.find({ _id: idq }, { __v: 0 }, {},
        function (error, result) {
            if (error) {
                res.send(error)
            } else {
                res.send(result);
            }
        })
})

productRouter.get("/cat/:category", (req, res) => {
    const idq = req.params.category;
    productmodel.find({ category: idq }, { __v: 0 }, {},
        function (error, result) {
            if (error) {
                res.send(error)
            } else {
                res.send(result);
            }
        })
})

module.exports = productRouter;
