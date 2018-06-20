/**
 * Created by ubuntu on 4/11/18.
 */
/*在一个模块内通过var定义的变量，其作用域范围是当前模块，外部不能直接访问
*如果我们像一个模块能够访问例外一个模块内定义的的变量
*   1.八变量作为global对象的一个属性,但是不推荐
*   2.使用模块对象module（保存和当前模块有关的一些信息，在module对象里有一个子对象：exports对象
*   可以通过这个对象把一个模块中的局部变量对象进行提供访问）
*/
/*
*在模块作用域，还有一个内置的模块对象，exports，其实就是module.exports
 */
var a = 500;
// console.log(module);
// module.exports.a = a;
// console.log(module.exports === exports);
// exports.a = a;
// module.exports = [1,2,3];//exports和module.exports之间的指向关系已经断开
// exports.a = a;
exports = [1,1,1];//exports和module.exports之间的指向关系已经断开
//所以只能给已有的module.exports或是exports对象上添加属性而不是直接改写

