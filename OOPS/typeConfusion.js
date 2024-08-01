"use strict";
//Typing Confusin in sructural typing
class Student3 {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    callStud() {
        console.log(`The Name of the Student is ${this.name}`);
    }
}
;
let StudConf = { name: "Ben", id: 1, callStud: function () {
        return "hello";
    } };
console.log(StudConf instanceof Student3);
console.log(StudConf.callStud());
