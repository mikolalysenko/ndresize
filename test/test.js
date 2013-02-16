var resize = require("../index.js");

var test = [[1]];
var buf = numeric.rep([4,4], 1.0);


var p = resize([4,4], test, buf);
console.log(p);

p[0][0] = 2;
resize([1,1], p, test)
console.log(test);
