
//All functions for api/people wrote here

let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPeople = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(400).send({ success: false, msg: "Please Provide Valid Name" });
};

const createPeoplePostman = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, data: [...people, name] });
  }
  res.status(400).send({ success: false, msg: "Please Provide Valid Name" });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople,
};
