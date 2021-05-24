/** EXTERNAL DEPENDENCIES */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//DEPENDENCIES FROM LOWDB

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/** ROUTERS */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const postsRouter = require("./routes/posts");

// set CORS security for the client website 
const { setCors } = require("./middleware/security");


/** INIT */
const app = express();

/** LOGGING */
app.use(logger("dev"));

// SETTING UP LOWDB database
const adapter = new FileSync("data/db.json");
// initialize lowdd to mock db file
const db = low(adapter);
// add defaults entries to the database
db.defaults({ posts:[]}).write();

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set CORS 
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, "public")));

/** ROUTES */
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// ERROR Handling
app.use((err, req, res, next) => {
  //respond to the requester with the error message
  // set response status to 500
  res.status(500).send({
    error: {
      message: err.message,
    },
  });
});

/** EXPORT PATH */
module.exports = app;