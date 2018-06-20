/**
 * Created by ubuntu on 4/11/18.
 */

/*
*buffer类
*作用：用于操作二进制数据流
* new Buffer[size];创建一个buffer对象，并未这个对象分配一个空间
* 当我们为一个buffer分配空间大小以后，大小不能改变
*/
// var a = new Buffer(5);
// console.log(a);
// a[1]=10;
// console.log(a);
// new Buffer(array);
// var bf = new Buffer([1,2,3]);
// console.log(bf);
// bf[10] = 10;
// console.log(bf);
// new Buffer(string,[encoding]);
var bf = new Buffer('miaowei','utf-8');
console.log(bf);
console.log(bf.length);
for(var i = 0; i < bf.length; i++){
    // console.log(bf[i].toString(16));
    console.log(String.fromCharCode(bf[i]));
}
var str1 = 'miaov';
var bf1 = new Buffer(str1);
console.log(str1.length);   //字符串str1的长度
console.log(bf1.length);   //str1占据的字节数

var str2 = '妙为';
var bf2 = new Buffer(str2);
console.log(str2.length);
console.log (bf2.length);