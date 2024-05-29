//Difference B\W TYPE & INTERFACE
// TYPE
// type person={
//     name:string,
//     id:number,
// }
// type Emplye = {
//     company:string,
// }
// type EmployeeDetail = person & Emplye;
// let typeEmp:EmployeeDetail = {
//     name:'Ben',
//     id:101,
//     company:'ABC'
// };
// console.log(typeEmp);
// type Arr1 = [string,number];
// type Arr2 = [boolean,string[]];
// type All = Arr1 & Arr2;
// let typeArr1:All = ['Apple',34,true,['a','b']];
// console.log(typeArr1);
type carT={
    name:string;
}
type modelT =carT & {
    model:string;
}
let carType:modelT = {
    name:'Bently',
    model:'Flying Spur',
}
console.log(carType)
// INTERFACE
interface ArrFruits{
    fruit:string;
    price:number
}
let fruitsArr:ArrFruits[] =[
    {
        fruit:'Pineapple',
        price:200,
    },
] 
console.log(fruitsArr)
interface personObj{
    name:string;
    id:number;
}
interface employObj{
    company:string;
}
interface empDetal extends personObj,employObj {};
let employeDetal:empDetal = {
    name:'Tom',
    id:104,
    company:'XYZ',
}
console.log(employeDetal);
interface car{
    name:string;
    // model:string;
}
interface model extends car{
    model:string;
} 

let myCar:model = {
    name:'Mercedez',
    model:'G-wagon'
}
console.log(myCar)
// INTERFACE IN OPPS
interface clasObj1{
    name:string,
    rollNo:number,
    
}
interface clasObj2{
    skills:string[],
}
interface clasObj extends clasObj1,clasObj2{};
class Person2 implements clasObj{
    constructor(public name:string,public rollNo:number,public skills:string[], readonly age:number){}
}
let newPerson = new Person2('Jerry',204,['Metaverse'],30);
console.log(newPerson);

//TYPE IN OPPS
type clasType = {
    name:string,
    model:string,
}
class Car4 implements clasType{
    constructor(public name:string,
       public  model:string, readonly price:number) {}
}
let newCar = new Car4('Mercedez','G-wagon2',300000);
console.log(newCar)