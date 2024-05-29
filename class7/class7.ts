// Operator
// Arithmetic operator
// +-*/
let a1:number = 5;
let b1:number = 5;
let c1:number = a1+b1;
console.log('Addition')
console.log(c1);
console.log('Subtraction')
console.log(c1-2);
console.log('Multiplication')
console.log(c1*2)
console.log('Division')
console.log(c1/2)
console.log((c1+c1)*2);

//Assignment Operators
var d1; //decralation
d1 = 5; //assignment
d1 = 6;
d1 += 8;  // d1 = d1+8;

console.log(d1)
// Comparison Operators

// console.log(5=="5");
// console.log(5==="5");
// console.log(5!="5");
// console.log(5!=="5");
console.log(5>6);
console.log(5<6);
console.log(5>=5);
console.log(5<=4)
enum SignUP{
    admin = "admin",
    user = "user",
};
let obj = {
    name:"Abdul Moiz",
    id:1200,
    signUp:"",
    showName:function(){
        console.log(`${this.name} is a ${this.signUp}`)
    }
}
let sign = "user";
if(sign.toLowerCase() === SignUP.admin.toLowerCase()){
    obj.signUp = SignUP.admin;
}else{
    obj.signUp = SignUP.user;
}
console.log(obj);
obj.showName();
console.log(typeof SignUP)
enum Direction{
    North = "North",
    South = "South",
};
let direction:string = Direction.North;
direction = Direction.South;
console.log(direction);
// direction = "South";  basically type string not assign to type enum
const consObj = {
    name:"Sam",
}as const ;
// consObj.name = "moiz"
console.log(consObj);
//never
// const fucn  = ():never => {
//     throw new Error()
// }
// fucn()
// const funcVoid = () => {
//     console.log("Hello")
// }
// funcVoid()
let objFuc = {
    name:"Abdul Moiz",
    func:() =>{
     console.log(this)   
    }
}
objFuc.func();
// Function Scope
//Function Decralation
function parenFunc(a:number):(b:any) => any{
    return function(b:any):any{
        return b;
    }
}
console.log(typeof parenFunc);
console.log(parenFunc(5)(this))
//Function Expression
let funcExpres = function(a:any):(b:any) => any {
    return function(b:any):any{
        return b;
    }
};
console.log(funcExpres(3)(this))
console.log(typeof funcExpres)
//Arrow Function
const func5 = (a:number) => (b:any):object =>  {
    return (b:object):object => {
        return b;
    }
}
console.log(func5(5)(this))
console.log(typeof func5)
function cal():void{
    console.log("Hello WOrld");
};
console.log(typeof cal);
const callArro = () => {
    console.log("Arrow Fucntion")
};
console.log(typeof callArro);