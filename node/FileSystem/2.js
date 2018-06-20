/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');

// fs.open('1.txt','r',function (err,fd) {
//     console.log(err);
// });
// console.log('ok');

var fd = fs.openSync('1.txt','r');
console.log(fd);
console.log('ok');