let value=document.getElementById("roller");
let show= document.getElementById("input");
value.onclick=function(){
    let randomnum=(Math.ceil(Math.random()*6));
    show.textContent=randomnum;
}