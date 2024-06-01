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
enum Heterogenous{
    no = 0,
    yes = "Yes",
};
console.log(typeof Heterogenous.no)
console.log(typeof Heterogenous.yes)
console.log(Heterogenous[0])