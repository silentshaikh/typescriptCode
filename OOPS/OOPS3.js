"use strict";
//constructor
//Case 1
class Parent {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Child extends Parent {
}
;
let parent1 = new Parent("Thomas", 37);
let child = new Child("tom", 10);
console.log(child instanceof Child);
//Case 2
class A {
}
;
class B extends A {
    name;
    id;
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
}
;
let a = new A();
let b = new B("Ben", 11);
console.log(a);
console.log(b);
//Case 3
class C {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
class D extends C {
    name;
    age;
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }
    ;
}
let c = new C("Jerry");
let d = new D("Jerry", 8);
console.log(c);
console.log(d);
