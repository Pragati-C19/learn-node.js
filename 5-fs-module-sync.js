
//Build-In Modules
//3. FS Module (Sync)
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result of : ${first}, ${second}`,
  { flag: "a" },
  { flag: "b" }
);
