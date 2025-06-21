 //Use events in js

// let btn=document.querySelector("#btn1");
// btn.onclick=()=>{
//     alert("OYO");
//     let a=24;
//     a++;
//     console.log(a);
// }

// let box=document.querySelector("div");//first access that element
// //  that we have to
// // work on it.
// box.onmouseover=()=>{
    //     alert("You r inside the div");
    // }
    
    //Event obj
    
    // let btn=document.querySelector("#btn1");
    // btn.onclick=(e)=>{
        //     console.log(e);
        //     alert("OYO");
        //     let a=24;
        //     a++;
        //     console.log(a);
        // }

        //Event listner
        //throught event listner we can do multiple events on the same target 
        //that's why we often use this 
        // let btn=document.querySelector("#btn1");
        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner event 1");
        // })
        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner event 2");
        // })

        // const handler3=()=>{
        //     console.log("this is event listner event 3");
        // }
        // btn.addEventListener("click",handler3);
        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner event 3");
        // })
        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner event 4");
        // })

        // btn.removeEventListener("click",()=>{
        //     console.log("this is event listner event 3");
        // });

        //if we want to remove so events 
        //first we have to store the callback function in variable
        //beacuse both take the diff diff place in the main memory;

        // btn.removeEventListener("click",handler3);



        let nnn=document.querySelector("#btn");//access btn element
        nnn.innerText="Click";
        let bodyy=document.querySelector("body");//ascess body
        let currentMode="light";//create variable 
        

        nnn.addEventListener("click",()=>{
            console.log("You are trying to change the color");
            if(currentMode==="light"){
                currentMode="dark";
                bodyy.classList.add("dark");//here we add the class 
                bodyy.classList.remove("light");//here we remove the existing class
            //    bodyy.style.backgroundColor="black";//here we access the Css
            }else{
                currentMode="light";
                bodyy.classList.add("light");
                bodyy.classList.remove("dark");
                // document.querySelector("body").style.backgroundColor="white";
            }
        })



        // let btn=document.querySelector("#btn");
        // btn.innerText="Click !!";
        // // btn.onclick=()=>{
        // //     alert("hey ramu");
        // //     console.log("You click this button 2x");
        // // }
        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner 1");
        // })
        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner 2");
        // })
        
        // const listner3=()=>{
        //     console.log("this is event listner 3");
        // }
        // btn.addEventListener("click",listner3);

        // btn.addEventListener("click",()=>{
        //     console.log("this is event listner 4");
        // })

        // btn.removeEventListener("click",listner3);

        // let btn=document.querySelector("#btn");
        // let bodyy=document.querySelector("body");
        // btn.innerText="Click to change mode";
        // let theme="light";
        // btn.addEventListener("click",()=>{
        //     if(theme==="light"){
        //         theme="dark";
        //       bodyy.classList.add("dark");
        //       bodyy.classList.remove("light");
        //     }else{
        //         theme="ligth";
        //         bodyy.classList.add("light");
        //         bodyy.classList.remove("dark");
                
        //     }
        //     console.log(theme);
        // })
