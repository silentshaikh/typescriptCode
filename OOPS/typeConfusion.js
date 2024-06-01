//Typing Confusin in sructural typing
var Student3 = /** @class */ (function () {
    function Student3(name, id) {
        this.name = name;
        this.id = id;
    }
    Student3.prototype.callStud = function () {
        console.log("The Name of the Student is ".concat(this.name));
    };
    return Student3;
}());
;
var StudConf = { name: "Ben", id: 1, callStud: function () {
        return "hello";
    } };
console.log(StudConf instanceof Student3);
console.log(StudConf.callStud());
