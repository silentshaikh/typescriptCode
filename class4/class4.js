"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    rollNo;
    subject;
    constructor(name, rollNo, subject) {
        this.name = name;
        this.rollNo = rollNo;
        this.subject = subject;
    }
    callSub() {
        return [...this.subject];
    }
}
let studOne = new Student('Abdul Moiz', 104, ['AI', 'Blockchain']);
console.log(studOne);
console.log(studOne.callSub());
console.log(studOne);
// Inheritance
class Moniter extends Student {
    isMonitr;
    constructor(name, rollNo, subject, isMonitr) {
        super(name, rollNo, subject);
        this.isMonitr = isMonitr;
    }
    callMonitr() {
        return this.isMonitr;
    }
}
let monitr = new Moniter("Ben", 101, ['Math'], 'YES');
console.log(monitr);
// console.log(monitr.callMonitr().toLowerCase())
console.log(monitr.callMonitr());
console.log(monitr);
// static Methods
class Persn {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static calPers() {
        return `The name of person is ${this.name}`;
    }
}
let perso = new Persn('Harry', 101);
console.log(perso);
console.log(Persn.calPers());
// getter and setter
class GetData {
    price;
    constructor(price) {
        this.price = price;
    }
    get data() {
        return this.price;
    }
    set setDta(value) {
        this.price = value;
    }
}
let dta = new GetData(34);
console.log(dta);
// dta.data = 45; 
dta.setDta = 45;
console.log(dta);
