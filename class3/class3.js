"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union and Intersection
let name1 = '';
// Union
const unin = (num) => {
    return num;
};
const employ = {
    name: 'Ben',
    id: 1,
    post: 'General Manager',
    address: 'USA',
};
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error('Unknown type');
    }
}
console.log(add(5, 10));
console.log(add('5', '10'));
// Generics
// const gen1 = <T>(value:T):T => {
//     return value;
// }
// let retGen1 = gen1<string>('Hello World'); 
// let retGen2 = gen1<number>(retGen1.length); 
// console.log(retGen1)
// console.log(retGen2)  
const gen2 = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error('Unknown type');
    }
};
let retGen3 = gen2(5, 10);
let retGen4 = gen2('5', '10');
console.log(retGen3);
console.log(retGen4);
name1 = 'moiz';
// console.log(name1.toUpperCase())
let num1 = 34.55557;
console.log(num1.toFixed(2));
let n = null;
// n = 'hello';
console.log(typeof n);
let y;
y = 'helo';
