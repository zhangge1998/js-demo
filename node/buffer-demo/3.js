/**
 * Created by ubuntu on 4/11/18.
 */
var bf = new Buffer('miaov');
console.log(bf.toString());
console.log(bf.toString('utf-8',1));//不包含结束位
console.log(bf.toString('utf-8',1,3));
var bf2 = new Buffer('妙为');
console.log(bf2);
console.log(bf2.toString('utf-8',3));

console.log(bf.toJSON());
