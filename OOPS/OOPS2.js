var obj1 = {
    x: 5,
    y: 5,
};
var obj2 = {
    x: 5,
    y: 3,
};
obj1 = obj2;
console.log(obj1);
var obj3 = {
    name: "TOm",
    age: 10,
    callName: function () {
        console.log(this.name);
    }
};
var obj4 = {
    name: "Jerry",
    age: 8,
};
obj4 = obj3;
console.log(obj4.name);
//structure typing in function
var func1 = function (a) {
    console.log(a);
};
var func2 = function (a) {
    return a;
};
func1 = func2;
console.log(func1(5));
//Using class
var Student1 = /** @class */ (function () {
    function Student1(name, id) {
        this.name = name;
        this.id = id;
    }
    Student1.prototype.callStud = function () {
        console.log("The Name of the Student is ".concat(this.name));
    };
    return Student1;
}());
;
var Student2 = /** @class */ (function () {
    function Student2(name, id) {
        this.name = name;
        this.id = id;
        this.callStud = function () {
            console.log("The Name of the Student is ".concat(this.name));
        };
    }
    return Student2;
}());
;
var studOne = new Student1("Tom", 1);
var studTwo = new Student2("Jerry", 2);
studOne = studTwo;
studOne["nam"] = "Hello";
console.log(studOne);
console.log(studTwo);
//Typing Confusin in sructural typing
var StudConf = { name: "Ben", id: 1, callStud: function () {
        console.log(this.name);
    } };
console.log(StudConf instanceof Student1);
StudConf.callStud();
var calculateArea = function (shape) {
    if ("radius" in shape) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return shape.width * shape.height;
    }
};
// Valid objects
var circle = { name: "Circle", radius: 5 };
var rectangle = { name: "Rectangle", width: 10, height: 5 };
console.log(calculateArea(circle)); // Correctly calculates the area of a circle
console.log(calculateArea(rectangle)); // Correctly calculates the area of a rectangle
// Type confusion example
var confusedShape = { name: "Confused", radius: "large" }; // Incorrect type
console.log(calculateArea(confusedShape));
