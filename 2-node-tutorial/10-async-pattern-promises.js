
//Async Patterns
//2. Setup Promises
const { readFile } = require("fs");

const getText = (path) => {
  const promise1 = new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return promise1;
};

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
