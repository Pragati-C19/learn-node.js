//npm - global command , comes with node
//npm --version

//local dependancy - use it only in this particular project
//npm i <packagename>

//global dependancy - use it in any project
//npm install -g <packagename>

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)
//npm i <packagename> -D or npm i <packagename> --save-dev to create dev dependancy
//npm run dev (nodemon index.js)
//npm uninstall <packagename>


const _=require('lodash')

const items=[1, [2, 14, 19, [3,[4,7,30,11],8,9,20]]]

//flattenDeep() method is used to completely flatten nested arrays
const newItems=_.flattenDeep(items)
console.log(newItems)
console.log("Hello Friend")


