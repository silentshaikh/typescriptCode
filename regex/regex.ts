//Non-Capturing Group
let regx = /^(?:[a-z]+)$/;
let str = "helloWorld";
console.log(str.match(regx));
if(str.match(regx)){
    console.log("valid");
}else{
    console.log("invalid");
};