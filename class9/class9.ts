let a:undefined;
a = 78;
console.log(a);
console.log(typeof a);
let b = 78;
// strickNullChecks hame avoid krta kisi bhi value wale variable ma agr hum undefied and null reassign kre to
b = null;
b = undefined;
let c:null = null;
c = 89;
let d:string;
d = null;
let e:number = undefined;
console.log(typeof e);
function checkType(calue:string|null){
    if(calue !== null){
        console.log("this value is not null");
    }else{
        console.log("this value is  null");
    }
};
checkType(null);
