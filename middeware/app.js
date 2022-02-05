const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

// middleware
// app.use(morgan("dev"));

// custom middleware

const customTinyLogger = () => {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
};

const customMiddleWare = (req, res, next) => {
  //   console.log("I am middleware", req.url);
  if (req.url === "/contact") {
    res.send("<h2>Sorry, this page is blocked by admin</h2>");
  }

  next();
};

const customAllMiddleWare = [customMiddleWare, customTinyLogger()];

// app.use(customMiddleWare);
app.use(customAllMiddleWare);

app.get("/about", morgan("dev"), (req, res) => {
  res.json({
    name: "Mahabur Rahman",
    age: 27,
    city: "Dhaka",
  });
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact page</h1>");
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home page</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404, Not found page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
