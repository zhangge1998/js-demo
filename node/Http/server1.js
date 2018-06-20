/**
 * Created by ubuntu on 4/12/18.
 */

var http = require('http'); //引入http模块
var server = http.createServer();//创建并返回一个服务器

server.on('listening', function () {
    console.log('listening...');
});

server.on('request', function (req, res) {
    console.log('有客户端请求了');
    // res.write('hello');
    res.writeHead(200, {"Content-Type":"text/html"});//只调用一次，在end()前使用

    res.write('<h1>hello</h1>');//在writeHead()和end()之间
    res.end();//标识结束，在最后使用
});

server.listen(8080);//监听端口号