//Abstract classes
abstract class Person{
    abstract callName(): void;
    constructor(public name:string,public id:number ) {}
    classId() {
        console.log(this.id)
    }
    // classEmp :() => void;
}
//abstract class cannot create its instance
// let persn:Person = new Person("Hello",3)
class Employee extends Person{
    constructor(public name:string,id:number ,public isEmployee:boolean){
        super(name,id);
    };
    callName(): void {
        if(this.isEmployee){
            console.log(`The Name of the Employee is ${this.name}.`);
            super.classId()
        }else{
            console.log("This is not a Employee");
        };
    }
};
let emplye:Employee = new Employee("Tom",1,true);
emplye.callName();
// emplye.classId();
