class Student{
    constructor(public name:string, readonly rollNo:number,private subject:string[]) {
    }
    callSub(){
        return  [...this.subject];
    }
}
let studOne = new Student('Abdul Moiz',104,['AI','Blockchain']);
console.log(studOne)
console.log(studOne.callSub())
console.log(studOne);

// Inheritance
class Moniter extends Student{
 constructor(name:string,rollNo:number,subject:string[], private isMonitr:string){
    super(name,rollNo,subject);
 }   
 callMonitr(){
    return this.isMonitr; 
}
}
let monitr:Moniter = new Moniter("Ben",101,['Math'],'YES');
console.log(monitr)
// console.log(monitr.callMonitr().toLowerCase())
console.log(monitr.callMonitr())
console.log(monitr)

// static Methods
class Persn{
    constructor(public name:string, readonly id:number) {
        
    }
    static calPers(){
        return `The name of person is ${this.name}`;
    }
}
let perso = new Persn('Harry',101);
console.log(perso)
console.log(Persn.calPers())

// getter and setter
class GetData{
    constructor(public price:number) {
        
    }
    get data(){
        return this.price;
    }
    set setDta(value:number){
        this.price = value;
    }
}
let dta:GetData = new GetData(34);
console.log(dta);
// dta.data = 45; 
dta.setDta =45; 
console.log(dta);