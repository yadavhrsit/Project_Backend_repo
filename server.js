require('dotenv').config();
const express = require("express");
const mongo = require("mongoose");
const app = express();
app.use(express.json());
const port = process.env.port || 5000;

mongo.connect(process.env.MONGO_URL).then(() => console.log("Connected to database successfully"));

const CollectionRoutes = require("./routes/Collroutes");

app.use('/zoyani', CollectionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});