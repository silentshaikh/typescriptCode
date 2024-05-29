//Union Types
let name:string|number = "Hello World";
name = 67
//Type Narrowing
if(typeof name === "number"){
    console.log(name.toFixed(2))
//   console.log(nameArr)
}else if(typeof name === "string" ) {
    console.log(name.toUpperCase());
};
interface Reactangular{
    name:string,
    type:string
}
interface Circle{
    name:string,
    radius:number;
}
const callShape = (shape:Circle|Reactangular):number|string|undefined => {
  if( "radius" in shape){
   return  shape.radius ;
  }else{
   return shape.type;
  }
}
console.log(callShape({name:"Hel",radius:45}))

interface Bird{
  fly: () => void;
}
interface Fish{
  swim: () => void;
}
const callAnimal = (anim:Bird|Fish) => {
  if("swim" in anim){
    anim.swim()
  }else{
    anim.fly()
  }
};
let fish:Fish = {
  swim(){
    console.log("Swim");
  }
} 
let bird:Bird = {
  fly(){
    console.log("Fly");
  }
} 
callAnimal(fish)
//Using instanceof
class Cat{
  meow(){
    console.log("Meow")
  }
}
class Dog{
  bark(){
    console.log("Bow Bow!")
  }
}
const instncOf = (pet:Cat|Dog) =>{
  if(pet instanceof Cat){
    pet.meow()
  }else{
    pet.bark()
  }
};
let dog = new Dog();
let cat = new Cat();
instncOf(dog)


interface Square {
  sideLength: number;
}

interface Triangle {
  base: number;
  height: number;
}
const typeNarow = (shape:Square|Triangle) => {
  if("sideLength" in shape){
    console.log(shape.sideLength**2);
  }else{
    console.log(0.5*shape.base*shape.height);
  }
}
let squre:Square = {sideLength:4};
let tringl:Triangle = {base:4,height:5};
typeNarow(squre);
typeNarow(tringl)
//Type Literal
let age:14 = 14;
console.log(age);