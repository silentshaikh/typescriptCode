//Enums
//It is used for collection of a constant values
//Numeric Enums 
var Direction;
(function (Direction) {
    Direction[Direction["u1"] = 0] = "u1";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
console.log(Direction.left);
//String Enum
var Role;
(function (Role) {
    Role["admin"] = "Admin";
    Role["user"] = "User";
})(Role || (Role = {}));
;
//Heterogenous Enum
var Heterogenous;
(function (Heterogenous) {
    Heterogenous[Heterogenous["no"] = 0] = "no";
    Heterogenous["yes"] = "Yes";
})(Heterogenous || (Heterogenous = {}));
;
console.log(typeof Heterogenous.no);
console.log(typeof Heterogenous.yes);
console.log(Heterogenous[0]);
