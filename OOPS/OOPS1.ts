// //OPPS
// //class is a blue print of object
// class Student{
//     name:string;
//     rollNo:number;
//     isStudent:boolean;
//     constructor(name:string,rollNo:number,isStudent:boolean) {
//         this.name = name;
//         this.rollNo = rollNo;
//         this.isStudent= isStudent;
//     }
//     addStudent(arr:string[]){
//         if(this.isStudent){
//             arr.push(this.name);
//             console.log(arr)
//         }else{
//             console.log("There will be no Student Add");
//         }
//     };
// };
// let stud:Student = new Student("Tom",1,true);
// console.log(stud);
// stud.addStudent([]);

// //inheritance
// class Volounter extends Student{
//     classes:string[];
//     constructor(name:string,rollNo:number,isStudent:boolean,classes:string[]){
//         super(name,rollNo,isStudent);
//         this.classes = classes;
//     }
//     //Function Override
//     addStudent(arr: string[]): void {
//         //Extend an inherit Method
//         super.addStudent([])
//         if(!this.classes){
//             arr.push(this.name);
//             console.log(arr)
//         }else{
//             console.log(`${this.name} is a Volunter`);
//         }
//     }
// };
// let volunt:Volounter = new Volounter("Moiz",1,true,["Javascript","Typescript"]);
// volunt.addStudent([]);

// //implement
// class Human {
//     name:string;
//     gender:string;
//     constructor(name:string,gender:string) {
//         this.name = name;
//         this.gender = gender;
//     };
//     add(){
//         console.log("Hwllo World");
//     };
// };
// class Doctor implements Human{
//     name:string;
//     gender: string;
//     constructor(name:string,gender:string) {
//         this.name = name;
//         this.gender = gender;
//     };
//     add(){
//         console.log("Hwllo World");
//     };
    
// };
// let doctr = new Doctor("Guen","Female");
// let human = new Human("Guen","Female");

//Getter and Setter in OPPS
// class Car{
//     constructor(public name:string,private model:string) {}
//     get callModel(){
//         return this.model;
//     }
//     set callSet(modl:string){
//         this.model = modl
//     }
// };
// let car:Car = new Car("Mercedez","G-Wagon");
// console.log(car.callModel) 
// car.callSet = "AMG";
// console.log(car.callModel) 
// console.log(car)

//Polymorphism
// Parent class ke methods and Properties ko child class ma override krna Polymorphism ha
// class Student{
//     name:string;
//    private id:number;
//     constructor(name:string,id:number) {
//         this.name = name;
//         this.id = id;
//     }
//    get callName(){
//        return this.id;
//     }
// };
// class Monitor extends Student{
//     isMonitor:boolean
// constructor(name:string, id:number,isMonitor:boolean) {
//         super(name,id);
//         this.isMonitor = isMonitor;
//     }
//    get callName(){
//         return 45;
//     }
// };
// let stud:Student = new Student("Tom",1);
// let vlount:Monitor = new Monitor("Jerry",2,true);
// console.log(stud);
// console.log(vlount);
// console.log(stud.callName);
// console.log(vlount.callName);
// console.log(stud);
class Student {
    constructor(public name:string,public id:number) {}
    getID = () => {
        console.log(this.id);
    };
    getID2(){
        console.log(this.id);
    }
};
let stud = new Student("Ben",1);
// let cals =  stud.getID;
// cals();
// let cals2 =stud.getID2;
// cals2();
// let arrw = () => {
//     console.log(this);
// };
// arrw();
// function decrle(){
//     console.log(this)
// };
// decrle();
let obj = {
    name:"Ben",
    callN:function() {
        console.log(this.name);
    }
};
class CarCls{
    static names:string = "Hello";
    constructor(public name:string) {
        
    }
    getName = () => {
        console.log(this.name)
    }
    static getName2(){
        console.log(this.names)
    }
};
let carCls = new CarCls("hi");
carCls.getName();
CarCls.getName2();
