const ProductModel =require("../model/CollectionSchema");

function ShowByName(req, res) {
    let name = req.params.name;
    ProductModel.find({CollectionName:name}, { __v: 0 }, function (err, result) {
        if (err) {
            console.log("No data found");
        } else {
            if (result.length <= 0) {
                res.status(404).send("No Products found in the database");
            } else {
                res.send(result);
            }
        }
    });
}

module.exports = ShowByName;