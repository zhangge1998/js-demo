/**
 * Created by ubuntu on 4/12/18.
 */
var fs = require('fs');

fs.open('1.txt','r',function (err,fd) {

    /*
     *fs.read(fd,buffer,offset,length,position,callback)
     * fd:
     * buffer:buffer对象
     * offset:新的内容添加到buffer中的起始位置
     * length:添加到Buffer中的内容的长度
     * position:读取的文件开始的位置
     * callback:
     *   err
     *   buffer的长度
     *   buffer对象
     */

    if(err){
        console.log('文件打开失败');
    }
    else{
        var bf = new Buffer(10);
        console.log(bf);
        fs.read( fd, bf, 0, 3, null, function ( err, len, newBuf ) {
            console.log( bf );
            console.log( len );
            console.log( newBuf );
        });
        console.log('ok');
    }
});