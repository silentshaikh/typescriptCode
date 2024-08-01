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
//Mix of Number and String
var Heterogenous;
(function (Heterogenous) {
    Heterogenous[Heterogenous["no"] = 0] = "no";
    Heterogenous["yes"] = "Yes";
})(Heterogenous || (Heterogenous = {}));
;
console.log(typeof Heterogenous.no);
console.log(typeof Heterogenous.yes);
//Computed Enum
var Computed;
(function (Computed) {
    Computed[Computed["a"] = 25] = "a";
    Computed[Computed["b"] = 26] = "b";
    Computed[Computed["c"] = 27] = "c";
})(Computed || (Computed = {}));
//Reverse Mapping 
// this is only in number
var Num;
(function (Num) {
    Num[Num["Apple"] = 0] = "Apple";
    Num[Num["Banana"] = 1] = "Banana";
})(Num || (Num = {}));
;
var num = Num[0];
console.log(num);
//Enum Member Types
//Mean Enum ma jo kuch bhi ha wo
var Memb;
(function (Memb) {
    Memb[Memb["mon"] = 0] = "mon";
    Memb[Memb["tue"] = 1] = "tue";
    Memb[Memb["wed"] = 2] = "wed";
    Memb[Memb["thurs"] = 3] = "thurs";
    Memb[Memb["fri"] = 4] = "fri";
    Memb[Memb["sat"] = 5] = "sat";
    Memb[Memb["sun"] = 6] = "sun";
})(Memb || (Memb = {}));
;
var enmMemb = Memb.fri;
//Union Enum
var ColorOne;
(function (ColorOne) {
    ColorOne[ColorOne["red"] = 0] = "red";
    ColorOne[ColorOne["green"] = 1] = "green";
    ColorOne[ColorOne["blue"] = 2] = "blue";
})(ColorOne || (ColorOne = {}));
;
var ColorTwo;
(function (ColorTwo) {
    ColorTwo[ColorTwo["black"] = 0] = "black";
    ColorTwo[ColorTwo["pink"] = 1] = "pink";
    ColorTwo[ColorTwo["purple"] = 2] = "purple";
})(ColorTwo || (ColorTwo = {}));
;
var colr = ColorOne[0];
console.log(colr);
