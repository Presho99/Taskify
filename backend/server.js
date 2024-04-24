require("dotenv").config();
const mongoose = require("mongoose");

// 1. Set up express

const express = require("express");
const taskRoutes = require("./routes/tasks");
const app = express();

// 4. Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// 3.Routes
app.use("/api/tasks", taskRoutes);

// Connect to server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // 2. Listen for requests

    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 3001", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
