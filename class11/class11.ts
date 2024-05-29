// class type annotation
class Student {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    };
    callStudent():void{
        console.log(`Student Name is ${this.name} and his age is ${this.age}`)
    };
};
// instance of class
let ourStudent:Student = new Student("Tom",11);
console.log(ourStudent);
console.log(ourStudent instanceof Student); 

// class access modifiers
// public , private, protected

class classModifier{
    constructor(public name:string, private id:number,protected skills:string[],readonly mobileNumber:number){}
    getPriv(){
        return this.id;
    };
};
let accesModifir = new classModifier("Ben",1,["AI","Blockchain"],56789);
// accesModifir.id = 5;  cannot update because its only for read
console.log(accesModifir)
// console.log(accesModifir.getPriv());
 
// Inheritance
class modifirChild extends classModifier{
    constructor( name:string, id:number,skills:string[],mobileNumber:number){
    super(name,id,skills,mobileNumber);
    };
    callId(){
       return  [...this.skills];
    }
};
let chid = new modifirChild("Jerry",2,["Chesse"],3456);
console.log(chid.callId());
console.log(chid.mobileNumber);
class Car{
    name:string;
    constructor(name:string) {
        this.name = name;
    };
};
class CarModel extends Car{
    model:string;
    constructor(model:string,name:string) {
        super(name);
        this.model = model;
    };
};
let carModel = new CarModel("Continental GT","Bently");
console.log(carModel);
// class modifier
//getter
class GetSet{
    constructor(protected name:string,private id:number,private length:number) {}
    get gtDta (){
        return this.id;
    }
    set stDta(ids:number){
         this.id = ids;
    };
    get gtDta2(){
      return  this.id*this.length
    }
};
let getSet = new GetSet("Tom",1,45);
//getSet.gtDta = 56   // get property will not be update
console.log(getSet.gtDta);
console.log(getSet.gtDta2);
// After Setter
getSet.stDta = 34;
console.log(getSet.gtDta);
console.log(getSet.gtDta2);

// static method
class Stat{
    static callStat(){
        console.log('Static Method');
    };
};
Stat.callStat()

//abstract class
abstract class Vehicle{
    constructor(public speed:string) {}
    abstract start(): void;
    abstract stop():void;
    abstract sounds():void;
}
//let vehicl = new Vehicle("34mph")     // abstract class cannot create its instance 
class Bike extends Vehicle{
    constructor(public speed:string) {
        super(speed);
    }
    start(): void {
        console.log("Bike Start");
    };
    stop(): void {
        console.log("Bike Stop");
    };
    sounds(): void {
        console.log("Bike Sound");
    };
};
let ourBike =new Bike("34mph");
console.log(ourBike)
ourBike.start();
ourBike.stop();
ourBike.sounds()
class Truck extends Vehicle{
    constructor(public speed:string) {
        super(speed);
    }
    start(): void {
        console.log("Truck Start");
    };
    stop(): void {
        console.log("Truck Stop");
    };
    sounds(): void {
        console.log("Truck Sound");
    };
};
let ourTruck =new Truck("22mph");
ourTruck.start();
ourTruck.stop();
ourTruck.sounds()
