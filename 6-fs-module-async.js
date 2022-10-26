

//Build-In Modules
//3. FS module (Async)

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result, "FIRST");
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result, "SECOND");
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result of Async File : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); //undefined
       }
    );
  });
});