const express = require("express");
const app = express();
// router
const { router } = require("./userRoute");
const postRouter = require("./postRoute");
const port = process.env.PORT || 3000;

// middleware
app.use("/user", router);
app.use("/posts", postRouter);

// app.get("/products/:prodId/review/:viewId", (req, res) => {
//    console.log(req.params);
//   const { prodId, viewId } = req.params;
//      console.log(req.params.prodId);
//   res.send(
//     `<h1>Unique Product id : ${prodId} and Review id is : ${viewId}</h1>`
//   );
// });

// home
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

// 404 page
app.get("*", (req, res) => {
  res.send("<h1>404, Not found page !</h1>");
});

// listen app
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
