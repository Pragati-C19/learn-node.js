//express router for / (/api/people) path

const express = require("express");
const router = express.Router();
let { people } = require("../data");

//GET Method for random api     -- read the data
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//POST Method for random api         -- insert data
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(400).send({ success: false, msg: "Please Provide Valid Name" });
});

//POST Method for postman api
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, data: [...people, name] });
  }
  res.status(400).send({ success: false, msg: "Please Provide Valid Name" });
});

//PUT Method   -- update the data
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  if (person) {
    return res.status(201).json({ success: true, data: newPeople });
  }
  res.status(400).send({ success: false, msg: `No Person with ID  ${id}` });
});

//DELETE Method   -- Delete the data
router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  if (person) {
    return res.status(200).json({ success: true, data: newPeople });
  }
  res
    .status(400)
    .send({ success: false, msg: `No Person with ID  ${req.params.id}` });
});

module.exports = router;
