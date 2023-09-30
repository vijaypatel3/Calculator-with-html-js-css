let screenContent = document.querySelector(".screenContent")
let sign = document.querySelector(".sign")
let percent= document.querySelector(".percentage")
let add = document.querySelector(".plus")
let subtract = document.querySelector(".minus")
let divide = document.querySelector(".divide")
let root = document.querySelector(".root")
let negate = document.querySelector(".negate")
let clear = document.querySelector(".clear")
let clearAll = document.querySelector(".clearall")
let square = document.querySelector(".square")
let backspace = document.querySelector(".back")
let onebyx = document.querySelector(".onebyx")
let equal = document.querySelector(".equal")
let point = document.querySelector(".point")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let multiply = document.querySelector(".multiply")

let safai = ()=>{
    screenContent.innerHTML="";
    sign.innerHTML = "";
    val1 = 0;
    val2 = 0;
}
clearAll.addEventListener("click",safai,false);

point.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += ".";
    cnt = false;   
})
one.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 1;
    cnt = false;   
})
two.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 2;
    cnt = false;
})
three.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 3;
    cnt = false;
})
four.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 4;
    cnt = false;
})
five.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 5;
    cnt = false;
})
six.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 6;
    cnt = false;
})
seven.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 7;
    cnt = false;
})
eight.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 8;
    cnt = false;
})
nine.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 9;
    cnt = false;
})
zero.addEventListener("click",function(){
    if(cnt){
        screenContent.innerHTML="";
        sign.innerHTML = "";
    }
    screenContent.innerHTML += 0;
    cnt = false;
})


let operand1;
let method;
let ans;
let val1;
let val2;
let cnt;


add.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = "";
    sign.innerHTML="+"

    method ="addition"
})
subtract.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = "";
    sign.innerHTML="-"
    method = "subtraction"
})
multiply.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = "";
    sign.innerHTML="*"
    method = "multiply"
})
divide.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = "";
    sign.innerHTML="/"
    method = "divide"
})
square.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = val1 * val1;
})
root.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = Math.sqrt(val1);
})
onebyx.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = 1/val1 ;
})
negate.addEventListener("click",function () {
    val1 = parseFloat(screenContent.innerHTML);
    screenContent.innerHTML = -(val1) ;
})
percent.addEventListener("click",function () {
    if(method === "multiply"){
        val2 = parseFloat(screenContent.innerHTML);
        ans = val1 * val2 / 100;
        screenContent.innerHTML = ans;
    }
})




// clear button
clear.addEventListener(("click"),function () {
    screenContent.innerHTML = ""
})

// backspace button
backspace.addEventListener("click",function () {
    let str = screenContent.innerHTML;
    str = str.slice(0, -1); 
    screenContent.innerHTML = str;
})


// equal button
equal.addEventListener("click",function(){
    if(method === "addition" ){
        val2 = parseFloat(screenContent.innerHTML);
        ans = val1 + val2;
        screenContent.innerHTML = ans;
        val1 = ans;  
        cnt = true;

    }else if(method === "subtraction" ){
        val2 = parseFloat(screenContent.innerHTML);
        ans = val1 - val2;
        screenContent.innerHTML = ans;
        val1 = ans; 
        cnt = true;
    }else if(method === "multiply"){
        val2 = parseFloat(screenContent.innerHTML);
        ans = val1 * val2;
        screenContent.innerHTML = ans;
        val1 = ans;  
        cnt = true;
    }else if(method === "divide" ){
        val2 = parseFloat(screenContent.innerHTML);
        ans = val1 / val2;
        screenContent.innerHTML = ans; 
        val1 = ans; 
        cnt = true;
    }
})