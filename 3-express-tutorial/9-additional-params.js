//Params
// 2. Additional Information of params and Query String 

// https://hn.algolia.com/api

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

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("<h1>Here is your Review System 🤨</h1>");
});

// http://localhost:5000/api/v1/query?name=Pragati&id=1
// { name: 'Pragati', id: '1' }
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }

  if(sortedProduct.length<1){
    //res.status(200).send('No products Matched your search')
    return res.status(200).json({sucess:true, data: []})
}
  res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
  console.log("Server is Running on Port 5000...");
});
