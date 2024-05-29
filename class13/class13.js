// console.log(true&&false);
// function callBug(a:number,b:number){
//     debugger;
//     console.log(a+b)
// }
// debugger;
// callBug();
// let arr = [1,2,3,4,5,6,7,8]
// console.log(arr.forEach((e,i,a) => {
//     console.log(e)
// }));
// Type Assertion
// let asser:any;
// asser = "He";
// (asser as string)
//Map()
var ourMap = new Map();
ourMap.set("name", "Tom");
ourMap.set("skills", "AI");
console.log(ourMap);
console.log(typeof ourMap);
//get Values;
console.log(ourMap.get("skills"));
// loop through map;
ourMap.forEach(function (e) {
    console.log(e);
});
//Sets
var uniqArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 3, 2];
console.log(uniqArr);
var setUinqArr = new Set(uniqArr);
console.log(setUinqArr);
//Convert To Array
console.log(Array.from(setUinqArr));
