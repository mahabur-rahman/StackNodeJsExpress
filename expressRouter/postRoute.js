const router = require("express").Router();
// controllers
const {
  getAllPost,
  singlePost,
  createNewPost,
  updatePost,
  delePost,
} = require("./postController");

router.get("/", getAllPost);

// example.com/posts
router.post("/:postId", singlePost);

router.post("/", createNewPost);

router.put("/:postId", updatePost);

router.delete("/:postId", delePost);

module.exports = router;
