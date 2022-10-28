/*
        API         Vs          SSR
    API - json              SSR- Template 
    SEND Data               SEND Template
    res.json()              res.render()
*/

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  //res.json([{ name: "Pragati" }, { name: "Kiran" }]);
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
