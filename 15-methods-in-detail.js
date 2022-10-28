//Methods in Details

const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//GET Method for random api     -- read the data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//POST Method for random api         -- insert data
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(400).send({ success: false, msg: "Please Provide Valid Name" });
});

//POST Method for postman api
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, data: [...people, name] });
  }
  res.status(400).send({ success: false, msg: "Please Provide Valid Name" });
});

//POST Method for login of traditional form
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("<h1>Please Provide Valid Name</h1>");
  //   res.send("POST");
});

//PUT Method   -- update the data
app.put("/api/people/:id", (req, res) => {
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
app.delete("/api/people/:id", (req, res) => {
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

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
