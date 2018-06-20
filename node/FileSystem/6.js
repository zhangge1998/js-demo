/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');

fs.readFile('2.txt', function (err, data) {
    // console.log(arguments);
    if(err){
        console.log('文件读取失败');
    }
    else{
        console.log(data.toString());
    }
});

fs.unlink('2.txt', function (err) {
    if(err){
        console.log('错误删除失败');
    }
    else{
        console.log('删除成功');
    }
});

fs.rename('2.txt', '2new.txt', function (err) {
    if(err){
        console.log('err');
    }
    else{
        console.log('success');
    }
});

fs.stat('2new.txt',function (err, stats) {
    console.log(stats);
});
