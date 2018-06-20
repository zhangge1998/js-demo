/**
 * Created by ubuntu on 4/12/18.
 */
var http = require('http');
var url = require('url');

var server2 = http.createServer();
// var url1 = url.parse('http://www.baidu.com:8080/a/index.html?b=2');
// console.log(url1);
server2.on('request', function (req, res) {

    // console.log(req.url);
    var urlStr = url.parse(req.url);
    // console.log(urlStr);
    switch (urlStr.pathname) {
        case '/':
            //首页
            res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
            res.end('<h1>首页</h1>');
            break;
        case '/user':
            //用户首页
            res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
            res.end('<h1>个人中心</h1>');
            break;
        default:
            //其他页面
            res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
            res.end('<h1>页面被吃掉了</h1>');
            break;
    }
});
server2.listen(8080);