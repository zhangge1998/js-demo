/**
 * Created by ubuntu on 4/11/18.
 */
/*
*process:一个全局对象
 */
// console.log( process.argv );//argv:一个包含命令行参数的数组
// console.log( process.env );
// console.log(process.pid);
// console.log(process.title);
// console.log(process.arch);
// console.log(process.platform);

// process.stdout.write("hello");
// console.log('hello');
// function Log(data) {
//     process.stdout.write(data);//console.log()的实现
// }
// Log('haha');
var a;
var b;
process.stdout.write('请输入a的值：');
process.stdin.on('data',function (chunk){
    if(!a){
        a = Number(chunk);
        process.stdout.write('请输入b的值：');
    }
    else{
        b = Number(chunk);
        process.stdout.write('结果是:'+(a+b));
    }
});
