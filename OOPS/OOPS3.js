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
//constructor
//Case 1
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    return Parent;
}());
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Parent));
;
var parent1 = new Parent("Thomas", 37);
var child = new Child("tom", 10);
console.log(child instanceof Child);
//Case 2
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
;
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, id) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.id = id;
        return _this;
    }
    return B;
}(A));
;
var a = new A();
var b = new B("Ben", 11);
console.log(a);
console.log(b);
//Case 3
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    return C;
}());
;
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D(name, age) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    ;
    return D;
}(C));
var c = new C("Jerry");
var d = new D("Jerry", 8);
console.log(c);
console.log(d);
