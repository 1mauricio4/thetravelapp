var createError = require("http-errors");
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// DB config
const db = process.env.MONGODB_URL;
// connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log("ERROR, ", err));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const server = app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Listening on 3000");
});

module.exports = app;
