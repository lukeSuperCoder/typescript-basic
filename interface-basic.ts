interface Person {
    readonly id:number;  //只读属性，不能赋值
    name:string;         //字符串类型属性
    age?:number          //？表示可以没有这个属性
}
let luchang : Person={
    id:1,
    name:'luchang',             //不定义age属性也不会报错
}
// luchang.id=2                 id为只读属性，无法赋值