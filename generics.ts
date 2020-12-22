function echo<T>(arg:T):T {         //定义泛型后，函数可以不用写具体数据类型，而是通过传入的参数推断出返回的类型
 return arg
}
const result = echo(123);
const result1 = echo('123');

function swap<T,U>(tuple:[T,U]):[U,T] {   //泛型可以指定多个类型，利用tuple实现传入两个数据类型逆序返回类型
  return [tuple[1],tuple[0]];
}
const result2 = swap(['string',123]);  //返回number string
result2[0].toString().length     //可以执行number方法

interface IWithLength {     //如果定义了接口，只要传入有length属性的参数都不会报错
  length:number
}
function echoWithLength<T extends IWithLength>(arg:T):T {
 console.log(arg.length)
 return arg
}
console.log(echoWithLength('str'));
echoWithLength([1,2,'333'])
echoWithLength({length:10,height:10})

class Queue<T>{        //类定义泛型后可以传入任意参数
 private data = []
 push(item:T){
   return this.data.push(item)
 }
 pop():T{
   return this.data.shift()
 }
}
const queue = new Queue<number>();  //在生成对象时约束数据类型
queue.push(1)
//queue.push('str')

interface keyPair<T,U> {       //接口定义泛型
 key:T,
 value:U
}
let kp1: keyPair<number,string> = {key:1,value:'string'}
let kp2: keyPair<string,number> = {key:'str',value:123}