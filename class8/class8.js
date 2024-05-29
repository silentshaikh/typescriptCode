"use strict";
// // // Type Alias
// // console.log("Type Alias")
// // type StrOBj= {
// //     name:string,
// //     course?:string,
// // };
// // interface NumObj{
// //     id:number,
// // };
// // type StrNum = NumObj&StrOBj;
// // // interface StrNum extends StrOBj,NumObj{};
// // let obj:StrNum = {
// //     name:"Moiz",
// //     id:1,
// //     // course:"Generative AI & Blockchain",
// // };
// // console.log(obj);
// // type Student = {
// //     name:string,
// //     id:number,
// // };
// // let student:Student = {
// //     name:"Abdul Moiz",
// //     id:1,
// // };
// // let student2:Student = {
// //     name:"Ahmed",
// //     id:2,
// // };
// // console.log(student)
// // console.log(student2);
// // function callObj(stud:Student):Student{
// //     return stud;
// // }
// // console.log("Student Object",callObj(student));
// type Model = {
//     model:string,
// }
// type Company = {
//     company:string,
// }
// type Car = Company&Model;
// class MyCars implements Car{
//     constructor(public model:string,public company:string) {}
// }
// let ourCars = new MyCars("Continental GT","Bently");
// console.log(ourCars);
// //Interface
// console.log("Interface");
// interface studStr {
//     name:string,
//     course?:string,
// }
// interface studNum{
//     id:number,
// };
// interface Student extends studNum,studStr{};
// let student:Student = {
//     name:"Tom",
//     id:1
// };
// let student2:Student = {
//     name:"Jerry",
//     id:2,
// };
// console.log(student);
// console.log(student2);
// class Person implements Student{
//     constructor(public name:string,readonly id:number){}
// }
// let newPerson = new Person("Harry",3);
// console.log(newPerson);
Object.defineProperty(exports, "__esModule", { value: true });
//Compatibility in Interface is allow
// interface Student{
//     name:string,
// };
// interface Student{
//     id:number,
// };
// let stud:Student = {
//     name:"Tom",
//     id:45,
// };
// console.log(stud);
// Compatibility in Type Alias is not allow
// type Car = {
//     name:string,
// };
// type Car = {
//     id:number,
// }
