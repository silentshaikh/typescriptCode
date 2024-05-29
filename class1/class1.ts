let myName = "Abdul Moiz";
console.log(myName);
let longText =
  "lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, amet aut asperiores sunt nobis totam. Esse, dolor optio. Ex odit, veritatis nam inventore est quam delectus consequatur aliquid vitae? In.";
let shortText = longText.substring(0, 9);
console.log(shortText);
let str1 = "Hello";
let str2 = "Hello";
let areEqual: boolean = false;
if (str1 === str2){
  areEqual = true;
}else{
  areEqual = false;
};
console.log(areEqual);
let product = "IPhone 15 Pro Max";
let price = 1000;
let tempLitrl = `The Product ${product} price is ${price} Dollars`;
console.log(tempLitrl);
// BigInt
// let num:number = 99999999999999999;
// console.log(`Not a BigInt ${num}`)
// let bigNum:bigint = 999999999999999999999999n;
// console.log(`BigInt ${bigNum}`);
let a = "abcd";
let b = "ab";
console.log(a > b);
console.log(a < b);
// BMI Calculator
// let widthInKg = 50;
// let heightInKg = 30
// let bmiCalc = widthInKg/(heightInKg*heightInKg);
// console.log(`The BMI is : ${bmiCalc}`)

//Rock Paper Scissor
// let playr1 = 'Rock';
// let playr2 = 'Scissors';
// if(playr1 === playr2){
//     console.log("It's a Tie")
// }else if((playr1 === 'Rock' && playr2 === 'Scissors')||(playr1 === 'Scissors' && playr2 === 'Paper')||(playr1 === 'Paper' && playr2 === 'Rock')){
//     console.log('Playr1 Won')
// }else{
//     console.log('Playr2 Won')
// }
// function return another function
// const multiplier = (a:number) => (b:number):number => a*b;
// let tripl = multiplier(5);
// console.log(tripl(4))
// recursive function
// const factorl = (fact:number):number => {
//     if(fact === 0){
//         return 1;
//     }
//     return fact*factorl(fact-1);
// };
// console.log(factorl(5))
// nested function
const outerFunc = (x: number): void => {
  const innerFunc = (): void => {
    console.log(++x);
  };
  innerFunc();
};
outerFunc(5);
const obj = {
  name:"moiz",
} as const;
obj.name = 'tom';
console.log(obj)