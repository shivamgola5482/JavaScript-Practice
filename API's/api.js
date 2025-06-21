let pp=document.querySelector("#para");
let btn=document.querySelector("#btn");
btn.style.backgroundColor="yellow";
const getFacts= async ()=>{
    console.log("Fetching data.....");
    let response= await fetch("http://localhost:8080/api/journal");//first promise return 
    //use await here because while fetching data from 
    //api's cn take some time for hold the further code or 
    // processing we use await here
    //console.log(response);
    //let data = await response.json();// second promise return 
    // console.log(data.data);
   // pp.innerText=data.data;
};
btn.addEventListener("click",getFacts);