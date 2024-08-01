"use strict";
//Abstract classes
class Person {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    classId() {
        console.log(this.id);
    }
}
//abstract class cannot create its instance
// let persn:Person = new Person("Hello",3)
class Employee extends Person {
    name;
    isEmployee;
    constructor(name, id, isEmployee) {
        super(name, id);
        this.name = name;
        this.isEmployee = isEmployee;
    }
    ;
    callName() {
        if (this.isEmployee) {
            console.log(`The Name of the Employee is ${this.name}.`);
            super.classId();
        }
        else {
            console.log("This is not a Employee");
        }
        ;
    }
}
;
let emplye = new Employee("Tom", 1, true);
emplye.callName();
// emplye.classId();
