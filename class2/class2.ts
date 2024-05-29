// Any
let arr:unknown = ['a','b','c','d','e','f','g','h'];
// console.log(arr);
arr = 24;
// console.log(arr.toString());
if(typeof arr === 'number'){
    console.log(arr.toString())
}else{
    console.log('not a Number')
}
// Type Alias
type Arr =[string,number,boolean];
let arr1:Arr = ['Apple',12,true];
console.log(arr1);
interface Person{
    name:string,
    city:string,
    country:string,
    skills:string[],
}
let persn:Person = {
    name:'Abdul Moiz',
    city:'Washington DC',
    country:'USA',
    skills:['Generative AI','Blockchain'],
}
console.log(persn)
enum Roles{
    user='user',
    admin='admin',
}
interface SignUp{
    name:string,
    email:string,
    role:Roles,
}
let user1:SignUp = {
    name:'Sam',
    email:'xyz@gmail.com',
    role:Roles.user,
}
let user2:SignUp = {
    name:'Ben',
    email:'abc@gmail.com',
    role:Roles.admin,
}
const greetSignUp = (users:SignUp):string => {
    return users.role === 'user' ? `${users.name} is a User`: `${users.name} is a Admin`;
};
console.log(greetSignUp(user1));
console.log(greetSignUp(user2));