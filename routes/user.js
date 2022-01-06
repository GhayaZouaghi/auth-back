// require express
const express = require("express");

// require router

const router = express.Router();
// test route
router.get("/test", (req, res) => {
  res.send("hiiii test");
});

module.exports = router;
