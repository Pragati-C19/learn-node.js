//express router for / (/api/people) path

const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople,
} = require("../controllers/people-controller");

//This is one simple method
// router.get("/", getPeople);
// router.post("/", createPeople );
// router.post("/postman", createPeoplePostman);
// router.put("/:id", updatePeople);
// router.delete("/:id", deletePeople);

//this is more time efficient method
router.route("/").get(getPeople).post(createPeople);
router.route("/postman").post(createPeoplePostman);
router.route("/:id").put(updatePeople).delete(deletePeople);

module.exports = router;
