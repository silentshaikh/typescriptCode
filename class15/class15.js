//Union Types
var name = "Hello World";
name = 67;
//Type Narrowing
if (typeof name === "number") {
    console.log(name.toFixed(2));
    //   console.log(nameArr)
}
else if (typeof name === "string") {
    console.log(name.toUpperCase());
}
;
var callShape = function (shape) {
    if ("radius" in shape) {
        return shape.radius;
    }
    else {
        return shape.type;
    }
};
console.log(callShape({ name: "Hel", radius: 45 }));
var callAnimal = function (anim) {
    if ("swim" in anim) {
        anim.swim();
    }
    else {
        anim.fly();
    }
};
var fish = {
    swim: function () {
        console.log("Swim");
    }
};
var bird = {
    fly: function () {
        console.log("Fly");
    }
};
callAnimal(fish);
//Using instanceof
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Bow Bow!");
    };
    return Dog;
}());
var instncOf = function (pet) {
    if (pet instanceof Cat) {
        pet.meow();
    }
    else {
        pet.bark();
    }
};
var dog = new Dog();
var cat = new Cat();
instncOf(dog);
var typeNarow = function (shape) {
    if ("sideLength" in shape) {
        console.log(Math.pow(shape.sideLength, 2));
    }
    else {
        console.log(0.5 * shape.base * shape.height);
    }
};
var squre = { sideLength: 4 };
var tringl = { base: 4, height: 5 };
typeNarow(squre);
typeNarow(tringl);
//Type Literal
var age = 14;
console.log(age);
