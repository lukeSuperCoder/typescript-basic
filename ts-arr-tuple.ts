let arrofNumber :number[] = [1,2,3]
arrofNumber.push(4)
function test() {
    console.log(arguments)          //类数组 有数组得属性但是没有数组的方法
    arguments[0]=1
}
let user:[string,number]=['111',111] //tuple类型 可以指定数据项的类型以及个数
user.push('111')                     //只能添加支持的数据类型
