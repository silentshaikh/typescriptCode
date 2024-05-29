"use strict";
// indexOf
// let arri:string[] = ['apple','banana','kiwi','orange','mango'];
// console.log(arri.indexOf('kiwi',0));
Object.defineProperty(exports, "__esModule", { value: true });
// lastIndexOf()
let arri = ['apple', 'banana', 'kiwi', 'orange', 'mango', 'kiwi'];
console.log(arri.lastIndexOf('mango', 3));
//map
let mapArr = arri.map((e, i, a) => {
    return i + e;
});
console.log(mapArr);
// arri.forEach((e,i,a) => {
//     console.log(i+e);
// })
let numArr = [2, 4, 6, 8, 10];
let mapNumArr = numArr.map((e, i, a) => {
    return e ** 2;
});
console.log(mapNumArr);
let numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr5.length - 0); // undefied
let tuplArr = [23, "sapple", true];
// tuplArr = ["Apple",true,45];
