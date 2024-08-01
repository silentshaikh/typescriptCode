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

// })
// let userDetail = [
//   { email: "user@gmail.com", pass: 1234, video: "one" },
//   { email: "abc@gmail.com", pass: 4567, video: "two" },
// ];
// let userPromise = (email: string, password: number) => {
//   let findEmail = userDetail.find((e) => e.email === email);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (findEmail) {
//         resolve(email);
//       } else {
//         reject("Email was not found");
//       }
//     }, 2000);
//   });
// };
// let videoPromise = (email: string) => {
//   let findEmail = userDetail.find((e) => e.email === email);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (findEmail?.video) {
//         resolve(`The Video of this email ${email} is ${findEmail.video}`);
//       } else {
//         reject("Video not Found");
//       }
//     }, 2000);
//   });
// };
// userPromise("abc@gmail.com",1234).then((response) => {
//     console.log(response);
//     return videoPromise(String(response))
// }).then((resp1) => {
//     console.log(resp1);
// }).catch((error) => {
//     console.log(error);
// });
// console.log(userPromise("abc@gmail.com",1234));
// setTimeout(() => {
// console.log(userPromise("abc@gmail.com",1234));

// }, 8000);

//Async Await
// const asyncAwait = async () => {
//   try {
//     let userEmail = await userPromise("abc@gmail.com", 1234);
//     console.log(userEmail);
//     let userVideo = await videoPromise(userEmail as string);
//     console.log(userVideo);
//   }catch (error) {
//     console.log(error);
//   };
// };
// console.log(asyncAwait());
// console.log(asyncAwait());
interface apiData {
  alBumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

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

const promiseONe = (a:number) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(a===5){
        resolve(a)
      }else{
        console.log("A not Found");
      }
    }, 2000);
  });
};
const promiseTwo = (b:number,c:number) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(b===5){
        resolve(b+c);
      }else{
        reject("B not Found")
      }
    }, 2000);
  })
};
promiseONe(5).then((res) => {
  return promiseTwo(5,res as number);
}).then((res1) => {
  console.log(res1)
}).catch((error) => {
  console.log(error);
});
//Callback
const fetchData = (cb: (a: number) => void) => {
  let val = 5;
  setTimeout(() => {
    if (val) {
      cb(val);
    }else {
      console.log("Value not Found");
    };
  }, 2000);
};
//Callback Hell
fetchData((b: number) => {
  // console.log(`${b} is available`)
  fetchData((c: number) => {
    fetchData((d: number) => {
      fetchData((e:number) => {
        fetchData((f:number) => {
          fetchData((g:number) => {
            console.log(b+c+d+e+f+g);
          });
        });
      });
    });
  });
});
