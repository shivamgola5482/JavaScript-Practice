let arr=[100, 200, 300, 400, 500];
let discount=0;
for(let i=0;i<arr.length;i++){
    discount+=arr[i]/10;
    arr[i]-=discount;
    discount=0;
}
console.log(arr);