/**
 * Created by ubuntu on 4/9/18.
 */
// setTimeout(function(){
//     console.log("I've done my work!");
// },2000);
//
// console.log("I'm waiting for all my work to finish.");
var fs = require('fs');
var file;
var buf = new Buffer(100000);
fs.open(
    'info.txt','r',
    function(handle){
        file=handle;
    }
);
fs.read(
    file,buf,0,100000,null,
    function(){
        console.log(buf.toString());
        file.close(file,function(){

        });
    }
);