const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// schema
const Schema = mongoose.Schema;
const testSchema = new Schema({
  name: String,
});

// model
const Test = mongoose.model("TestModel", testSchema);

app.get("/", (req, res) => {
  const test = new Test({
    name: "Annur",
  });

  test
    .save()
    .then((t) => {
      res.json(t);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({
        Error: "Error Occurred",
      });
    });
});

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log("Connection Error : " + e);
  });
