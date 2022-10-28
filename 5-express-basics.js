
//Express Basics

const express = require("express");
const app = express();

// app.get      -- Read Data
app.get("/", (req, res) => {
  console.log("User Hit the Resource Home");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("User Hit the Resource About");
  res.status(200).send("About Page");
});

// app.all      -- Route all types of HTTP Request
// * means all pages except assign ones
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not Found</h1>");
});

// app.listen   -- Bind and listen the connections on the specified host and port.
app.listen(5000, () => {
  console.log("Server is running on 5000 port...🔌");
});

// app.use      -- Set up middleware for your application.
/* 
    app.use(express.static("./public"))
        If you all css,html,img files are in another folder then you don't have to navigate then one by one using app.get,
        just use app.use and give a path like here I have use public, In that copy all your necessary files
*/

// app.post     -- Insert data
// app.put      -- Update Date
// app.delete   -- Delete Data
//If you go on Contact page which not assign here it will give you error like 'Cannot GET /contact'
