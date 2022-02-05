const express = require("express");
const morgan = require("morgan");
const app = express();
// router
const contactRoutes = require("./contactRoutes");
const port = process.env.port || 3000;

// morgan
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/contacts", contactRoutes);

// 404
app.get("*", (req, res) => {
  res.send("<h1>Please visit correct URL</h1>");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
