/**
 * Created by ubuntu on 4/11/18.
 */
/*
*buf.write(要写入的字符串，从buffer的那一位开始写入，写入的字符串的长度，写入的字符串的编码);
 */
var str = 'miaov';
console.log(new Buffer(str));
var bf = new Buffer(5);
// bf.write(str);
// console.log(bf);
// bf.write(str,2,3);
// console.log(bf);