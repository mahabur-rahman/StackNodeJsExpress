exports.getAllPost = (req, res) => {
  //   console.log(req.query);
  res.send("<h2>Render All Posts</h2>");
};

exports.singlePost = (req, res) => {
  res.send(`<h1>I am post</h1> & id : ${req.params.postId}`);
};

exports.createNewPost = (req, res) => {
  res.send("<h2>Create a new post</h2>");
};

exports.updatePost = (req, res) => {
  res.send(`<h2>Update your existing post</h2> & id : ${req.params.postId}`);
};

exports.delePost = (req, res) => {
  res.send(`<h2>Delete your existing post</h2> and id : ${req.params.postId}`);
};
