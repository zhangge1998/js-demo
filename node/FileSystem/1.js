/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');

/*
*fs.open(path,flags,[mode],callback)
* path:要打开得文件路径
* flags:打开文件的方式 读/写
* mode：设置文件的模式 读/写/执行
* callback：回调
*       err:文件打开失败的错误保存在err里面，如果成功err为null
*       fd:被打开文件的标识
 */

fs.open('1.txt','r',function (err,fd) {
    // console.log(err);
    console.log(fd);
    if(err){
        console.log('文件打开失败');
    }
    else{
        console.log('文件打开成功');
    }
});

fs.open('1.txt','r',function(err,fd){
    console.log(fd);
});

