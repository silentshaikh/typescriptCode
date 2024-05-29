"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Operator
// Arithmetic operator
// +-*/
let a1 = 5;
let b1 = 5;
let c1 = a1 + b1;
console.log('Addition');
console.log(c1);
console.log('Subtraction');
console.log(c1 - 2);
console.log('Multiplication');
console.log(c1 * 2);
console.log('Division');
console.log(c1 / 2);
console.log((c1 + c1) * 2);
//Assignment Operators
var d1; //decralation
d1 = 5; //assignment
d1 = 6;
d1 += 8; // d1 = d1+8;
console.log(d1);
// Comparison Operators
// console.log(5=="5");
// console.log(5==="5");
// console.log(5!="5");
// console.log(5!=="5");
console.log(5 > 6);
console.log(5 < 6);
console.log(5 >= 5);
console.log(5 <= 4);
var SignUP;
(function (SignUP) {
    SignUP["admin"] = "admin";
    SignUP["user"] = "user";
})(SignUP || (SignUP = {}));
;
let obj = {
    name: "Abdul Moiz",
    id: 1200,
    signUp: "",
    showName: function () {
        console.log(`${this.name} is a ${this.signUp}`);
    }
};
let sign = "user";
if (sign.toLowerCase() === SignUP.admin.toLowerCase()) {
    obj.signUp = SignUP.admin;
}
else {
    obj.signUp = SignUP.user;
}
console.log(obj);
obj.showName();
console.log(typeof SignUP);
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
})(Direction || (Direction = {}));
;
let direction = Direction.North;
direction = Direction.South;
console.log(direction);
// direction = "South";  basically type string not assign to type enum
const consObj = {
    name: "Sam",
};
// consObj.name = "moiz"
console.log(consObj);
//never
// const fucn  = ():never => {
//     throw new Error()
// }
// fucn()
// const funcVoid = () => {
//     console.log("Hello")
// }
// funcVoid()
let objFuc = {
    name: "Abdul Moiz",
    func: () => {
        console.log(this);
    }
};
objFuc.func();
// Function Scope
//Function Decralation
function parenFunc(a) {
    return function (b) {
        return b;
    };
}
console.log(typeof parenFunc);
console.log(parenFunc(5)(this));
//Function Expression
let funcExpres = function (a) {
    return function (b) {
        return b;
    };
};
console.log(funcExpres(3)(this));
console.log(typeof funcExpres);
//Arrow Function
const func5 = (a) => (b) => {
    return (b) => {
        return b;
    };
};
console.log(func5(5)(this));
console.log(typeof func5);
function cal() {
    console.log("Hello WOrld");
}
;
console.log(typeof cal);
const callArro = () => {
    console.log("Arrow Fucntion");
};
console.log(typeof callArro);
