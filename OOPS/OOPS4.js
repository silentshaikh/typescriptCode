var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract classes
var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.classId = function () {
        console.log(this.id);
    };
    return Person;
}());
//abstract class cannot create its instance
// let persn:Person = new Person("Hello",3)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, id, isEmployee) {
        var _this = _super.call(this, name, id) || this;
        _this.name = name;
        _this.isEmployee = isEmployee;
        return _this;
    }
    ;
    Employee.prototype.callName = function () {
        if (this.isEmployee) {
            console.log("The Name of the Employee is ".concat(this.name, "."));
            _super.prototype.classId.call(this);
        }
        else {
            console.log("This is not a Employee");
        }
        ;
    };
    return Employee;
}(Person));
;
var emplye = new Employee("Tom", 1, true);
emplye.callName();
// emplye.classId();
