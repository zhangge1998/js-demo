/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');

//fs.writeFile()方法，如没有该文件则新建，若存在则清空原有内容
var filename = '2.txt';
// fs.writeFile(filename, 'miaov', function () {
//     console.log(arguments);
// });

// fs.appendFile(filename, 'good', function () {
//     console.log(arguments);
// });
// fs.exists(filename, function (isExists) {
//     // console.log(err);
//     if(!isExists){
//         fs.writeFile(filename, 'miaov', function (err) {
//                if(err){
//                    console.log('出错');
//                }
//                else{
//                    console.log('创建成功')
//                }
//         })
//     }
//     else{
//         fs.appendFile(filename, 'good', function (err) {
//                if(err){
//                      console.log('新内容追加失败');
//                }else{
//                      console.log('新内容追加成功');
//                }
//         })
//     }
// });

if(!fs.existsSync(filename)){
    fs.writeFileSync(filename,'miaov');
    console.log('新文件创建成功');
}
else{
    fs.appendFileSync(filename,'good');
    console.log('新内容追加成功');
}
