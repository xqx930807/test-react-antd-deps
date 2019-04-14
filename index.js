var fs = require("fs");
var data = fs.readFileSync('package-lock.json','utf-8');
var jsondata = JSON.parse(data.toString())
console.log("antd version is "+jsondata.dependencies.antd.version);
console.log("react version is "+jsondata.dependencies.react.version);
console.log("express version is "+jsondata.dependencies.express.version);
process.exit();

