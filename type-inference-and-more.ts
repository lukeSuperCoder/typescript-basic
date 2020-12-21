let str = 'str'

//联合类型 可以指定变量为多个类型
let numberOrString :number|string

function getLength(input: string|number): number {
    const str = input as string             //as 类型断言 告诉编译器我要把它作为string使用,可以使用string的方法
    if(str.length){
        return str.length
    }else {
        const number = input as number
        return number.toString().length
    }
}
//type guard 类型守护 自动缩小类型断言范围
function getLength2(input: string|number): number {
    if(typeof input==="string"){
        return input.length
    }else {     //else中自动变成number类型
        return input.toString().length
    }
}