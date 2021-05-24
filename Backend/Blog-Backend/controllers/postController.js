const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);
const isEmpty = require("lodash.isempty");

exports.getPost = (req, res, next) => {
  
  try {
    const posts = db.get("posts").value();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    //forward the error to the error handler
    next(error);
  }
};

exports.addPost = (req, res, next) => {
  try {
    //check if req.body(post name, title ....)is empty?, then respond with and error
    if (isEmpty(req.body)) {
      //respond with an error message
      const error = new Error("INVALID REQUEST MESSAGE");
      error.status = 400;
      error.stack = null;
      next(error);
    } else {
      const post = req.body;
      // add the blog to data base
      db.get("posts")
        .push(post)
        // access the last element of the array
        .last()
        // assign id to the object
        .assign({ id: Date.now().toString() })
        .write();
        //  send back the blog with new input
      res.status(201).send(record);
    }
  } catch (error) {
    console.log(error);
    //forward the error to the error handler
    next(error);
  }
};
exports.updatePosts = (req, res, next) => {
  try {
    const postId = req.body.id;
    const post = db.get("posts").find({ id: postId }).value();
    db.get("posts")
      .find({ id: postId })
      .assign({
        title: req.body.title,
        content: req.body.content,
      })
      .write();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.deletePost = (req, res) => {
  try {
    const inputId = req.body.id;
    //delete a post
    db.get("posts").remove({ id: inputId }).write();
    res.status(200).send("SUCCESS");
  } catch (error) {
    console.log(error);
    next(error);
  }
};





