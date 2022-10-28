//Params
// 2. Route params

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log(req.params); //It will show what we have type at :productID
  const { productID } = req.params; //here req.param means ID
  const singleProduct = products.find(
    (product) => product.id === Number(productID) //productID is number so we have mention Number here
  );
  if (!singleProduct) {
    return res.status(404).send("<h1>404 : Page Not Found</h1>");
  }
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
