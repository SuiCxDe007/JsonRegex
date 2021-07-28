var fs = require('fs');


const data = fs.readFileSync('x.txt',
            {encoding:'utf8', flag:'r'});
  

var startingIndex = data.indexOf("{");
var endingIndex= data.length;

const firstFilter = data.substring(startingIndex,endingIndex)
console.log(firstFilter);
console.log("----------------------------------------------");
console.log("----------------------------------------------");
console.log("----------------------------------------------");
finalString = firstFilter.replace(/(\r\n|\n|\r)/gm, "");
const obj = JSON.parse(finalString);
console.log(obj);
