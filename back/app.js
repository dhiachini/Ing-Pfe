const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routerAccountRequests = require("./routes/accountrequest.route");
const uploadRouter = require("./routes/accountrequest.route");
const authRouter = require("./routes/auth.route");
const routeroffer = require("./routes/offer.route");
const routerdemande = require("./routes/demandes.route")
const routerformservice = require("./routes/formservice.route")
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));

app.use("/api", routerAccountRequests);
app.use("/upload", uploadRouter);
app.use("/api/auth", authRouter);
app.use("/api", routeroffer);
app.use("/api", routerdemande);
app.use("/api", routerformservice);


module.exports = app;
