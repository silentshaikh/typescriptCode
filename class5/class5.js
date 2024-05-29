"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let carType = {
    name: 'Bently',
    model: 'Flying Spur',
};
console.log(carType);
let fruitsArr = [
    {
        fruit: 'Pineapple',
        price: 200,
    },
];
console.log(fruitsArr);
;
let employeDetal = {
    name: 'Tom',
    id: 104,
    company: 'XYZ',
};
console.log(employeDetal);
let myCar = {
    name: 'Mercedez',
    model: 'G-wagon'
};
console.log(myCar);
;
class Person2 {
    name;
    rollNo;
    skills;
    age;
    constructor(name, rollNo, skills, age) {
        this.name = name;
        this.rollNo = rollNo;
        this.skills = skills;
        this.age = age;
    }
}
let newPerson = new Person2('Jerry', 204, ['Metaverse'], 30);
console.log(newPerson);
class Car4 {
    name;
    model;
    price;
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}
let newCar = new Car4('Mercedez', 'G-wagon2', 300000);
console.log(newCar);
