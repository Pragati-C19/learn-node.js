
//Build-In Modules
// 2. Path Module
const path = require("path");
console.log(path.sep);

const filePath = path.join("content", "subfolder", "test-path.txt");
console.log(filePath);

//It will show you last file of the path
const base = path.basename(filePath);
console.log(base);

//It will give you full path from drive to last file
const absolute = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test-path.txt"
);
console.log(absolute);