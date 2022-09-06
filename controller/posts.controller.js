const getPosts = (req,res) =>{
  res.status(200).send(`Get all posts filtered by ${req.query.title}`)
};

const getPost = (req,res) =>{
  res.status(200).send(`Your post has an id of ${req.params.postId}`)
};

const createPosts = (req,res) =>{
  res.status(200).send("Your post has been created")
};

const updatePosts = (req,res) =>{
  res.status(200).send(`Your post with ID ${req.params.postId} has been updated`)
};

const deletePosts = (req,res) =>{
  res.status(200).send(`Your post having ${req.params.postId} has been deleted`)
};

module.exports = {getPosts, getPost, updatePosts, createPosts, deletePosts};