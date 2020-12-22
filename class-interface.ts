interface Radio {
   switchRadio(trigger:boolean):void;
}
interface Battery {
    checkBatteryStatus():void;
}
interface RadioWithBattery extends Radio{
    checkBatteryStatus():void;
}
class Car implements Radio{
    switchRadio(trigger: boolean): void {

    }
}
class Cellphone implements RadioWithBattery{            //多态 因为这个类实现的接口继承了父类接口，所以可以使用祖先的所有方法
    switchRadio(trigger: boolean): void {

    }
    checkBatteryStatus(): void {
    }
}