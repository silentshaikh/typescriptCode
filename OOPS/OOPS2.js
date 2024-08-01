"use strict";
let obj1 = {
    x: 5,
    y: 5,
};
let obj2 = {
    x: 5,
    y: 3,
};
obj1 = obj2;
console.log(obj1);
let obj3 = {
    name: "TOm",
    age: 10,
    callName: function () {
        console.log(this.name);
    }
};
let obj4 = {
    name: "Jerry",
    age: 8,
};
obj4 = obj3;
console.log(obj4.name);
//structure typing in function
let func1 = (a) => {
    console.log(a);
};
let func2 = (a) => {
    return a;
};
func1 = func2;
console.log(func1(5));
//Using class
class Student1 {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    callStud() {
        console.log(`The Name of the Student is ${this.name}`);
    }
}
;
class Student2 {
    name;
    id;
    callStud;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.callStud = function () {
            console.log(`The Name of the Student is ${this.name}`);
        };
    }
}
;
let studOne = new Student1("Tom", 1);
let studTwo = new Student2("Jerry", 2);
studOne = studTwo;
studOne["nam"] = "Hello";
console.log(studOne);
console.log(studTwo);
