var fs = require('fs');

// fs.readFileSync('x.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// console.log("Dead");
    // var x = data.indexOf("{");
    // var y= data.length;

    // const xz = data.substring(x,y)
    // console.log(xz);
// });


   
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('x.txt',
            {encoding:'utf8', flag:'r'});
  
// Display the file data

var x = data.indexOf("{");
var y= data.length;

const xz = data.substring(x,y)
console.log(xz);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
someText = xz.replace(/(\r\n|\n|\r)/gm, "");
const obj = JSON.parse(someText);
console.log(obj);
