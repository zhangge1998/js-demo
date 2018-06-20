/**
 * Created by ubuntu on 4/11/18.
 */
//__filename:当前文件被解析过后的绝对路径
// console.log(__filename);
/*
模块加载系统
require('模块')
 */
// require('./2.js');

/*
模块加载机制：
路径
相对路径
绝对路径
 */

// require('./2.js');
// require('/home/ubuntu/WebstormProjects/js-demo/node/module/2.js');
/*
首先按照加载的模块的文件名进行查找
如果没有找到，则会在模块文件名称后加上.js后缀，进行查找
如果还没有找到，则加上.json后缀，进行查找
如果还没有，则加上.node后缀，进行查找

查找顺序： 文件名称->.js->.json->.node
 */

