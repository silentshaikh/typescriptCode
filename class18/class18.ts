// //callback hell
// const funcCall = (cb:(a:number) => void) => {
//     setTimeout(() => {
//         cb(5)
//     }, 2000);
//     // console.log("Hello Number");
// };
// let callBackHell:() => void =  funcCall((a:number) => {
//     funcCall((b:number) => {
//         funcCall((c:number) => {
//             funcCall((d:number) => {
//                 funcCall((e:number) => {
//                     funcCall((f:number) => {
//                         return a+b+c+d+e+f;
//                     });
//                 })
//             })
//         })
//     })
// });
// debugger;
// console.log(1)
// console.log(2)
// console.log(3)
// setTimeout(() => {
//     console.log(4)
// }, 3000);
// console.log(5)
// console.log(6)
// setTimeout(() => {
//     console.log(7)
// }, 2000);

const user = (email:string,passwrd:number,cb:(e:string) => void) => {
    setTimeout(() => {
        cb(email)
    }, 2000);
};
const userVideo = (cb:(video:string[]) => void) => {
    setTimeout(() => {
        cb(["one","two","three"])
    }, 2000);
}
user('user@gmail.com',1234,(email:string) => {
    console.log(`The Email is ${email}`);
    userVideo((video:string[]) => {
        console.log(`The Video of this email ${email} is ${video[0]}.`)
    })
})