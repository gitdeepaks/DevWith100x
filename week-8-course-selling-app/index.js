const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

app.post("/user/signup", function (req, res) {
  res.json({
    message: "User signup successful",
  });
});

app.post("/user/signin", function (req, res) {
  res.json({
    message: "User login successful",
  });
});

app.get("/user/purchases", function (req, res) {
  res.json({
    message: "User purchases fetched successfully",
  });
});
app.post("/course/purchases", function (req, res) {
  res.json({
    message: "User purchases fetched successfully",
  });
});

app.get("/user/courses", function (req, res) {
  res.json({
    message: "User courses fetched successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
