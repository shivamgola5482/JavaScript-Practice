// function myfun(){//This is function definition
//     console.log("Hey i'm shivam ");
//     console.log("I am learning javaScript");
// }
// myfun();// this is function invoke or function call

// function myfun(msg){// parametrized function
//     console.log(msg);
// }
// myfun("HEllO");//argument while calling the fun
// myfun(prompt("enter the message!!"));

//We cn also return a function 

// function myfun(a,b){
//     sum=a+b;
//     return sum;
// }
// console.log(myfun(20,20));

//Note:- function variables are the local variables -> means they 
//have the block scope in the function

//Arrow function 
// const pappu=()=>{
//     console.log("hello World");
// }
// pappu();

// const arrowfun=(a,b)=>{
//     console.log(a+b);
//     s=a+b;
//     return s;
// }
// console.log("=>---->",arrowfun(5,5));
// console.log(arrowfun);


// function myfun(a,b){
//     console.log(a*b);
// }

// const myfun2=(a,b)=>{
//     console.log(a*b);
// }
// myfun(3,2);
// myfun2(3,2);

// const arrowfun=()=>{
//     console.log("Hello World");
// }
// arrowfun();

// practice print the count of vowles in the given strings
// function myfun(str){
//     let cnt=0;
//     for(let i of str){
//         // console.log(i);
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" ){
//             cnt++;
//         }
//     }
//     console.log(cnt);
//     for(let i=0;i<str.length;i++){
//         console.log(str[i]);
//     }
// }
// myfun("Shivam");

// let cnt=0;
// const myfun2=(str)=>{
//     for(let i of str){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" ){
//             cnt++;
//         }
//     }
//     console.log(cnt);
// }
// myfun2("shivam");

//For each loop 

// let arr=[1, 2, 3, 4, 5, 6];
// arr.forEach(function myfun(val){
//     console.log(val);
//     })
    
    //for each with arrow function
    //we generally use for each loop with call back arrow function 
    //instead of normal function

    let arr=["pune", "delhi", "mumbai", "tamil nadu", "kerela"];
    arr.forEach((val,idx,arr)=>{
        console.log(val.toUpperCase(),idx,arr);
    })

    //Note:- for each loop is an higher order function 
    //higher order fun are those who pass fun as parameter or return a function

// practice 
//print the square of each value of the array

// let arr=[2, 4, 5, 6, 7, 8];
// arr.forEach(function myfun(val){
    //     let num=val * val;
    //     console.log(num);
    // })
    
    //OR
    
    // arr.forEach((val)=>{
        //     console.log(val*val);
        // })
        
//         let val=[2, 4, 5, 6, 7, 8];
// const myfun=(num)=>{
//     console.log(num * num);
// }
// //here we do callback function 
// val.forEach(myfun);

 //Methods of array

// Map
//map generally use for creating new array with using the values
// let arr=[20, 30, 40, 50];
// let myfun=arr.map((val)=>{
// // console.log(val);
// return val;
// })
// console.log(myfun);

//filter 

//in this method we also create a new array 
// it give true or false is condition is T it store in arr else not

// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newnum=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(newnum);

//reduce method

//to use when input is large and want output in one digit 

//print the sum of an array

// let arr=[1, 2, 3, 4];
// const newnum=arr.reduce((result, current)=>{
//     return result + current;
// })
// console.log(newnum);

// //print the largest element

// let arr=[10, 12, 5, 23, 4];
// let newnum=arr.reduce((pre,res)=>{
//     return pre> res ? pre : res;
// })
// console.log(newnum);

// practice 
// filter the marks that greater than 90;

// let score=[90, 82, 92, 95, 70, 88, 99];
// const newnum=score.filter((val)=>{
//     return val>=90;
// })
// console.log(newnum);

//prectice 
//print the sum of an array 

// let num=prompt("Enter the number");
// let arr=[];
// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// const newnum=arr.reduce((pre,res)=>{
//     return pre+res;
// })
// console.log(`The sum of an array is ${newnum}`);

//print the factorial

// let num=prompt("Enter the number");
// let arr=[];
// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// } 
// // console.log(arr);
// const factorial=arr.reduce((prev,val)=>{
//     return prev * val;
// })
// console.log(factorial);
