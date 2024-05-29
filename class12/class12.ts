// Generics With Function
const funcGen = <T>(a:T,b:T):T =>{
    if(typeof a === "number" && typeof b === "number"){
       return (a + b) as any;
    }else{
       return (`${a} ${b}`) as any;
    }
};
funcGen<number>(5,5);

funcGen<string>("Hello","World");
const funcAny = (a:any,b:any):any =>{
   return a+b;
};
funcAny(9,9);
funcAny("Hello","World");

// const funcArr = <T>(a:T):T => {
//     if(typeof a === "object"){
//       return a as any;
//     }else if(typeof a === "boolean"){
//       return a as any;
//     }
// }
// let savFuncArr = funcArr<number[]>([1,2,3,4,5,6,7]);  //Generics makes Code Reusable
// let savFuncArr2 = funcArr<boolean>(true);
// console.log(savFuncArr);
// console.log(savFuncArr2);


// Generics Constraints
// Agr generics ko kisi specific data type ke saath used krna ho to num generics constraint ka used krte hn 
const funcGenConstr = <T extends number>(a:T):T => {
   return a;
}
console.log(funcGenConstr(56));
// console.log(funcGenConstr("67"));  provide error


// Generics with class
// class GenClass<T,U>{
//     constructor(public name:T) {}
//     callGen():U{
//         return 44 as U;
//     };
// };
// let genClass = new GenClass<string,number>("Sam");
// console.log(genClass.callGen());

