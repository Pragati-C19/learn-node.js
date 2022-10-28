//Router in express - setup
//now bcoz of more route and more functinality index.js will get quit busy, for that we will use express router where we can group those router together

const express = require("express");
const peopleRouter = require("./routes/people");
const loginRouter = require("./routes/auth");
const app = express();

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

//router for /login
app.use("/login", loginRouter);

//router for /api/people
app.use("/api/people", peopleRouter);

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
