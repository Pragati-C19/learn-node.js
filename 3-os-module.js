
//Build-In Modules
// 1. OS

const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
//Uptime is a command that returns information about how long your system has been running together with the current time
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);