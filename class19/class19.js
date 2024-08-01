//Promises
// const ourPromise = () => {
//     return new Promise((resolve,reject) => {
//         let a = 6;
//         if(a){
//             resolve(a)
//         }else{
//             reject("Error Through")
//         }
//     })
// }
// ourPromise().then((res) => {
//     if(res === 5){
//         console.log(res)
//     }else{
//         throw new Error("Error");
//     }
// }).then((res) => {
//     console.log(res)
// })
// .catch((error) => {
//     console.log(error)
// Promises Using API
// const apiPromise= () => {
//   return new Promise((resolve,reject) => {
//     let ourApi = fetch(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
//       if(res.ok){
//         resolve(res.json())
//       }else{
//         reject("API was not Found");
//       }
//     })
//   })
// }
// apiPromise().then((res) => {
//   (res as apiData[]).forEach((e) => {
//     console.log(e.title)
//   })
// }).catch((error) => {
//   console.log(error);
// });
//Using Async Await
// const getApi = async () => {
//   let ourFetch = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//   console.log(ourFetch)
//   let ourData:apiData[] = await ourFetch.json();
//   console.log(ourData);
// }
// getApi();
// const promiseONe = (a:number) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(a===5){
//         resolve(a)
//       }else{
//         console.log("A not Found");
//       }
//     }, 2000);
//   });
// };
// const promiseTwo = (b:number,c:number) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(b===5){
//         resolve(b+c);
//       }else{
//         reject("B not Found")
//       }
//     }, 2000);
//   })
// };
// promiseONe(5).then((res) => {
//   return promiseTwo(5,res as number);
// }).then((res1) => {
//   console.log(res1)
// }).catch((error) => {
//   console.log(error);
// });
var fetchData = function (cb) {
    var val = 5;
    setTimeout(function () {
        if (val) {
            cb(val);
        }
        else {
            console.log("Value not Found");
        }
    }, 2000);
};
//Callback Hell
fetchData(function (b) {
    // console.log(`${b} is available`)
    fetchData(function (c) {
        fetchData(function (d) {
            fetchData(function (e) {
                fetchData(function (f) {
                    fetchData(function (g) {
                        console.log(b + c + d + e + f + g);
                    });
                });
            });
        });
    });
});
