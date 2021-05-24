
const express = require('express');

// create router 

const router = express.Router();
const {
    addPost,
    getPost,
    deletePost,
    updatePost} = require("..controller/postController");
router.route("/").get(getPost).post(addPost).delete(deletePost);
router.route("/update").post(updatePost);


module.exports = router;

