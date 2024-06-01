//constructor
//Case 1
class Parent{
    constructor(public name:string,public age:number) {}
};
class Child extends Parent{};
let parent1:Parent = new Parent("Thomas",37);
let child:Child = new Child("tom",10);
console.log(child instanceof Child)

//Case 2
class A{};
class B extends A{
    constructor(public name:string,public id:number) {
        super();
    }
};
let a:A = new A();
let b:B = new B("Ben",11);
console.log(a);
console.log(b);

//Case 3
class C{
    constructor(public name:string) {}
};
class D extends C{
    constructor(public name:string,public age:number) {
        super(name);
    };
}
let c:C = new C("Jerry");
let d:C = new D("Jerry",8);
console.log(c);
console.log(d);
