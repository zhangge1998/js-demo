/**
 * Created by ubuntu on 4/12/18.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

var server = http.createServer();
var htmlDir = __dirname+'/html/';
server.on('request',function (req,res) {

    var urlStr = url.parse(req.url);
    // console.log(urlStr);
    switch (urlStr.pathname) {
        case '/':
            //首页
            sendData(htmlDir+'index.html',req,res);
            break;
        case '/user':
            //用户首页
            sendData(htmlDir+'user.html',req,res);
            break;
        case '/login':
            //用户首页
            sendData(htmlDir+'login.html',req,res);
            break;
        case '/login/check':
            // console.log(req.method);
            // console.log(urlStr);
            // console.log(qs.parse(urlStr.query));//get方式
            if(req.method.toUpperCase() == 'POST'){
                var str = '';
                req.on('data',function (chunk) {
                    console.log(chunk.toString());
                    str += chunk;
                });
                req.on('end',function () {
                    console.log(qs.parse(str));
                })
            }
            break;

        default:
            //其他页面
            sendData(htmlDir+'error.html',req,res);
            break;
    }
});

function sendData(file,req,res) {
    fs.readFile(file,function (err,data) {
        if(err){
            res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
            res.end('<h1>页面被吃掉了</h1>');
        }
        else{
            res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
            res.end(data);
        }
    })
}

server.listen(8080);