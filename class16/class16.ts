//intersection type
interface Person{
    name:string,
    id:number,
}
interface Employee{
    company:string,
    location:string,
};
type CompreType = Person&Employee;
let obj:CompreType = {
    name:"Tom",
    id:1,
    company:"Apple",
    location:"Silicon Valley",
};
let obj2:Person = {
    name:"Tom",
    id:1,
    
};
console.log(obj);
console.log(obj === obj2)
obj2 = obj;
interface A{
    name:string,
    id:number,
}
interface B{
    name:number,
    id:string,
};
type CompreType2 = A&B;
//Object key must be unique otherwise typescript through error
// let obj2:CompreType2 = {
//     name:"hello",
//     id:3,
//     name:3,
//     id:"Hello"
// }

//any,unknown,never

//any
let ab2:any;
ab2 = 45;
// ab = true;
const func1 = () => {
    ab2 = "Hello";
if(typeof ab2 === "string"){
    console.log(ab2.toLowerCase())
}else if(typeof ab2 === "number"){
    console.log(ab2.toFixed())
}else if(typeof ab2 === "object" && Array.isArray(ab2)){
    console.log(ab2.join(""))
}
ab2.toUpperCase();
}
ab2.toUpperCase()

//unknown
let ab:unknown;
ab = 45;
ab.toFixed(3)
// ab = true;
const func2 = () => {
    ab = "Hello";
if(typeof ab === "string"){
    console.log(ab.toUpperCase())
}else if(typeof ab === "number"){
    console.log(ab.toFixed())
}else if(typeof ab === "object" && Array.isArray(ab)){
    console.log(ab.join(""))
}
ab.toUpperCase();
}
func1();
func2();