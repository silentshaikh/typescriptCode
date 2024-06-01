;
var obj = {
    name: "Tom",
    id: 1,
    company: "Apple",
    location: "Silicon Valley",
};
var obj2 = {
    name: "Tom",
    id: 1,
};
console.log(obj);
console.log(obj === obj2);
obj2 = obj;
;
//Object key must be unique otherwise typescript through error
// let obj2:CompreType2 = {
//     name:"hello",
//     id:3,
//     name:3,
//     id:"Hello"
// }
//any,unknown,never
//any
var ab2;
ab2 = 45;
// ab = true;
var func1 = function () {
    ab2 = "Hello";
    if (typeof ab2 === "string") {
        console.log(ab2.toLowerCase());
    }
    else if (typeof ab2 === "number") {
        console.log(ab2.toFixed());
    }
    else if (typeof ab2 === "object" && Array.isArray(ab2)) {
        console.log(ab2.join(""));
    }
};
//unknown
var ab;
ab = 45;
// ab = true;
var func2 = function () {
    ab = "Hello";
    if (typeof ab === "string") {
        console.log(ab.toUpperCase());
    }
    else if (typeof ab === "number") {
        console.log(ab.toFixed());
    }
    else if (typeof ab === "object" && Array.isArray(ab)) {
        console.log(ab.join(""));
    }
};
func1();
func2();
