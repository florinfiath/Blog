
const express = require('express');

// create router 

const router = express.Router();
const {
    addPost,
    getPost,
    deletePost,
    updatePosts} = require("../controllers/postController");
router.route("/").get(getPost).post(addPost).delete(deletePost);
router.route("/update").post(updatePosts);


module.exports = router;

