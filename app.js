let inp=document.getElementById("con-text");   //return like array byclassName
let buttons=document.querySelectorAll("button"); //return satic nodelist
let str= "";
let arr=Array.from(buttons);
arr.forEach(btn=>{
    btn.addEventListener("click",()=>{
       const value=btn.textContent;
       if(value == "Ac"){
        str= "";
       }
       else if(value== "DEL"){
        str=str.slice(0,-1);
       }
       else if(value== "="){
        str=eval(str);
        str=str;
       }
       else{
        str+=value;
       }
       inp.value=str;
    
    });
});
