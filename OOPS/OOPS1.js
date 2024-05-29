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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    Object.defineProperty(Student.prototype, "callName", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
;
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor(name, id, isMonitor) {
        var _this = _super.call(this, name, id) || this;
        _this.isMonitor = isMonitor;
        return _this;
    }
    Object.defineProperty(Monitor.prototype, "callName", {
        get: function () {
            return 45;
        },
        enumerable: false,
        configurable: true
    });
    return Monitor;
}(Student));
;
var stud = new Student("Tom", 1);
var vlount = new Monitor("Jerry", 2, true);
console.log(stud);
console.log(vlount);
console.log(stud.callName);
console.log(vlount.callName);
console.log(stud);
