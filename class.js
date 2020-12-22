class Anmial {
    constructor(name) {
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}
const stack = new Anmial('stack');
console.log(stack.run());

class Dog extends Anmial{
    play(){
        return `${this.name} is playing`
    }
}
const jingba = new Dog('jingba');
console.log(jingba.play())
console.log(jingba.run())
class Cat extends Anmial{
    static categories = ['mammal']
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    run() {
        return 'Meow,'+super.run();
    }
}
const maomao = new Cat('maomao');
console.log(maomao.run());
console.log(Cat.categories);