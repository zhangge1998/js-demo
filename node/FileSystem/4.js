/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');
fs.open( '1.txt', 'r+', function ( err, fd ) {

    /*
     *当我们要对打开的文件进行写操作时，要将文件打开方式改为读写
     *fs.write( fd, buffer, offset, length[,position], callback)
     * fd:打开的文件
     * buffer:要写入的数据
     * offset:buffer对象要写入的数据的初始位置
     * length:要写入的长度
     * position:fd的起始位置
     * callback:回调
     */
    
    if( err ) {
        console.log( err );
    }
    else {
        var bf = new Buffer('123');
        fs.write( fd, bf, 0, 3, 10, function () {
            console.log(arguments);
        });
        // fs.write( fd, '1234', 5, 'utf-8' );
        fs.close(fd, function () {
            if(err){
                console.log(err);
            }
            else{
                console.log('关闭成功');
            }
        });
    }
});