function add(x:number,y:number) {
    return x+y;
}
const add1=(x:number,y:number,z?:number) :number => {      //z?表示z是可选的  使用const add为函数定义方法 :number 加或者不加都会自动声明数据类型
    if(typeof z==="number"){
        return x+y+z;
    }else {
        return x+y
    }
}
interface ISum {                                    //接口定义函数类型
    (x:number,y:number,z?:number):number
}
const add1_1:(x:number,y:number,z?:number) => number = add1; //函数赋值给另一个函数必须保证参数、数据类型完全一样
const add1_2:ISum = add1; //接受接口赋值