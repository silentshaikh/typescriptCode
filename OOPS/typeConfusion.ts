//Typing Confusin in sructural typing
class Student3{
    constructor(public name:string,public id:number) {}
    callStud(){
            console.log(`The Name of the Student is ${this.name}`)
        }
};
let StudConf :Student3 = {name:"Ben",id:1,callStud:function():string{
    return "hello";
}};
console.log(StudConf instanceof Student3);
console.log(StudConf.callStud());