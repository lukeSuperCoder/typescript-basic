let sum :(x:string,y:number) => number
type Plustype = (x:string,y:number) => number;      //定义一个类型赋值给一个type变量，可以直接赋值给函数
let sum1 : Plustype
const res1 = sum1('str',123)
type Direction = 'UP'|'DOWN'|'LEFT'|'RIGHT'         //联合类型，只能从这几类中使用
let left : Direction='UP'