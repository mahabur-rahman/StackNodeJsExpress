const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.port || 3000;

// template engine
app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/help", (req, res) => {
  res.render("pages/help");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/", (req, res) => {
  //   res.send("<h1>Working with template engine and use</h1>");
  const post = {
    title: "Post title",
    body: "Post body",
    published: true,
  };

  const posts = [
    { id: 1, title: "Title 1", author: "Mahabur" },
    { id: 2, title: "Title 2", author: "Rahman" },
    { id: 3, title: "Title 3", author: "Annur" },
  ];

  res.render("pages/index", {
    title: "We are working with EJS Template Engine",
    title2: "Os3r",
    post,
    posts,
  });
});

// 404 page
app.get("*", (req, res) => {
  res.send("<h1>404, Not found page !</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
