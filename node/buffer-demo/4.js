/**
 * Created by ubuntu on 4/11/18.
 */
var bf = new Buffer('miaov');
console.log(bf);
// var bf2 = bf.slice();
// console.log(bf2);
// var bf3 = bf.slice(2,4);//不包含结束位
// console.log(bf3);
// bf3[0] = 2;
// console.log(bf3);
// console.log(bf);
var bf4 = new Buffer(10);
bf.copy(bf4,2,1,4);
bf4[0] = 2;
console.log(bf4);
console.log(bf);