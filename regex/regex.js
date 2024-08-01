//Non-Capturing Group
var regx = /^(?:[a-z]+)$/;
var str = "helloWorld";
console.log(str.match(regx));
if (str.match(regx)) {
    console.log("valid");
}
else {
    console.log("invalid");
}
;
