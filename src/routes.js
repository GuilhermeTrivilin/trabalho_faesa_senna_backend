const express = require("express");
const router = express.Router();

const { loginPost, loginGet } = require("./controllers/auth");

router.get("/", (request, response, next) => {
  try {
    response.status(200).json({ message: "Hello world!" });
  } catch (error) {
    next(error);
  }
});

router
  .get("/login", loginGet)
  .post("/login", loginPost)

module.exports = router;
