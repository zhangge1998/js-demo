/**
 * Created by ubuntu on 4/9/18.
 */
// var http=require('http');
// function process_request(req,res){
//     var body='Thanks for calling!\n';
//     var content_length=body.length;
//     res.writeHead(200,{
//         'Content-length':content_length,
//         'Content-Type':'text/plain'
//     });
//     res.end(body);
// }
// var s=http.createServer(process_request);
// s.listen(8080);

var express = require('express');
var app=express();
app.get('/',function(req,res){
    res.end('hello  world');
});
app.listen(8080);