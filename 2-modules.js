
//Modules - Escapsulated Code (only share minimum)
//In Common JS, Every file is module by default
const names = require("./name");
const sayHi = require("./sayhi-function");
const data = require("./alternative-syntax");
require("./mind-grenade");

console.log(names);
console.log(data);
console.log(data.singlePerson);
console.log(data.items);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);