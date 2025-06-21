// //This is asynchronus programming

// function hello(){
//     console.log("Hello 2");
// }
// console.log("hello 1")
// setTimeout(hello,3000)//1sec=1000 mili seconds;
// console.log("hello 3")

// this is synchronus programming

// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");
 

// let age=19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");

// }

//here if we want data after one but here is we run this code
//it run all immediately 

// function getData(data){
//     setTimeout(()=>{
//         console.log("Data",data);
//     },2000);
// }
// getData(1);
// getData(2);
// getData(3);


//solution is:

// function getData(data,getNextdata){
//     setTimeout(()=>{
//         console.log("Data", data);
//         if(getNextdata){
//             getNextdata();
//         }

//     },2000);
// }
//This is known as callback hell

// console.log("getting data 1");
// getData(1,()=>{
//     console.log("getting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(3);
//     });
// });

//For resolve this callback hell js introduce promise

      //      promise
     //  /      |          \
  //(pending)  (resolve)  (reject)
// let promise=new Promise((resolve,reject)=>{//resolve and reject are the handler in the promise
//     console.log("This is our promise");
//     // resolve("Success");//This resolve and reject auto creatud by js
//     // reject("unsuccessfull...");

// });

//here the function simply shows that how the API's works

// function getData(data,getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",data);
//             resolve("Fullfilled");
//             if(getNextdata){
//                 getNextdata();
//             }  
//         },5000);
//     });
// }
// let result=getData(123);

//here we shown that how to use the promise

// const getfun=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("This is the promise");
//         resolve("Success");
//         // reject("unsuccess");
//     });
// }


// these are the ways through which we use the promises;

// let promise=getfun();
// promise.then((res)=>{//in the parameter of then() & catch() there is result & error parameter that 
//     //shows the msg that we pass at the tym of promise
//     console.log("promise fullfilled",res);
// })

// promise.catch((err)=>{
//     console.log("promise is rejected",err);
// })
    

//these are the works that api works 

// function asyncfun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data_1");
//             resolve("Success...");
//         },4000);//run after 4 sec later
//     });
// }
// console.log("Fetching Data_1");
// let p1=asyncfun();//we have this promise 
// p1.then((res)=>{//And here we just put the .then() on the promise
//     console.log(res);
// });


//promise chaining 

// function asyncfun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data_1");
//             resolve("fetched");
//         },4000);
//     });
// }

// function asyncfun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data_2");
//             resolve("fetched");
//         },4000);
//     });
// }

// let p1=asyncfun1();
// console.log("fetching data_1");
// p1.then((res)=>{
//     console.log(res);
//     let p2=asyncfun2();
//     console.log("fetching data_2");
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

//async Await

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data->" ,data);
            resolve("success");
        }, 1000);
    });
}

(async function asyncfun() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();
// asyncfun();


//This is IIFE -> "immediately invoke function expression";
//in the IIFS there is no need of call the the function physically;

// (async function(){  //through simple fun
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
// })();

// (async ()=>{      //Through arrow function
//         await getData(1);
//         await getData(2);
//         await getData(3);
//         await getData(4);
// })();