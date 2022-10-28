//express router for / (/login) path

const express = require("express");
const router = express.Router();

//POST Method for login of traditional form
router.post("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("<h1>Please Provide Valid Name</h1>");
  //   res.send("POST");
});

module.exports = router;
