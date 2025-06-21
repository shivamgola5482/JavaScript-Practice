function merafun(str){
let cnt=0;
for(let i of str){
    if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
        cnt++;
    }
}
console.log(cnt);
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
}
merafun("aeiou");