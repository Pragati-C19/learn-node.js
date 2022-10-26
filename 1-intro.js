
// Small and large number
const amount = 12;
if (amount > 10) {
  console.log("large number");
} else {
  console.log("Small number");
}

console.log("It's my Code");

//Globals - No Window
//_dirname -- path to current directory
//_filename --file naem
// require -- function to use modules (commonJs)
// modules -- info about current module (files)
//process -- info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Hello Buddies!!!");
}, 1000);

