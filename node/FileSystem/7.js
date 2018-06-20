/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');
var filename = '2new.txt';
fs.watch(filename, function (ev, fn) {
    console.log(ev);
    if(fn){
        console.log(fn+'发生了改变');
    }
    else{
        console.log('.....');
    }
});