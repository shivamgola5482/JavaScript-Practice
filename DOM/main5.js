//These are for Access

//DOM manipulation 
// 1: id
//2: class 
//3: tag 
//4: Query selector:- it works with all like id, class ,and tags as well 

//id

// console.dir(document.body);
// let heading=document.getElementById("heading");
// console.dir

//class 

// let heading=document.getElementsByClassName("heading");
// console.dir(heading);

//tag

// let para=document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);

//query selector

// let div=document.querySelector("div");
// console.dir(div);

// let heading=document.querySelector("h1");
// console.dir(heading);

//practice 

// let heading=document.querySelector("h2");
// console.dir(heading.innerText);
// heading.innerText=heading.innerText+" "+"and that has been done by DOM:Document Object Model";//concatinate

// practice

// let div=document.querySelectorAll(".box");
// console.dir(div);

// for(div of div){
//     console.log(div); 
// }

// div[0].innerText="hey this is div 1";
// div[1].innerText="hey this is div 2";
// div[2].innerText="hey this is div 3";

//These are for changes
// Attribute 

// let div=document.querySelector("div");
// console.log(div);

// let find=div.getAttribute("class");
// console.log(find);

// let name=div.getAttribute("name");
// console.log(name);

// let div=document.querySelector("div");
// console.log(div.getAttribute("name"));

// let ch=document.querySelector("div");
// console.log(ch.setAttribute("name","gola"));

// console.log(ch.getAttribute("name"));

//These are for add on's

//here we first create the new element or tag
// let newbtn=document.createElement("button");
// newbtn.innerText="Click!!";
// console.log(newbtn);


//for add the element  we have to access the tag in which we want to insert
// let div=document.querySelector("div");

//now add the element
// div.append(newbtn);//this method add at the end on div
// div.prepend(newbtn);//this method add at the start of div
// div.before(newbtn);//through this we cn add the element before the tag
// div.after(newbtn);//throught this we cn add after the tag

// let heading=document.createElement("h1");
// heading.innerHTML="<i>This is new.. heading</i>";
let heading =document.createElement("h1");
heading.innerHTML="<i>This is just heading and has to be done by DOM</i>";
let div=document.querySelector("div");
div.before(heading);

// let bodyy=document.querySelector("body");
// bodyy.prepend(heading);

//Or u cn directly apply that ...

// document.querySelector("body").prepend(heading);
// //but we cn do this thing
//  when we us querySelector(); 

//we cn also remove the elements

// let para=document.querySelector("p");
// para.remove();

// practice Question 

// let btn=document.createElement("button");
// btn.innerText="clickME";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);

// practice question

// let para=document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class","newclass");//here this ovverides the first one
// para.classList.add("newclass");//this basically add a new class with existing one

//if u want to check that now how many classes we hve

// para.classList



