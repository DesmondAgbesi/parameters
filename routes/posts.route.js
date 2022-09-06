const router = require("express");

const  {
  getPosts,
  getPost,
  updatePosts,
  createPosts,
  deletePosts,
} = require("../controller/posts.controller");

const postRouter = router();

postRouter.route("/").post(createPosts).get(getPosts);
postRouter.route("/:postId").get(getPost).patch(updatePosts).delete(deletePosts);

module.exports = postRouter;
