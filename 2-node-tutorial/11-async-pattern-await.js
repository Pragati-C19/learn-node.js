// Async Patterns
// 3. Refactor to Async

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
  .then((result) => console.log(result, "from then and Catch method"))
  .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second, "In try Catch method");
  } catch (error) {
    console.log(error);
  }
};
start();
