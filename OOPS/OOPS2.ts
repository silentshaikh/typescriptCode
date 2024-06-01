//structural typing in typescript
//structural typing in objects
//Kisi Object ya Function unke structure ki base pr compare krwana structural typing hoti ha
interface Obj1{
    x:number,
    y:number,
}
interface Obj2{
    x:number,
    y:number,
}
let obj1:Obj1 = {
    x:5,
    y:5,
}
let obj2:Obj2 = {
    x:5,
    y:3,
};
obj1 = obj2;
console.log(obj1)
interface Obj3{
    name:string,
    age:number,
    callName:() => void,
}
interface Obj4{
    name:string,
    age:number,
}
let obj3:Obj3 = {
    name:"TOm",
    age:10,
    callName:function(){
        console.log(this.name)
    }
};
let obj4:Obj4 = {
    name:"Jerry",
    age:8,
};
obj4 = obj3;
console.log(obj4.name);

//structure typing in function
let func1 = (a:number):void => {
    console.log(a)
};
let func2 = (a:number):number => {
    return a;
}
func1 = func2
console.log(func1(5))
//Using class
class Student1{
    constructor(public name:string,public id:number) {}
    callStud(){
            console.log(`The Name of the Student is ${this.name}`)
        }
};
class Student2{
    callStud:() => void;
    constructor(public name:string,public id:number) {
        this.callStud = function(){
        console.log(`The Name of the Student is ${this.name}`);
    }
    }
    // callStud(){
    //     console.log(`The Name of the Student is ${this.name}`)
    // }
};
let studOne:Student1 = new Student1("Tom",1);
let studTwo:Student2 = new Student2("Jerry",2);
studOne = studTwo;
studOne["nam"] = "Hello"
console.log(studOne);
console.log(studTwo);