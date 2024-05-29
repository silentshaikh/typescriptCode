"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Any
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// console.log(arr);
arr = 24;
// console.log(arr.toString());
if (typeof arr === 'number') {
    console.log(arr.toString());
}
else {
    console.log('not a Number');
}
let arr1 = ['Apple', 12, true];
console.log(arr1);
let persn = {
    name: 'Abdul Moiz',
    city: 'Washington DC',
    country: 'USA',
    skills: ['Generative AI', 'Blockchain'],
};
console.log(persn);
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
let user1 = {
    name: 'Sam',
    email: 'xyz@gmail.com',
    role: Roles.user,
};
let user2 = {
    name: 'Ben',
    email: 'abc@gmail.com',
    role: Roles.admin,
};
const greetSignUp = (users) => {
    return users.role === 'user' ? `${users.name} is a User` : `${users.name} is a Admin`;
};
console.log(greetSignUp(user1));
console.log(greetSignUp(user2));
