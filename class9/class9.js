"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 78;
console.log(a);
console.log(typeof a);
let b = 78;
// strickNullChecks hame avoid krta kisi bhi value wale variable ma agr hum undefied and null reassign kre to
b = null;
b = undefined;
let c = null;
c = 89;
let d;
d = null;
let e = undefined;
console.log(typeof e);
function checkType(calue) {
    if (calue !== null) {
        console.log("this value is not null");
    }
    else {
        console.log("this value is  null");
    }
}
;
checkType(null);
