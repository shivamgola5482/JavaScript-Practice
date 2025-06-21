// let arr=[20, 30, 40, 50, 60];
// console.log(arr);
// console.log(arr.length);//this is the property of array
//Note:- property gives us a value and the methods do work for us;

// let cars=["audi", "BMW", "ferrari", "alto"];
// console.log(cars);

//Array indices
// 
// let num=[10, 30, 50, 34, 69, 70];
// // console.log(num[5]);
// num[1]=20;
// console.log(num[1]);

//Note:- in js strings are immutable and arrays are mutable

// //using for loop 
// let num=[10, 30, 50, 34, 69, 70];
// for(let i=0;i<num.length;i++){
    //     console.log(num[i]);
    // }
    
    //using for of loop 
    
    // let num=[10, 30, 50, 34, 69, 70];
    // for(let i of num){
    //         console.log(i);
    //     }
        
        //Using for in loop 
        
        let num=[10, 30, 50, 34, 69, 70];
        for(let i in num){
            console.log(num[i]);
        }

        // practice 
        //find the average of and array

        // let arr=[85, 97, 44, 37, 76, 60];
        // let sum=0;
        // for(let i=0;i<arr.length;i++){
        //     sum +=arr[i];
        // }
        // let avg=sum/arr.length;
        // let output=`The avg of the array is ${avg}`;
        // console.log(output);

        // practice 
        //print the array after minus 10% from the value

        // let arr=[250, 645, 300, 900, 50];
        // let offer=0;
        // console.log(arr);
        // for(let i=0;i<arr.length;i++){
        //       offer+=arr[i]/10;
        //        arr[i]-=offer;
        //        offer=0;
        //     }
        //     console.log(arr);
            
            //Methods of arrays
            
            // let arr=[250, 645, 300, 900, 50];
            // console.log(arr);
            // console.log(arr.push(2));
            // console.log(arr);
            // console.log(arr.pop());
            // console.log(arr);

        //     let marvelHeros=["IronMan", "Hulk", "Thor", "antMan"];
        //     let dcHeros=["superMan", "SpiderMan", "batMan"];
        //    let arr= marvelHeros.concat(dcHeros);
        //    console.log(arr);

        //unshift=push difference is it joint  the item at the start 
        //shift=pop remove item from the first place

        // let arr=[1, 2, 3, 4, 5, 6, 7, 8];
        // console.log(arr);
        // console.log(arr.unshift(0));
        // console.log(arr);
        // console.log(arr.shift());
        // console.log(arr);
        
        // let arr=[0, 1, 2, 3, 4, 5, 6, 7, 8];
        // console.log(arr.slice(0, 4));//same as the string slice method
        // //But this method doesn't change in the original array
        // console.log(arr.slice());
        // //we also use this method for creating the copy of the array
        // console.log(arr);
        
        // let arr=[0, 1, 2, 3, 4, 5, 6, 7, 8];
        // console.log(arr.splice(2,3,20,30,40));
        // //This splice(start_idx, deleted_item_count, add_or_replace_item)
        // //  method change the original array 
        // console.log(arr);

// let arr=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//remove first item ...
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

//remove uber and add ola in it's place

// console.log(arr);
// console.log(arr.splice(2,1,"OLA"));
// console.log(arr);

//Add Amaxon at the end

// console.log(arr);
// // console.log(arr.splice(6,0,"Amazon"));
// console.log(arr.push("Amazon"));
// console.log(arr);




            
            
            
