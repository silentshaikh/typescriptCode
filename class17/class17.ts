//Enums

//It is used for collection of a constant values

//Numeric Enums 
enum Direction{
    u1 ,
    down,
    right,
    left,
}
console.log(Direction.left)

//String Enum
enum Role{
    admin = "Admin",
    user = "User"
};

//Heterogenous Enum
//Mix of Number and String
enum Heterogenous{
    no = 0,
    yes = "Yes",
};
console.log(typeof Heterogenous.no)
console.log(typeof Heterogenous.yes)

//Computed Enum
enum Computed{
    a = 5*5,
    b,
    c,
}

//Reverse Mapping 
// this is only in number
enum Num{
    Apple,
    Banana,
};
let num:string = Num[0];
console.log(num)

//Enum Member Types
//Mean Enum ma jo kuch bhi ha wo
enum Memb{
    mon,
    tue,
    wed,
    thurs,
    fri,
    sat,
    sun,
};
let enmMemb:Memb.fri = Memb.fri; 

//Union Enum
enum ColorOne{
    red,
    green,
    blue,
};
enum ColorTwo{
    black,
    pink,
    purple,
};
type Color = ColorOne | ColorTwo; 
let colr:Color = ColorOne.red;