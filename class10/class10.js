"use strict";
//Scope
//GLobal scope => whole file
// local scope => inside function
// let globlScop:string = "Hello Global";
// function scopFunc(){
//     debugger;
//     let loclScope:string = "Hello Local";
//     console.log(globlScop);
//     return loclScope;
// };
// debugger;
// scopFunc();
//function Expression
// let globlScop:string = "Hello Global";
// let funcExpres = function():string{
//     debugger;
//     let loclScope:string = "Hello Local";
//     console.log(globlScop);
//     return loclScope;
// }
// debugger;
// funcExpres();
// let funcExpressTwo = function(){
//     return "hello World";
// };
Object.defineProperty(exports, "__esModule", { value: true });
//Arrow Function
// let arroFunc = (a:string = "Hello World"):string => a;
// console.log(arroFunc());
// Function data type
// console.log(typeof arroFunc);
// Properties of Function
let funcProprty = (a) => {
    console.log("Hello Property");
};
funcProprty(4);
console.log(funcProprty.name); //return function name
console.log(funcProprty.length); //return count of parameter
console.log(funcProprty.prototype);
