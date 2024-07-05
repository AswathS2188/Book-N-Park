const express = require("express");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./Config/db.js");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./Middlewares/errorHandler.js");
const path = require("path");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

const server = app.listen(PORT, console.log(`Server started on port ${PORT}`));
