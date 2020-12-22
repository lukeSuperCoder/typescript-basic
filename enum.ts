/*enum Deriction {                    //如果不赋值或者赋值为数字，默认下面的属性自增,如果赋值字符串必须全部都赋值，否则报错
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}*/
const enum Deriction {                    //如果不赋值或者赋值为数字，默认下面的属性自增,如果赋值字符串必须全部都赋值，否则报错
    UP = 1,                                //加 const 之后变成常量枚举 可以大大减少编译后的文件内容
    DOWN,
    LEFT ,
    RIGHT
}
console.log(Deriction.UP)           //可以直接获取枚举属性值       输出0
//console.log(Deriction[4])           //枚举反向映射可以通过值(value)获取枚举属性名(key)  输出UP