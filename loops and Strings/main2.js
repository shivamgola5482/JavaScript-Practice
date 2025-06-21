//FOR loop

// for(let i=0;i<5;i++){
//     console.log("aagLagaDi");
// }
// console.log("Loop has ended");

//print the sum of 1 to n numbers
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum +i;
// }
// console.log("Sum =",sum);

//While Loop
// let i=0;
// while(i<5){
//     console.log("Shivam");
//     i++;
// }

//Do While loop 
// let i=1;
// let sum=0;
// do{
//     sum=sum +i;
//    // console.log("Shivam");
//     i++;
// }while(i<=5);
// console.log("Sum =",sum);

//For of loop 
//this loop we generally use in the strings
// let str="Shivam";
// let size=0;
// for(let i of str){
//     size++;;
//     console.log(size,i);
// }
// }//In this loop there is no need of the
//  initalize or iterate it like "i++"

//For in loop 
//this generally use in the objects or arrays 

const student={
    Name:"Shivam",
    Age:22,
    Role:"Software Engineer"
};
for(let i in student){
    console.log(i,student[i]);
}

// Excercise 1
//Print all even from 1 to 100

// let num=1;
// for(let i=0;i<100;i++){
//     if(num%2==0){
//         console.log(num);
//     }
//     num++;
// }

// excercise 2

// let gameNum=25;
// let userNum=prompt("Enter the game number");
// while(userNum != gameNum){
//      userNum=prompt("Wrong num Enter the game number");
    
// }
// console.log("Yes you find it 😊");

//Strings

// //String length
// let str="Shivam";
// console.log(str.length);

//String indices
// console.log(str.length);
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// template literals

//this is a special strings cn be written in the back ticks
// let str=`this is a special string`;
// console.log(str);
//The benifit of this special string is

// let product={
//     item:"pen",
//     cost:50,
//     color:"Black"
// };
// console.log("This is a",product.item," and the cost is ",product.cost," and the color is ",product.color);
//here we see that for write that line we have to seperate with the "," comma 
//Instead of these commas we can use the template literals like 
// let output=`This is a ${product.item} and it's cost is ${product.cost} and it's color is ${product.color}`;
// console.log(output);
//Note:
//${product.cost}=This is known as string interpolation

//Escape characters 

// \n, \t
//Note: the length of the escape character is counted as one means
// \n counted as 1;
//  let str="Shivam Gola"
// console.log(str.length);
// console.log("Shivam\nGola");
// console.log("Shivam\tGola");

//String Methods

//  let str="Shivam Gola"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//Practice

// let userName=prompt("Enter the Name");
// let output="@"+userName+userName.length;
// console.log(output);
// console.log("@",str,str.length);
