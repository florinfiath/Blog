const express = require('express');

// create router 

const router = express.Router();

const {
    addPost,
    getPosts,
    deletePost,
    updatePost} = require("../controllers/postController");
  
router.route("/").get(getPosts).post(addPost);
router.route("/:id").delete(deletePost).put(updatePost);


module.exports = router;

